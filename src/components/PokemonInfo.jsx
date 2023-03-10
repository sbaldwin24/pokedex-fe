function PokemonInfo({ pokemonData }) {
	console.log(pokemonData);
	return (
		<div className="card">
			<div>
				<h1>{pokemonData.id}</h1>
				<br />
				<h1>{pokemonData.name}</h1>
			</div>
			<img src={pokemonData.sprites.front_default} alt="Pokemon" />
			<div className="abilities">
				<div className="group">
					<h2>Ability 1</h2>
				</div>
				<div className="group">
					<h2>Ability 2</h2>
				</div>
			</div>
			<div className="base-stat">
				<h3>Stat 1</h3>
				<h3>Stat 2</h3>
				<h3>Stat 3</h3>
				<h3>Stat 4</h3>
			</div>
		</div>
	);
}

export default PokemonInfo;
