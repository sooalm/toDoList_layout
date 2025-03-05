
export function choicerAddClass(id) { 
    
    const choicer = document.getElementById(id);
    if(choicer){
    let lastChild=null;
    choicer.addEventListener('click', (event) => {
    const child = event.target.closest('.svgPic'); 
    console.log("child = "+child);
    if (!child) return;
   
    if(lastChild) lastChild.classList.remove('svgPic--hover');
    child.classList.toggle('svgPic--hover');
    lastChild=child;
    })
    }

   

}
