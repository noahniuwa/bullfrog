<script lang="ts">
 	import logo from './bee-logo.png';
  import xIcon from './x-icon.png';
  import burgerIcon from './burger-icon.png';

  let menuOpen = false

  function handleClick() {
		menuOpen =  !menuOpen;
	}
</script>


<header>
  
  <nav class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 font-quicksand font-bold" aria-label="Top">
    <div class="flex-row items-center justify-between hidden sm:flex w-full  py-6 ">
        <a class="drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]" href="#">
          <span class="sr-only">Logo</span>
          <img class="h-10 w-auto" src={logo} alt="">
        </a>
        <div class="ml-10 drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] space-x-8">
          <a href="#about" class="border-b-2 border-amber-900 text-2xl text-amber-900 hover:text-yellow-800">ABOUT</a>

          <a href="#services" class="border-b-2 border-amber-900 text-2xl text-amber-900 hover:text-yellow-800">SERVICES</a>

          <a href="#contact" class="border-b-2 border-amber-900 text-2xl  text-amber-900 hover:text-yellow-800">CONTACT</a>

        </div>

    </div>
    <div class="block py-6 sm:hidden">
      <a href="#">
        <span class="sr-only">Logo</span>
        <img class="h-10 w-auto" src={logo} alt="">
      </a>
      <img on:click={handleClick} class="border-2 cursor-pointer border-amber-900 rounded absolute w-8 right-4 top-6 md:hidden" src={burgerIcon} alt="menu">

      <div class="transition-opacity  md:hidden block absolute right-0 top-0 z-30 mt-3 w-screen max-w-xs px-2 md:opacity-0 {menuOpen ? "opacity-100" : "opacity-0 hidden"} ">
        <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-amber-900 ring-opacity-5">
      
          <div class="z-40 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            <div>
              <img on:click={handleClick} class="h-8 cursor-pointer border-amber-900 border rounded absolute right-2 top-2" alt="close icon" src={xIcon}>

            </div>
            <a href="#about" class="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50">
              <p class="text-base font-quicksand text-amber-900">ABOUT</p>
              <p class="mt-1 text-sm text-amber-500">Get to know the Hive team and philosophy.</p>
            </a>
    
            <a href="#services" class="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50">
              <p class="text-base font-quicksand text-amber-900">SERVICES</p>
              <p class="mt-1 text-sm text-amber-500">Hive's menu of services to help take your business to the next level.</p>
            </a>
    
            <a href="#contact" class="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50">
              <p class="text-base font-quicksand text-amber-900">CONTACT</p>
              <p class="mt-1 text-sm text-amber-500">Get in touch to set up a consultation.</p>
            </a>
     
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>



<style>

 
 
</style>
