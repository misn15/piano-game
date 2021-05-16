let keyPressed = [];
let level = 1;
let keys = [];

// page elements
const levelElement = document.getElementById('level');
const startElement = document.getElementById("start");
const pianoKeys = document.querySelectorAll('.key');
let currentKey = '';
let gameOver = false;
let index = 0;


document.getElementById('start').addEventListener('click', () => {   
    if (startElement.style.display === "none") {
      startElement.style.display = "block";     
    } else {
      startElement.style.display = "none";
    }
    levelElement.innerHTML="<p> Level " + level + "</p>";
    levelElement.style.display = "block";
    const key = Math.floor(Math.random() * 12);
    currentKey = pianoKeys[key].dataset.note;
    keys.push(currentKey);
    pianoKeys[key].classList.add('active');
    setTimeout(function(){
        pianoKeys[key].classList.remove('active');
    }, 700);
    //const spanWords = words.map(function(word) {return `<span>${key} </span>`});
});

  document.addEventListener('keydown', (e) => {
    keyPressed.push(e.code);
    console.log('keyPressed: '+keyPressed);
    // for (let i=0; i < keyPressed.length; i++){
    //     if (keyPressed[i][3] !== keys[i]){
    //         gameOver = true;
    //         endGame();  
    //     }
    // }
    console.log(index);
    if (keyPressed[index][3]!== keys[index]){
        gameOver = true;
        endGame();
    }
    else if (index === keys.length-1 && gameOver===false){
        levels();
    } else {
        index++;
    }
    
 });

//  function moveToNextLevel() {
//      for (let i=0; i < level; i++){
//          if (keyPressed[i][3] !== keys[i]){
//              console.log('You fail');
//              gameOver = true;
//              endGame();      
//          }
//     } if (gameOver === false) {
//         levels() 
//     }
//  }

  function levels() {
      level++;
      keyPressed = [];
      index = 0;
      levelElement.innerHTML="<p> Level " + level + "</p>";
      const key = Math.floor(Math.random() * 12);
      currentKey = pianoKeys[key].dataset.note;
      keys.push(currentKey);
      pianoKeys[key].classList.add('active');
      setTimeout(function(){
          pianoKeys[key].classList.remove('active');
      }, 700);
  }

  function endGame() {
    document.getElementById('screen').style.backgroundColor = 'red';
  }

