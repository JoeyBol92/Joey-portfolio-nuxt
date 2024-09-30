<template>
  <div>
  <section class="container mx-auto mb-12 max-w-7xl pt-20 sm:px-8 md:px-6 md:pt-32">
    <div class="px-[25px]">
      <h1 class="mb-8 text-center text-3xl md:text-5xl">
        {{ data.fields.title_portfolio }}
      </h1>
      <img
        :src="data.fields.featuredImagePortfolio.fields.file.url"
        :alt="data.fields.featuredImagePortfolio.fields.description"
        class="h-96 w-full rounded-lg object-cover object-top shadow-xl"
      />
    </div>
    
  </section>

  <div class="container mx-auto mb-12 max-w-7xl sm:px-8 md:px-6">
    <div class="grid gap-8 px-[25px] md:grid-cols-3">
      <div class="rounded-lg border shadow-sm">
        <div class="flex items-center p-6">
          <div class="mr-4 rounded-full bg-[#00A9FF] p-3">
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
              class="lucide lucide-user"
              ><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"
              ></circle></svg
            >
          </div>
          <div>
            <h3 class="font-semibold text-gray-600">Klant</h3>
            <p class="text-lg">{{data.fields.client}}</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border shadow-sm">
        <div class="flex items-center p-6">
          <div class="mr-4 rounded-full bg-[#00A9FF] p-3">
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
              ><path d="M8 2v4"></path><path d="M16 2v4"></path><rect
                width="18"
                height="18"
                x="3"
                y="4"
                rx="2"
              ></rect><path d="M3 10h18"></path></svg
            >
          </div>
          <div>
            <h3 class="font-semibold text-gray-600">Datum</h3>
            <p class="text-lg">{{data.fields.date}}</p>
          </div>
        </div>
      </div>
      <div class="rounded-lg border shadow-sm">
        <div class="flex items-center p-6">
          <div class="mr-4 rounded-full bg-[#00A9FF] p-3">
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
              class="lucide lucide-code"
              ><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"
              ></polyline></svg
            >
          </div>
          <div>
            <h3 class="font-semibold text-gray-600">Categorie</h3>
            <p class="text-lg">{{ data.fields.categorie}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto mb-12 max-w-7xl sm:px-8 md:px-6">
    <div class="px-[25px]">
      <div class="rounded-lg border p-6 shadow-sm">
        <h2 class="mb-4 text-2xl font-bold">Projectomschrijving</h2>
        <div class="mb-5 text-gray-600" v-html="data.fields.projectBeschrijving.content[0].content[0].value"></div>
      </div>
    </div>
  </div>

  <div class="container mx-auto mb-12 max-w-7xl sm:px-8 md:px-6">
    <div class="px-[25px]">
      <div class="mb-12 grid gap-8 md:grid-cols-2">
        <div class="rounded-lg border shadow-sm">
          <div class="p-6">
            <h2 class="mb-4 text-2xl font-bold">Eigenschappen</h2>
              <ul class="list-disc space-y-2 pl-5">
                  <li class="text-gray-600" v-html="eigenschap" v-for="(eigenschap, index) in data.fields.projectOverview" :key="index"></li>
              </ul>
          </div>
        </div>
        <div class="rounded-lg border shadow-sm">
          <div class="p-6">
            <h2 class="mb-4 text-2xl font-bold">Technieken</h2>
            <div class="flex flex-wrap gap-2">
                <span
                  v-for="(techniek, index) in data.fields.technieken" :key="index"
                  class="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800"
                  >{{techniek}}</span
                >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto mb-12 max-w-7xl sm:px-8 md:px-6" v-show="data.fields.media">
		<div class="px-[25px]">
			<div class="mb-12 grid gap-8 md:grid-cols-2">
        <div v-for="(media, index) in data.fields.media" :key="index">
					<img
						:src="media.fields.file.url"
						:alt="media.fields.description"
						class=" h-96 w-full rounded-lg object-cover object-top shadow-md"
					/>
        </div>
			</div>
		</div>
	</div>

  <div class="container mx-auto mb-12 max-w-7xl px-6 sm:px-8">
    <div class="px-[25px]">
      <div class="flex justify-center gap-4 md:flex-row">
        <NuxtLink :href="data.fields.websiteKlant" target="_blank" rel="nofollow">
          <button
            class="ring-offset-background focus-visible:ring-ring inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-[#00A9FF] px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-1 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><circle cx="12" cy="12" r="10"></circle><path
                d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
              ></path><path d="M2 12h20"></path></svg
            ><span class="ml-2">Bekijk {{data.fields.websiteKlant}}</span></button
          >
        </NuxtLink>
      </div>
    </div>
  </div>
</div>
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
  
    return portfolio.items[0];
  });

  // Set up page metadata
  useHead({
    title: `${data.value.fields.seoTitel} ©`,
    meta: [
      {
        name: 'description',
        content: data.value.fields.seoMetabeschrijving,
      },
    ],
  });
</script>
