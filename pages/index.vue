<template>
    <div>
    <!-- Intro -->
<section class="py-20 md:py-32">
	<Container>
		<div class="grid grid-cols-2 items-center max-[768px]:grid-cols-1">
			<div class="px-[25px]">
				<h1 class="mb-4 text-3xl md:text-5xl">Welcome bij JojoBee!</h1>
				<p>
					Hoi ik ben Joey, een rasechte, positief ingestelde en enthousiaste Leidenaar met een
					passie voor online webdevelopment. Sta altijd klaar voor mijn collega's (behalve op 3
					oktober). Leergierig en loopt niet weg voor een uitdaging. Is zelf pas tevreden als andere
					mensen dat ook zijn.
				</p>
				<div class="item-center pb-8">
					<div>
						<NuxtLink href="/portfolio/" aria-label="Link naar portfolio">
							<button
								class="mt-4 flex items-center justify-between rounded-lg bg-[#00A9FF] px-8 py-3 font-normal text-white transition hover:-translate-y-1 hover:opacity-70"
								aria-label="My work"
							>
								<span>Bekijk mijn werk</span>
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
									><path d="m9 18 6-6-6-6"></path></svg
								>
							</button>
						</NuxtLink>
					</div>
				</div>
			</div>
			<div class="mx-auto">
				<img
					src="/assets/Joey-and-Emilio.jpg"
					class="h-64 w-64 items-center rounded-full border-4 border-[#00A9FF] object-cover object-top shadow-lg md:h-80 md:w-80"
					alt="Joey en zijn hond"
					
				/>
			</div>
		</div>
	</Container>
</section>

<!-- Overview services -->
<section class="py-10">
	<Container>
		<div>
			<h2 class="mb-4 text-center text-2xl md:text-4xl">Mijn methoden</h2>
		</div>
		<div class="grid gap-8 py-10 md:grid-cols-3">
			<div class="h-full rounded-lg border border-t-4 border-[#00A9FF] shadow-sm">
				<div class="flex flex-col items-center p-6">
					<div class="mb-4 flex items-center">
						<h3 class="mr-2 text-xl font-semibold">WordPress</h3>
						<img
							src="/assets/img/wordpress-logo.svg"
							alt="logo-wordpress"
							class="w-[50px]"
							width="50"
							height="50"
						/>
					</div>
					<p class="mb-4 text-gray-600">
						De manier om snel en budgetvriendelijke een website op te zetten is WordPress. Met
						weinig budget kan je met succes een mooie website bouwen.
					</p>
					<NuxtLink href="/methoden/wordpress/">
						<button
							class="inline-flex w-full items-center justify-center rounded-md border px-4 py-2 text-sm font-medium text-[#00A9FF] transition hover:-translate-y-1 hover:bg-[#00A9FF] hover:text-white"
							>Lees meer over een WordPress site
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
								class="ml-2 h-5 w-5"><path d="m9 18 6-6-6-6"></path></svg
							>
						</button>
					</NuxtLink>
				</div>
			</div>
			<div class="h-full rounded-lg border border-t-4 border-[#00A9FF] shadow-sm">
				<div class="flex flex-col items-center p-6">
					<div class="mb-4 flex items-center">
						<h3 class="mr-2 text-xl font-semibold">Static website</h3>
						<img
							src="/assets/img/nuxt-logo.svg"
							alt="logo-svelte"
							class="w-[50px]"
							width="50"
							height="50"
						/>
					</div>

					<p class="mb-4 text-gray-600">
						Een statische website is een website zonder CMS (content management systeem) zoals
						WordPress bijvoorbeeld. Ideaal voor websites zonder onderhoud.
					</p>
					<NuxtLink href="/methoden/statische-website/">
						<button
							class="inline-flex w-full items-center justify-center rounded-md border px-4 py-2 text-sm font-medium text-[#00A9FF] transition hover:-translate-y-1 hover:bg-[#00A9FF] hover:text-white"
							>Lees meer over een statische website
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
								><path d="m9 18 6-6-6-6"></path></svg
							>
						</button>
					</NuxtLink>
				</div>
			</div>
			<div class="h-full rounded-lg border border-t-4 border-[#00A9FF] shadow-sm">
				<div class="flex flex-col items-center p-6">
					<div class="mb-4 flex items-center">
						<h3 class="mr-2 text-xl font-semibold">Headless CMS</h3>
						<img
							src="/assets/img/wordpress-logo.svg"
							alt="logo-wordpress"
							class="w-[50px]"
							width="50"
							height="50"
						/>
						<img
							src="/assets/img/nuxt-logo.svg"
							alt="logo-svelte"
							class="ml-2 w-[50px]"
							width="50"
							height="50"
							
						/>
					</div>
					<p class="mb-4 text-gray-600">
						Headless betekent dat de front-end en de back-end van elkaar losgekoppeld zijn. Ideaal
						voor websites met veel bezoek en waar dagelijks veel werk in wordt verricht.
					</p>
					<NuxtLink href="/methoden/headless/">
						<button
							class="inline-flex w-full items-center justify-center rounded-md border px-4 py-2 text-sm font-medium text-[#00A9FF] transition hover:-translate-y-1 hover:bg-[#00A9FF] hover:text-white"
							>Lees meer over een Headless CMS
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
								><path d="m9 18 6-6-6-6"></path></svg
							>
						</button>
					</NuxtLink>
				</div>
			</div>
		</div>
	</Container>
