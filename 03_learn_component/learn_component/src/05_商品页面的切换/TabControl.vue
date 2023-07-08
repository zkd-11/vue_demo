<template>
  <div class="tab-control">
      <div class="tab-control-item"
       v-for="(title, index) of titles"
        :key="index"
        :class = "{active: currentIndex === index}"
        @click="itemClick(index)"
        >
        <span>{{ title }}</span>
      </div>
  </div>
</template>

<script>

export default {
  emits: ["titleClick"],
  props: {
    titles: Array,
    defaults() {
      return []
    }
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  components: { 
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index;
      this.$emit("titleClick", index)
    }
  },
}
</script>

<style scoped>
  .tab-control {
    display: flex
  }
  
  .tab-control-item {
    flex: 1;
    text-align: center
  }

  .tab-control-item.active{
    color: red
  }
  .tab-control-item.active span {
    border-bottom: 4px solid red;
    padding: 5px 8px
  }

</style>  