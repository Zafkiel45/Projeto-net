const icon_cloud = document.querySelector('#nuvem')
const list_cloud = document.querySelector('#cloud_storage_list')
const side = document.querySelector('#side');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const content = document.querySelector('#principal');
const hidden = document.querySelectorAll('.hidden-about');
const button = document.querySelectorAll('.button-click')

button[0].addEventListener('click', function(){
    if(hidden[0].style.display == 'none') {
        hidden[0].style.display = 'block'
    } else {
        hidden[0].style.display = 'none'
    }
})

button[1].addEventListener('click', function(){
    if(hidden[1].style.display == 'none') {
        hidden[1].style.display = 'block'
    } else {
        hidden[1].style.display = 'none'
    }
})

button[2].addEventListener('click', function(){
    if(hidden[2].style.display == 'none') {
        hidden[2].style.display = 'block'
    } else {
        hidden[2].style.display = 'none'
    }
})

button[3].addEventListener('click', function(){
    if(hidden[3].style.display == 'none') {
        hidden[3].style.display = 'block'
    } else {
        hidden[3].style.display = 'none'
    }
})

button[4].addEventListener('click', function(){
    if(hidden[4].style.display == 'none') {
        hidden[4].style.display = 'block'
    } else {
        hidden[4].style.display = 'none'
    }
})


next.addEventListener('click', function(){
    side.style.left = '0%'
    side.style.animationName = 'visible'
    content.style.filter = 'blur(2px)'
})

prev.addEventListener('click', function(){
    side.style.left = '-100%'
    side.style.animationName = 'hidden'
    content.style.filter = ''
})

content.addEventListener('click', function(){
    side.style.left = '-100%'
    side.style.animationName = 'hidden'
    content.style.filter = ''
})

icon_cloud.addEventListener('mouseenter', function(){
    list_cloud.style.display = 'flex'
})

list_cloud.addEventListener('mouseover', function(){
    list_cloud.style.display = 'flex'
})

list_cloud.addEventListener('mouseout', function(){
    list_cloud.style.display = 'none'
})
