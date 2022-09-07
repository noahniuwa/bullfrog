<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<div class="text-center text-xs pt-10">Copyright 2022 Bullfrog Professional Services</div>
</footer>

<style>
 
</style>
