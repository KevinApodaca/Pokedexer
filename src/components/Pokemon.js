import React from 'react';

  export function Pokemon({ pokemon }){
    return (
    <div className="card is-centered">
      {/* Image Component */}
      <div className="card-image">
        <figure className="image is-48by48">
          <img src={pokemon.image} alt={pokemon.name}></img>
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{pokemon.name}</p>
            {pokemon &&
              pokemon.attacks &&
              pokemon.attacks.special
              .slice(0,3)
              .map(attack => (
              <span className="subtitle is-6" key={`${attack.name}-${attack.damage}`}>
                {attack.name}
                </span>
            ))}
        <p className="subtitle is-6">{pokemon.types}</p>
      </div>
    </div>

    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
    </div>
  </div>
</div>
    )
  }
