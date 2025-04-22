var isGestureControlActive = false;
var toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', function () {
    isGestureControlActive = !isGestureControlActive;
    // Get the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // Make sure the tab exists
        var activeTab = tabs[0];
        if (activeTab && activeTab.id !== undefined) {
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id },
                func: toggleGestureControl,
                args: [isGestureControlActive],
            });
        }
        else {
            console.error('No active tab found');
        }
    });
    // Update the button text
    toggleButton.textContent = isGestureControlActive ? 'Stop Gesture Control' : 'Start Gesture Control';
});
function toggleGestureControl(isActive) {
    // Toggle the gesture control logic based on `isActive`
    window.isGestureControlActive = isActive;
}
