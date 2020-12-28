<script lang="ts">
  console.log('Button')
  export let title = ''
  export let red = false
</script>

<button style="color: {red ? 'red' : 'green'}">{title}</button>

<style>
</style>
