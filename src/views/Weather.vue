<template>
  <div class="weather-widget" style="text-align: center;">
    <h2>{{ texts[currentLanguage].currentWeather }}</h2>
    <div class="language-dropdown">
      <label for="language-select" class="language-label">{{ texts[currentLanguage].translateTo }}</label>
      <select id="language-select" v-model="currentLanguage" @change="changeLanguage" class="language-select">
        <option v-for="(language, key) in languages" :key="key" :value="key">{{ language }}</option>
      </select>
    </div>
    <div>
      <label for="city-input" class="input-label">{{ texts[currentLanguage].enterCity }}</label>
      <input type="text" id="city-input" v-model="city" :placeholder="texts[currentLanguage].enterCityPlaceholder" @keyup.enter="fetchWeather" class="city-input" />
      <button @click="fetchWeather" class="fetch-button">{{ texts[currentLanguage].fetchWeather }}</button>
    </div>
    <div v-if="weather">
      <p><strong>{{ texts[currentLanguage].location }}</strong> {{ weather.name }}</p>
      <p><strong>{{ texts[currentLanguage].temperature }}</strong> {{ weather.main.temp }}°C</p>
      <p><strong>{{ texts[currentLanguage].weather }}</strong> {{ weather.weather[0].description }}</p>
      <input type="text" id="user-feedback" v-model="userFeedback" :placeholder="texts[currentLanguage].enterFeedback" @keyup.enter="submitFeedback" class="user-feedback-input" />
      <button @click="submitFeedback" class="submit-feedback-button">{{ texts[currentLanguage].submitFeedback }}</button>
    </div>
    <div v-else-if="loading">
      <p>{{ texts[currentLanguage].loading }}</p>
    </div>
    <div v-else-if="error">
      <p class="alert alert-error">{{ error }}</p>
    </div>
    <div v-if="feedbackMessage" class="alert alert-success">
      {{ feedbackMessage }}
    </div>
    <div v-if="feedbackError" class="alert alert-error">
      {{ feedbackError }}
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const apiKey = 'c05906f42999e2af1889a2587a1b0c7c';
const city = ref('');
const weather = ref(null);
const userFeedback = ref('');
const loading = ref(false);
const error = ref('');
const feedbackMessage = ref('');
const feedbackError = ref('');
const currentLanguage = ref('en'); // Default language selection

const texts = {
  en: {
    currentWeather: 'Current Weather',
    translateTo: 'Translate to:',
    enterCity: 'Enter City!',
    enterCityPlaceholder: 'Enter city name',
    fetchWeather: 'Fetch Weather',
    location: 'Location:',
    temperature: 'Temperature:',
    weather: 'Weather:',
    enterFeedback: 'Enter your feedback',
    submitFeedback: 'Submit Feedback',
    loading: 'Loading...',
    error: 'City not found. Please check the city name and try again.',
    feedbackThankYou: 'Thank you for your feedback!',
    feedbackRequired: 'Please enter your feedback.'
  },
  id: {
    currentWeather: 'Cuaca Saat Ini',
    translateTo: 'Terjemahkan ke:',
    enterCity: 'Masukkan Kota!',
    enterCityPlaceholder: 'Masukkan nama kota',
    fetchWeather: 'Ambil Cuaca',
    location: 'Lokasi:',
    temperature: 'Suhu:',
    weather: 'Cuaca:',
    enterFeedback: 'Masukkan umpan balik Anda',
    submitFeedback: 'Kirim Umpan Balik',
    loading: 'Memuat...',
    error: 'Kota tidak ditemukan. Harap periksa nama kota dan coba lagi.',
    feedbackThankYou: 'Terima kasih atas umpan balik Anda!',
    feedbackRequired: 'Silakan masukkan umpan balik Anda.'
  },
  ar: {
    currentWeather: 'الطقس الحالي',
    translateTo: 'ترجم إلى:',
    enterCity: 'أدخل المدينة!',
    enterCityPlaceholder: 'أدخل اسم المدينة',
    fetchWeather: 'احصل على الطقس',
    location: 'الموقع:',
    temperature: 'درجة الحرارة:',
    weather: 'الطقس:',
    enterFeedback: 'أدخل ملاحظاتك',
    submitFeedback: 'إرسال التعليق',
    loading: 'جار التحميل...',
    error: 'المدينة غير موجودة. يرجى التحقق من اسم المدينة والمحاولة مرة أخرى.',
    feedbackThankYou: 'شكرا لك على ملاحظاتك!',
    feedbackRequired: 'يرجى إدخال ملاحظاتك.'
  }
};

