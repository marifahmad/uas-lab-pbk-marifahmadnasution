<template>
  <div class="album-detail">
    <h1 class="title">Album Detail</h1>
    <button @click="goToAlbum" class="back-button"> <i class="fas fa-arrow-left"></i> Back to Albums</button>
    <div v-if="album">
      <h2 style="color: aliceblue;" class="album-title">{{ album.title }}</h2>
      <div class="photo-thumbnails">
        <div class="photo-thumbnail" v-for="photo in album.photos" :key="photo.id" @click="showFullSize(photo)">
          <img :src="photo.thumbnailUrl" :alt="photo.title" class="thumbnail-img">
        </div>
      </div>
      <div v-if="isFullSize" class="full-size-modal">
        <div class="full-size-photo">
          <img :src="fullSizePhoto.url" :alt="fullSizePhoto.title" @click="hideFullSize" class="full-photo-img">
          <button @click="hideFullSize" class="close-button">Close</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AlbumDetailView',
  data() {
    return {
      album: null,
      isFullSize: false,
      fullSizePhoto: null
    };
  },
  async mounted() {
    await this.fetchAlbumDetail();
  },
  methods: {
    async fetchAlbumDetail() {
      try {
        const albumId = this.$route.params.albumId;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
        const albumData = response.data;

        const photoResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
        const photos = photoResponse.data.map(photo => ({
          id: photo.id,
          title: photo.title,
          thumbnailUrl: photo.thumbnailUrl,
          url: photo.url  // Include the full-size URL for each photo
        }));

        albumData.photos = photos;
        this.album = albumData;
      } catch (error) {
        console.error('Error fetching album detail:', error);
      }
    },
    showFullSize(photo) {
      this.isFullSize = true;
      this.fullSizePhoto = photo;
    },
    hideFullSize() {
      this.isFullSize = false;
      this.fullSizePhoto = null;
    },
    goToAlbum() {
      this.$router.push('/albums');
    }
  }
};
</script>

<style scoped>
.album-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}


.title {
  font-size: 50px;
  color: #18c221a7;
  margin-bottom: 20px;
  background:transparent;
    border: 2px solid rgb(255, 255, 255, .2);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    color: rgb(8, 228, 154);
}

.back-button {
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.album-title {
  text-align: center;
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
  background:transparent;
    border: 2px solid rgb(255, 255, 255, .2);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
}

.photo-thumbnails {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.photo-thumbnail {
  margin: 5px;
  cursor: pointer;
}

.thumbnail-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}

.full-size-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-size-photo img {
  max-width: 80%;
  max-height: 80%;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 15px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
