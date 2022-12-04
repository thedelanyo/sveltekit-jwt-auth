<script lang="ts">
  let emailInput: HTMLInputElement;

  let load = (node: HTMLElement) => {
    node.setAttribute("aria-hidden", "true");
  };

  let loadEmail = (node: HTMLInputElement) => {
    emailInput = node;
  };
</script>

<div use:load class="mask">
  <label for="datetime">Enter date</label>
  <input
    type="text"
    name="datetime"
    id="datetime"
    autocapitalize="none"
    autocorrect="off"
    autocomplete="datetime"
    placeholder="date here"
    tabindex="-1"
    on:focus={() => {
      emailInput.setAttribute("required", "true");
      emailInput.type = "date";
    }}
    use:loadEmail
  />
</div>

<style>
  div {
    border: 0;
    clip: rect(0 0 0 0);
    height: auto;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }
</style>
