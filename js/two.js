const data = ["HTML"]; 
 
const list = document.querySelector(".list"); 
const input = document.querySelector("input"); 
const btn = document.querySelector(".btn"); 
const form = document.querySelector(".form"); 
 
 
data.forEach(element => { 
    list.insertAdjacentHTML('beforeend', `<li>${element}</li>`); 
}); 
 
input.addEventListener('change', (e) => { 
    
    addElement(e.target.value); 
    updateList(); 
}); 
 
 
btn.addEventListener("click", (e) => { 
    addElement(input.value); 
    updateList(); 
}); 
 
 
form.addEventListener("submit", (e) => { 
    e.preventDefault();  
    addElement(input.value); 
    updateList(); 
}); 
 
function addElement(value) { 
    if (value.trim() !== "") { 
        data.push(value.trim());  
        input.value = "";  
    } 
} 
 
function updateList() { 
    
    list.innerHTML = ""; 
     
    data.forEach(element => { 
        list.insertAdjacentHTML('beforeend', `<li>${element}</li>`); 
    }); 
}