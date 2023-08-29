import pokeball_icon from "../assets/poke_ball_icon.svg";

function Card({ pokemonData, setSelectedPokemon }) {
	return (
		<div
			className="list-item"
			onClick={() => {
				setSelectedPokemon(pokemonData);
			}}
		>
			<div className="white-circle">
				{pokemonData.caught && (
					<img
						id="pokeball-image"
						src={pokeball_icon}
						alt="pokeball"
					/>
				)}
			</div>
			<h2 id="pokemonListId">{pokemonData.id}</h2>
			<h2 id="pokemonListName"> {pokemonData.name}</h2>
			<div className="white-circle">
				<img
					id="pokemon-list-image"
					src={pokemonData.basicSprite}
					alt={pokemonData.name}
				/>
			</div>
		</div>
	);
}

export default Card;
