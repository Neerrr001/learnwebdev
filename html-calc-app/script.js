const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = calculator.querySelector(".calculator__display")

const calculate = (n1, operator, n2) => {
      let res = ''
      let newn1 = parseFloat(n1)
      let newn2 = parseFloat(n2)
      if(operator === 'add'){
        res = newn1 + newn2; 

      }else if(operator === 'subtract'){
        res = newn1 - newn2; 

      }else if(operator === 'multiply'){
        res = newn1 * newn2; 

      }else{ //divide
        res = newn1 / newn2;
      }
      console.log(res)
      return res; 
    }

keys.addEventListener("click", (e) => {
  if(e.target.matches('button')){
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType
    console.log(e,key, action, keyContent, displayedNum)

    if(!action){
      if(displayedNum === '0'){
        display.textContent = keyContent;
      }else if( previousKeyType === 'operator'){
        display.textContent = keyContent;
      }
      else{
        display.textContent = displayedNum + keyContent;
      }
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

      if(firstValue && operator && previousKeyType!=='operator'){
        display.textContent = calculate(firstValue, operator, secondValue)
      }
      key.classList.add('is-depressed')

      //add a custom attribute
      calculator.dataset.previousKeyType = 'operator'
      calculator.dataset.firstValue = displayedNum
      calculator.dataset.operator = action ; 
    }
    
    
    //when user hits = btn
    if(action === 'calculate'){
      const secondValue = displayedNum 
      const operator = calculator.dataset.operator
      const firstValue = calculator.dataset.firstValue
      calculator.dataset.previousKeyType = 'calculate'


      display.textContent = calculate(firstValue, operator, secondValue)
    } 

    if(action === 'clear'){
      display.textContent = '0'; 
      calculator.dataset.previousKeyType = 'clear'

    }



  }

  
});
