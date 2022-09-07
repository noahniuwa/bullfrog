<script lang="ts">
	import { page } from '$app/stores';
	import logo from './bullfrog-logo.svg';
</script>

<header>
	 <!-- This example requires Tailwind CSS v2.0+ -->
<header class="">
  <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
    <div class="flex w-full items-center justify-center  py-6">
      <div class="flex items-center">
        <a href="#">
          <span class="sr-only">Your Company</span>
          <img class="h-10 w-auto" src={logo} alt="">
        </a>
        <div class="ml-10 hidden space-x-8 lg:block">
          <a href="/" class="text-base font-medium  hover:text-green-700">About</a>

          <a href="/services" class="text-base font-medium  hover:text-green-700">Services</a>

          <a href="/" class="text-base font-medium  hover:text-green-700">Contact</a>

        </div>
      </div>
 
    </div>
    <div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
			<a href="/" class="text-base font-medium  hover:text-green-700">About</a>

			<a href="/services" class="text-base font-medium  hover:text-green-700">Services</a>

			<a href="/" class="text-base font-medium  hover:text-green-700">Contact</a>
    </div>
  </nav>
</header>

</header>

<style>
 
</style>
