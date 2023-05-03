const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSelections = document.querySelector('.main-content');

pageTransitions= () =>{
    //boton para activar clases activas
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', (e)=>{
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            e.target.classList += ' active-btn'
        })
    }

    //section active class
    allSelections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;
        if (id){
            //remueve el seleccionado de btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //esconde secciones no activas
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
 //activar tema oscuro
 const themeBtn = document.querySelector('.theme-btn');
 themeBtn.addEventListener('click',()=>{
    let element = document.body;
    element.classList.toggle('light-mode')
 })
}

pageTransitions();