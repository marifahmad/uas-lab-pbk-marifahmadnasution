<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 100vh; color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url('/src/assets/image/JEPANGMALAM.jpg') no-repeat;

    background-size: cover;
    background-position: center;" class="shadow-2 rounded-borders">
      <q-header v-if="!leftDrawerOpen" reveal elevated style="color: white !important;">
        <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm" @click="toggleLeftDrawer" />

          <q-btn flat dense @click="toggleHomeView" to="/" exact active-class="text-primary" v-ripple>
            <i class="fas fa-user" style="padding-right: 10px;"></i> M~ Arif Ahmad Nasution
          </q-btn>
        </q-toolbar>
        <q-toolbar style="padding-top: 10px; margin-left: 50px;">
          <q-btn flat dense to="/todos" exact active-class="text-primary" v-ripple>
            <q-icon name="list" class="q-mr-sm" />
            Todos
          </q-btn>
          <q-btn flat dense to="/post" exact active-class="text-primary" v-ripple>
            <q-icon name="edit" class="q-mr-sm" />
            Post
          </q-btn>
          <q-btn flat dense to="/albums" exact active-class="text-primary" v-ripple>
            <q-icon name="photo_album" class="q-mr-sm" />
            Albums
          </q-btn>
          <q-btn flat dense to="/contact" exact active-class="text-primary" v-ripple>
            <q-icon name="contact_mail" class="q-mr-sm" />
            Contact
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" side="left" bordered class="custom-drawer">
        <div class="drawer-header">
          <q-btn flat round dense icon="close" class="close-button" @click="toggleLeftDrawer" />
        </div>
        <q-list>
          <q-item clickable v-ripple class="drawer-item drawer-item-black" @click="goToTodos">
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>
            <q-item-section>
              Todos
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="drawer-item" @click="goToPost">
            <q-item-section avatar>
              <q-icon name="edit" />
            </q-item-section>
            <q-item-section>
              Post
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="drawer-item" @click="goToAlbum">
            <q-item-section avatar>
              <q-icon name="photo_album" />
            </q-item-section>
            <q-item-section>
              Albums
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="drawer-item" @click="goToContact">
            <q-item-section avatar>
              <q-icon name="contact_mail" />
            </q-item-section>
            <q-item-section>
              Contact
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="drawer-item" @click="goToLogout">
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
            <q-item-section>
              Logout
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="drawer-item" @click="goToLogin">
            <q-item-section avatar>
              <q-icon name="login" />
            </q-item-section>
            <q-item-section>
              Login
            </q-item-section>
          </q-item>
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

<script>
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  methods: {
    toggleHomeView() {
      this.$router.push({ name: 'HomeView' });
    },
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    goToTodos() {
      this.$router.push('/todos');
      this.toggleLeftDrawer(); 
    },
    goToContact(){
      this.$router.push('/contact');
      this.toggleLeftDrawer();
    },
    goToPost(){
      this.$router.push('/post');
      this.toggleLeftDrawer();
    },
    goToAlbum(){
      this.$router.push('/albums');
      this.toggleLeftDrawer();
    },
    goToLogout(){
      this.$router.push('/logout');
      this.toggleLeftDrawer();
    },
    goToLogin(){
      this.$router.push('/login');
      this.toggleLeftDrawer();
    }
  }
}
</script>

<style >
.custom-drawer {
  background-color: rgba(0, 0, 255, 0.758);
  color: white;
}

.drawer-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
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
}

.drawer-item:hover {
  background-color: #555;
}

.drawer-item-black .q-item-section {
  color: black;
}

.q-item-section {
  font-weight: bold;
}
</style>
