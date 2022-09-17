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
<div class=" ">
  <div class="mr-auto ml-20 drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] max-w-2xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
    <h2 class="text-left drop-shadow pb-10 text-3xl font-mono font-bold tracking-tight text-white sm:text-4xl">
      <span class="block ">We help tech startups <span class="text-green-500">communicate</span> their ideas so they can focus on building!</span>
    </h2>
     
  </div>
</div>

</section>
<section><!-- This example requires Tailwind CSS v2.0+ -->
	<div class="relative bg-green-800">
		<div class="h-56 bg-green-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
			<img class="h-full w-full object-cover" src={help} alt="">
		</div>
		<div class="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
			<div class="md:ml-auto md:w-1/2 md:pl-10">
				<h2 class="text-lg font-semibold text-gray-300">Award winning support</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We’re here to help</p>
				<p class="mt-3 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.</p>
				<div class="mt-8">
			
				</div>
			</div>
		</div>
	</div>
	</section>
<style>
	 .animated-bg {
		background-color: #4A4A4A;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1500 1500'%3E%3Cg transform='rotate(1 750 750)'%3E%3Cg transform='translate(0 0)'%3E%3Cg transform='scale(1)'%3E%3Ccircle r='2000' fill='%23434343'%3E%3CanimateTransform attributeName='transform' type='scale' repeatCount='indefinite' dur='5s' begin='-1.8s' values='1%3B1.1%3B1' keySplines='.5 0 .5 1%3B0.5 0 .5 1' calcMode='spline'%3E%3C/animateTransform%3E%3C/circle%3E%3Ccircle r='1800' fill='%233c3c3c'%3E%3CanimateTransform attributeName='transform' type='scale' repeatCount='indefinite' dur='5s' begin='-1.6s' values='1%3B1.1%3B1' keySplines='.5 0 .5 1%3B0.5 0 .5 1' calcMode='spline'%3E%3C/animateTransform%3E%3C/circle%3E%3Ccircle r='1600' fill='%23353535'%3E%3CanimateTransform attributeName='transform' type='scale' repeatCount='indefinite' dur='5s' begin='-1.4s' values='1%3B1.1%3B1' keySplines='.5 0 .5 1%3B0.5 0 .5 1' calcMode='spline'%3E%3C/animateTransform%3E%3C/circle%3E%3Ccircle r='1400' fill='%232e2e2e'%3E%3CanimateTransform attributeName='transform' type='scale' repeatCount='indefinite' dur='5s' begin='-1.2s' values='1%3B1.1%3B1' keySplines='.5 0 .5 1%3B0.5 0 .5 1' calcMode='spline'%3E%3C/animateTransform%3E%3C/circle%3E%3Ccircle r='1200' fill='%23272727'%3E%3CanimateTransform attributeName='transform' type='scale' repeatCount='indefinite' dur='5s' begin='-1s' values='1%3B1.1%3B1' keySplines='.5 0 .5 1%3B0.5 0 .5 1' calcMode='spline'%3E%3C/animateTransform%3E%3C/circle%3E%3Ccircle r='1000' fill='%23212121'%3E%3CanimateTransform attributeName='transform' type='scale' repeatCount='indefinite' dur='5s' begin='-0.8s' values='1%3B1.1%3B1' keySplines='.5 0 .5 1%3B0.5 0 .5 1' calcMode='spline'%3E%3C/animateTransform%3E%3C/circle%3E%3Ccircle r='800' fill='%231a1a1a'%3E%3CanimateTransform attributeName='transform' type='scale' repeatCount='indefinite' dur='5s' begin='-0.6s' values='1%3B1.1%3B1' keySplines='.5 0 .5 1%3B0.5 0 .5 1' calcMode='spline'%3E%3C/animateTransform%3E%3C/circle%3E%3Ccircle r='600' fill='%23141414'%3E%3CanimateTransform attributeName='transform' type='scale' repeatCount='indefinite' dur='5s' begin='-0.4s' values='1%3B1.1%3B1' keySplines='.5 0 .5 1%3B0.5 0 .5 1' calcMode='spline'%3E%3C/animateTransform%3E%3C/circle%3E%3Ccircle r='400' fill='%230b0b0b'%3E%3CanimateTransform attributeName='transform' type='scale' repeatCount='indefinite' dur='5s' begin='-0.2s' values='1%3B1.1%3B1' keySplines='.5 0 .5 1%3B0.5 0 .5 1' calcMode='spline'%3E%3C/animateTransform%3E%3C/circle%3E%3Ccircle r='200' fill='%23000000'%3E%3CanimateTransform attributeName='transform' type='scale' repeatCount='indefinite' dur='5s' begin='0s' values='1%3B1.1%3B1' keySplines='.5 0 .5 1%3B0.5 0 .5 1' calcMode='spline'%3E%3C/animateTransform%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
 background-size: cover;
	 }
</style>
