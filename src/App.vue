<template>
  <div id="app" class="container is-fluid">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    this.$store.dispatch('form/loadForm')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.question-title{
  text-align: justify;
}

.question-description{
  text-align: justify;
  padding-top: 0.5rem!important;
}
</style>
