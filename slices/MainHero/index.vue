<template>
  <section class="section-hero">
    <div class="hero__text">
      <h1><prismic-rich-text :field="slice.primary.title" /></h1>
      <prismic-rich-text :field="slice.primary.description" />
    </div>
    <div class="hero__image">
      <prismic-image :field="slice.primary.heroImage" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.section-hero {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero__image {
  display: inline-flex;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.hero__text {
  color: white;
  position: absolute;
  bottom: 30px;
  text-align: center;
}
</style>
