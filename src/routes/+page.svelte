<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import marketingGif from "./images/marketing.gif";
	import honeycomb from "./images/honeycomb.svg";

</script>

<svelte:head>
	<title>Beekeeper</title>
	<meta name="description" content="Bullfrog professional services" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<section class="animated-bg">
	<!-- This example requires Tailwind CSS v2.0+ -->
	<Header />
	<div class="max-w-3xl lg:pt-24  mx-auto flex">
		<div class="z-20 drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] max-w-xl    px-4 text-center sm:px-6 pt-12 lg:px-8">
			<h2
				class="sm:text-left text-center drop-shadow py-10   text-3xl font-quicksand font-bold tracking-tight text-white sm:text-4xl"
			>
				<span class="font-quicksand block">We help tech startups <span class="text-yellow-300 flicker-4">communicate</span> their ideas so they
					can focus on building!
				</span>
			</h2>
		</div>
		<img class="left-0 right-0 sm:brightness-90 brightness-50 w-96 sm:opacity-90 opacity-70 lg:mt-10 sm:relative z-10 mx-auto absolute" src={marketingGif} alt="">
	</div>
</section>
<div class="h-48 z-0 bg-4">
</div>

<section class="overflow-hidden bg-light-honey font-quicksand">
	<!-- This example requires Tailwind CSS v2.0+ -->
	<div class="mx-auto max-w-4xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-lg font-semibold text-amber-900">About Beekeeper</h2>
			<p class="mt-1 text-4xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] font-bold tracking-tight text-amber-900 sm:text-5xl lg:text-6xl">Global, experienced, multidisciplinary.</p>
			<p class="mx-auto mt-5 drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]  max-w-xl text-xl text-amber-900">Our team of professionals has years of in-depth experience with communications work at fast paced tech and web3 startups. We specialize in <strong>community managment</strong>, <strong>token management</strong>, <strong>web development</strong>, <strong>content creation</strong>, and Chinese to English <strong>localization</strong>.</p>
		</div>
	</div>
	
</section>
<div class="h-48  honey-gradient-bg"></div>
<section class="bg-2">
	 <!-- This example requires Tailwind CSS v2.0+ -->
		<div class="font-quicksand mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
			<div class="mx-auto max-w-3xl text-center">
				<h2 class="text-3xl sm:pt-0 pt-20 font-bold tracking-tight text-white">All-in-one platform</h2>
				<p class="mt-4 text-lg text-white">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
			</div>
			<dl class="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
				<div class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-medium leading-6 text-white">Invite team members</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.</dd>
				</div>

				<div class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-medium leading-6 text-white">Notifications</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.</dd>
				</div>

				<div class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-medium leading-6 text-white">List view</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.</dd>
				</div>

				<div class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-medium leading-6 text-white">Boards</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.</dd>
				</div>

				<div class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-medium leading-6 text-white">Keyboard shortcuts</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.</dd>
				</div>

				<div class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-medium leading-6 text-white">Reporting</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.</dd>
				</div>

				<div class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-medium leading-6 text-white">Calendars</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.</dd>
				</div>

				<div class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-medium leading-6 text-white">Mobile app</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.</dd>
				</div>
			</dl>
		</div>
	
</section>
<section class="">
	<!-- This example requires Tailwind CSS v2.0+ -->
	<div class="font-quicksand bg-3 ">
		<div class="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				<span class="block">Boost your productivity.</span>
				<span class="block">Start using our app today.</span>
			</h2>
			<p class="mt-4 text-lg leading-6 text-white">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
			<a href="#" class="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-amber-900 hover:bg-indigo-50 sm:w-auto">Sign up for free</a>
		</div>
	</div>
