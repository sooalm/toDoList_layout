export function editTask() { 
    const main__task = document.getElementById("main"); 
    if(main__task){
    main__task.addEventListener("dblclick", (event) => {
        const child = event.target.closest(".task");
        if (!child) return;
        child.classList.toggle("task--through");
    })
    }
}