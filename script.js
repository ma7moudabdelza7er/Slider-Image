let next = document.getElementById("next");
let prev = document.getElementById("prev");
let img = document.getElementById("img");
let n=0;
next.addEventListener("click",function(){
    if(n !== 5){
        n++;
    }
    console.log(n)
    img.src = `img/${n}.jpg`
})
prev.addEventListener("click",function(){
    if(n !== 0){
        n--;
    }
        img.src = `img/${n}.jpg`
})