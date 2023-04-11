// QUESTION 1
function createAdder(numToAdd) {
    return function(num) {
      return num + numToAdd;
    };
  }
  
  // Example usage:
  const add5 = createAdder(5);
  console.log(add5(10)); // Output: 15
  console.log(add5(20)); // Output: 25
  console.log(add5(-5)); // Output: 0

//   QUESTION 2
function searchArray(arr, val) {
    if (arr.length === 0) { 
      return false;
    } else if (arr[0] === val) { 
      return true;
    } else { 
      return searchArray(arr.slice(1), val);
    }
  }
  
  // Example usage:
  const arr = [1, 2, 3, 4, 5];
  console.log(searchArray(arr, 3)); // Output: true
  console.log(searchArray(arr, 6)); // Output: false


//   QUESTION 3
function addParagraph(text) {
    const newPara = document.createElement("p"); 
    const textNode = document.createTextNode(text); 
    newPara.appendChild(textNode); 
    document.body.appendChild(newPara); 
  }
  
  // Example usage:
  addParagraph("This is a new paragraph.");

//   QUESTION 4

function addListItem(text) {
    const newLi = document.createElement("li"); 
    const textNode = document.createTextNode(text); 
    newLi.appendChild(textNode); 
    const ul = document.querySelector("ul"); 
    ul.appendChild(newLi); 
  }
  
  // Example usage:
  addListItem("This is a new list item.");
  

//   QUESTION 5
function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color; 
  }
  
  // Example usage:
  const myElement = document.getElementById("my-element");
    changeBackgroundColor(myElement, "red"); 
  

//   QUESTION 6
function saveToLocalStorage(key, obj) {
    const serializedObj = JSON.stringify(obj); 
    localStorage.setItem(key, serializedObj);
  
  // Example usage:
  const myObj = {name: "John", age: 30}; 
  saveToLocalStorage("my-object", myObj); 

//   QUESTION 7
function getFromLocalStorage(key) {
    const serializedObj = localStorage.getItem(key); 
      return null; 
    }
    const obj = JSON.parse(serializedObj); 
    return obj; 
  }
  
  // Example usage:
  const myObj = getFromLocalStorage("my-object"); 
  if (myObj === null) {
    console.log("Object not found in localStorage");
  } else {
    console.log(myObj); 
  }

//   QUESTION 8
function saveObjToLocalStorage(obj) {
    // Loop through each property of the object
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
       
        localStorage.setItem(key, obj[key]);
      }
    }
  
    const retrievedObj = {};
  
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      retrievedObj[key] = localStorage.getItem(key);
    }
    // Return the retrieved object
    return retrievedObj;
  }
  
  // Example usage:
  const myObj = {name: "John", age: 30}; 
  const retrievedObj = saveObjToLocalStorage(myObj); 
  console.log(retrievedObj); 
  
  