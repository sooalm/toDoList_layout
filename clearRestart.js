export function clearRestart() { 
    const clear = document.getElementById("clear");
    if(clear){
        clear.addEventListener('click',function(){
            const elements = document.querySelectorAll('.task');
            if(elements){
            elements.forEach(element => {
                element.remove(); // Удалить каждый элемент
              });
            }
        })
    }

    const reload = document.getElementById("reload");
    if(reload){
        reload.addEventListener('click',function(){
            localStorage.clear();
            sessionStorage.clear();
            window.location.reload();
        })
    }
   
}