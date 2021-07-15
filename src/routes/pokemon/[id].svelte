<script context="module">
	export async function load({ page }) {
		const id = page.params.id;
		return {props: {id}};
	}
</script>

<script>
	import PokeDetailsCard from '../../components/pokedetailscard.svelte';
	import { pokemon } from '../../stores/pokemart';
	
	export let id;
</script>

<PokeDetailsCard pokemon={pokemon} id={id} />
