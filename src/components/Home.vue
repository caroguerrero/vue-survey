<template>
  <div class="section">
    <h1 class="title survey-title">
      {{title}}
    </h1>
    <div class="notification survey-description" v-html="welcome">
    </div>
    <div class="level">
      <div class="level-left"></div>
      <div class="level-right">
        <p class="level-item">
          <router-link to="formulario"><a class="button is-info is-medium">Empezar</a></router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    title () {
      return this.$store.getters['form/title']
    },
    welcome () {
      return this.$store.getters['form/welcome']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .survey-title{
    line-height: 1.5;
    font-size: 1.5rem;
    padding: 1.5rem;
  }

  .survey-description{
    text-transform: normal;
    text-align: justify;
  }
</style>
