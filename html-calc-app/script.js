const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = calculator.querySelector(".calculator__display")

keys.addEventListener("click", (e) => {
  if(e.target.matches('button')){
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    console.log(key, action, keyContent, displayedNum)

    if(!action){
      if(displayedNum === '0'){
        display.textContent = keyContent;
      }else{
        display.textContent = displayedNum + keyContent;
      }
    }

  }
});
