<script lang="ts">
	import { page } from '$app/stores';
	import logo from './bee-logo.png';
  import xIcon from './x-icon.png';
  import burgerIcon from './burger-icon.png';

  let menuOpen = false

  function handleClick() {
		menuOpen =  !menuOpen;
	}
</script>

	 <!-- This example requires Tailwind CSS v2.0+ -->
<!-- This example requires Tailwind CSS v2.0+ -->
<header>
  
  <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-mono font-bold" aria-label="Top">
    <div class="flex-row items-center justify-between hidden sm:flex w-full  py-6 ">
        <a href="#">
          <span class="sr-only">Logo</span>
          <img class="h-10 w-auto" src={logo} alt="">
        </a>
        <div class="ml-10 space-x-8">
          <a href="#" class="text-2xl text-black hover:text-yellow-800">ABOUT</a>

          <a href="#" class="text-2xl text-black hover:text-yellow-800">SERVICES</a>

          <a href="#" class="text-2xl  text-black hover:text-yellow-800">CONTACT</a>

        </div>

    </div>
    <div class="block py-6 sm:hidden">
      <a href="#">
        <span class="sr-only">Logo</span>
        <img class="h-10 w-auto" src={logo} alt="">
      </a>
      <img on:click={handleClick} class="border-2 cursor-pointer border-black rounded absolute w-8 right-4 top-6 sm:hidden" src={burgerIcon} alt="menu">

      <div class="lg:hidden absolute right-0 top-0 z-20 mt-3 w-screen max-w-xs px-2 {menuOpen ? "block" : "hidden"} ">
        <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
       

          <div class="z-30 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            <div>
              <img on:click={handleClick} class="h-8 cursor-pointer border-black border rounded absolute right-2 top-2" alt="close icon" src={xIcon}>

            </div>
            <a href="#" class="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50">
              <p class="text-base font-medium text-gray-900">About</p>
              <p class="mt-1 text-sm text-gray-500">Learn about tips, product updates and company culture.</p>
            </a>
    
            <a href="#" class="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50">
              <p class="text-base font-medium text-gray-900">Services</p>
              <p class="mt-1 text-sm text-gray-500">Get all of your questions answered in our forums of contact support.</p>
            </a>
    
            <a href="#" class="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50">
              <p class="text-base font-medium text-gray-900">Contact</p>
              <p class="mt-1 text-sm text-gray-500">Learn how to maximize our platform to get the most out of it.</p>
            </a>
     
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>



<style>

 
 
</style>
