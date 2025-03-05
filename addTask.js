import { choicer } from './choicerSvg.js';
export function addTask() { 
   
    choicer("choicer");

    const addTask = document.getElementById("addTask");
    if(addTask){
        addTask.addEventListener('click', (event) => {
            let nameTask = document.getElementById("nameTask");
            let valueTask = nameTask.value;
            if(!valueTask) {
                alert("Task must be named");
                return;
            }

            let nameTag = document.getElementById("nameTag");
            let valueTag;
            if(!nameTag.value)valueTag="task";
             else
            valueTag = nameTag.value;

            const main = document.getElementById("main");

            const newTask=document.createElement('div');
            newTask.classList.add('task');
            
            let svg = document.querySelector('.svgPic--hover');
            let svgName ="unknown";
            if(svg) svgName=svg.getAttribute('name');

            svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
            svg.classList.add("task__pic");
            let svg__use=document.createElementNS("http://www.w3.org/2000/svg","use");
            svg__use.setAttributeNS("http://www.w3.org/1999/xlink", 'href', "/assets/images/icons-sprites.svg#"+svgName);
            svg.appendChild(svg__use);
            newTask.appendChild(svg);

            const task__text = document.createElement('span');
            task__text.classList.add('task__text');
            task__text.textContent=valueTask;
            newTask.appendChild(task__text);

            const task__block=document.createElement('div');
            task__block.classList.add('task__block');
            const task__categoty = document.createElement('span');
            task__categoty.classList.add('task__category');
            task__categoty.textContent=valueTag;
            task__block.appendChild(task__categoty);
            const smallButton=document.createElement("button");
            smallButton.classList.add('smallButton');
            smallButton.textContent="edit";
            task__block.appendChild(smallButton);
            newTask.appendChild(task__block);

            main.appendChild(newTask);
        })
    }

}