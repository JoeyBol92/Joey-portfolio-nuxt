<template>
    <div>
        <div>
            <section class="container mx-auto mb-12 max-w-7xl pt-20 sm:px-8 md:px-6 md:pt-32">
                <div class="mb-8 flex items-center justify-center px-[25px]">
                    <img
                        :src="data.fields.imageMethode.fields.file.url"
                        :alt="data.fields.imageMethode.fields.description"
                        class="h-[50px] w-auto"
                        width="50"
                        height="50"
                    />
                    <h1 class="ml-4 text-3xl md:text-5xl">{{ data.fields.titelMethode}}</h1>
                </div>
                <div class="mx-auto mb-12 max-w-3xl px-[25px] text-gray-600 prose-p:mb-5 prose-p:text-gray-600">
                    {{data.fields.beschrijving.content[0].content[0].value}}
                </div>
            </section>
        </div>

        <!-- Eigenschappen -->
        <div class="container mx-auto mb-12 max-w-7xl sm:px-8 md:px-6">
            <div class="px-[25px]">
                <div class="mb-12 grid gap-8 md:grid-cols-2">
                    <div class="text-card-foreground rounded-lg border shadow-sm">
                        <div class="p-6">
                            <h2 class="mb-4 text-2xl font-bold">Eigenschappen</h2>
                            <ul class="space-y-2">
                                    <li class="flex items-center text-gray-600" v-for="(eigenschap, index) in data.fields.eigenschappen" :key="index">
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
                                            class="lucide lucide-check mr-2 h-5 w-5 text-green-500"
                                            ><path d="M20 6 9 17l-5-5"></path></svg
                                        >
                                        {{eigenschap}}
                                    </li>
                            </ul>
                        </div>
                    </div>
                    <div class=" ext-card-foreground rounded-lg border shadow-sm">
                        <div class="p-6">
                            <h2 class="mb-4 text-2xl font-bold">Technieken</h2>
                            <div class="flex flex-wrap gap-2">
                                    <span class="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800" v-for="(techniek, index) in data.fields.technieken" :key="index"
                                        >{{techniek}}</span
                                    >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Proces -->
        <div class="container mx-auto mb-12 max-w-7xl sm:px-8 md:px-6">
            <div class="px-[25px]">
                <div class="mb-12 rounded-lg border shadow-sm">
                    <div class="p-6">
                        <h2 class="mb-4 text-2xl font-bold">Het proces</h2>
                        <div class="space-y-6">
                            <div v-for="(stap, index) in data.fields.proces.flow" :key="index">
                                <div class="flex">
                                    <div class="mr-4 flex-shrink-0">
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full bg-[#00A9FF] text-white"
                                        >
                                            {{stap.number}}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-semibold">{{stap.titel}}</h3>
                                        <p class="text-gray-600">{{stap.description}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Voordelen -->
        <div class="container mx-auto mb-12 max-w-7xl sm:px-8 md:px-6">
            <div class="px-[25px]">
                <div class="rounded-lg border shadow-sm">
                    <div class="p-6">
                        <h2 class="mb-4 text-2xl font-bold">Voordelen</h2>
                        <ul class="grid gap-x-4 space-y-2 md:grid-cols-2">
                                <li class="flex items-center" v-for="(voordeel, index) in data.fields.voordelen" :key="index">
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
                                        class="lucide lucide-check mr-2 h-5 w-5 text-green-500"
                                        data-id="59"><path d="M20 6 9 17l-5-5"></path></svg
                                    >
                                    {{voordeel}}
                                </li>
                        </ul>
                    </div>
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
    const methoden = await client.getEntries({
      'fields.slug': route.params.slug,
      content_type: 'methoden',
    });
  
    // If no items are found, navigate to a 404 page
    if (!methoden.items.length) {
      throw createError({ statusCode: 404, statusMessage: 'Pagina niet gevonden' });
    }
  
    return methoden.items[0];
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