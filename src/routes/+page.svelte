<script lang="ts">
	import help from './images/help.png';
</script>

<svelte:head>
	<title>Bullfrog</title>
	<meta name="description" content="Bullfrog professional services" />
</svelte:head>

<section>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white ">
  <div class="mx-auto drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] max-w-2xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
    <h2 class="drop-shadow pb-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block">Bullfrog is a Web3 professional services agency you can trust.</span>
    </h2>
    <div class="mt-8 flex justify-center">
      <div class="inline-flex rounded-md shadow">
        <a href="#" class="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-3 text-base font-medium text-white hover:bg-green-700">Explore Services</a>
      </div>
      <div class="ml-3 inline-flex">
        <a href="#" class="inline-flex items-center justify-center rounded-md border border-transparent bg-green-100 px-5 py-3 text-base font-medium text-green-700 hover:bg-green-200">Get in Touch</a>
      </div>
    </div>
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
	 
</style>
