<template>
  <div class="q-pa-md">
    <q-layout class="body" view="lHh lpr lFf" container>
      <q-header v-if="!leftDrawerOpen" reveal elevated style="color: white !important;">
        <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm" @click="toggleLeftDrawer" />
          <q-btn flat dense @click="toggleHomeView" to="/" exact active-class="text-primary" v-ripple>
            <i class="fas fa-user" style="padding-right: 10px;"></i> M. Arif Ahmad Nasution
          </q-btn>
        </q-toolbar>
        <q-toolbar style="padding-top: 10px; margin-left: 400px;">
          <q-btn flat dense to="/Weather" exact active-class="text-primary" v-ripple>
            <q-icon name="list" class="q-mr-sm" />
            Weather
          </q-btn>
          <div class="tugas-dropdown-container" @mouseenter="showTugasDropdown" @mouseleave="hideTugasDropdown">
            <q-btn flat dense to="/tugas" exact active-class="text-primary" v-ripple>
              <q-icon name="edit" class="q-mr-sm" />
              tugas
            </q-btn>
            <q-menu v-model="tugasDropdown" anchor="bottom left" self="top left" offset="[0, 10]" class="tugas-menu-horizontal" style="background-color: #1976d2" >
          <q-list class="tugas-dropdown-list-horizontal">
            <q-item v-for="i in 7" :key="'tugas' + i" clickable v-ripple @click="goToTugas(i)">
              <q-item-section>{{ `Tugas ${i}` }}</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
        </div>
        <q-btn flat dense @click="goToLogout" v-ripple>
            <q-icon name="logout" class="q-mr-sm" />
            Logout
          </q-btn>
          <q-btn flat dense @click="goToLogin" v-ripple>
            <q-icon name="login" class="q-mr-sm" />
            Login
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" side="left" bordered class="custom-drawer">
        
        <div class="drawer-header">
         <span  class="name-sidebar" style="margin-right: 63px; margin-top: 9px"> <i class="fas fa-user" style="padding-right: 10px;"></i> M. Arif Ahmad Nasution </span>
          <q-btn flat round dense icon="close" class="close-button" @click="toggleLeftDrawer" />
        </div>
        <q-list>
          <q-item clickable v-ripple class="drawer-item" @click="goToWeather">
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>
            <q-item-section>
              Weather
            </q-item-section>
          </q-item>
          <div class="tugas-dropdown-container-sidebar" @mouseenter="showTugasDropdownSidebar" @mouseleave="hideTugasDropdownSidebar">
            <q-item clickable v-ripple class="drawer-item">
              <q-item-section avatar>
                <q-icon name="edit" />
              </q-item-section>
              <q-item-section>
                tugas
              </q-item-section>
            </q-item>
            <q-list v-show="tugasDropdownSidebar" class="tugas-dropdown-list-vertical">
              <q-item v-for="i in 7" :key="'tugas-sidebar' + i" clickable v-ripple @click="goToTugas(i)">
                <q-item-section>{{ `Tugas ${i}` }}</q-item-section>
              </q-item>
            </q-list>
          </div>
          
        
        </q-list>
      </q-drawer>

      <q-page-container>
        <q-page class="q-pa-md">
          <RouterView />
        </q-page>
      </q-page-container>

      <q-footer reveal elevated>
        <q-toolbar class="centered">
          <q-toolbar-title>
            <span class="footernya" style="text-align: center;">
              <span class="by" style="color: black;">By:</span>
              <a style="color: black; text-decoration: none;" href="https://www.instagram.com/marifahmad635/?next=%2F">
                M. Arif Ahmad Nasution
              </a>
            </span>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.css';

const router = useRouter();
const leftDrawerOpen = ref(false);
const tugasDropdown = ref(false);
const tugasDropdownSidebar = ref(false);

const netlifyUrls = {
  1: 'https://ahmad-projectcv.netlify.app',
  2: 'https://marifahmadn-223510434-lab-t2freetugas.netlify.app',
  3: 'https://marifahmad.netlify.app',
  4: 'https://marifahmad-223510434-prapbk.netlify.app',
  5: 'https://marifahmad-223510434-ppbk-t5-landingp.netlify.app',
  6: 'https://marifahmadnasution-223510434-t6-inapi.netlify.app',
  7: 'https://marifahmadnasution-223510434-t7-pinia.netlify.app'
};

const toggleHomeView = () => {
  router.push({ name: 'HomeView' });
};

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
  if (leftDrawerOpen.value) {
    document.querySelector('.left-drawer').classList.add('drawer-open-animation');
  } else {
    document.querySelector('.left-drawer').classList.add('drawer-close-animation');
  }
};

