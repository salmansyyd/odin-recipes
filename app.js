function darkMode(){
    let mode = document.getElementById('mode')
    let modeSwitch = document.getElementById('modeSwitch')

    mode.addEventListener('click', () => {
        modeSwitch.classList.toggle('root')
    })
}

darkMode()



function darkModeRecipes(){
    let page = document.getElementById('page')
    let buttonSwitch = document.getElementById('modeSwitch')

    buttonSwitch.addEventListener('click', () => {
        page.classList.toggle('dark')
    })
}
