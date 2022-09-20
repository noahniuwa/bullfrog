<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import marketingGif from "./images/marketing.gif";
	import AOS from 'aos'
	import { onMount } from 'svelte';

	onMount(() => {
    AOS.init();
		console.log(AOS)
  });
</script>

<svelte:head>
	<title>Hive</title>
	<meta name="description" content="Hive professional services" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Lobster&family=Quicksand:wght@400;700&display=swap" rel="stylesheet"> 
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

 </svelte:head>

<section class="animated-bg">
	<!-- This example requires Tailwind CSS v2.0+ -->
	<Header />
	<div class="max-w-5xl mt-10 	 mx-auto flex">
		<div class="z-10 drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
			<h2
				class="sm:text-left text-center drop-shadow pb-10 text-4xl font-quicksand font-bold tracking-tight text-white sm:text-5xl"
			>
				<span class="font-quicksand  block">We help tech startups <span class="text-yellow-300 inline-block heartbeat">communicate</span> their ideas so they
					can focus on building!
				</span>
			</h2>
		</div>
		<img class="sm:brightness-90 brightness-50 sm:h-96 h-80 sm:opacity-100 opacity-70 sm:relative z-0 left-0 right-0 mx-auto top-20 sm:top-0 bottom-0 absolute" src={marketingGif} alt="">
	</div>
	

</section>
<section id="about" class="bg-4">
	<!-- This example requires Tailwind CSS v2.0+ -->
<div class="font-quicksand bg-honeycomb">
  <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 data-aos="fade-right" class="text-lg  font-semibold text-amber-900">About</h2>
      <p data-aos="fade-right" class="mt-1 text-4xl max-w-4xl mx-auto font-bold tracking-tight text-amber-900 sm:text-5xl lg:text-6xl">Global, experienced, multidisciplinary.</p>
      <p data-aos="fade-right" class="mx-auto mt-5 max-w-xl text-xl text-amber-900">Our team of professionals has years of in-depth experience with communications work at fast paced tech and web3 startups. We specialize in <strong>community managment</strong>, <strong>token management</strong>, <strong>web development</strong>, <strong>content creation</strong>, and Chinese to English <strong>localization</strong></p>
    </div>
  </div>
</div>
</section>

<section id="services" class="bg-2">
	 <!-- This example requires Tailwind CSS v2.0+ -->
	<div class="font-quicksand">
		<div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
			<div class="mx-auto max-w-3xl text-center">
				<h2 data-aos="fade-right" class="text-3xl font-bold tracking-tight text-white">SERVICES</h2>
				<p data-aos="fade-right" class="mt-4 text-lg text-white">We offer a range of expert community management, content creation, web development, and localization services aimed at tech and web3 startups with global ambitions.</p>
			</div>
			<dl class="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
				<div data-aos="fade-right" class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-bold leading-6 text-white">Community Management</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">We offer 24/7 Telegram and Discord community managment from our team of experienced community managers.</dd>
				</div>

				<div data-aos="fade-right" class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-bold leading-6 text-white">Content Creation</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">We offer both long and short form content tailored to meet your specific communication needs.</dd>
				</div>

				<div data-aos="fade-right" class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-bold leading-6 text-white">Token Management</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Complete the token listing process for your token on CoinMarketCap, CoingGecko, and DefiLlama.</dd>
				</div>

				<div data-aos="fade-right" class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-bold leading-6 text-white">Chinese to English Localization</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Translating and adapting your pitch deck, whitepaper, application UI, or other content to be suitable for Western audiences.</dd>
				</div>

				<div data-aos="fade-right" class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-bold leading-6 text-white">Token API</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Development and hosting of REST APIs for token data such as total supply, circulating supply, and more.</dd>
				</div>

				<div data-aos="fade-right" class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-bold leading-6 text-white">Documentation Websites</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Slick and easy to navigate documentation website done in the style of your choice.</dd>
				</div>

				<div data-aos="fade-right" class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-bold leading-6 text-white">Token Dashboard</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">A visualization of various token metrics which you can add to your website to display info from your token API in an easy to read format.</dd>
				</div>

				<div data-aos="fade-right" class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-bold leading-6 text-white">Group Bots</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">We offer Discord and Telegram bots with a variety of features for the managment of your Telegram or Discord group, and can customize features to meet your needs.</dd>
				</div>
			</dl>
		</div>
	</div>
</section>

