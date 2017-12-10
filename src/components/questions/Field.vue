<template>
  <div class="section">
    <h4 class="title is-4 question-title">{{label}}</h4>
    <h4 class="subtitle is-6 question-description">{{description}}</h4>
    <div class="field">
      <div class="control">
        <input class="input is-medium" :type="type" placeholder="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Field',
  props: {
    label: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
