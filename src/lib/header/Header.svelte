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
          <a href="#" class="text-base font-medium text-black hover:text-yellow-500">ABOUT</a>

          <a href="#" class="text-base font-medium text-black hover:text-yellow-500">SERVICES</a>

          <a href="#" class="text-base font-medium text-black hover:text-yellow-500">CONTACT</a>

        </div>
      </div>
      <div class="ml-10 space-x-4">
        <a href="#" class="inline-block rounded-lg border border-transparent bg-black py-1.5 px-3 text-base font-medium text-white hover:bg-yellow-900">Get in touch</a>
      </div>
    </div>
    <div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
      <a href="#" class="text-base font-medium text-black hover:text-yellow-500">ABOUT</a>

          <a href="#" class="text-base font-medium text-black hover:text-yellow-500">SERVICES</a>

          <a href="#" class="text-base font-medium text-black hover:text-yellow-500">CONTACT</a>

    </div>
  </nav>
</header>



<style>

 
 
</style>
