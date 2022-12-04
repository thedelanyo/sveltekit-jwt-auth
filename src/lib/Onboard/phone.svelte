<script lang="ts">
  import "intl-tel-input/build/css/intlTelInput.css";
  import intlTelInput from "intl-tel-input";
  import { countries } from "$lib/helpers/countries";

  let iti: any;
  let phone = "";
  $: country = "";

  let validate = () => {
    let offset = phone.startsWith("0") ? phone.slice(1).trim() : phone.trim();

    let countryData = iti.getSelectedCountryData();

    country = iti.isValidNumber()
      ? `${countryData.name.slice(0, countryData.name.indexOf("(")).trim()}`
      : "";

    phone = iti.isValidNumber() ? `+${countryData.dialCode}${offset}` : "";
  };

  const load = (node: HTMLInputElement) => {
    iti = intlTelInput(node, {
      customContainer: "intelPhone",
      allowDropdown: countries.length > 1 ? true : false,
      onlyCountries: countries,
      utilsScript: "/scripts/intlUtilScript.js",
    });
  };
</script>

<div>
  <label for="phone">Enter phone number.</label>
  <input
    type="tel"
    name="phone"
    id="phone"
    placeholder="0502163647"
    use:load
    bind:value={phone}
    on:change={validate}
  />
  <input type="hidden" name="country" value={country} />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
  }
</style>
