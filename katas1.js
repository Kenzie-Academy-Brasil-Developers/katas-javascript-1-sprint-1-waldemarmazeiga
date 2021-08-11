function oneThroughTwenty() {
    
let resultado = []

for(i = 1; i <= 20; i++){
  resultado.push(i)
}

    return resultado

}

console.log(oneThroughTwenty())

//call function oneThroughTwenty


function evensToTwenty() {

    let resultado = []

    for(i = 1; i <= 20; i++){
      if(i % 2 === 0)
      resultado.push(i)
    }

 return resultado

}

console.log(evensToTwenty())

//call function evensToTwenty

function oddsToTwenty() {
    
let resultado = []

for(i = 1; i <= 20; i++){
  if(i % 2 !== 0)
  resultado.push(i)
}

return resultado   

}

console.log(oddsToTwenty())

//call function oddsToTwenty

function multiplesOfFive() {
    
  let resultado = []
  for(i = 1; i <= 100; i++){
    if(i % 5 === 0)
    resultado.push(i)
    
  }

  return resultado

}

console.log(multiplesOfFive())

//call function multiplesOfFive

function squareNumbers() {
    
 let resultado = []
  for(i = 1; i <= 10; i++){

  
    resultado.push(i * i)
  }
  return resultado
}
  
    


console.log(squareNumbers())

//call function squareNumbers

function countingBackwards() {
    
  let resultado = []

  for(i = 20; i >= 1; i--){
    resultado.push(i)
  }
  
      return resultado
  
}

console.log(countingBackwards())

//call function countingBackwards

function evenNumbersBackwards() {

  let resultado = []

  for(i = 20; i >= 1; i--){
  if (i % 2 === 0)
  resultado.push(i)
}

return resultado

}

console.log(evenNumbersBackwards())

//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
  let resultado = []

  for(i = 20; i >= 1; i--){
  if (i % 2 !== 0)
  resultado.push(i)
}

return resultado

}

console.log(oddNumbersBackwards())


//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
  let resultado = []

  for(i = 100; i >= 1; i--){
    if(i % 5 === 0)
    resultado.push(i)
    
  }

  return resultado

}

console.log(multiplesOfFiveBackwards())

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {

    let resultado = []
     for(i = 10; i >= 1; i--){
   
     
       resultado.push(i * i)

     }

     return resultado
   }
   
   console.log(squareNumbersBackwards())