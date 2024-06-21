<template>
  <div class="logout-page">
    <div v-if="!isLoggedOut" class="logout-header">
      <h1 style="color: aliceblue; margin-top: 200px; margin-left: 430px;">Logout</h1>
      <p style="color: azure;">Are you sure you want to logout?</p>
      <div class="logout-button">
        <button @click="logout" class="submit-button">Logout</button>
      </div>
    </div>
    <div v-else class="logout-successful">
      <div class="checkmark"></div>
      <h4 style="color: black;">Logout Successful</h4>
      <div class="checkmark">
        <svg class="checkmark-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
          <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
      </div>
      <button @click="ok" class="ok-button">Ok</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isLoggedOut = ref(false);
const router = useRouter();

const logout = () => {
 
  console.log('Logout successful'); 
  isLoggedOut.value = true;
};

const ok = () => {
  router.push('/login'); 
};
</script>

<style scoped>
.logout-page {
  text-align: center;
  background-color: rgba(19, 201, 218, 0.5); 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
}

.logout-successful {
  background-color: #ffffffd0; 
  padding: 20px;
  border-radius: 10px;
  max-width: 400px; 
  position: relative;
  margin-top: 200px;
  margin-left: 400px;
}

.logout-header {
  margin-bottom: 30px;
  color: #000; 
}

.logout-button {
  margin-top: 20px;
}

.submit-button {
  background-color: #dc3545; 
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; 
}

.submit-button:hover {
  background-color: #c82333; 
}

.ok-button {
  background-color: #007bff; 
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease; 
}

.ok-button:hover {
  background-color: #0056b3; 
}

.checkmark {
  margin-top: 25px;
  margin-bottom: 25px;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.checkmark-svg {
  width: 30px;
  height: 30px;
  fill: none;
  stroke: #28a745; 
  stroke-width: 2;
}

.checkmark-circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #28a745; 
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark-check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
