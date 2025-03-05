let svg;
export function choicerPick(){
svg= document.querySelector('.svgPic--hover');
let svgName ="unknown";
if(svg) svgName=svg.getAttribute('name');

svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
svg.classList.add("task__pic");
let svg__use=document.createElementNS("http://www.w3.org/2000/svg","use");
svg__use.setAttributeNS("http://www.w3.org/1999/xlink", 'href', "/assets/images/icons-sprites.svg#"+svgName);
svg.appendChild(svg__use);

return svg;
}
export { svg };