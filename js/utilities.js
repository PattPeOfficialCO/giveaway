/**
 * waitForElm will wait until a element is available
 * @param {*} selector 
 * @returns 
 */
function waitForElm(selector) {
    return new Promise(resolve => {
        
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

/**
 * waitForElementToDisplay is used to wait until a element is displayed
 * @param {*} selector - the class or id to select on
 * @param {*} callback  - the function to execute, will get the elemnt as param 
 * @param {*} checkFrequencyInMs 
 * @param {*} timeoutInMs 
 */
function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
        let elm = document.querySelector(selector);
      if ( elm != null) {
        callback(elm);
        return;
      }
      else {
        setTimeout(function () {
          if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
            return;
          loopSearch();
        }, checkFrequencyInMs);
      }
    })();
  }