function initRemove() {
    var intervalId = setInterval(function () {
        var splineViewer = document.querySelector('spline-viewer');

        if (splineViewer) {
            clearInterval(intervalId); // Clear the interval once 'spline-viewer' is present
            console.log("Running Remove Logo");
            var shadowRoot = splineViewer.shadowRoot;
            var logoElement = shadowRoot.querySelector('#logo');

            if (logoElement) {
                logoElement.remove();
            }
        }
    }, 200); // Check every 100 milliseconds
}

initRemove(); // Call it initially as well
// Call it once to handle the case when 'astro:after-swap' event has already occurred
document.addEventListener('astro:after-swap', initRemove);
