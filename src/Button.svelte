<script lang="ts">
  console.log('Button')
  export let title = ''
  export let red = false
</script>

<button class="rounded p-2 bg-blue-200" style="color: {red ? 'red' : 'green'}">{title}</button>

<style>
</style>
