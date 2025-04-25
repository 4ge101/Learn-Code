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
var _this = this;
(function () { return __awaiter(_this, void 0, void 0, function () {
    var video, canvas, ctx, loadScript, previousX, previousY, lastScrollTime, hands, camera;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                video = document.createElement("video");
                canvas = document.createElement("canvas");
                ctx = canvas.getContext("2d");
                Object.assign(video.style, {
                    position: "fixed",
                    top: "10px",
                    right: "10px",
                    width: "160px",
                    zIndex: "9999",
                });
                Object.assign(canvas.style, {
                    position: "fixed",
                    top: "10px",
                    left: "10px",
                    width: "160px",
                    zIndex: "9998",
                    pointerEvents: "none",
                });
                document.body.append(video, canvas);
                loadScript = function (src) {
                    return new Promise(function (resolve) {
                        var s = document.createElement("script");
                        s.src = src;
                        s.onload = function () { return resolve(); };
                        document.head.appendChild(s);
                    });
                };
                return [4 /*yield*/, loadScript("https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js")];
            case 1:
                _a.sent();
                return [4 /*yield*/, loadScript("https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js")];
            case 2:
                _a.sent();
                return [4 /*yield*/, loadScript("https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js")];
            case 3:
                _a.sent();
                previousX = null;
                previousY = null;
                lastScrollTime = Date.now();
                hands = new window.Hands({
                    locateFile: function (file) {
                        return "https://cdn.jsdelivr.net/npm/@mediapipe/hands/".concat(file);
                    },
                });
                hands.setOptions({
                    maxNumHands: 1,
                    modelComplexity: 1,
                    minDetectionConfidence: 0.7,
                    minTrackingConfidence: 0.7,
                });
                hands.onResults(function (results) {
                    var _a;
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    ctx.save();
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
                    if ((_a = results.multiHandLandmarks) === null || _a === void 0 ? void 0 : _a.length) {
                        var landmarks = results.multiHandLandmarks[0];
                        window.drawConnectors(ctx, landmarks, window.HAND_CONNECTIONS, {
                            color: "#00FF00",
                            lineWidth: 4,
                        });
                        window.drawLandmarks(ctx, landmarks, {
                            color: "#FF0000",
                            lineWidth: 2,
                        });
                        var indexTip = landmarks[8];
                        var now = Date.now();
                        if (previousY !== null &&
                            previousX !== null &&
                            now - lastScrollTime > 80) {
                            var deltaY = indexTip.y - previousY;
                            var deltaX = indexTip.x - previousX;
                            if (Math.abs(deltaY) > 0.01 || Math.abs(deltaX) > 0.01) {
                                window.scrollBy(deltaX * 1000, deltaY * 1000);
                                lastScrollTime = now;
                            }
                        }
                        previousY = indexTip.y;
                        previousX = indexTip.x;
                    }
                    ctx.restore();
                });
                camera = new window.Camera(video, {
                    onFrame: function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, hands.send({ image: video })];
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
                return [2 /*return*/];
        }
    });
}); })();
