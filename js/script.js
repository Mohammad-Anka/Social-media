//SDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messageNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector(".customize-theme")
const fontSizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root')
const colorPalette = document.querySelectorAll('.choose-color span')
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


//remove active class for all menu items
const changeActiveItem = ()=> {
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener("click", ()=>{
        changeActiveItem();
        item.classList.add("active");
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = "none";
        }else{
            document.querySelector('.notification-popup').style.display = "block";
            document.querySelector('#notifications .notification-count').style.display = "none";
        }
    })
})

// ===================== Messages =====================

// search chat
const searchMessage = ( )=>{
    const value = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        // console.log(chat);
        let name = chat.querySelectorAll('h5')[0].innerHTML.toLowerCase();
        console.log(name);
        if(name.indexOf(value) != -1){
            chat.style.display = "flex";
        }else{
            chat.style.display = "none";
        }
    })
}
messageSearch.addEventListener('keyup',searchMessage)


// hightlight message card when messages menu item is clicked
messageNotification.addEventListener('click' , () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notification-count').style.display = "none";
    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    },2000)
})

// ===================== THEME CUSTOMIZATION =====================

// === THEME/DISPLAY CUSTOMIZATION

// open Modal
const openThemeModal = () =>{
    themeModal.style.display = "grid";
}

// Close Modal
const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener("click",closeThemeModal)
theme.addEventListener('click' , openThemeModal)

// ===================== FONT =====================

//remove active class from spans or font size selector
const removeSizeSelector = () =>{
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click' , ()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active");
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left' , '5.4rem');
            root.style.setProperty('--sticky-top-right' , '5.4rem');
    
        }else if (size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left' , '5.4rem');
            root.style.setProperty('--sticky-top-right' , '-7rem');
    
        }else if (size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left' , '-2rem');
            root.style.setProperty('--sticky-top-right' , '-17rem');
    
        }else if (size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left' , '-5rem');
            root.style.setProperty('--sticky-top-right' , '-25rem');
            
        }else if (size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left' , '-10rem');
            root.style.setProperty('--sticky-top-right' , '-33rem');
    
        }
           //change font size of root elemnt
            document.querySelector('html').style.fontSize = fontSize;
    })    
});

//remove active class from colors
const changeActiveColorClass = () =>{
    colorPalette.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}
// ===================== CHANGE PRMARY COLOR  =====================
colorPalette.forEach(color =>{
    color.addEventListener('click',()=>{
        let primaryHue ;
        //remove active class from colors
        changeActiveColorClass(); 
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 212;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue' ,primaryHue)
    })
})

//theme Background value 
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change Background color 
const changeBG = () =>{
    root.style.setProperty('--light-color-lightness' , lightColorLightness);
    root.style.setProperty('--dark-color-lightness' , darkColorLightness);
    root.style.setProperty('--white-color-lightness' , whiteColorLightness);

}
Bg1.addEventListener('click' , ()=>{
    //add active class
    Bg1.classList.add('active');
    //remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    // remove customized changes from local storage
    window.location.reload();
})

Bg2.addEventListener('click' , ()=>{
    darkColorLightness = "95%";
    whiteColorLightness= "19%";
    lightColorLightness = "15%";

    //add active class
    Bg2.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click' , ()=>{
    darkColorLightness = "95%";
    whiteColorLightness= "10%";
    lightColorLightness = "0%";

    //add active class
    Bg3.classList.add('active');
    //remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})