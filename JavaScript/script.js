const icon_cloud = document.querySelector('#nuvem')
const list_cloud = document.querySelector('#cloud_storage_list')
const side = document.querySelector('#side');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

next.addEventListener('click', function(){
    side.style.left = '0%'
})

prev.addEventListener('click', function(){
    side.style.left = '-100%'
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
