const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSelections = document.querySelectorAll('.main-content');

pageTransitions= () =>{
    //boton para activar clases activas
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', (e)=>{
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            e.target.classList += ' active-btn'
        })
    }
}

pageTransitions()