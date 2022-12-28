function clicou(){
    let menu = document.getElementById('menu');
    let list = document.getElementById('menu-list')
    if(menu.style.display == 'block'){

        menu.style.display = 'none'
    } else {
        menu.style.display = 'block';
        list.style.flexDirection = 'column'
        list.style.gap = '20px'
        list.style.alignItems = 'center'
    }
}