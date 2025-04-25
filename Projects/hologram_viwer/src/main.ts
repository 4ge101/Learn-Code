import * as THREE from 'three';

// === SCENE SETUP ===
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// === VARIABLES ===
let mesh: THREE.Mesh | null = null;
let images: string[] = [];
let currentImageIndex = 0;
let lastX = 0;
let lastY = 0;
let smoothX = 0;
let smoothY = 0;
let rotationX = 0;
let targetRotationX = 0;
let rotationY = 0;
let targetRotationY = 0;
let lastXSwipe = 0;
let meshPositionX = 0;
let meshPositionY = 0;

// === DRAG & DROP TO LOAD IMAGE ===
window.addEventListener("dragover", (e) => e.preventDefault());
window.addEventListener("drop", (e) => {
  e.preventDefault();
  const file = e.dataTransfer?.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      new THREE.TextureLoader().load(url, (texture) => {
        if (mesh) scene.remove(mesh);

        const geometry = new THREE.PlaneGeometry(4, 3);
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: false,
          side: THREE.DoubleSide
        });

        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        images.push(url);
      });
    };
    reader.readAsDataURL(file);
  }
});

// === IMAGE SWITCHER ===
function loadImage(url: string) {
  const texture = new THREE.TextureLoader().load(url, () => {
    if (mesh && mesh.material instanceof THREE.MeshBasicMaterial) {
      mesh.material.map = texture;
      mesh.material.needsUpdate = true;
    }
  });
}

// === MEDIAPIPE HAND TRACKING SETUP ===
// @ts-ignore
declare const Hands: any;
// @ts-ignore
declare const Camera: any;

const videoElement = document.createElement("video");
videoElement.style.position = "fixed";
videoElement.style.bottom = "10px";
videoElement.style.right = "10px";
videoElement.style.width = "200px";
videoElement.style.height = "150px";
videoElement.style.zIndex = "10";
videoElement.style.border = "2px solid cyan";
videoElement.style.borderRadius = "8px";
videoElement.style.opacity = "0.8";
document.body.appendChild(videoElement);

const hands = new Hands({
  locateFile: (file: string) =>
    `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
});

hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 1,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.7,
});

let lastHandUpdateTime = 0;
const HAND_TRACKING_INTERVAL = 50; // Update hand tracking every 50ms (20FPS)

hands.onResults((results: any) => {
  const now = Date.now();
  if (now - lastHandUpdateTime < HAND_TRACKING_INTERVAL) return; // Skip if update interval hasn't passed

  lastHandUpdateTime = now;

  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    const hand = results.multiHandLandmarks[0];
    const x = hand[9].x;  // Index finger base
    const y = hand[9].y;  // Index finger base

    // **Smooth hand positions**
    smoothX = smoothX * 0.5 + x * 0.5;
    smoothY = smoothY * 0.5 + y * 0.5;

    const dx = smoothX - lastX;
    const dy = smoothY - lastY;

    // Apply movement for up/down and left/right
    meshPositionX += dx * 5;  // Increase the scale for more sensitive movement
    meshPositionY -= dy * 5;  // Negative to reverse Y direction for up/down movement

    // Apply rotation if the movement is significant
    if (Math.abs(dx) > 0.01) {
      targetRotationY += dx * 3;  // Increased speed for X-axis rotation
    }
    if (Math.abs(dy) > 0.01) {
      targetRotationX += dy * 3;  // Increased speed for Y-axis rotation
    }

    // Swipe detection (left/right) to switch images
    if (x - lastXSwipe > 0.2 && images.length > 0) {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      loadImage(images[currentImageIndex]);
      lastXSwipe = x;
    } else if (lastXSwipe - x > 0.2 && images.length > 0) {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      loadImage(images[currentImageIndex]);
      lastXSwipe = x;
    }

    lastX = smoothX;
    lastY = smoothY;
  }
});

// === MEDIAPIPE CAMERA ===
const handCamera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({ image: videoElement });
  },
  width: 320,  // Reduced resolution to improve performance
  height: 240,
});
handCamera.start();

// === RENDER LOOP ===
function animate() {
  requestAnimationFrame(animate);

  if (mesh) {
    // Apply translation
    mesh.position.x = meshPositionX;
    mesh.position.y = meshPositionY;

    // Apply rotation
    rotationY += (targetRotationY - rotationY) * 0.1;
    rotationX += (targetRotationX - rotationX) * 0.1;

    mesh.rotation.y = rotationY;
    mesh.rotation.x = rotationX;
  }

  renderer.render(scene, camera);
}
animate();
