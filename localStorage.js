
  export function safe() { 

            const main = document.getElementById('main');
            localStorage.setItem('savedMain',  main.outerHTML);
            console.log("saved")
            };
   export function revive (){
            const savedMainString = localStorage.getItem('savedMain');
                if (savedMainString) {
                  const container = document.createElement("div");
                  container.innerHTML = savedMainString;
                  container.id="main2";
                  document.querySelector(".main__div__task").replaceWith(container); //innerHTML = savedMainString;
                  console.log("did it")
        
                }}
    