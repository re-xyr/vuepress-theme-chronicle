<template>
  <div class="layout explode">
    You are experiencing a <span style="font-weight: bold; color: #C40233">{{ fourOhFour() }}<span style="font-size: 0.5em">{{ realBase() }}</span></span> error.
    <br />
    Don't panic. <a style="color: #0087BD" href="/">Take me home.</a>
  </div>
</template>

<style scoped>
  .explode {
    margin: 0;
    padding: 0;
    max-width: 100%;
    font-size: 15vmax;
    word-wrap: break-word;
    line-height: 0.6em;
  }
  a {
    text-decoration: underline;
  }
</style>

<script>
export default {
  name: 'NotFound',
  data() {
    return {
      base: Math.round(Math.random() * 36),
      baseOne: new Array(404).fill('1').join(''),
      rome: 'CDIV',
    }
  },
  methods: {
    realBase() {
      return this.base === 0
        ? 'Roman'
        : this.base.toString()
    },
    fourOhFour() {
      return this.base === 1
        ? this.baseOne
        : (this.base === 0
          ? this.rome
          : (404).toString(this.base).toUpperCase())
    },
  }
}
</script>
