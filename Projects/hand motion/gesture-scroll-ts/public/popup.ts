let isGestureControlActive = false;

const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;

toggleButton.addEventListener('click', () => {
  isGestureControlActive = !isGestureControlActive;

  // Get the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // Make sure the tab exists
    const activeTab = tabs[0];
    if (activeTab && activeTab.id !== undefined) {
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        func: toggleGestureControl,
        args: [isGestureControlActive],
      });
    } else {
      console.error('No active tab found');
    }
  });

  // Update the button text
  toggleButton.textContent = isGestureControlActive ? 'Stop Gesture Control' : 'Start Gesture Control';
});

function toggleGestureControl(isActive: boolean): void {
  // Toggle the gesture control logic based on `isActive`
  (window as any).isGestureControlActive = isActive;
}
