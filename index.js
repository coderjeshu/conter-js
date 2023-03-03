const counter = document.getElementById('count')
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const reload = document.getElementById('reload')

let count = 0

///to increase
increase.addEventListener('click',()=>{
    count++
    counter.innerHTML = count
})

///to decrease
decrease.addEventListener('click',()=>{
    count--
    counter.innerHTML = count
})
//to reload
reload.addEventListener('click',()=>{
    count = 0
    counter.innerHTML = count
})