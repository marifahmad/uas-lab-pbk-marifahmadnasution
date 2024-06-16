<template>
  <div class="album-view">
    <h1 class="title">Choose an Album</h1>
    <select v-model="selectedAlbum" @change="handleSelectChange" class="select-album">
      <option disabled value="">Select an album</option>
      <option v-for="album in albums" :key="album.id" :value="album.id" class="album-option">
        {{ album.title }}
      </option>
    </select>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AlbumsView',
  data() {
    return {
      albums: [],
      selectedAlbum: null
    };
  },
  mounted() {
    this.fetchAlbums();
  },
  methods: {
    async fetchAlbums() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
        this.albums = response.data;
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    },
    handleSelectChange() {
      if (this.selectedAlbum) {
        this.$router.push({ name: 'album-detail', params: { albumId: this.selectedAlbum } });
      }
    }
  }
};
</script>

<style scoped>
.album-view {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.title {
  text-align: center;
  font-size: 24px;
  color: #333;
}

.select-album {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  outline: none;
}

.album-option {
  font-size: 16px;
  color: #333;
}

/* Hover effect */
.album-option:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}

/* Focus effect */
.album-option:focus {
  outline: none;
  background-color: #e6e6e6;
}

/* Selected option */
.album-option:selected {
  background-color: #e6e6e6;
}
</style>
