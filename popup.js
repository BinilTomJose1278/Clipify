document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', onclick, false)
    function onclick() {
        chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
        });
    }
}, false)