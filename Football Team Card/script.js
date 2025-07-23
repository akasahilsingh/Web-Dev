const footballTeam = {
   team: "Argentina",
   year: 1986,
   headCoach: "Carlos Bilardo",
   players: [
     {
       name: "Sergio Almirón",
       position: "forward",
       isCaptain: false
     },
     {
       name: "Sergio Batista",
       position: "midfielder",
       isCaptain: false
     },
     {
       name: "Ricardo Bochini",
       position: "midfielder",
       isCaptain: false
     },
     {
       name: "Claudio Borghi",
       position: "forward",
       isCaptain: false
     },
     {
       name: "Sergio Almirón",
       position: "midfielder",
       isCaptain: false
     },
     {
       name: "José Luis Brown",
       position: "defender",
       isCaptain: false
     },
     {
       name: "Jorge Burruchaga",
       position: "forward",
       isCaptain: false
     },
     {
       name: "Néstor Clausen",
       position: "defender",
       isCaptain: false
     },
     {
       name: "José Luis Cuciuffo",
       position: "defender",
       isCaptain: false
     },
     {
       name: "Diego Maradona",
       position: "midfielder",
       isCaptain: true
     },
     {
       name: "Jorge Valdano",
       position: "forward",
       isCaptain: false
     },
     {
       name: "Héctor Enrique",
       position: "midfielder",
       isCaptain: false
     },
     {
       name: "Oscar Garré",
       position: "defender",
       isCaptain: false
     },
     {
       name: "Ricardo Giusti",
       position: "midfielder",
       isCaptain: false
     },
     {
       name: "Luis Islas",
       position: "goalkeeper",
       isCaptain: false
     },
     {
       name: "Julio Olarticoechea",
       position: "defender",
       isCaptain: false
     },
     {
       name: "Pedro Pasculli",
       position: "forward",
       isCaptain: false
     },
     {
       name: "Nery Pumpido",
       position: "goalkeeper",
       isCaptain: false
     },
     {
       name: "Oscar Ruggeri",
       position: "defender",

       isCaptain: false
     },
     {
       name: "Carlos Tapia",
       position: "midfielder",
       isCaptain: false
     },
     {
       name: "Marcelo Trobbiani",
       position: "midfielder",
       isCaptain: false
     },
     {
       name: "Héctor Zelada",
       position: "goalkeeper",
       isCaptain: false
     }
   ]
};

const team = document.getElementById("team");

const year = document.getElementById("year");

const headCoach = document.getElementById("head-coach");

const playerCards = document.getElementById("player-cards");

team.innerText = footballTeam.team;

year.innerText = footballTeam.year;

headCoach.innerText = footballTeam.headCoach;

const select = document.querySelector("select");




select.addEventListener("change", (event) => {
  
  playerCards.innerHTML ="";
  const selectedPosition = event.target.value;
  for(const i of footballTeam.players) {

 if(i.position === selectedPosition || selectedPosition === "all") {
const card = document.createElement("div");
card.classList.add("player-card");

const playerName = document.createElement("h2");
const cleanName = i.name.replace("Captain ", "");
playerName.innerText = i.isCaptain? `(Captain) ${cleanName}` : cleanName;

const playerPosition = document.createElement("p");
playerPosition.innerText = `Position: ${i.position}`


playerCards.appendChild(card);
card.appendChild(playerName);
card.appendChild(playerPosition);
 }
}

})