const goToWeather = () => {
  router.push('/weather');
  toggleLeftDrawer();
};

const goToTugas = (i) => {
  if (i === 2) {
    router.push({ name: 'Tugas2' });
  } else {
    const tugasUrl = netlifyUrls[i];
    if (tugasUrl) {
      window.location.href = tugasUrl;
    }
  }
  tugasDropdown.value = false;
  tugasDropdownSidebar.value = false;
  document.removeEventListener('click', hideTugasDropdown);
  document.removeEventListener('click', hideTugasDropdownSidebar);
};

const goToLogout = () => {
  router.push('/logout');
  toggleLeftDrawer();
};

const goToLogin = () => {
  router.push('/login');
  toggleLeftDrawer();
};

const showTugasDropdown = () => {
  tugasDropdown.value = true;
};

const hideTugasDropdown = (event) => {
  if (!document.querySelector('.tugas-menu').contains(event.target)) {
    tugasDropdown.value = false;
    document.removeEventListener('click', hideTugasDropdown);
  }
};

const showTugasDropdownSidebar = () => {
  tugasDropdownSidebar.value = true;
};

const hideTugasDropdownSidebar = (event) => {
  if (!document.querySelector('.tugas-menu').contains(event.target)) {
    tugasDropdownSidebar.value = false;
    document.removeEventListener('click', hideTugasDropdownSidebar);
  }
};

watch(leftDrawerOpen, (val) => {
  if (!val) {
    setTimeout(() => {
      document.querySelector('.left-drawer').classList.remove('drawer-open-animation');
      document.querySelector('.left-drawer').classList.remove('drawer-close-animation');
    }, 500);
  }
});

watch(tugasDropdown, (val) => {
  if (val) {
    document.addEventListener('click', hideTugasDropdown);
  } else {
    document.removeEventListener('click', hideTugasDropdown);
  }
});

watch(tugasDropdownSidebar, (val) => {
  if (val) {
    document.addEventListener('click', hideTugasDropdownSidebar);
  } else {
    document.removeEventListener('click', hideTugasDropdownSidebar);
  }
});
</script>

<style scoped>
.body {
  height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('/src/assets/image/JEPANGMALAM.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}

.custom-drawer {
  background-color: rgba(0, 0, 255, 0.758);
  color: white;
  width: 250px;
  transition: transform 0.3s ease-in-out;
}

.drawer-open-animation {
  transform: translateX(0);
}

.drawer-close-animation {
  transform: translateX(-250px);
}

.drawer-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background-color: #0e73a9;
}

.close-button {
  color: white;
}

.close-button:hover {
  color: red;
  background-color: #555;
}

.drawer-item {
  color: white;
  padding: 10px 15px;
  background-color: rgba(0, 0, 255, 0.758);
}

.drawer-item:hover {
  background-color: #0e73a9;
}

.drawer-item-black .q-item-section {
  color: black;
}

.q-item-section {
  font-weight: bold;
}

.tugas-dropdown-container {
  position: relative;
}

.tugas-dropdown-container-sidebar {
  position: relative;
}

.q-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  background-color: transparent;
  color: #161515;
}

.q-item {
  white-space: nowrap;
  cursor: pointer;
}

.tugas-dropdown-list,
.tugas-dropdown-list-vertical {
  padding: 0;
  margin: 0;
}

.tugas-dropdown-list-vertical {
  position: absolute;
  left: 0;
  top: 100%;
  display: none;
  background-color: rgba(0, 0, 255, 0.758);
  width: 100%;
}

.tugas-dropdown-container-sidebar:hover .tugas-dropdown-list-vertical {
  display: block;
}


.tugas-menu,
.tugas-menu-vertical {
  z-index: 10;
  background-color: rgba(0, 0, 255, 0.758);
}
.q-position-engine {
    margin-top: var(--q-pe-top, 0) !important;
    margin-left: 300px;
    will-change: auto;
    
}

.q-item[data-v-7a7a37b1] {
  background-color: #1976d2;
  color: #fff;
}



.drawer-item-bottom {
  color: white;
  padding: 10px 15px;
   background-color: #0e73a9;
}

.drawer-item-bottom:hover {
  background-color: #555;
}

.drawer-item-bottom .q-item-section {
  color: white;
}
.tugas-menu-horizontal {
  width: auto;

}

.tugas-dropdown-list-horizontal {
  display: flex;
  flex-direction: row;
  padding: 0;
  margin-left: 520px;
  
 
}


.tugas-dropdown-list-horizontal .q-item {
  
}

.tugas-dropdown-list-horizontal .q-item:last-child {
  margin-right: 0;
}

</style>
