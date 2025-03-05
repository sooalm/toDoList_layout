
  export function safe() { 

            const main = document.getElementById('main');
            localStorage.setItem('savedMain',  main.outerHTML);
            console.log("saved")
            };
   export function revive (){
            const savedMainString = localStorage.getItem('savedMain');
                if (savedMainString) {
                  // 3. Создать контейнер
                  
                //   const elements = document.querySelectorAll('.task');
                //   if(elements){
                //   elements.forEach(element => {
                //   element.remove(); // Удалить каждый элемент
                //   });
                //   }

                  const container = document.createElement("div");
                //   container.classList.add("main__localstorage");
                  container.innerHTML = savedMainString;
                  container.id="main2";
                  // 4. Восстановить HTML
                  document.querySelector(".main__div__task").replaceWith(container); //innerHTML = savedMainString;
                //   document.querySelector(".main__task").replaceChildren(container);

                //   main.insertBefore(container, firstChild.nextElementSibling);
                  console.log("did it")
        
                }}
    