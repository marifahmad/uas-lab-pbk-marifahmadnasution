// stores/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [],
    selectedUser: null,
    userPosts: [],
    isPost: false,
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        this.users = data;
      } catch (error) {
        console.error(error);
      }
    },
    toggleToPost() {
      this.isPost = !this.isPost;
    },
    async fetchUserPosts() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUser}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user posts');
        }
        const data = await response.json();
        this.userPosts = data;
      } catch (error) {
        console.error(error);
      }
    },
    setSelectedUser(userId) {
      this.selectedUser = userId;
    },
  },
});
