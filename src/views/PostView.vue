<template>
  <div class="headerpost">
    <h2 style="text-align: center;">Post List</h2>
  </div>
  <div>
    <button style="margin-bottom: 10px;" @click="toggleToPost"> <i class="fas fa-eye"></i> {{ isPost ? 'Hide Post' : 'Show Post' }}</button>
    <div v-if="isPost" class="container">
      <h1>User Posts</h1>
      <div class="form-group">
        <label for="userSelect">Select User: </label>
        <select class="form-control custom-select" id="userSelect" v-model="selectedUser" @change="updateSelectedUser">
          <option value="" disabled>Select User</option>
          <option v-for="user in users" :value="user.id" :key="user.id">{{ user.name }}</option>
        </select>
      </div>
      <table class="table" v-if="userPosts.length > 0">
        <thead class="thead-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Post Content</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in userPosts" :key="post.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../stores/userStore';
import { mapState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapState(useUserStore, ['users', 'selectedUser', 'userPosts', 'isPost']),
  },
  methods: {
    ...mapActions(useUserStore, ['fetchUsers', 'toggleToPost', 'fetchUserPosts', 'setSelectedUser']),
    updateSelectedUser(event) {
      this.setSelectedUser(event.target.value);
      this.fetchUserPosts();
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.headerpost{
  background:transparent;
    border: 2px solid rgb(255, 255, 255, .2);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    width:400px;
    margin-left: 400px;
    color: aquamarine;
}
.container {
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #d1f9d1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.custom-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
}

.custom-select:focus {
  outline: none;
  border-color: #4d90fe;
  box-shadow: 0 0 0 0.2rem rgba(77, 144, 254, 0.25);
}

.form-group {
  color: #09e075dd;
}

.table {
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  border: 1px solid #dee2e6;
}

.table th,
.table td {
  border: 1px solid #dee2e6;
  padding: 8px;
}

.table th {
  background-color: #09e075dd;
  font-weight: bold;
}

.table tbody tr:nth-child(odd) {
  background-color: #d1f9d1;
}

.table td {
  color: #4d90fe;
  border: 1px solid #2c73b9;
}

.table tbody tr:hover {
  background-color: #e9ecef;
}
</style>
