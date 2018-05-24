chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
       localStorage["store_name"] = request.storename;
       localStorage["host_name"] = request.hostname;
    }
);

// when the extension is installed...
chrome.runtime.onInstalled.addListener(function () {

    // replace all existing rules...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {

        // with these new rules:
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { pathContains: 'bag'}
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { pathContains: 'cart'}
                    }),
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { pathContains: 'basket'}
                    })
                ],

                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});
