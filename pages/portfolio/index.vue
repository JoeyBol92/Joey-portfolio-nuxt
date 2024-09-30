<template>
    <section class="container mx-auto mb-12 max-w-7xl pt-20 sm:px-8 md:px-6 md:pt-32">
        <div class="px-[25px]">
            <h1 class="mb-4 text-center text-3xl md:text-5xl">Portfolio</h1>
        </div>
    </section>

    <section class="container mx-auto mb-12 max-w-7xl pt-20 sm:px-8 md:px-6 md:pt-32">
      <div class="grid gap-8 px-[25px] md:grid-cols-3">
  
        <!-- Loop through portfolio items and render them -->
        <div v-for="portfolio in data" :key="portfolio.sys.id">
          <div class="flex h-full flex-col rounded-lg border shadow-sm" style="height: 100%;">
            <!-- Display portfolio featured image -->
            <img
              :src="portfolio.fields.logo.fields.file.url"
              :alt="portfolio.fields.logo.fields.description"
              class="my-8 mx-auto h-[50px] w-auto rounded-t-lg object-contain"
              :width="portfolio.fields.logo.fields.file.details.image.width"
              
              :height="portfolio.fields.logo.fields.file.details.image.height"
            />
  
            <div class="flex flex-grow flex-col px-6 pb-6" style="padding-bottom: 1.5rem;">
              <!-- Portfolio title -->
              <h2 class="mb-2 text-center text-xl font-semibold">
                {{ portfolio.fields.title_portfolio }}
              </h2>
  
              <!-- Portfolio project description -->
              <p class="mb-4 flex-grow text-gray-600">
                {{ portfolio.fields.seoMetabeschrijving }}
              </p>
  
              <!-- Link to portfolio details (e.g., a specific portfolio page) -->
              <a
                :href="`/portfolio/${portfolio.fields.slug}/`"
                :aria-label="`Bekijk details ${portfolio.fields.title_portfolio}`"
              >
                <button
                  class="mt-auto inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-[#00A9FF] px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-1 hover:opacity-70"
                  >
                  Bekijk details {{ portfolio.fields.title_portfolio }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-right ml-2 h-5 w-5"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useRoute, useAsyncData, navigateTo, useHead } from 'nuxt/app';
  import { client } from '~/utils/contentfulClient';
  
  // Fetch route params
  const route = useRoute();
  
  // Fetch portfolio data using useAsyncData
  const { data, error } = await useAsyncData('portfolio', async () => {
    const portfolio = await client.getEntries({
      'fields.slug': route.params.slug,
      content_type: 'portfolioItem',
    });
  
    // If no items are found, navigate to a 404 page
    if (!portfolio.items.length) {
      throw createError({ statusCode: 404, statusMessage: 'Pagina niet gevonden' });
    }
  
    return portfolio.items;
  });
  
  // Set up page metadata
  useHead({
    title: 'Portfolio - JojoBee ©',
    meta: [
      {
        name: 'description',
        content:
          'Welk soort website past het best bij jou? Een standaard WordPress website? Of wellicht een statische website of zelfs een Headless CMS? Ik leg je de verschillen graag uit.',
      },
    ],
  });
  </script>
  