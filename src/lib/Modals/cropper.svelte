<script lang="ts">
  import "$styles/cropper.css";
  import Cropper from "cropperjs";
  import { createEventDispatcher, onMount } from "svelte";
  import Info from "./info.svelte";

  export let src = "";
  export let width = 1080;
  export let height = 1080;

  let cropper: Cropper;

  const dispatch = createEventDispatcher();

  onMount(() => {
    const image: any = document.querySelectorAll("#cropperImg")[0];

    cropper = new Cropper(image, {
      aspectRatio: width / height,
      dragMode: "crop",
      scalable: false,
      zoomOnTouch: false,
      zoomOnWheel: false,
      cropBoxResizable: false,
      minCropBoxWidth: image.width,
      minCropBoxHeight: height,
      viewMode: 1,
    });
  });

  const handelCrop = () => {
    const cropped = cropper.getCroppedCanvas().toDataURL();

    dispatch("crop", { cropped, cropper });
  };

  const handleClose = () => {
    dispatch("close", { cropper });
  };
</script>

<Info show={false} on:click={handleClose}>
  <div>
    <img {src} alt="" id="cropperImg" />
  </div>

  <div class="flow-wide">
    <span role="button" on:click={handleClose} class="button-shadow"
      >cancel</span
    >
    <span role="button" class="button-sec" on:click={handelCrop}>crop</span>
  </div>
</Info>

<style>
  img {
    display: block;
    max-width: 100%;
  }
</style>
