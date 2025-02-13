let string = " ";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    let inputChar = e.target.innerHTML;
    let operators = ['+', '-', '*', '/'];
    
    if (inputChar === '=') {
      try {
        string = eval(string);
        document.querySelector('input').value = string;
      } catch (error) {
        document.querySelector('input').value = "Error";
        string = " ";
      }
    } else if (inputChar === 'C') {
      string = " ";
      document.querySelector('input').value = string;
    } else {
      if (operators.includes(inputChar) && operators.includes(string.trim().slice(-1))) {
        // If the last character is an operator and the current character is also an operator
        alert("Two consecutive operators are not allowed");
      } else {
        string = string + inputChar;
        document.querySelector('input').value = string;
      }
    }
  });
});

