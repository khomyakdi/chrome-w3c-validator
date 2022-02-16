type Response = {
  action: string;
  source: string;
}

export async function getTabSource() {
  return new Promise<string>(async (resolve) => {
    const currentTab = await getCurrentTab();

    if(!currentTab || !currentTab.id)
      return;

    async function handleGetSource(req: Response) {
      if(req.action !== "getSource")
        return;
        
      resolve(req.source);
    }
    chrome.runtime.onMessage.addListener(handleGetSource);
    
    chrome.scripting.executeScript({
      target: {tabId: currentTab.id},
      func: requestTabHtml,
    });
  });
}

async function getCurrentTab() {
  const tabs = await chrome.tabs.query({active: true, currentWindow: true});

  if(tabs)
    return tabs[0];
}

function requestTabHtml() {
  const outerHtml =  new XMLSerializer().serializeToString(document);

  chrome.runtime.sendMessage({
    action: "getSource",
    source: outerHtml,
  });
}
