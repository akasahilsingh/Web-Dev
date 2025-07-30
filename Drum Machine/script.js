const drumPad = document.querySelectorAll(".drum-pad");

const drumPadArray = Array.from(drumPad);

const display = document.getElementById("display");

const powerBtn = document.getElementById("powerbtn");

const powerMsg = document.getElementById("power");

const volumeSlider = document.getElementById("volume");

const drumMachine = document.getElementById("drum-machine");
const drumPadSound = [
    {
   Key: "Q",
   drumName: "Heater 1",
   src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3"

  },
    {
      Key: "W",
   drumName: "Heater 2",
   src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3"

  },
    {
      Key: "E",
   drumName: "Heater 3",
   src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3"

  },
    {
      Key: "A",
   drumName: "Heater 4",
   src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3"

  },
    {
      Key: "S",
   drumName: "Clap",
   src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3"

  },
    {
      Key: "D",
   drumName: "Open-HH",
   src: "https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3"

  },
    {
      Key: "Z",
   drumName: "Kick-n'-Hat",
   src: "https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3"

  },
    {
      Key: "X",
   drumName: "Kick",
   src: "https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3"

  },
    {
      Key: "C",
   drumName: "Closed-HH",
   src: "https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3"

  }
];

let powerOn = true;

drumPadArray.forEach(pad => {
  const key = pad.textContent.trim();
  const soundObj = drumPadSound.find(pad => pad.Key === key);
  if(soundObj) {
    const audioElement = document.createElement("audio");
    audioElement.classList.add("clip");
    audioElement.src = soundObj.src;
    audioElement.id = soundObj.Key;
    pad.appendChild(audioElement);
  }
});

function playSound(key) {

  if(!powerOn) return;
  const audio = document.getElementById(key)
  const soundObj = drumPadSound.find(pad => pad.Key === key)
  
  


  if(soundObj && audio) {
    audio.currentTime = 0;
     audio.play();
    display.textContent = soundObj.drumName;
    
  }
}


drumPadArray.forEach(pad => {
pad.addEventListener("click", ()=> {
  if(!powerOn) return;
  const key = pad.textContent.trim();
playSound(key);

pad.style.backgroundColor = "#ffea00";
pad.style.color = "#000";

setTimeout(()=>{
  pad.style.backgroundColor = "";
pad.style.color = ""
}, 100);
  // console.log(`you clicked ${pad.textContent}`)
})

 
 
});

document.addEventListener("keydown", (event)=> {
  if(!powerOn) return;
  const key = event.key.toUpperCase();
  
 const keyPressed = drumPadArray.find(keyUsed => keyUsed.textContent.trim() === key);
  if(keyPressed){
  playSound(key);
  keyPressed.style.backgroundColor = "#ffea00";
  keyPressed.style.color = "#000";
  setTimeout(()=>{
  keyPressed.style.backgroundColor = "";
keyPressed.style.color = ""
}, 100);
  // console.log(`you clicked ${keyPressed.textContent}`)
}
})


powerBtn.addEventListener("click",()=> {
  powerOn = !powerOn;
  if(powerMsg.textContent=== "Power: On"){
  powerMsg.textContent = "Power: Off"
  } else { powerMsg.textContent = "Power: On"
  }

  if(!powerOn) {
    // const pad = drumPadArray.forEach(pad=> pad.style.backgroundColor = "rgba(0,0,0,0.8)")
    drumMachine.style.backgroundColor = "rgba(0,0,0,0.5)"
    display.textContent ="";
   
  } else {
    drumMachine.style.backgroundColor = "";

  }
  
});

function setVolume(volume) {
  const audioElement = document.querySelectorAll(".clip");

  audioElement.forEach(audio => {
    audio.volume = volume;
  } );
}


volumeSlider.addEventListener("input", (event) => {
  const newVolume = parseFloat(event.target.value);
  setVolume(newVolume);
})
