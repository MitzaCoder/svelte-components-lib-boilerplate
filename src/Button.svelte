<script lang="ts">
  console.log("Button");
  export let title = "";
  export let red = false;
</script>

<style>
</style>

<button style="color: {red ? 'red' : 'green'}">{title}</button>