</section>

<!-- Portfolio -->
<section class="bg-gray-50 px-[25px] py-20">
	<Container>
		<div>
			<h2 class="mb-4 text-center text-2xl md:text-4xl">Mijn bijdragen</h2>
		</div>
		<div class="grid gap-8 py-10 md:grid-cols-3">
			<NuxtLink href="/portfolio/dend/" class="pointer transition hover:-translate-y-1">
				<div class="h-full rounded-lg border bg-white shadow-sm">
					<div class="flex flex-col items-center p-6 text-center">
						<img
							src="/assets/img/portfolio/logo.png"
							alt="logo-svelte"
							class="ml-2 h-[50px] w-auto"
							
						/>
						<h3 class="mb-2 mt-4 text-xl font-semibold">DitjesenDatjes</h3>
						<p class="text-gray-600">
							In opdracht van Trusted Media heb ik in dienst van Performance Department samen met
							mijn collega Hessel Middendorp een nieuwe opzet gerealiseerd.
						</p>
					</div>
				</div>
			</NuxtLink>
			<NuxtLink href="/portfolio/bukett/" class="pointer transition hover:-translate-y-1">
				<div class="h-full rounded-lg border bg-white shadow-sm">
					<div class="flex flex-col items-center p-6 text-center">
						<img
							src="/assets/img/portfolio/Bukett_Woordmerk_RGB_Zwart_144dpi.png"
							alt="logo-svelte"
							class="ml-2 h-[50px] w-auto"
							
						/>
						<h3 class="mb-2 mt-4 text-xl font-semibold">Bukett</h3>
						<p class="text-gray-600">
							In opdracht van Doxflow B.V. heb ik in dienst van Performance Department de website
							https://www.bukett.nl gebouwd.
						</p>
					</div>
				</div>
			</NuxtLink>
			<NuxtLink href="/portfolio/ams-advocaten/" class="pointer transition hover:-translate-y-1">
				<div class="h-full rounded-lg border bg-white shadow-sm">
					<div class="flex flex-col items-center p-6 text-center">
						<img
							src="/assets/img/portfolio/logo-ams-advocaten.png"
							alt="logo-svelte"
							class="ml-2 h-[50px] w-auto"
							
						/>
						<h3 class="mb-2 mt-4 text-xl font-semibold">AMS Advocaten</h3>
						<p class="text-gray-600">
							In opdracht van AMS Advocaten heb ik in dienst van Performance Department samen met
							mijn collega Hessel Middendorp een nieuwe opzet gerealiseerd.
						</p>
					</div>
				</div>
			</NuxtLink>
		</div>
		<div class="flex justify-center">
			<NuxtLink href="/portfolio/" aria-label="button link naar portfolio">
				<button
					class="mt-4 flex items-center justify-between rounded-lg border bg-[#00A9FF] py-3 pl-4 pr-4 font-normal text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#00A9FF]"
					aria-label="Contact me"
				>
					<span>Bekijk alle bijdragen</span>
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
						class="lucide lucide-chevron-right ml-2 h-5 w-5"><path d="m9 18 6-6-6-6"></path></svg
					>
				</button>
			</NuxtLink>
		</div>
	</Container>
</section>

<!-- Maak kennis met Joey -->
<section class="px-[25px] py-20">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-3xl">
			<div class="grid grid-cols-1 items-center gap-x-8 md:grid-cols-3">
				<div class="col-span-1 max-md:pb-8">
					<img
						src="/assets/Joey-learn-to-know.jpg"
						alt="Joey standing"
						class="w-full rounded-full border-4 border-[#00A9FF] object-cover shadow-lg max-md:mx-auto"
					/>
				</div>
				<div class="col-span-2">
					<h2 class="text-2xl md:mb-4 md:text-4xl">Maak kennis met Joey</h2>
					<p class=" py-4 md:py-6">
						Wil je meer weten over wat ik doe? Neem dan contact met mij op via onderstaande knop.
					</p>
					<NuxtLink href="mailto:jlwbol92@gmail.com" aria-label="link om Joey te mailen">
						<button
							class="mt-4 flex items-center justify-between rounded-lg border bg-white py-3 pl-4 pr-4 font-normal text-[#00A9FF] transition hover:-translate-y-1 hover:bg-[#00A9FF] hover:text-white"
							aria-label="Contact me"
						>
							<span>Neem contact op</span>
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
								><path d="m9 18 6-6-6-6"></path></svg
							>
						</button>
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</section>
</div>
</template>

<script setup>
import { useHead } from 'nuxt/app';

// Get the current year
const currentYear = new Date().getFullYear();

// Set up page metadata
  useHead({
	title: `JojoBee: websites op maat © ${currentYear}`,
    meta: [
      {
        name: 'description',
        content: "Ik maak website op maat voor jou en supersnel",
      },
    ],
  });
</script>