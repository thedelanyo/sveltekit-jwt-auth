<script>
  export let timestamp = Date.now();

  let datetime = new Date(timestamp).toISOString();

  let title = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(timestamp);

  let format = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
  }).format(timestamp);
</script>

<time {title} {datetime}>
  {format}
</time>
