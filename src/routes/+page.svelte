<script lang="ts">
	import help from './images/help.png';
	import Header from '$lib/header/Header.svelte';
</script>

<svelte:head>
	<title>Bullfrog</title>
	<meta name="description" content="Bullfrog professional services" />
</svelte:head>

<section class="animated-bg">
	<!-- This example requires Tailwind CSS v2.0+ -->
	<Header />
		<div
			class="mr-auto drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] max-w-xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8"
		>
			<h2
				class="typing text-left drop-shadow pb-10 text-3xl font-mono font-bold tracking-tight text-white sm:text-4xl"
			>
				<span class="block">We help tech startups <span class="text-green-500 flicker-4">communicate</span> their ideas so they
					can focus on building!
				</span>
			</h2>
		</div>

</section>
<section class="bg-2">
	 <!-- This example requires Tailwind CSS v2.0+ -->
	<div class="font-mono">
		<div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
			<div class="mx-auto max-w-3xl text-center">
				<h2 class="text-3xl font-bold tracking-tight text-white">All-in-one platform</h2>
				<p class="mt-4 text-lg text-white">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
			</div>
			<dl class="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
				<div class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-medium leading-6 text-white">Invite team members</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.</dd>
				</div>

				<div class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-medium leading-6 text-white">Notifications</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.</dd>
				</div>

				<div class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-medium leading-6 text-white">List view</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.</dd>
				</div>

				<div class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-medium leading-6 text-white">Boards</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.</dd>
				</div>

				<div class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-medium leading-6 text-white">Keyboard shortcuts</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.</dd>
				</div>

				<div class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-medium leading-6 text-white">Reporting</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.</dd>
				</div>

				<div class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-medium leading-6 text-white">Calendars</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.</dd>
				</div>

				<div class="relative">
					<dt>
						<!-- Heroicon name: outline/check -->
						<svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						<p class="ml-9 text-lg font-medium leading-6 text-white">Mobile app</p>
					</dt>
					<dd class="mt-2 ml-9 text-base text-white">Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.</dd>
				</div>
			</dl>
		</div>
	</div>
</section>
<section class="bg-3">
	<!-- This example requires Tailwind CSS v2.0+ -->
	<div class="font-mono ">
		<div class="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				<span class="block">Boost your productivity.</span>
				<span class="block">Start using our app today.</span>
			</h2>
			<p class="mt-4 text-lg leading-6 text-white">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
			<a href="#" class="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-black hover:bg-indigo-50 sm:w-auto">Sign up for free</a>
		</div>
	</div>

