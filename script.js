const startBtn= document.getElementById('start');
const SearchElement= document.getElementById('randint');
const score= document.getElementById('score');
const timeFix=document.getElementById('time');
const set=document.getElementById('set');




//Math.random() always give number between 0 to 1
const divClick=(e)=>{
    const clickedNumber = parseInt(e.target.innerText); 
    const searchele= parseInt(SearchElement.innerText)
    console.log(searchele, clickedNumber);

    if(searchele == clickedNumber){
        const scoreNumber=  parseInt(score.innerText); 
        score.innerText=scoreNumber+1;
        SearchElement.innerText=  Math.floor(Math.random()*10);
        setBoard();
        set.innerText=15;
        setTimer();
    }else{
        const gameBox= document.getElementById('gameBox');
    gameBox.innerHTML=`
       <div id=message1>
        <h2>  !!!  You Press the Wrong Number</h2>
        <h2>Game Over!!! </h2> 
        <h2>!!! Click Start Button to Restart the game</h2>
        </div>
    `;
    
    }
}  

    
/*
    function updateTimer() {
        const value =parseInt(set.innerText);
    
        if (value > 0) {
            value--; 
            set.innerText = value; 
        } else {
            clearInterval(timerInterval); 
            set.textContent = "Time's up!"; 
        }
    }

   */ 

// Function to set the timer
const setTimer = () => {
   // clearInterval(timerInterval);
    
    const updateTimer = () => {
        let value = parseInt(set.innerText);
        if (value > 0) {
            value--; 
            set.innerText = value; 
        } else {
            clearInterval(timerInterval);
            set.textContent = "Time's up!"; 
            const gameBox = document.getElementById('gameBox');
            gameBox.innerHTML = `
             <div id="message">
                <h2>!!!Time Up!!!</h2>
                <h2>Click Start Button to Restart the Game</h2>
                </div>
                 
            `;
            
        }
       
    };
    
    timerInterval = setInterval(updateTimer, 2500);
};



const setBoard= ()=>{

    const randomInterger= Math.floor(Math.random()*10)
    console.log(randomInterger);
    SearchElement.innerText=randomInterger;

    const gameBox= document.getElementById('gameBox');
    gameBox.innerText="";

    for(let i=0; i<49; i++){
        const newDiv= document.createElement('div');
        newDiv.className="innerDiv";
        newDiv.id=`div${1}`;
        newDiv.onclick=divClick;
        

        const randInt= Math.floor(Math.random()*10);

        newDiv.innerText=randInt;

        gameBox.appendChild(newDiv);
    }
}
startBtn.addEventListener('click',()=>{
    score.innerText=0;
    setBoard();
    setTimer();
    
});


const restartGame = () => {
    score.innerText = 0;
    setBoard();
    set.innerText = 15;
    setTimer();
}


startBtn.addEventListener('click', restartGame);