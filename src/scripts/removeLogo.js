let removeInitialized = false;

function initRemove() {
    if (!removeInitialized) {
        console.log("Hello World!");
        var shadowRoot = document.querySelector('spline-viewer').shadowRoot;
        shadowRoot.querySelector('#logo').remove();
        removeInitialized = true; // Set the flag to true after removal
    }
}
function remove(){
    document.addEventListener('DOMContentLoaded', function() {
        // Wait for 'spline-viewer' to be present
        var splineViewerCheck = setInterval(function() {
            var splineViewer = document.querySelector('spline-viewer');
            if (splineViewer) {
                clearInterval(splineViewerCheck);
                // 'spline-viewer' is present, call the remove function
                initRemove();
            }
        }, 100); // Check every 100 milliseconds
    });
}

// Also, call it once to handle the case when 'astro:after-swap' event has already occurred
document.addEventListener('astro:after-swap', remove);
remove();
