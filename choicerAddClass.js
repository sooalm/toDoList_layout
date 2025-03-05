// let this_choicer;
export function choicerAddClass(id) { 

    let choicer = document.getElementById(id);

    let this_choicer = choicer;

    if(choicer){
    let lastChild=null; 
    choicer.addEventListener('click', (event) => {
    const child = event.target.closest('.svgPic'); 
    if (!child) return;
   
    if(lastChild) lastChild.classList.remove('svgPic--hover');
    child.classList.toggle('svgPic--hover');
    lastChild=child;
    })
    }

    return this_choicer;
}
// export {this_choicer};