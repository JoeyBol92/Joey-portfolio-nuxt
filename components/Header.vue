<template>
    <header class="border-2">
        <div class="container mx-auto max-w-7xl px-6 sm:px-8">
        <div class="relative flex items-center justify-end bg-white py-4">
          <!-- Logo -->
          <div class="absolute left-0 top-0 w-[180px] bg-white">
            <NuxtLink to="/" aria-label="Link to homepage">
              <img
                src="/assets/img/logo-jojobee.svg/"
                alt="Logo"
                class="w-[180px] px-4 pb-4 pt-6 max-[768px]:mt-[-7px] max-[768px]:w-[120px]"
                width="180"
                height="76"
              />
            </NuxtLink>
          </div>
  
          <!-- Desktop Menu -->
          <div class="hidden items-center font-bold md:flex">
            <ul class="ml-auto flex space-x-16 py-4 text-[#000]">
              <li>
                <NuxtLink to="/methoden/" class="hover:text-[#00A9FF] active:text-blue-700">Methoden</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/portfolio/" class="hover:text-[#00A9FF] active:text-blue-700">Portfolio</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
    </div>
  
      
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        open: false,
      };
    },
  };
  </script>
s  