<template>
    <div class="login-page">
      <div class="login-header">
        <h1 style="color: chartreuse;">Login</h1>
      </div>
      <div class="login-form">
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" placeholder="Username" required>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" placeholder="Password" required>
          </div>
          <button type="submit" class="submit-button">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Lakukan logika login di sini
        // Contoh: validasi data, panggil API, dll.
        console.log('Username:', this.username);
        console.log('Password:', this.password);
        
        // Setelah login berhasil, Anda dapat mengarahkan pengguna ke halaman yang sesuai
        // Contoh: this.$router.push('/dashboard');
      }
    }
  };
  </script>
  
  <style scoped>
  .login-page {
    text-align: center;
   
    padding: 20px;
    background:transparent;
    border: 2px solid rgb(255, 255, 255, .2);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    width: 500px;
    margin-left: 350px;
  }
  h1{
    margin-left: 50px;
  }
  
  .login-header {
    margin-bottom: 30px;
  }
  
  .login-form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .submit-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  </style>
  