<template>
  <div class="gallery">
    <h1>Gallery</h1>
    <div>
    <main class="cf w-100">
      <div v-for="photo in photos" :key="photos.indexOf(photo)" class="fl w-50 w-third-m w-25-ns">
        <div class="aspect-ratio aspect-ratio--1x1">
        <img :style="{ backgroundImage: 'url(' + generatePhotoUrl(photo) + ')' }"
          class="db bg-center cover aspect-ratio--object" />
        </div>
      </div>
    </main>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Gallery',
  data() {
    return {
      imgUrl: 'http://mrmrs.github.io/images/0006.jpg',
      photos: []
    }
  },
  methods: {
    generatePhotoUrl: function(photo) {
      let farm = photo.farm;
      let server = photo.server;
      let id = photo.id;
      let secret = photo.secret;
      return "https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + ".jpg"
    }
  },
  mounted () {
    let vm = this
    let uri = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${process.env.FLICKR_API_KEY}&photoset_id=${process.env.PHOTOSET_ID}&user_id=${process.env.FLICKR_USER_ID}&format=json&nojsoncallback=1`

    axios.get(uri)
      .then(function (response) {
      if (response.data.stat != 'ok') throw "Error with Call!"
      vm.photos = response.data.photoset.photo
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
</script>
