<script>
	export let poke;
</script>

<a
	class="transition duration-300 ease-in-out p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-md hover:shadow-lg hover:scale-105 flex flex-col items-center"
	href={`/pokemon/${poke.id}`}
>
	<img class="w-32" src={poke.image} alt={poke.name} />
	<h2 class="uppercase text-xl">{poke.name}</h2>
</a>
