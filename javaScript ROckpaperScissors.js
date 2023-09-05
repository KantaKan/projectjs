
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){return userInput;
    }else{
    console.log("put rock paper scissros");
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
    case 0:
    return 'rock'
    case 1:
    return 'paper'
    case 2:
    return 'scissors'
    }
  }
  const deterWinner = (userChoice,computerChoice) =>{
    if (userChoice === computerChoice)
    return 'tie';
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return ' you lose';
      }else{
        return 'you won!';
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'you lose';
      }else{
        return 'you won';
      }
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'you lose'
      }else{
        return 'you won';
      }
    }
  }
  
  const playgame = () =>{
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('you threw' + userChoice);
    console.log('computer threw' + computerChoice);
    console.log(deterWinner(userChoice,computerChoice));
  };
  
  playgame();