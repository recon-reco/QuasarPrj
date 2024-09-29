<template>
  <div>
    <h1>Menu</h1>
    <ul>
      <li v-for="(item, index) in menu.carbs" :key="index">{{ item }}</li>
      <li v-for="(item, index) in menu.main" :key="index">{{ item }}</li>
      <li v-for="(item, index) in menu.soup" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      menu: {}
    }
  },
  mounted() {
    axios.get('http://localhost:8000/api/menu/')
      .then(response => {
        this.menu = response.data
      })
      .catch(error => {
        console.error('There was an error fetching the menu:', error)
      })
  }
}
</script>
