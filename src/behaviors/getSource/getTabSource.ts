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
  function documentOuterHTML(document: Document) {
    if (!document|| document.nodeType === undefined|| document.nodeType !== document.DOCUMENT_NODE)
      throw new TypeError('Expected a Document');
    
    const html = Array.from(document.childNodes)
      .map(node => nodeToString(node as Element))
      .join('\n');
      
    return html;
  }
  
  
  function nodeToString(node: Node) {
    switch (node.nodeType) {
    case node.ELEMENT_NODE:
      return (node as Element).outerHTML;
    case node.TEXT_NODE:
      return node.textContent;
    case node.COMMENT_NODE:
      return `<!--${node.textContent}-->`;
    case node.DOCUMENT_TYPE_NODE:
      return doctypeToString(node as DocumentType);
    default:
      throw new TypeError(`Unexpected node type: ${node.nodeType}`);
    }
  }
  
  function doctypeToString(doctype: DocumentType) {
    if (doctype === null)
      return '';
    // Checking with instanceof DocumentType might be neater, but how to get a
    // reference to DocumentType without assuming it to be available globally?
    // To play nice with custom DOM implementations, we resort to duck-typing.
    if (!doctype
        || doctype.nodeType !== doctype.DOCUMENT_TYPE_NODE
        || typeof doctype.name !== 'string'
        || typeof doctype.publicId !== 'string'
        || typeof doctype.systemId !== 'string'
    )
      throw new TypeError('Expected a DocumentType');
    
    const doctypeString = `<!DOCTYPE ${doctype.name}`
        + (doctype.publicId ? ` PUBLIC "${doctype.publicId}"` : '')
        + (doctype.systemId
          ? (doctype.publicId ? `` : ` SYSTEM`) + ` "${doctype.systemId}"`
          : ``)
        + `>`;

    return doctypeString;
  }
  
  const outerHtml = documentOuterHTML(document);
  
  chrome.runtime.sendMessage({
    action: "getSource",
    source: outerHtml,
  });
}
