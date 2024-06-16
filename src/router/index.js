import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/contactView.vue'
import TodosView from '../views/TodosView.vue'
import PostView from '../views/PostView.vue'
import AlbumsView from '../views/AlbumsView.vue'
import AlbumDetailView from '../views/AlbumDetailView.vue' 
import LogoutView from '../views/LogoutView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/todos',
    name: 'todos',
    component: TodosView
  },
  {
    path: '/post',
    name: 'post',
    component: PostView
  },
  {
    path: '/albums',
    name: 'albums',
    component: AlbumsView
  },
  {
    path: '/albums/:albumId', // Tambahkan rute dengan parameter dinamis
    name: 'album-detail',
    component: AlbumDetailView
  },
  {
    path: '/logout', // Tambahkan rute dengan parameter dinamis
    name: 'logout',
    component: LogoutView
  },
  {
    path: '/login', // Tambahkan rute dengan parameter dinamis
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
