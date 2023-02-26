const icon_cloud = document.querySelector('#nuvem')
const list_cloud = document.querySelector('#cloud_storage_list')
const side = document.querySelector('#side');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const content = document.querySelector('#principal');



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
