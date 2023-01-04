<template>
  <div class="m-2 lg:m-8">
    <div class="fixed inset-x-0 bottom-4 z-10">
      <div class="inline-flex flex-row flex-wrap rounded-full justify-center bg-slate-100 border-0 p-2 gap-2 my-2">
            <router-link to="/" class="rounded-full px-4 py-1 border-2 border-blue-600" active-class="text-white bg-blue-600">
              <span>Home</span>
            </router-link>
            <router-link to="/portfolio" class="rounded-full px-4 py-1 border-2 border-blue-600" active-class="text-white bg-blue-600">
              <span>Portfolio</span>
            </router-link>
            <router-link to="/blog" class="rounded-full px-4 py-1 border-2 border-blue-600" active-class="text-white bg-blue-600">
              <span>Blog</span>
            </router-link>
      </div>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="slide"  mode="out-in">
        <component :is="Component" />
      </transition>
  </router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import './style.css';
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(37 99 235);
}

  .slide-enter-active,
  .slide-leave-active {
      transition: opacity .5s, transform .5s;
  }

  .slide-enter-from,
  .slide-leave-to{
      opacity: 0;
      transform: translateY(-5%);
    }
</style>
