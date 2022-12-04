<script>
  import { page } from "$app/stores";
  import { site } from "$lib/constants/site";

  export let { title, desc, image } = site;

  let origin = `${$page.url.origin}`;
  let path = `${$page.url.pathname}`;
  let url = origin + path;

  let imagePath = `${origin}/${image}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={desc} />

  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
  <meta property="og:image" content={imagePath} />

  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={url} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={desc} />
  <meta property="twitter:image" content={imagePath} />
</svelte:head>
