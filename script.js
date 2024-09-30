function checkCode() {
    const correctCode = `function bubbleSort(arr) {
            for (let i = 0; i < arr.length; i++) {
              for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                  [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
              }
            }
            return arr;
          }
          
          const numbers = [34, 7, 23, 32];
          const sortedNumbers = bubbleSort(numbers);
          console.log(sortedNumbers);`;
    
    const userCode = document.getElementById("codeInput").value;
    
    const result = document.getElementById("result");
  
    if (userCode.trim() === correctCode.trim()) {
      result.innerHTML = "<p style='color: green;'>[7, 23, 32, 34]</p>";
    } else {
      result.innerHTML = "<p style='color: red;'>Incorrect. Try again!</p>";
    }
  }
  