</section>
<style>
	.animated-bg {
		background-color: #22C55E;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3000 1800'%3E%3Cdefs%3E%3Cpath id='a' fill='%23000000' fill-opacity='.7' d='M4002.8.3C3620.4 14 3647 280.9 3371.4 340.6s-433.8-225-723.3-111.8-339.6 465.3-489.3 557.8c-149.7 92.5-562.5-20.8-728.1 120.4s-111.8 539.2-238.8 700.2-555.5 132.2-679.3 353.4c-123.9 221.2 108.6 547.6 38.2 762.1S48 3037.7 10.9 3286.3s307.8 453.1 316.8 713.7S-60.6 4385.1 8 4698.2s414.7 262.9 537.9 565.7c123.2 302.8-228 480.4-36 771s456.2 107.4 673 347 18.8 538 247.8 711.1c229 173.1 443.6-30.5 728.1 120.4s143.1 452.9 483 555.6 409.8-153.1 715.8-112c306 41.1 329.7 354.2 645.2 342.7s302.7-293.2 631.4-340.3c328.7-47.1 496 198.7 723.3 111.8s343.6-468.3 477.1-550.7c133.6-82.5 566.4 21.2 735.6-123.8 169.2-145 110.8-536.1 243.5-704 132.6-167.8 557.7-136.8 679.3-353.4s-99.6-579.6-38.2-762.1c61.4-182.5 507.3-353.9 539.9-563.6 32.6-209.7-311.2-506.8-316.8-713.7-5.7-206.8 358.7-509.6 319-701.6-39.7-192-470.7-390.9-537.3-562.3-66.6-171.4 163.6-571.8 36-771-127.6-199.2-504.6-179.3-661-345.2s-7-522.6-259.8-712.8-519-4.7-740.2-127.3-197.7-463.1-470.8-548.7-534.7 88.1-719.4 55S4290-10 4002.8.3z' /%3E%3C/defs%3E%3Cg transform='translate(0 0)' %3E%3Cg transform='translate(-2500 200) scale(1 .4)' stroke='%2322C55E' stroke-width='1'%3E%3Cg%3E%3Cuse href='%23a' y='-100'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='52s' begin='-17s' values='0 4000 4000%3B360 4000 4000' %3E%3C/animateTransform%3E%3C/use%3E%3Cuse href='%23a' x='-100' y='150'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' begin='-5s' dur='48.3s' values='0 4000 4000%3B360 4000 4000' %3E%3C/animateTransform%3E%3C/use%3E%3Cuse href='%23a' x='50' y='100'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='44.7s' values='0 4000 4000%3B360 4000 4000' %3E%3C/animateTransform%3E%3C/use%3E%3Cuse href='%23a' x='100'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' begin='-14s' dur='40.9s' values='0 4000 4000%3B360 4000 4000' %3E%3C/animateTransform%3E%3C/use%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='56s' values='360 4000 4000%3B0 4000 4000'%3E%3C/animateTransform%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
		background-size: cover;
	} 
	.bg-2 {
		background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3Cpath id='p' d='M89 17c71 35 1 79-39 50-64-45 23-103 86-37 52 54-49 93-86 60-27-23 17-72 51-49 35 24 2 108-69 63-67-43-19-125 57-87z' /%3E%3Ccircle id='a' r='2' %3E%3CanimateMotion dur='40s' repeatCount='5'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3Ccircle id='b' r='2' %3E%3CanimateMotion begin='-10s' dur='40s' repeatCount='5' keyPoints='1%3B0' keyTimes='0%3B1' calcMode='linear'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3Ccircle id='e' r='2' %3E%3CanimateMotion begin='-34s' dur='40s' repeatCount='5' keyPoints='1%3B0' keyTimes='0%3B1' calcMode='linear'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3Ccircle id='c' r='2' %3E%3CanimateMotion begin='-20s' dur='40s' repeatCount='5' keyPoints='1%3B0' keyTimes='0%3B1' calcMode='linear'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3Ccircle id='d' r='2' %3E%3CanimateMotion begin='-30s' dur='40s' repeatCount='5'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3Ccircle id='f' r='2' %3E%3CanimateMotion begin='-15s' dur='40s' repeatCount='5'%3E%3Cmpath href='%23p' /%3E%3C/animateMotion%3E%3C/circle%3E%3C/defs%3E%3Cg fill='%2322C55E' fill-opacity='0.54'%3E%3Cg stroke='%23FFF' stroke-width='0'%3E%3Cuse href='%23a' x='100' y='100'%3E%3C/use%3E%3Cuse href='%23b' x='300' y='300'%3E%3C/use%3E%3Cuse href='%23c' x='500' y='500'%3E%3C/use%3E%3Cuse href='%23d' x='700' y='700'%3E%3C/use%3E%3Cuse href='%23a' x='900' y='0'%3E%3C/use%3E%3Cuse href='%23b' x='1100' y='700'%3E%3C/use%3E%3Cuse href='%23c' x='1300' y='300'%3E%3C/use%3E%3Cuse href='%23d' x='1500' y='500'%3E%3C/use%3E%3Cuse href='%23a' x='200' y='400'%3E%3C/use%3E%3Cuse href='%23b' x='400' y='600'%3E%3C/use%3E%3Cuse href='%23f' x='600' y='800'%3E%3C/use%3E%3Cuse href='%23d' x='800' y='200'%3E%3C/use%3E%3Cuse href='%23b' x='1000' y='0'%3E%3C/use%3E%3Cuse href='%23a' x='1200' y='400'%3E%3C/use%3E%3Cuse href='%23c' x='1400' y='1000'%3E%3C/use%3E%3Cuse href='%23d' x='1600' y='200'%3E%3C/use%3E%3Cuse href='%23a' x='50' y='750'%3E%3C/use%3E%3Cuse href='%23b' x='150' y='600'%3E%3C/use%3E%3Cuse href='%23c' x='350' y='800'%3E%3C/use%3E%3Cuse href='%23d' x='450' y='150'%3E%3C/use%3E%3Cuse href='%23b' x='550' y='50'%3E%3C/use%3E%3Cuse href='%23a' x='750' y='600'%3E%3C/use%3E%3Cuse href='%23f' x='650' y='400'%3E%3C/use%3E%3Cuse href='%23c' x='950' y='200'%3E%3C/use%3E%3Cuse href='%23b' x='1350' y='700'%3E%3C/use%3E%3Cuse href='%23d' x='1250' y='400'%3E%3C/use%3E%3Cuse href='%23c' x='1050' y='550'%3E%3C/use%3E%3Cuse href='%23a' x='1450' y='50'%3E%3C/use%3E%3Cuse href='%23a' x='-100' y='0'%3E%3C/use%3E%3Cuse href='%23b' x='0' y='200'%3E%3C/use%3E%3Cuse href='%23c' x='-50' y='400'%3E%3C/use%3E%3Cuse href='%23d' x='50' y='600'%3E%3C/use%3E%3Cuse href='%23b' x='250' y='-50'%3E%3C/use%3E%3Cuse href='%23a' x='640' y='0'%3E%3C/use%3E%3Cuse href='%23f' x='390' y='-80'%3E%3C/use%3E%3Cuse href='%23e' x='450' y='300'%3E%3C/use%3E%3Cuse href='%23b' x='820' y='700'%3E%3C/use%3E%3Cuse href='%23d' x='970' y='400'%3E%3C/use%3E%3Cuse href='%23c' x='1150' y='-40'%3E%3C/use%3E%3Cuse href='%23a' x='1250' y='820'%3E%3C/use%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
	}

	.bg-3 {
		background-color: #070014;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 100 1000 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='21%25' cy='94%25' fx='40%25' fy='25%25' r='100%25'%3E%3Cstop offset='0' stop-color='%2322C55E' stop-opacity='1' /%3E%3Cstop offset='.1' stop-color='%2322C55E' stop-opacity='.9' /%3E%3Cstop offset='.2' stop-color='%2322C55E' stop-opacity='.75' /%3E%3Cstop offset='.4' stop-color='%2322C55E' stop-opacity='.6' /%3E%3Cstop offset='.65' stop-color='%2322C55E' stop-opacity='.4' /%3E%3Cstop offset='.9' stop-color='%2322C55E' stop-opacity='.15' /%3E%3Cstop offset='1' stop-color='%2322C55E' stop-opacity='0' /%3E%3C/radialGradient%3E%3ClinearGradient id='o' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23070014' stop-opacity='0' /%3E%3Cstop offset='.1' stop-color='%2322C55E' stop-opacity='0.1' /%3E%3Cstop offset='1' stop-color='%2322C55E' /%3E%3C/linearGradient%3E%3Cg id='b'%3E%3Cg transform='rotate(30 0 0)' style='transform-origin:center'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 0 0' to='20 0 0' keyTimes='0%3B 1' calcMode='spline' keySplines='0 0 .3 1' dur='12s' repeatCount='1' fill='freeze'/%3E%3Cg transform='translate(0 0)' style='transform-origin:center'%3E%3CanimateTransform attributeName='transform' type='translate' from='0 0' to='150 100' keyTimes='0%3B 1' calcMode='spline' keySplines='0 0 .3 1' dur='12s' repeatCount='1' fill='freeze'/%3E%3Cpath fill='url(%23a)' d='M34.1-49.9c121.6 165.5 108 399-40.9 549.3C-4.7 499.4-375 865-375 865l723 135 .4-642.4C347.3 162.3 214.4-1.6 34.1-49.9z' /%3E%3Cpath fill='none' stroke='url(%23o)' stroke-width='1' d='M34.1-49.9c121.6 165.5 108 399-40.9 549.3L-375 865' /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)' style='transform-origin:center'%3E%3Cg id='c' transform='translate(500 500)'%3E%3Cuse href='%23b' transform='rotate(0 0 0)' /%3E%3Cuse href='%23b' transform='rotate(45 0 0)' /%3E%3Cuse href='%23b' transform='rotate(90 0 0)' /%3E%3Cuse href='%23b' transform='rotate(135 0 0)' /%3E%3Cuse href='%23b' transform='rotate(180 0 0)' /%3E%3Cuse href='%23b' transform='rotate(225 0 0)' /%3E%3Cuse href='%23b' transform='rotate(270 0 0)' /%3E%3Cuse href='%23b' transform='rotate(315 0 0)' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
		background-size: cover;
	}
</style>
