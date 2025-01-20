document.getElementById("redirect-btn").addEventListener("click", async () => {
    try {
      // Get the current tab
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab && tab.url) {
        // Construct the 12ft.io URL
        const newUrl = `https://12ft.io/${tab.url}`;
        // Open the new URL in a new tab
        chrome.tabs.create({ url: newUrl });
      }
    } catch (error) {
      console.error("Error redirecting to 12ft.io:", error);
    }
  });
  