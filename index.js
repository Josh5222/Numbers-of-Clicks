let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let idkEL = document.getElementById("idk")

let count = 0

console.log(saveEl)

function increment(){
    count = count + 1
    countEl.textContent = count
    idk();
}

function save(){
    let countStr = count + '-'
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
}

function reset(){
    countEl.textContent = 0
    count = 0
    saveEl.textContent = null
    idkEL.textContent = ''

}
function idk(){
    if (count >= 20){
        idkEL.textContent = 'HELLO WORLD'
    }
    if(count >= 50){
        idkEL.textContent = 'ight bro, stop clicking weirdo'
    }

}
