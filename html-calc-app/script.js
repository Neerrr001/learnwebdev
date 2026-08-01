const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = calculator.querySelector(".calculator__display")

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
      }else{
        display.textContent = displayedNum + keyContent;
      }
    }

    if(action === 'decimal'){
      display.textContent = displayedNum+'.';
    }
    if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide'
    ){
      key.classList.add('is-depressed')

      //add a custom attribute
      calculator.dataset.previousKeyType = 'operator'
      calculator.dataset.firstValue = displayedNum
      calculator.dataset.operator = action ; 
    }
    
    //remove .is-depressed class from all keys
    Array.from(key.parentNode.children).forEach(
      k => k.classList.remove('is-depressed')
    )

    //when user hits = btn
    if(action === 'calculate'){
      const secondValue = displayedNum 
      const operator = calculator.dataset.operator
      const firstValue = calculator.dataset.firstValue

      display.textContent = calculate(firstValue, operator, secondValue);
    }

    c


  }
});
