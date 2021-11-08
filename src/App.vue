<template>
  <div class="body">
    <h1 class="title">{{title}}</h1>

<input class="filter" v-on:input="filter = $event.target.value"
placeholder="Filtre pelo título da foto">
    <ul class="photo-list">
      <li class="photo-list-item" v-for="photo in photosWithFilter">

        <panel :title="photo.titulo">
          <img class="responsive-image" :src="photo.url" :alt="photo.title">
        </panel>

      </li>
    </ul>
  </div>
</template>

<script>
import Panel from './components/shared/panel/Panel.vue';

export default {
    components: {
   'panel' : Panel
  },
  data () {
    return {
      title: 'Alurapic',
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
  .responsive-image {
    width: 100%;
  }
  .filter {
    display: block;
    width: 100%;
  }

</style>
