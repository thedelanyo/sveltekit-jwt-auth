<script lang="ts">
  let value: number;

  let handleChange = async () => {
    if (`${value}`.length !== 6) {
      value = parseInt("");
    }
  };

  let handleInput = () => {
    value = parseInt(`${value}`.slice(0, 6));
  };
</script>

<div>
  <label for="pincode">Enter a 6-digit pincode</label>

  <input
    type="number"
    name="pincode"
    id="pincode"
    bind:value
    on:input={handleInput}
    on:change={handleChange}
  />
</div>
