  // Menú responsivo (código anterior)
  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Generar equipo aleatorio
async function generateTeam() {
    const teamContainer = document.getElementById('pokemonTeam');
    const initialMessage = document.getElementById('initialMessage');
    
    // Ocultar mensaje inicial
    initialMessage.style.display = 'none';
    
    teamContainer.innerHTML = ''; // Limpiar equipo anterior

    for (let i = 0; i < 3; i++) {
        const randomId = Math.floor(Math.random() * 898) + 1; // Pokémon hasta la generación 8
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
            const pokemon = await response.json();

            const pokemonCard = document.createElement('div');
            pokemonCard.classList.add('pokemon-card');
            pokemonCard.innerHTML = `
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <h3>${pokemon.name.toUpperCase()}</h3>
                <p>Tipo: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
                <p>Altura: ${pokemon.height/10} m</p>
                <p>Peso: ${pokemon.weight/10} kg</p>
            `;
            teamContainer.appendChild(pokemonCard);
        } catch (error) {
            console.error('Error fetching Pokemon:', error);
        }
    }
}

// Validación de formulario de comentarios (código anterior)
document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comment = document.getElementById('comment').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (name.length < 2) {
        alert('Por favor, ingresa un nombre válido');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido');
        return;
    }

    if (comment.length < 10) {
        alert('El comentario debe tener al menos 10 caracteres');
        return;
    }

    alert('¡Comentario enviado con éxito!');
    this.reset();
});