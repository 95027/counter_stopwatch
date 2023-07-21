//counter

const heading = document.querySelector("h1");
const minus = document.querySelector(".minus");
const reset = document.querySelector(".reset");
const plus = document.querySelector(".plus");

let initialCount = 0;


minus.addEventListener("click", ()=>{
  if(initialCount > 0){
    initialCount-- ;
    heading.innerHTML = "count " + initialCount;
  }
})

plus.addEventListener("click", ()=>{
  initialCount++;
  heading.innerHTML = "count " + initialCount;
})

reset.addEventListener("click", ()=>{
  initialCount = 0;
  heading.innerHTML = "count " + initialCount;
})



//stop watch

const title = document.querySelector(".title");
const start = document.querySelector(".start");
const resetsw = document.querySelector(".reset-sw");
const stop = document.querySelector(".stop");


let sw =0;
var stopwatch= null;

function started(){
  sw++;
  title.innerHTML = "stopwatch " + sw;
} 



start.addEventListener("click", ()=>{
  started(); 
});

function started(){
  stopwatch =
  setInterval(()=>{
    sw++;
    title.innerHTML = "stopwatch " + sw;
  },1000);
}

stop.addEventListener("click", ()=>{
  clearInterval(stopwatch); 
});

resetsw.addEventListener("click", ()=>{
  clearInterval(stopwatch);
  stopwatch = null ;
  sw = 0;
  title.innerHTML = "stopwatch " + sw;
})

// to do list

const search = document.querySelector(".search");
const submit = document.querySelector(".submit");
const lists = document.querySelector(".lists");

submit.addEventListener("click", (e)=>{
  let list = search.value;
  if(!list){
    alert("not empty")
  }
  else {

    let liEl = document.createElement("li");
    let butoonEl = document.createElement("button");

    liEl.innerHTML = list;

    butoonEl.innerHTML = "delete";

    liEl.appendChild(butoonEl);

    lists.appendChild(liEl);

    search.value = "";

    butoonEl.addEventListener("click", ()=>{
      liEl.remove();
    })

    liEl.addEventListener("click", ()=>{
        liEl.classList.toggle("strike");
    })
  }
})

