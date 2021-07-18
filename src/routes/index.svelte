<script context="module">
	export const prerender = true;
</script>

<script>
	import PokeCard from '../components/pokecard.svelte';
	import { fetchPokemon, sort_by_key } from '../utils';

	const limit = 150;

	let searchTerm = '';
	let pokemon = [];
	let filteredPokemon = [];

	for (let i = 1; i < limit; i++) {
		fetchPokemon(i).then((poke) => {
			pokemon = [...pokemon, poke];
		});
	}
	$: {
		if (searchTerm) {
			filteredPokemon = pokemon.filter((poke) =>
				poke.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...pokemon];
		}
		filteredPokemon = sort_by_key(filteredPokemon, 'id')
	}
</script>

<svelte:head>
	<title>PokeDex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8">Gen-1 PokeDex</h1>

<input
	class="w-full rounded-md text-lg text-center p-3 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
	bind:value={searchTerm}
	type="text"
	placeholder="Search Pokemon"
/>

<div class="mt-10 py-4 grid gap-4 md:grid-cols-3 grid-cols-1">
	{#each filteredPokemon as poke}
		<PokeCard {poke} />
	{/each}
</div>
