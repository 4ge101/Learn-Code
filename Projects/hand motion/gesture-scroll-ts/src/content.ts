let isGestureControlActive = false;  // Start with control off

// Add a listener to receive messages from popup.ts to toggle gesture control
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'toggleGestureControl') {
    isGestureControlActive = message.isActive;
  }
});


// Your existing MediaPipe and hand gesture control logic
import { Hands, HAND_CONNECTIONS } from '@mediapipe/hands';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { Camera } from '@mediapipe/camera_utils';

// Set up video and canvas elements
const videoElement = document.createElement('video');
videoElement.style.display = 'none';
document.body.appendChild(videoElement);

const canvasElement = document.createElement('canvas');
canvasElement.style.position = 'fixed';
canvasElement.style.top = '0';
canvasElement.style.left = '0';
canvasElement.style.zIndex = '9999';
canvasElement.style.pointerEvents = 'none';
document.body.appendChild(canvasElement);

const canvasCtx = canvasElement.getContext('2d')!;

// Set up hand gesture tracking
const hands = new Hands({
  locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
});

hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 1,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.7,
});

let previousX: number | null = null;
let previousY: number | null = null;
let lastScrollTime = Date.now();

hands.onResults((results) => {
  if (!isGestureControlActive) return;  // Skip gesture processing if control is off

  canvasElement.width = videoElement.videoWidth;
  canvasElement.height = videoElement.videoHeight;

  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    const landmarks = results.multiHandLandmarks[0];

    drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
      color: '#00FF00',
      lineWidth: 4,
    });
    drawLandmarks(canvasCtx, landmarks, {
      color: '#FF0000',
      lineWidth: 2,
    });

    const indexTip = landmarks[8]; // Index finger tip
    const now = Date.now();

    if (previousX !== null && previousY !== null && now - lastScrollTime > 80) {
      const deltaX = indexTip.x - previousX;
      const deltaY = indexTip.y - previousY;

      if (Math.abs(deltaX) > 0.01 || Math.abs(deltaY) > 0.01) {
        const scrollX = deltaX * 1500;
        const scrollY = deltaY * 1500;
        window.scrollBy(scrollX, scrollY);
        lastScrollTime = now;
      }
    }

    previousX = indexTip.x;
    previousY = indexTip.y;
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
