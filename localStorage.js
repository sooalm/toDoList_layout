
  export function safe() { 

            const main = document.getElementById('main2');
            localStorage.setItem('savedMain',  main.innerHTML);
            console.log("saved")
            };
   export function revive (){
            const savedMainString = localStorage.getItem('savedMain');
                if (savedMainString) {
                  const container = document.createElement("div");
                  container.innerHTML = savedMainString;
                  container.id="main2";
                  container.classList.add("main__div__task");

                  // let main2 = document.getElementById('main2');
                  // if(main2) main2.remove(); 
                  // const main = document.getElementById('main');
                  // main.appendChild(container);

                 document.getElementById('main2').replaceWith(container); //innerHTML = savedMainString;
                  console.log("did it")
        
                }}
    