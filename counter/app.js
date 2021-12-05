let count = 0
let counter_number = document.getElementById('value')
let button_d = document.getElementById('btn-d')
let button_r = document.getElementById('btn-r')
let button_i = document.getElementById('btn-i')

button_d.addEventListener('click',()=>{
    count--
    counter_number.innerText = count
})

button_r.addEventListener('click',()=>{
    count = 0
    counter_number.innerText = 0
})

button_i.addEventListener('click',()=>{
    count++
    counter_number.innerText = count
})