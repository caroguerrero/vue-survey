<template>
  <div class="container">
    <div class="section"><h2 class="subtitle section-name">SECTION NAME</h2></div>
    <div class="section question-list">
      <div class="notification fold-container" v-for="(question, index) in questions" :key="index">
        <component
          :is="question.type.name"
          :type="question.type.value"
          :label="question.label"
          :description="question.description">
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Field from './questions/Field.vue'
import Multiple from './questions/Multiple.vue'
import Unique from './questions/Unique.vue'

export default {
  name: 'Form',
  components: {
    field: Field,
    multiple: Multiple,
    unique: Unique
  },
  computed: {
    title () {
      return this.$store.getters['form/title']
    },
    questions () {
      return this.$store.getters['form/questions']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .section-name{
    position: fixed !important;
    left: 0;
    right: 0;
    background: white;
    z-index: 10;
    margin-top: -50px;
    padding: 45px 0px 15px 0px;
  }

  .fold-container{
    padding: 2rem;
    margin: 1rem;
  }

  .question-list{
    padding-top: 0rem;
  }
</style>