</section>
<style>	
.honey-gradient-bg {
	background: rgb(254,206,47);
background: linear-gradient(180deg, rgba(254,206,47,1) 0%, rgba(120,53,15,1) 100%); 
}
	.animated-bg {
		background-color: #FECE2F;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3000 1800'%3E%3Cdefs%3E%3Cpath id='a' fill='%2378350f' fill-opacity='.7' d='M4002.8.3C3620.4 14 3647 280.9 3371.4 340.6s-433.8-225-723.3-111.8-339.6 465.3-489.3 557.8c-149.7 92.5-562.5-20.8-728.1 120.4s-111.8 539.2-238.8 700.2-555.5 132.2-679.3 353.4c-123.9 221.2 108.6 547.6 38.2 762.1S48 3037.7 10.9 3286.3s307.8 453.1 316.8 713.7S-60.6 4385.1 8 4698.2s414.7 262.9 537.9 565.7c123.2 302.8-228 480.4-36 771s456.2 107.4 673 347 18.8 538 247.8 711.1c229 173.1 443.6-30.5 728.1 120.4s143.1 452.9 483 555.6 409.8-153.1 715.8-112c306 41.1 329.7 354.2 645.2 342.7s302.7-293.2 631.4-340.3c328.7-47.1 496 198.7 723.3 111.8s343.6-468.3 477.1-550.7c133.6-82.5 566.4 21.2 735.6-123.8 169.2-145 110.8-536.1 243.5-704 132.6-167.8 557.7-136.8 679.3-353.4s-99.6-579.6-38.2-762.1c61.4-182.5 507.3-353.9 539.9-563.6 32.6-209.7-311.2-506.8-316.8-713.7-5.7-206.8 358.7-509.6 319-701.6-39.7-192-470.7-390.9-537.3-562.3-66.6-171.4 163.6-571.8 36-771-127.6-199.2-504.6-179.3-661-345.2s-7-522.6-259.8-712.8-519-4.7-740.2-127.3-197.7-463.1-470.8-548.7-534.7 88.1-719.4 55S4290-10 4002.8.3z' /%3E%3C/defs%3E%3Cg transform='translate(0 120)' %3E%3Cg transform='translate(-2500 200) scale(1 .4)' stroke='%2378350f' stroke-width='1'%3E%3Cg%3E%3Cuse href='%23a' y='-100'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='52s' begin='-17s' values='0 4000 4000%3B360 4000 4000' %3E%3C/animateTransform%3E%3C/use%3E%3Cuse href='%23a' x='-100' y='150'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' begin='-5s' dur='48.3s' values='0 4000 4000%3B360 4000 4000' %3E%3C/animateTransform%3E%3C/use%3E%3Cuse href='%23a' x='50' y='100'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='44.7s' values='0 4000 4000%3B360 4000 4000' %3E%3C/animateTransform%3E%3C/use%3E%3Cuse href='%23a' x='100'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' begin='-14s' dur='40.9s' values='0 4000 4000%3B360 4000 4000' %3E%3C/animateTransform%3E%3C/use%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='50s' values='360 4000 4000%3B0 4000 4000'%3E%3C/animateTransform%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

background-size: cover;
	} 
	.bg-2 {
		background-color: #78350F;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3Cpath id='p' d='M89 17c71 35 1 79-39 50-64-45 23-103 86-37 52 54-49 93-86 60-27-23 17-72 51-49 35 24 2 108-69 63-67-43-19-125 57-87z' /%3E%3Ccircle id='a' r='2' %3E%3CanimateMotion dur='38s' repeatCount='5'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3Ccircle id='b' r='2' %3E%3CanimateMotion begin='-10s' dur='38s' repeatCount='5' keyPoints='1%3B0' keyTimes='0%3B1' calcMode='linear'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3Ccircle id='e' r='2' %3E%3CanimateMotion begin='-34s' dur='38s' repeatCount='5' keyPoints='1%3B0' keyTimes='0%3B1' calcMode='linear'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3Ccircle id='c' r='2' %3E%3CanimateMotion begin='-20s' dur='38s' repeatCount='5' keyPoints='1%3B0' keyTimes='0%3B1' calcMode='linear'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3Ccircle id='d' r='2' %3E%3CanimateMotion begin='-30s' dur='38s' repeatCount='5'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3Ccircle id='f' r='2' %3E%3CanimateMotion begin='-15s' dur='38s' repeatCount='5'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3C/defs%3E%3Cg fill='%23FECE2F' %3E%3Cg stroke='%23FFF' stroke-width='0'%3E%3Cuse href='%23a' x='100' y='100'%3E%3C/use%3E%3Cuse href='%23b' x='300' y='300'%3E%3C/use%3E%3Cuse href='%23c' x='500' y='500'%3E%3C/use%3E%3Cuse href='%23d' x='700' y='700'%3E%3C/use%3E%3Cuse href='%23a' x='900' y='0'%3E%3C/use%3E%3Cuse href='%23b' x='1100' y='700'%3E%3C/use%3E%3Cuse href='%23c' x='1300' y='300'%3E%3C/use%3E%3Cuse href='%23d' x='1500' y='500'%3E%3C/use%3E%3Cuse href='%23a' x='200' y='400'%3E%3C/use%3E%3Cuse href='%23b' x='400' y='600'%3E%3C/use%3E%3Cuse href='%23f' x='600' y='800'%3E%3C/use%3E%3Cuse href='%23d' x='800' y='200'%3E%3C/use%3E%3Cuse href='%23b' x='1000' y='0'%3E%3C/use%3E%3Cuse href='%23a' x='1200' y='400'%3E%3C/use%3E%3Cuse href='%23c' x='1400' y='1000'%3E%3C/use%3E%3Cuse href='%23d' x='1600' y='200'%3E%3C/use%3E%3Cuse href='%23a' x='50' y='750'%3E%3C/use%3E%3Cuse href='%23b' x='150' y='600'%3E%3C/use%3E%3Cuse href='%23c' x='350' y='800'%3E%3C/use%3E%3Cuse href='%23d' x='450' y='150'%3E%3C/use%3E%3Cuse href='%23b' x='550' y='50'%3E%3C/use%3E%3Cuse href='%23a' x='750' y='600'%3E%3C/use%3E%3Cuse href='%23f' x='650' y='400'%3E%3C/use%3E%3Cuse href='%23c' x='950' y='200'%3E%3C/use%3E%3Cuse href='%23b' x='1350' y='700'%3E%3C/use%3E%3Cuse href='%23d' x='1250' y='400'%3E%3C/use%3E%3Cuse href='%23c' x='1050' y='550'%3E%3C/use%3E%3Cuse href='%23a' x='1450' y='50'%3E%3C/use%3E%3Cuse href='%23a' x='-100' y='0'%3E%3C/use%3E%3Cuse href='%23b' x='0' y='200'%3E%3C/use%3E%3Cuse href='%23c' x='-50' y='400'%3E%3C/use%3E%3Cuse href='%23d' x='50' y='600'%3E%3C/use%3E%3Cuse href='%23b' x='250' y='-50'%3E%3C/use%3E%3Cuse href='%23a' x='640' y='0'%3E%3C/use%3E%3Cuse href='%23f' x='390' y='-80'%3E%3C/use%3E%3Cuse href='%23e' x='450' y='300'%3E%3C/use%3E%3Cuse href='%23b' x='820' y='700'%3E%3C/use%3E%3Cuse href='%23d' x='970' y='400'%3E%3C/use%3E%3Cuse href='%23c' x='1150' y='-40'%3E%3C/use%3E%3Cuse href='%23a' x='1250' y='820'%3E%3C/use%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
	}

	.bg-3 {
		background-color: #78350F;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 300 2000 1500'%3E%3Cdefs%3E%3Cg id='c'%3E%3Cg id='b'%3E%3Ccircle stroke='%2378350F' stroke-width='0' id='a' r='5' /%3E%3Cuse href='%23a' x='40' y='1'/%3E%3Cuse href='%23a' x='80' y='2'/%3E%3Cuse href='%23a' x='120' y='4'/%3E%3Cuse href='%23a' x='160' y='7'/%3E%3Cuse href='%23a' x='200' y='11'/%3E%3Cuse href='%23a' x='240' y='15'/%3E%3Cuse href='%23a' x='280' y='21'/%3E%3Cuse href='%23a' x='320' y='28'/%3E%3Cuse href='%23a' x='360' y='36'/%3E%3Cuse href='%23a' x='400' y='45'/%3E%3Cuse href='%23a' x='440' y='55'/%3E%3Cuse href='%23a' x='480' y='66'/%3E%3Cuse href='%23a' x='520' y='78'/%3E%3Cuse href='%23a' x='560' y='90'/%3E%3Cuse href='%23a' x='600' y='103'/%3E%3Cuse href='%23a' x='640' y='117'/%3E%3Cuse href='%23a' x='680' y='132'/%3E%3Cuse href='%23a' x='720' y='148'/%3E%3Cuse href='%23a' x='760' y='165'/%3E%3Cuse href='%23a' x='800' y='181'/%3E%3Cuse href='%23a' x='840' y='198'/%3E%3Cuse href='%23a' x='880' y='214'/%3E%3Cuse href='%23a' x='920' y='233'/%3E%3Cuse href='%23a' x='960' y='255'/%3E%3Cuse href='%23a' x='1000' y='277'/%3E%3Cuse href='%23a' x='1040' y='299'/%3E%3Cuse href='%23a' x='1080' y='311'/%3E%3C/g%3E%3Cuse href='%23b' transform='scale(-1 1)'/%3E%3C/g%3E%3C/defs%3E%3Cg style='transform-origin:center'%3E%3Cg transform='' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)' style='transform-origin:center'%3E%3Cuse fill='%23FECE2F' href='%23c'/%3E%3Cuse fill='%23fac72d' href='%23c' y='2' transform='scale(1.04)'/%3E%3Cuse fill='%23f6c02b' href='%23c' y='4' transform='scale(1.08)'/%3E%3Cuse fill='%23f1b929' href='%23c' y='8' transform='scale(1.12)'/%3E%3Cuse fill='%23edb227' href='%23c' y='14' transform='scale(1.16)'/%3E%3Cuse fill='%23e8ab26' href='%23c' y='22' transform='scale(1.2)'/%3E%3Cuse fill='%23e3a524' href='%23c' y='32' transform='scale(1.24)'/%3E%3Cuse fill='%23de9e23' href='%23c' y='44' transform='scale(1.28)'/%3E%3Cuse fill='%23d99822' href='%23c' y='58' transform='scale(1.32)'/%3E%3Cuse fill='%23d49121' href='%23c' y='74' transform='scale(1.36)'/%3E%3Cuse fill='%23cf8b1f' href='%23c' y='92' transform='scale(1.4)'/%3E%3Cuse fill='%23ca841e' href='%23c' y='112' transform='scale(1.44)'/%3E%3Cuse fill='%23c47e1d' href='%23c' y='134' transform='scale(1.48)'/%3E%3Cuse fill='%23bf781c' href='%23c' y='158' transform='scale(1.52)'/%3E%3Cuse fill='%23b9721b' href='%23c' y='184' transform='scale(1.56)'/%3E%3Cuse fill='%23b46c1a' href='%23c' y='212' transform='scale(1.6)'/%3E%3Cuse fill='%23ae6619' href='%23c' y='242' transform='scale(1.64)'/%3E%3Cuse fill='%23a86018' href='%23c' y='274' transform='scale(1.68)'/%3E%3Cuse fill='%23a25b17' href='%23c' y='308' transform='scale(1.72)'/%3E%3Cuse fill='%239d5516' href='%23c' y='344' transform='scale(1.76)'/%3E%3Cuse fill='%23974f15' href='%23c' y='382' transform='scale(1.8)'/%3E%3Cuse fill='%23914a14' href='%23c' y='422' transform='scale(1.84)'/%3E%3Cuse fill='%238a4513' href='%23c' y='464' transform='scale(1.88)'/%3E%3Cuse fill='%23843f12' href='%23c' y='508' transform='scale(1.92)'/%3E%3Cuse fill='%237e3a10' href='%23c' y='554' transform='scale(1.96)'/%3E%3Cuse fill='%2378350F' href='%23c' y='602' transform='scale(2)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
 
background-size: cover;
	}

	.bg-4 {
		background-color: #FECE2F;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3000 1800'%3E%3Cdefs%3E%3Cpath id='a' fill='%2378350F' fill-opacity='.7' d='M4002.8.3C3620.4 14 3647 280.9 3371.4 340.6s-433.8-225-723.3-111.8-339.6 465.3-489.3 557.8c-149.7 92.5-562.5-20.8-728.1 120.4s-111.8 539.2-238.8 700.2-555.5 132.2-679.3 353.4c-123.9 221.2 108.6 547.6 38.2 762.1S48 3037.7 10.9 3286.3s307.8 453.1 316.8 713.7S-60.6 4385.1 8 4698.2s414.7 262.9 537.9 565.7c123.2 302.8-228 480.4-36 771s456.2 107.4 673 347 18.8 538 247.8 711.1c229 173.1 443.6-30.5 728.1 120.4s143.1 452.9 483 555.6 409.8-153.1 715.8-112c306 41.1 329.7 354.2 645.2 342.7s302.7-293.2 631.4-340.3c328.7-47.1 496 198.7 723.3 111.8s343.6-468.3 477.1-550.7c133.6-82.5 566.4 21.2 735.6-123.8 169.2-145 110.8-536.1 243.5-704 132.6-167.8 557.7-136.8 679.3-353.4s-99.6-579.6-38.2-762.1c61.4-182.5 507.3-353.9 539.9-563.6 32.6-209.7-311.2-506.8-316.8-713.7-5.7-206.8 358.7-509.6 319-701.6-39.7-192-470.7-390.9-537.3-562.3-66.6-171.4 163.6-571.8 36-771-127.6-199.2-504.6-179.3-661-345.2s-7-522.6-259.8-712.8-519-4.7-740.2-127.3-197.7-463.1-470.8-548.7-534.7 88.1-719.4 55S4290-10 4002.8.3z' /%3E%3C/defs%3E%3Cg %3E%3Cg transform='translate(-2500 200) scale(1 .4)' stroke='%2378350F' stroke-width='1'%3E%3Cg transform=''%3E%3Cuse href='%23a' y='-100'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='52s' begin='-17s' values='0 4000 4000%3B360 4000 4000' %3E%3C/animateTransform%3E%3C/use%3E%3Cuse href='%23a' x='-100' y='150'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' begin='-5s' dur='48.3s' values='0 4000 4000%3B360 4000 4000' %3E%3C/animateTransform%3E%3C/use%3E%3Cuse href='%23a' x='50' y='100'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='44.7s' values='0 4000 4000%3B360 4000 4000' %3E%3C/animateTransform%3E%3C/use%3E%3Cuse href='%23a' x='100'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' begin='-14s' dur='40.9s' values='0 4000 4000%3B360 4000 4000' %3E%3C/animateTransform%3E%3C/use%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='56s' values='360 4000 4000%3B0 4000 4000'%3E%3C/animateTransform%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
background-size: cover;
-webkit-transform: rotate(180deg);
-o-transform: rotate(180deg);
-ms-transform: rotate(180deg);
transform: rotate(180deg);
	}
</style>
