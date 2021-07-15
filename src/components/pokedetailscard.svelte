<script>
	export let pokemon;
	export let id;
	const pokemonData = $pokemon[id-1];
</script>

<div class="flex w-full justify-center mt-24">
	<div class="w-full md:w-3/4 p-4 md:p-0 bg-gray-100 rounded-lg">
		<h1 class="w-full text-center text-3xl text-gray-800 p-3">
			{pokemonData.name.toUpperCase()}
		</h1>
		<div class="mt-4 grid gap-4 md:grid-cols-2 grid-cols-1 justify-center md:text-left text-center">
			<img class="w-full" src={pokemonData.image} alt={pokemonData.name} />
			<div>
				<div class="text-xl text-gray-800">
					<strong class="leading-loose"> Type: </strong>
					{#each pokemonData.types as types}
						<span>{types}, </span>
					{/each}
					<br />
					<strong class="leading-loose"> Abilities: </strong>
					{#each pokemonData.abilities as abilities}
						<span>{abilities}, </span>
					{/each}
					<br />
					<strong class="leading-loose">Height: </strong>
					<span>{pokemonData.height}</span>
					<br />
					<strong class="leading-loose">Weight: </strong>
					<span>{pokemonData.weight}</span>
				</div>
			</div>
		</div>
	</div>
</div>