const fetchWeather = () => {
  if (city.value.trim()) {
    loading.value = true;
    error.value = '';
    feedbackMessage.value = '';
    feedbackError.value = '';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${currentLanguage.value}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl)
      .then(response => {
        if (response.data.cod === 200) {
          weather.value = response.data;
        } else {
          error.value = texts[currentLanguage.value].error;
        }
      })
      .catch(err => {
        console.error("Error fetching the weather data:", err);
        error.value = texts[currentLanguage.value].error;
      })
      .finally(() => {
        loading.value = false;
      });
  } else {
    error.value = texts[currentLanguage.value].enterCity;
  }
};

const submitFeedback = () => {
  if (userFeedback.value.trim()) {
    console.log("User Feedback:", userFeedback.value);
    feedbackMessage.value = texts[currentLanguage.value].feedbackThankYou;
    feedbackError.value = '';
    setTimeout(() => {
      feedbackMessage.value = '';
    }, 3000);
    userFeedback.value = '';
  } else {
    feedbackError.value = texts[currentLanguage.value].feedbackRequired;
    setTimeout(() => {
      feedbackError.value = '';
    }, 3000);
  }
};

const changeLanguage = () => {
  fetchWeather(); // Re-fetch weather data when language changes
};

const languages = {
  en: 'English',
  id: 'Indonesian',
  ar: 'Arabic'
};
</script>
<style scoped>
.weather-widget {
  font-family: 'Arial', sans-serif;
  border: 1px solid #ccc;
  padding: 20px;
  max-width: 500px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-left: auto;
  margin-right: auto;
}

.weather-widget:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  color: #333;
}

.input-label, .language-label {
  margin-bottom: 5px;
  display: block;
  font-weight: bold;
}

.city-input, .user-feedback-input, .language-select {
  width: calc(100% - 22px);
  padding: 8px;
  margin-top: 5px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border 0.3s ease;
}

.city-input:focus, .user-feedback-input:focus, .language-select:focus {
  border-color: #007BFF;
  outline: none;
}

.city-input::placeholder, .user-feedback-input::placeholder {
  color: #999;
}

.fetch-button, .submit-feedback-button {
  margin-top: 10px;
  padding: 10px 15px;
  font-size: 1em;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  transition: background-color 0.3s ease;
}

.fetch-button:hover, .submit-feedback-button:hover {
  background-color: #0056b3;
}

.language-dropdown {
  margin-bottom: 10px;
  text-align: center;
}

.language-label {
  margin-bottom: 5px;
  display: block;
  font-weight: bold;
}

.language-select {
  padding: 8px;
  font-size: 1em;
  border: 1px solid #007BFF;
  border-radius: 5px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #007BFF;
  color: white;
  cursor: pointer;
}

.language-select:focus {
  outline: none;
  border-color: #0056b3;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
}

.language-select option {
  padding: 8px;
}

p {
  margin: 10px 0;
  color: #555;
}

strong {
  color: #333;
}

.alert {
  padding: 10px 15px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 0.9em;
  font-weight: bold;
  text-align: center;
}

.alert-success {
  background-color: #28a745;
  color: white;
}

.alert-error {
  background-color: #dc3545;
  color: white;
}

.alert-info {
  background-color: #17a2b8;
  color: white;
}

.alert-warning {
  background-color: #ffc107;
  color: #856404;
}
</style>
