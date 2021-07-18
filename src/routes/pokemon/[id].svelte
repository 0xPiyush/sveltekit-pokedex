<script context="module">
	export async function load({ page }) {
		const id = page.params.id;
		return {props: {id}};
	}
</script>

<script>
	import PokeDetailsCard from '../../components/pokedetailscard.svelte';
	
	export let id;
</script>

<PokeDetailsCard id={id} />