<section id="contact" class="bg-3">
	<!-- This example requires Tailwind CSS v2.0+ -->
	<div data-aos="fade-up" class="font-quicksand ">
		<div class="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				<span class="block">Schedule a consultation.</span>
			</h2>
			<a href="mailto:noahmaizels@gmail.com" class="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-amber-900 hover:bg-indigo-50 sm:w-auto">Email</a>
		</div>
	</div>

</section>
<style>	

	.animated-bg {
		background-color: #FECE2F;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3000 1800'%3E%3Cdefs%3E%3Cpath id='a' fill='%2378350f' fill-opacity='.7' d='M4002.8.3C3620.4 14 3647 280.9 3371.4 340.6s-433.8-225-723.3-111.8-339.6 465.3-489.3 557.8c-149.7 92.5-562.5-20.8-728.1 120.4s-111.8 539.2-238.8 700.2-555.5 132.2-679.3 353.4c-123.9 221.2 108.6 547.6 38.2 762.1S48 3037.7 10.9 3286.3s307.8 453.1 316.8 713.7S-60.6 4385.1 8 4698.2s414.7 262.9 537.9 565.7c123.2 302.8-228 480.4-36 771s456.2 107.4 673 347 18.8 538 247.8 711.1c229 173.1 443.6-30.5 728.1 120.4s143.1 452.9 483 555.6 409.8-153.1 715.8-112c306 41.1 329.7 354.2 645.2 342.7s302.7-293.2 631.4-340.3c328.7-47.1 496 198.7 723.3 111.8s343.6-468.3 477.1-550.7c133.6-82.5 566.4 21.2 735.6-123.8 169.2-145 110.8-536.1 243.5-704 132.6-167.8 557.7-136.8 679.3-353.4s-99.6-579.6-38.2-762.1c61.4-182.5 507.3-353.9 539.9-563.6 32.6-209.7-311.2-506.8-316.8-713.7-5.7-206.8 358.7-509.6 319-701.6-39.7-192-470.7-390.9-537.3-562.3-66.6-171.4 163.6-571.8 36-771-127.6-199.2-504.6-179.3-661-345.2s-7-522.6-259.8-712.8-519-4.7-740.2-127.3-197.7-463.1-470.8-548.7-534.7 88.1-719.4 55S4290-10 4002.8.3z' /%3E%3C/defs%3E%3Cg transform='translate(0 120)' %3E%3Cg transform='translate(-2500 200) scale(1 .4)' stroke='%2378350f' stroke-width='1'%3E%3Cg%3E%3Cuse href='%23a' y='-100'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='52s' begin='-17s' values='0 4000 4000%3B360 4000 4000' %3E%3C/animateTransform%3E%3C/use%3E%3Cuse href='%23a' x='-100' y='150'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' begin='-5s' dur='48.3s' values='0 4000 4000%3B360 4000 4000' %3E%3C/animateTransform%3E%3C/use%3E%3Cuse href='%23a' x='50' y='100'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='44.7s' values='0 4000 4000%3B360 4000 4000' %3E%3C/animateTransform%3E%3C/use%3E%3Cuse href='%23a' x='100'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' begin='-14s' dur='40.9s' values='0 4000 4000%3B360 4000 4000' %3E%3C/animateTransform%3E%3C/use%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='50s' values='360 4000 4000%3B0 4000 4000'%3E%3C/animateTransform%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

background-size: cover;
	} 
	.bg-2 {
		background-color: #78350F;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3Cpath id='p' d='M89 17c71 35 1 79-39 50-64-45 23-103 86-37 52 54-49 93-86 60-27-23 17-72 51-49 35 24 2 108-69 63-67-43-19-125 57-87z' /%3E%3Ccircle id='a' r='2' %3E%3CanimateMotion dur='38s' repeatCount='5'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3Ccircle id='b' r='2' %3E%3CanimateMotion begin='-10s' dur='38s' repeatCount='5' keyPoints='1%3B0' keyTimes='0%3B1' calcMode='linear'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3Ccircle id='e' r='2' %3E%3CanimateMotion begin='-34s' dur='38s' repeatCount='5' keyPoints='1%3B0' keyTimes='0%3B1' calcMode='linear'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3Ccircle id='c' r='2' %3E%3CanimateMotion begin='-20s' dur='38s' repeatCount='5' keyPoints='1%3B0' keyTimes='0%3B1' calcMode='linear'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3Ccircle id='d' r='2' %3E%3CanimateMotion begin='-30s' dur='38s' repeatCount='5'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3Ccircle id='f' r='2' %3E%3CanimateMotion begin='-15s' dur='38s' repeatCount='5'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3C/defs%3E%3Cg fill='%23FECE2F' %3E%3Cg stroke='%23FFF' stroke-width='0'%3E%3Cuse href='%23a' x='100' y='100'%3E%3C/use%3E%3Cuse href='%23b' x='300' y='300'%3E%3C/use%3E%3Cuse href='%23c' x='500' y='500'%3E%3C/use%3E%3Cuse href='%23d' x='700' y='700'%3E%3C/use%3E%3Cuse href='%23a' x='900' y='0'%3E%3C/use%3E%3Cuse href='%23b' x='1100' y='700'%3E%3C/use%3E%3Cuse href='%23c' x='1300' y='300'%3E%3C/use%3E%3Cuse href='%23d' x='1500' y='500'%3E%3C/use%3E%3Cuse href='%23a' x='200' y='400'%3E%3C/use%3E%3Cuse href='%23b' x='400' y='600'%3E%3C/use%3E%3Cuse href='%23f' x='600' y='800'%3E%3C/use%3E%3Cuse href='%23d' x='800' y='200'%3E%3C/use%3E%3Cuse href='%23b' x='1000' y='0'%3E%3C/use%3E%3Cuse href='%23a' x='1200' y='400'%3E%3C/use%3E%3Cuse href='%23c' x='1400' y='1000'%3E%3C/use%3E%3Cuse href='%23d' x='1600' y='200'%3E%3C/use%3E%3Cuse href='%23a' x='50' y='750'%3E%3C/use%3E%3Cuse href='%23b' x='150' y='600'%3E%3C/use%3E%3Cuse href='%23c' x='350' y='800'%3E%3C/use%3E%3Cuse href='%23d' x='450' y='150'%3E%3C/use%3E%3Cuse href='%23b' x='550' y='50'%3E%3C/use%3E%3Cuse href='%23a' x='750' y='600'%3E%3C/use%3E%3Cuse href='%23f' x='650' y='400'%3E%3C/use%3E%3Cuse href='%23c' x='950' y='200'%3E%3C/use%3E%3Cuse href='%23b' x='1350' y='700'%3E%3C/use%3E%3Cuse href='%23d' x='1250' y='400'%3E%3C/use%3E%3Cuse href='%23c' x='1050' y='550'%3E%3C/use%3E%3Cuse href='%23a' x='1450' y='50'%3E%3C/use%3E%3Cuse href='%23a' x='-100' y='0'%3E%3C/use%3E%3Cuse href='%23b' x='0' y='200'%3E%3C/use%3E%3Cuse href='%23c' x='-50' y='400'%3E%3C/use%3E%3Cuse href='%23d' x='50' y='600'%3E%3C/use%3E%3Cuse href='%23b' x='250' y='-50'%3E%3C/use%3E%3Cuse href='%23a' x='640' y='0'%3E%3C/use%3E%3Cuse href='%23f' x='390' y='-80'%3E%3C/use%3E%3Cuse href='%23e' x='450' y='300'%3E%3C/use%3E%3Cuse href='%23b' x='820' y='700'%3E%3C/use%3E%3Cuse href='%23d' x='970' y='400'%3E%3C/use%3E%3Cuse href='%23c' x='1150' y='-40'%3E%3C/use%3E%3Cuse href='%23a' x='1250' y='820'%3E%3C/use%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
 
background-size: cover;
	}

	.bg-3 {
		background-color: #78350F;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 900'%3E%3Cg %3E%3Cpath fill='%2378350f' d='M2063.4 368c 1344.5 1289.9-3870.2 1289.9-2526.8 0c 163.5-156.9 620.9-240.3 933.9-264.2c 206.9-15.8 451.8-15.8 658.8 0c 313 23.9 770.5 107.3 934.1 264.2z'/%3E%3Cpath fill='%23854012' d='M1843.9 331.6c 280.4 588.3-2367.8 588.3-2087.8 0c 60-126.1 442.8-201.9 731.6-224.9c 195.1-15.6 429.4-15.6 624.5 0c 288.7 23 671.6 98.8 731.7 224.9z'/%3E%3Cpath fill='%23924b14' d='M1665 302c-30 336.6-1699.8 336.6-1730 0c-9.1-101.7 306.7-170.2 570.9-192.2c 182.7-15.3 405.4-15.3 588.1 0c 264.1 22 580 90.5 571 192.2z'/%3E%3Cpath fill='%239e5616' d='M1516.4 277.3c-139.4 212.9-1293.2 212.9-1432.8 0c-53.7-82 202.4-143.4 441.6-164.4c 169.6-14.9 379.8-14.9 549.4 0c 239.2 21 495.4 82.4 441.8 164.4z'/%3E%3Cpath fill='%23aa6218' d='M1390.9 256.5c-173.4 142.1-1008.4 142.1-1181.9 0c-80.5-65.9 122.9-120.4 336.9-140.2c 155.8-14.4 352.3-14.4 508 0c 214 19.8 417.5 74.3 337 140.2z'/%3E%3Cpath fill='%23b66e1b' d='M1283.7 238.7c-174.4 97.6-793 97.6-967.4 0c-94-52.6 63.2-100.3 251.7-118.7c 141.1-13.7 322.7-13.7 463.8 0c 188.5 18.4 345.8 66.1 251.9 118.7z'/%3E%3Cpath fill='%23c27b1d' d='M1190.9 223.3c-159.9 68-621.9 68-781.8 0c-97.6-41.5 19.8-82.6 182.7-99.4c 125.6-12.9 290.8-12.9 416.4 0c 162.8 16.8 280.2 57.9 182.7 99.4z'/%3E%3Cpath fill='%23cd881f' d='M1109.8 209.9c-138.1 47.3-481.5 47.3-619.7 0c-93.7-32.1-10.1-66.7 127.1-81.7c 109.3-12 256.2-12 365.5 0c 137.1 15 220.7 49.6 127.1 81.7z'/%3E%3Cpath fill='%23d89521' d='M1038.4 198c-113.2 32.5-363.7 32.5-476.9 0c-84-24.1-28.4-52.3 83.1-65.3c 91.9-10.7 218.7-10.7 310.6 0c 111.5 13 167.2 41.2 83.2 65.3z'/%3E%3Cpath fill='%23e2a324' d='M975 187.5c-87.1 21.5-263 21.5-350.1 0c-70.1-17.3-36.5-39.2 49.4-49.9c 73.5-9.2 177.9-9.2 251.3 0c 85.9 10.8 119.5 32.6 49.4 49.9z'/%3E%3Cpath fill='%23ecb127' d='M918.3 178.1c-61.2 13.3-175.6 13.3-236.8 0c-52.8-11.4-35.8-27 24.8-35.2c 53.9-7.2 133.1-7.2 187.1 0c 60.6 8.2 77.7 23.8 24.9 35.2z'/%3E%3Cpath fill='%23f5bf2b' d='M867.4 169.7c-35.9 6.9-99 6.9-134.9 0c-33.1-6.4-26.9-15.7 8.9-20.9c 33.3-4.8 83.9-4.8 117.2 0c 35.7 5.2 41.8 14.5 8.8 20.9z'/%3E%3Cpath fill='%23fece2f' d='M821.3 162c-11.7 2-31.1 2-42.8 0c-11.4-2-10.7-5.1 1-6.9c 11.4-1.8 29.5-1.8 40.8 0c 11.7 1.8 12.4 4.9 1 6.9z'/%3E%3C/g%3E%3C/svg%3E");
 background-size: cover;
	}

	.bg-4 {
		background-color: #FECE2F;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 1000'%3E%3CradialGradient id='a' cx='.5' fx='0' cy='.2' fy='.69' r='.7' gradientTransform='skewX(25) skewY(20)'%3E%3Cstop offset='0' stop-color='%23FFF' stop-opacity='1' /%3E%3Cstop offset='1' stop-color='%23FFF' stop-opacity='0' /%3E%3C/radialGradient%3E%3ClinearGradient id='b' x1='1' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%2378350F' stop-opacity='1' /%3E%3Cstop offset='1' stop-color='%23FECE2F' stop-opacity='1' /%3E%3C/linearGradient%3E%3CradialGradient id='c' cx='.36' fx='.8' cy='.65' fy='.25' r='.6' gradientTransform='skewX(10)'%3E%3Cstop offset='0' stop-color='%23FFF' stop-opacity='1' /%3E%3Cstop offset='1' stop-color='%23FECE2F' stop-opacity='0' /%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='2.8' fx='.84' cy='-2' fy='-2.4' r='2' gradientTransform='skewX(-50) skewY(70)'%3E%3Cstop offset='0' stop-color='%23FECE2F' stop-opacity='1' /%3E%3Cstop offset='1' stop-color='%23FECE2F' stop-opacity='0' /%3E%3C/radialGradient%3E%3Crect fill='url(%23b)' width='100%25' height='100%25' /%3E%3Cg %3E%3Crect fill='url(%23a)' width='100%25' height='100%25' /%3E%3Crect fill='url(%23d)' width='100%25' height='100%25' /%3E%3Crect fill='url(%23c)' width='100%25' height='100%25' /%3E%3C/g%3E%3C/svg%3E");
background-position: center;
background-size: cover;
	}
</style>

