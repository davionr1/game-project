function instructions(){
    let open = document.querySelector('button');
    open.addEventListener('click',()=>{
        let change = document.querySelector('.popup')
        change.style.display = 'flex';
    })

}
function exit(){
    let close = document.querySelector('.close');
    close.addEventListener('click',()=>{
    let change = document.querySelector('.popup')
    change.style.display = 'none';
    })
}

