<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="photo in photos">
        <img :src="photo.url" :alt="photo.title">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'alurapic',
      photos: [
        {
        url: 'https://s.conjur.com.br/img/b/cachorro-buldogue-frances.jpeg',
        title: 'dog'
        },
        {
        url: 'https://www.petz.com.br/blog/wp-content/uploads/2020/08/cat-sitter-felino.jpg',
        title: 'cat'
        }
      ]

    }
  }
}
</script>

<style>

</style>
