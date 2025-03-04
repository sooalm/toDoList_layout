export function sortTags() { 
const check = document.getElementById("check");
if(check){
check.addEventListener('click',function(){

if(check.checked){ 
const elements = document.querySelectorAll('.task');
const sortedElements = Array.from(elements).sort(( a, b) => {
  const textA = a.querySelector(".task__category").textContent.trim().toLowerCase();
  const textB = b.querySelector(".task__category").textContent.trim().toLowerCase();
  return textA.localeCompare(textB); 
});
const parent = elements[0].parentNode;
sortedElements.forEach( (element, i)=> {
        parent.appendChild(element);
    });
}
})
}
}