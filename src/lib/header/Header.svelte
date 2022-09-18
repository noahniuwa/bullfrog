<script lang="ts">
	import { page } from '$app/stores';
	import logo from './bullfrog-logo.png';
</script>

	 <!-- This example requires Tailwind CSS v2.0+ -->
<!-- This example requires Tailwind CSS v2.0+ -->
<header>
  <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-majorMono" aria-label="Top">
    <div class="flex w-full items-center justify-between border-b border-yellow-500 py-6 lg:border-none">
      <div class="flex items-center">
        <a href="#">
          <span class="sr-only">Your Company</span>
          <img class="h-6 w-auto" src={logo} alt="">
        </a>
        <div class="ml-10 hidden space-x-8 lg:block">
          <a href="#" class="text-xl font-medium text-black hover:text-yellow-500">ABOUT</a>

          <a href="#" class="text-xl font-medium text-black hover:text-yellow-500">SERVICES</a>

          <a href="#" class="text-xl font-medium text-black hover:text-yellow-500">CONTACT</a>

        </div>
      </div>
 
    </div>
    <div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
      <a href="#" class="text-xl font-medium text-white hover:text-yellow-500">ABOUT</a>

          <a href="#" class="text-xl font-medium text-white hover:text-yellow-500">SERVICES</a>

          <a href="#" class="text-xl font-medium text-white hover:text-yellow-500">CONTACT</a>

    </div>
  </nav>
</header>



<style>

 
 
</style>
