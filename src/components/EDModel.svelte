<script>
  import { onMount, onDestroy } from 'svelte';

  let splineViewerContainer;

  onMount(() => {
    // Create the <spline-viewer> element and append it to the container
    if (splineViewerContainer) {
      splineViewerContainer.innerHTML = '<spline-viewer url="https://prod.spline.design/rrxJXcQFcyNpCUSD/scene.splinecode"></spline-viewer>';
    }
  });

  onDestroy(() => {
    // Remove the <spline-viewer> element from the DOM when the component is unmounted
    const splineViewerElement = splineViewerContainer?.querySelector('spline-viewer');
    if (splineViewerElement) {
      splineViewerElement.remove();
    }
  });
</script>

<div class="w-full h-full" bind:this={splineViewerContainer}></div>
