"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var isGestureControlActive = false; // Start with control off
// Add a listener to receive messages from popup.ts to toggle gesture control
chrome.runtime.onMessage.addListener(function (message) {
    if (message.action === 'toggleGestureControl') {
        isGestureControlActive = message.isActive;
    }
});
// Your existing MediaPipe and hand gesture control logic
var hands_1 = require("@mediapipe/hands");
var drawing_utils_1 = require("@mediapipe/drawing_utils");
var camera_utils_1 = require("@mediapipe/camera_utils");
// Set up video and canvas elements
var videoElement = document.createElement('video');
videoElement.style.display = 'none';
document.body.appendChild(videoElement);
var canvasElement = document.createElement('canvas');
canvasElement.style.position = 'fixed';
canvasElement.style.top = '0';
canvasElement.style.left = '0';
canvasElement.style.zIndex = '9999';
canvasElement.style.pointerEvents = 'none';
document.body.appendChild(canvasElement);
var canvasCtx = canvasElement.getContext('2d');
// Set up hand gesture tracking
var hands = new hands_1.Hands({
    locateFile: function (file) { return "https://cdn.jsdelivr.net/npm/@mediapipe/hands/".concat(file); },
});
hands.setOptions({
    maxNumHands: 1,
    modelComplexity: 1,
    minDetectionConfidence: 0.7,
    minTrackingConfidence: 0.7,
});
var previousX = null;
var previousY = null;
var lastScrollTime = Date.now();
hands.onResults(function (results) {
    if (!isGestureControlActive)
        return; // Skip gesture processing if control is off
    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        var landmarks = results.multiHandLandmarks[0];
        (0, drawing_utils_1.drawConnectors)(canvasCtx, landmarks, hands_1.HAND_CONNECTIONS, {
            color: '#00FF00',
            lineWidth: 4,
        });
        (0, drawing_utils_1.drawLandmarks)(canvasCtx, landmarks, {
            color: '#FF0000',
            lineWidth: 2,
        });
        var indexTip = landmarks[8]; // Index finger tip
        var now = Date.now();
        if (previousX !== null && previousY !== null && now - lastScrollTime > 80) {
            var deltaX = indexTip.x - previousX;
            var deltaY = indexTip.y - previousY;
            if (Math.abs(deltaX) > 0.01 || Math.abs(deltaY) > 0.01) {
                var scrollX_1 = deltaX * 1500;
                var scrollY_1 = deltaY * 1500;
                window.scrollBy(scrollX_1, scrollY_1);
                lastScrollTime = now;
            }
        }
        previousX = indexTip.x;
        previousY = indexTip.y;
    }
    canvasCtx.restore();
});
// Set up webcam
var camera = new camera_utils_1.Camera(videoElement, {
    onFrame: function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, hands.send({ image: videoElement })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); },
    width: 640,
    height: 480,
});
camera.start();
