<template>
  <div>
    <h1 class="title">Alurapic</h1>
    <input class="filter" v-on:input="filter = $event.target.value"
    placeholder="Filtre pelo título da foto">
    <ul class="photo-list">

      <li class="photo-list-item" v-for="photo in photosWithFilter">

        <Panel :title="photo.titulo">
        <responsive-image :url="photo.url" :title="photo.titulo"/>
        </Panel>

      </li>
    </ul>
  </div>
</template>

<script>

import Panel from '../components/shared/panel/Panel.vue';
import ResponsiveImage from '../components/shared/responsive-image/ResponsiveImage.vue';

export default {
    components: {
   'Panel' : Panel,
   'ResponsiveImage' : ResponsiveImage
  },
  data () {
    return {
      photos: [],
      filter: ''
    }
  },
  created () {
    this.$http.get('http://localhost:3000/v1/fotos')
    .then(res => res.json())
    .then(photos => this.photos = photos, err => console.log(err));
  },
  computed: {
    photosWithFilter () {
      if(this.filter) {
        let exp = new RegExp(this.filter.trim(), 'i');
        return this.photos.filter(photo => exp.test(photo.titulo));
      } else {
        return this.photos;
      }
    }
  }
}
</script>

<style>
  .title {
    text-align: center;
  }
  .photo-list {
    list-style: none;
  }
  .photo-list .photo-list-item {
    display: inline-block;
  }
  .filter {
    display: block;
    width: 100%;
  }
</style>