<template>
  <section class="section-projects">
    <div
      v-for="(item, i) in slice.items"
      :key="`slice-item-${i}`"
      class="project"
    >
      <span class="project__title">{{ item.name }}</span>
      <prismic-image :field="item.image" class="project__image" />
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
.section-projects {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
}

.project {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.3333%;

  @media (max-width: 700px) {
    width: 100%;
  }

  &__title {
    color: white;
    position: absolute;
    font-size: 2rem;
    transition: transform 1s;
  }

  &__image {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  &:hover {
    .project__title {
      transform: scale(1.1);
    }
  }
}
</style>
