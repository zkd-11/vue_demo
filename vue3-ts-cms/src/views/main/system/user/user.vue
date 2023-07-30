<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig"></page-search>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'

import { searchFormConfig } from './config/search-form-config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped>
.btnControl {
  text-align: right;
  padding: 0 50px 20px 0px;
}
</style>
