<template>
  <div class="body">
    <h1 class="center">{{title}}</h1>
    <ul class="photo-list">
      <li class="photo-list-item" v-for="photo in photos">
        <img :src="photo.url" :alt="photo.title">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Alurapic',
      photos: []
    }
  },
  created () {
    this.$http.get('http://localhost:3000/v1/fotos')
    .then(res => res.json())
    .then(photos => this.photos = photos, err => console.log(err));
  }
}
</script>

<style>
  .center {
    text-align: center;
  }
  .body {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }
  .photo-list {
    list-style: none;
  }
  .photo-list .photo-list-item {
    display: inline-block;
  }
</style>
