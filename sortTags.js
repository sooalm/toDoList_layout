export function sortTags() { 
const check = document.getElementById("check");
if(check){
check.addEventListener('click',function(){

if(check.checked){ 
// console.log("работает")
const elements = document.querySelectorAll('.task');
const sortedElements = Array.from(elements).sort(( a, b) => {
  const textA = a.childNodes[5].childNodes[1].textContent.trim().toLowerCase();
  const textB = b.childNodes[5].childNodes[1].textContent.trim().toLowerCase();
  return textA.localeCompare(textB); 
});
const parent = elements[0].parentNode;
// console.log(parent);
sortedElements.forEach( (element, i)=> {
        // console.log("процесс идет -->" +  element );
        parent.appendChild(element);
    });
}
})
}
}