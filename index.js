// question 1:
function add(num1){
    return function(num2){
        return num1+num2
    }
}

let addBoth = add(20)
console.log(addBoth(10))


// question 2:
const arr = [1, 2, 4, 5];
function searchArray(arr, value) {
    if (arr.length === 0) { 
      return false;
    }
    if (arr[0] === value) {
      return true;
    }
    return searchArray(arr.slice(1), value); 
  }
  console.log(searchArray(arr,4))

// question 3:
function addParagraph(text) {
    const para = document.createElement('p')
    para.innerText=text
    document.body.appendChild(para)
}
addParagraph('paragraph using javaScript')

// question 4:
function addListItem(text) {
    const listItem = document.createElement('li');
    listItem.innerText = text;
    const list = document.querySelector('ul');
    list.appendChild(listItem); 
}

// question 5:
const element = document.querySelector('h1');
function changeColor(element,color) {
return element.style.backgroundColor= color
}
changeColor(element,'green')


// question 6:
function saveToLocalStorage(key,value){
    localStorage.setItem(key,value)
};
saveToLocalStorage('name','shahzain')

// question 7:
function getLocalStorage(key){
   let storeObj = localStorage.getItem(key)
   return JSON.parse(JSON.stringify(storeObj));
}
let key=getLocalStorage('name')
console.log(key);


// question 8:
let obj = {
    name:'shahzain',
    education:'inter',
    job:'none'
}
Object.keys(obj).forEach((key)=>{
    localStorage.setItem(key,JSON.stringify(obj[key]))
});
let newObj = {}
Object.keys(localStorage).forEach((key)=>{
    newObj[key]=JSON.parse(localStorage.getItem(key));
})
console.log(newObj)
