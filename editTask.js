import { choicerAddClass } from './choicerAddClass.js';
import { choicerPick } from './choicerPick.js';


export function editTask() { 
    const main__task = document.getElementById("main"); 
    if(main__task){
    main__task.addEventListener("dblclick", (event) => {
        const child = event.target.closest(".task");
        if (!child) return;
        child.classList.toggle("task--through");
    })
        // Панель на место task
        main__task.addEventListener('click',(event)=>{
            const isButton = event.target.closest(".smallButton");
            if (!isButton) return;
            const currentTask = event.target.closest(".task");
            if (!currentTask) return;

            const panel_icons = document.createElement("div");

            const newPanel = document.createElement('div');
            newPanel.className = 'main__creationPanel ';

            const inputTask = document.createElement("input");
            inputTask.className="input input__taskDescription input--editElements";
            inputTask.id="editTask";
            inputTask.type = "text";
            inputTask.value = currentTask.querySelector(".task__text").textContent;
            inputTask.autocomplete="off";
            newPanel.appendChild(inputTask);

            const inputTag = document.createElement("input");
            inputTag.className="input input__tags input--editElements";
            inputTag.id="editTag";
            inputTag.type = "text";
            inputTag.value = currentTask.querySelector(".task__category").textContent;
            inputTag.autocomplete="off";
            newPanel.appendChild(inputTag);

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("deleteButton","main__creationPanel__smallButton","input--editElements");

            const svgTrashcan = document.createElementNS("http://www.w3.org/2000/svg","svg");
            svgTrashcan.classList.add("deleteButton__pic"); 
            const myuse=document.createElementNS("http://www.w3.org/2000/svg","use");
            myuse.setAttributeNS("http://www.w3.org/1999/xlink", 'href', "/assets/images/icons-sprites.svg#trashcan");
            svgTrashcan.appendChild(myuse);
            deleteButton.appendChild(svgTrashcan);
            
            newPanel.appendChild(deleteButton);

            const updateButton = document.createElement("button");
            updateButton.classList.add("smallButton","main__creationPanel__smallButton","input--editElements");
            updateButton.textContent="update";
            newPanel.appendChild(updateButton);
         
            panel_icons.appendChild(newPanel);
            panel_icons.className="input__panel_icons";

            const choicer__block = document.createElement('div');
            choicer__block.id = 'choicerSvg';
            choicer__block.className = 'svgChoicer';

            const icons = [
              'meds', 'shield', 'sword', 'bowl',
              'horseKnight', 'boots', 'pizza', 'book'
            ];

            icons.forEach(iconName => {
              const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              svg.setAttribute('name', iconName);
              svg.classList.add('svgPic');
            
              const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
              use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `/assets/images/icons-sprites.svg#${iconName}`);
            
              svg.appendChild(use);
              choicer__block.appendChild(svg);
            });

            panel_icons.append(choicer__block);
            currentTask.replaceWith(panel_icons);

            let this_choicer = choicerAddClass(choicer__block.id);
            

            deleteButton.addEventListener('click',(event)=>{
                currentTask.remove();
                panel_icons.remove();
            })

            updateButton.addEventListener('click',(event)=>{
                currentTask.querySelector(".task__category").textContent = inputTag.value;
                currentTask.querySelector(".task__text").textContent = inputTask.value;

               let svg=  choicerPick(this_choicer);
                currentTask.querySelector(".task__pic").replaceWith(svg);
                
                panel_icons.replaceWith(currentTask);
            })
        })
}
}