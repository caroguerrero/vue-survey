<template>
  <div class="section">
    Hola
  </div>
</template>

<script>
export default {
  name: 'Question',
  computed: {
    title () {
      return this.$store.getters['form/title']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
