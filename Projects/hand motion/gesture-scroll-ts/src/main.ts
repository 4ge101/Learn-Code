import { Hands, HAND_CONNECTIONS } from "@mediapipe/hands";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { Camera } from "@mediapipe/camera_utils";

// Get elements
const videoElement = document.getElementById("video") as HTMLVideoElement;
const canvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const canvasCtx = canvasElement.getContext("2d")!;

let previousX: number | null = null;
let previousY: number | null = null;
let lastScrollTime = Date.now();

const hands = new Hands({
  locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
});

hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 1,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.7,
});

hands.onResults((results) => {
  canvasElement.width = videoElement.videoWidth;
  canvasElement.height = videoElement.videoHeight;

  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
    results.image,
    0,
    0,
    canvasElement.width,
    canvasElement.height
  );

  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    const landmarks = results.multiHandLandmarks[0];

    drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
      color: "#00FF00",
      lineWidth: 4,
    });
    drawLandmarks(canvasCtx, landmarks, {
      color: "#FF0000",
      lineWidth: 2,
    });

    const indexTip = landmarks[8]; // Index finger tip
    const now = Date.now();

    if (previousY !== null && previousX !== null && now - lastScrollTime > 80) {
      const deltaY = indexTip.y - previousY;
      const deltaX = indexTip.x - previousX;

      // Only scroll if movement is significant
      if (Math.abs(deltaY) > 0.01 || Math.abs(deltaX) > 0.01) {
        const scrollY = deltaY * 1000;
        const scrollX = deltaX * 1000;

        window.scrollBy(scrollX, scrollY);
        // console.log("Scrolling X:", deltaX, "Y:", deltaY);
        lastScrollTime = now;
      }
    }

    previousY = indexTip.y;
    previousX = indexTip.x;
  }

  canvasCtx.restore();
});

// Set up webcam
const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({ image: videoElement });
  },
  width: 640,
  height: 480,
});
camera.start();