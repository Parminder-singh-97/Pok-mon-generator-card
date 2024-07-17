const apiUrl = " https://pokeapi.co/api/v2/pokemon/";
let btn = document.querySelector("button");

const typeColors = {
    Bug: '#26de81', Dragon: '#ffeaa7', Electric: '#fed330', Fairy: '#FF0069',
    Fighting: '#30336b', Flying: '#81ecec', Grass: '#00b894', Ground: '#EFB549',
    Ghost: '#a55eea', Ice: '#74b9ff', Normal: '#95afc0', Poison: '#6c5ce7',
    Psychic: '#a29bfe', Rock: '#2d3436', Water: '#0190FF', Fire: '#f0932b'
};

btn.addEventListener("click", (pokiData) => {
  let pokiId = Math.floor(Math.random() * 150 + 1);
  let url = `${apiUrl}${pokiId}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const hp = data.stats[0].base_stat;
      const imgSrc = data.sprites.other.dream_world.front_default;
      const pokeName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      const statAttack = data.stats[1].base_stat;
      const statDefense = data.stats[2].base_stat;
      const statSpeed = data.stats[5].base_stat;
      const pokitype =
        data.types[0].type.name.charAt(0).toUpperCase() +
        data.types[0].type.name.slice(1);

    //   if ("Bug" == pokitype) {
    //     document.querySelector(".circle").style.backgroundColor = "#26de81";
    //   }
    //   if ("Dragon" == pokitype) {
    //     document.querySelector(".circle").style.backgroundColor = "#ffeaa7";
    //   }
    //   if ("Electric" == pokitype) {
    //     document.querySelector(".circle").style.backgroundColor = "#fed330";
    //   }
    //   if ("Fairy" == pokitype) {
    //     document.querySelector(".circle").style.backgroundColor = "#FF0069";
    //   }
    //   if ("Fighting" == pokitype) {
    //     document.querySelector(".circle").style.backgroundColor = "#30336b";
    //   }
    //   if ("Flying" == pokitype) {
    //     document.querySelector(".circle").style.backgroundColor = "#81ecec";
    //   }
    //   if ("Frass" == pokitype) {
    //     document.querySelector(".circle").style.backgroundColor = "#00b894";
    //   }
    //   if ("Ground" == pokitype) {
    //     document.querySelector(".circle").style.backgroundColor = "#EFB549";
    //   }
    //   if ("Ghost" == pokitype) {
    //     document.querySelector(".circle").style.backgroundColor = "#a55eea";
    //   }
    //   if ("Ice" == pokitype) {
    //     document.querySelector(".circle").style.backgroundColor = "#74b9ff";
    //   }
    //   if ("Normal" == pokitype) {
    //     document.querySelector(".circle").style.backgroundColor = "#95afc0";
    //   }
    //   if ("Poison" == pokitype) {
    //     document.querySelector(".circle").style.backgroundColor = "#6c5ce7";
    //   }
    //   if ("Psychic" == pokitype) {
    //     document.querySelector(".circle").style.backgroundColor = "#a29bfe";
    //   }
    //   if ("Rock" == pokitype) {
    //     document.querySelector(".circle").style.backgroundColor = "#2d3436";
    //   }
    //   if ("Water" == pokitype) {
    //     document.querySelector(".circle").style.backgroundColor = "#0190FF";
    //   }
    //   if ("Fire" == pokitype) {
    //     document.querySelector(".circle").style.backgroundColor = "#f0932b";
    //   }

    const updateTypeColor = (type) => {
        const color = typeColors[type] || '#95afc0'; // Default color if type not found
        document.querySelector('.circle').style.backgroundColor = color;
    };
    updateTypeColor(pokitype);
      document.querySelector(".hp").innerHTML = "HP: " + hp;
      document.querySelector("#pokiImg").src = imgSrc;
      document.querySelector(".Name h1").innerHTML = pokeName;
      document.querySelector("#defense p").innerHTML = statDefense;
      document.querySelector("#attack p").innerHTML = statAttack;
      document.querySelector("#speed p").innerHTML = statSpeed;
      document.querySelector("#type").innerHTML = pokitype;
    }).catch( (error) => {
        console.log(error);
    });
});

