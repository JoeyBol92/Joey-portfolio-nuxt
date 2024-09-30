<template>
  <header class="border-b-[2px] border-[#E0E5E6]">
    <Container>
      <div class="relative flex items-center justify-end bg-white py-4">
        <div class="absolute left-0 top-0 w-[180px] bg-white">
          <nuxt-link to="/" aria-label="Link to homepage">
            <img
              src="/assets/img/logo-jojobee.svg/"
              alt=""
              class="w-auto px-4 pb-4 pt-6 max-[768px]:mt-[-7px] max-[768px]:w-[120px]"
              width="180"
              height="76"
            />
          </nuxt-link>
        </div>
        <div class="hidden items-center font-bold md:flex">
          <ul class="ml-auto flex space-x-16 py-4 text-[#000]">
            <li>
              <nuxt-link to="/methoden/" class="hover:text-[#00A9FF] active:text-blue-700">Methoden</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/portfolio/" class="hover:text-[#00A9FF] active:text-blue-700">Portfolio</nuxt-link>
            </li>
            <!-- <li><nuxt-link to="/contact/" class="hover:text-[#00A9FF] active:text-blue-700">Contact</nuxt-link></li> -->
          </ul>
        </div>
        <button
          class="min-[769px]:hidden"
          type="button"
          @click="toggleMenu"
          aria-label="Mobile menu button open"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </Container>
    <div
      class="fixed inset-0 z-50 -translate-y-full bg-white duration-300"
      :class="{ '!translate-y-0': open }"
    >
      <div class="flex justify-end p-4">
        <button type="button" @click="toggleMenu" aria-label="Mobile menu button close">
          x
        </button>
      </div>
      <ul class="mx-auto py-4 text-center text-[#000]">
        <li>
          <nuxt-link
            to="/methoden/"
            class="hover:text-blue-700 active:text-blue-700"
            @click="toggleMenu"
          >Methoden</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/portfolio/"
            class="hover:text-blue-700 active:text-blue-700"
            @click="toggleMenu"
          >Portfolio</nuxt-link>
        </li>
        <!-- <li>
          <nuxt-link
            to="/contact/"
            class="hover:text-blue-700 active:text-blue-700"
            @click="toggleMenu"
          >Contact</nuxt-link>
        </li> -->
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import Container from '~/components/Container.vue';

// Reactive state for the menu
const open = ref(false);

// Method to toggle the menu
const toggleMenu = () => {
  open.value = !open.value;
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
