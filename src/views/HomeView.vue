<template>
  <div class="home-container">
    <p class="greeting">{{ currentGreeting }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greetings: [
        "Selamat datang di website kami!",
        "Salam hangat untuk Anda!",
        "Terima kasih sudah berkunjung!",
        "Semoga harimu menyenangkan!",
        "Dengan senang hati kami sambut kedatangan Anda!",
        "Mari jalin hubungan yang baik bersama kami!",
        "Kami siap melayani Anda dengan sepenuh hati!",
        "Salam sejahtera dari kami!",
        "Inilah tempat yang tepat untuk Anda!",
        "Selamat menikmati pengalaman di website kami!",
      ],
      currentGreeting: ""
    };
  },
  created() {
    this.currentGreeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
  }
}
</script>

<style scoped>
.home-container {
  text-align: center;
  margin-top: 50px;
}
.greeting{
  background-color: #f0f0f0;
}
.greeting {
  font-size: 24px;
  color: #333;
  font-family: Arial, sans-serif;
  padding: 20px;
  
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  animation: moveRight 12s linear infinite; /* Tambahkan animasi ke teks */
  white-space: nowrap; /* Hindari teks untuk pindah ke baris berikutnya */
}

@keyframes moveRight {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
