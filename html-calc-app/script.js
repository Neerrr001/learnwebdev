const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = calculator.querySelector(".calculator__display")

const calculate = (n1, operator, n2) => {
      let res = 0
      let newn1 = parseFloat(n1)
      let newn2 = parseFloat(n2)

      if(operator === 'add') res = newn1 + newn2; 
      if(operator === 'subtract') res = newn1 - newn2; 
      if(operator === 'multiply') res = newn1 * newn2; 
      if(operator === 'divide') res = newn1 / newn2;
      
      return Number(res.toFixed(8)); 
    }

keys.addEventListener("click", (e) => {
  if(e.target.matches('button')){
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType

    if(!action){
      if(displayedNum === '0'){
        display.textContent = keyContent;
      }else if( previousKeyType === 'operator'){
        display.textContent = keyContent;
      }
      else{
        display.textContent = displayedNum + keyContent;
      }
      calculator.dataset.previousKeyType = 'number'
    }

    if(action === 'decimal'){
      if(!display.textContent.includes('.')){
        display.textContent = displayedNum+'.';
      }else if(previousKeyType === 'operator'){
        display.textContent = '0.'
      }
      calculator.dataset.previousKeyType = 'decimal'
    }
    if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide'
    ){
      //remove .is-depressed class from all keys
      Array.from(key.parentNode.children).forEach(
        k => k.classList.remove('is-depressed')
      )

      const secondValue = displayedNum 
      const operator = calculator.dataset.operator
      const firstValue = calculator.dataset.firstValue

      if(firstValue && operator && previousKeyType ==='number'){
        const calcValue = calculate(firstValue, operator, secondValue)
        display.textContent = calcValue

        //update calcValue as firstVal
        calculator.dataset.firstValue = calcValue; 
      }
      else{
        //if there are no calc, then
        calculator.dataset.firstValue = displayedNum
      }
      key.classList.add('is-depressed')

      //add a custom attribute
      calculator.dataset.previousKeyType = 'operator'
      calculator.dataset.firstValue = display.textContent
      calculator.dataset.operator = action ; 
    }
    
    
    //when user hits = btn
    if(action === 'calculate'){

        const secondValue = displayedNum 
        const operator = calculator.dataset.operator
        const firstValue = calculator.dataset.firstValue
        calculator.dataset.previousKeyType = 'calculate'
        
        if(firstValue != "0" && firstValue != undefined){
          display.textContent = calculate(firstValue, operator, secondValue)
        }
        if(display.textContent != "NaN"){
          calculator.dataset.firstValue = display.textContent // cidomo
        }
     
    } 

    if(action === 'clear'){
      display.textContent = '0'; 

      delete calculator.dataset.firstValue 
      delete calculator.dataset.operator 
      calculator.dataset.previousKeyType = 'clear'

    }

    console.log({
      display: display.textContent, 
      firstValue: calculator.dataset.firstValue,
      operator:calculator.dataset.operator,
      previousKeyType: calculator.dataset.previousKeyType
    })

  }
  
});



//there is bug. when i press 1 + 2 = 3, then if i keep pressing = then it just keeps adding whatever is present on the display.textContent. Need to fix that as well. 