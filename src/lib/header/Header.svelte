<script lang="ts">
 	import logo from './bee-logo.png';
  import xIcon from './x-icon.png';
  import twitter from './twitter.svg';
  import telegram from './telegram.svg';

  import burgerIcon from './burger-icon.png';

  let menuOpen = false

  function handleClick() {
		menuOpen =  !menuOpen;
	}
</script>


<header>
  
  <nav class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 font-quicksand font-bold" aria-label="Top">
    <div class="flex-row items-center justify-between hidden sm:flex w-full  py-6 ">
        <a class="" href="#">
          <span class="sr-only">Logo</span>
          <img class="h-10 w-auto" src={logo} alt="">
        </a>
        <div class="align-middle items-center flex flex-row ml-10 space-x-6">
          <a href="#about" class="duration-200 ease-in-out hover:scale-110  text-xl text-black">ABOUT</a>

          <a href="#services" class=" duration-200 ease-in-out hover:scale-110  text-xl text-black">SERVICES</a>

          <a href="#contact" class="duration-200 ease-in-out hover:scale-110 text-xl  text-black ">CONTACT</a>
          
          <a href="#contact" class="duration-200 ease-in-out hover:scale-110 inline-block w-6 block rounded-md transition">
            <img src={twitter}>
          </a>
          <a href="#contact" class="duration-200 ease-in-out hover:scale-110 inline-block w-6 block rounded-md transition">
            <img src={telegram}>            
          </a>
         
        </div>

    </div>
    <div class="block py-6 sm:hidden">
      <a href="#">
        <span class="sr-only">Logo</span>
        <img class="h-10 w-auto" src={logo} alt="">
      </a>
      <img on:click={handleClick} class="border-2 cursor-pointer border-black rounded absolute w-8 right-4 top-6 md:hidden" src={burgerIcon} alt="menu">

      <div class="transition-opacity duration-300 ease-in-out md:hidden block absolute right-0 top-0 z-30 mt-3 w-screen max-w-xs px-2 md:opacity-0 {menuOpen ? "opacity-100 " : "opacity-0 pointer-events-none"} ">
        <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
      
          <div class="z-40 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            <div>
              <img on:click={handleClick} class="h-8 cursor-pointer border-black border-2 rounded absolute right-2 top-2" alt="close icon" src={xIcon}>

            </div>
            <a href="#about" class="-m-3 block rounded-md p-3 transition duration-200 ease-in-out hover:bg-gray-50">
              <p class="text-base font-quicksand text-black">ABOUT</p>
              <p class="mt-1 text-sm text-amber-500">Get to know the Hive team and philosophy.</p>
            </a>
    
            <a href="#services" class="-m-3 block rounded-md p-3 transition duration-200 ease-in-out hover:bg-gray-50">
              <p class="text-base font-quicksand text-black">SERVICES</p>
              <p class="mt-1 text-sm text-amber-500">Hive's menu of services to help take your business to the next level.</p>
            </a>
    
            <a href="#contact" class="-m-3 block rounded-md p-3 transition duration-200 ease-in-out hover:bg-gray-50">
              <p class="text-base font-quicksand text-black">CONTACT</p>
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
