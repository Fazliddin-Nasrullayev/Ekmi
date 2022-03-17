alert('Assalomu aleykum Ustoz');
const elHamburgerBtn = document.querySelector(".hamburger__btn");
const elHeader = document.querySelector(".header");
const elModal_link = document.querySelector(".hero1__link");
const elModal_post = document.querySelector(".post");
const elModal_close = document.querySelector(".post__block");
const elLink = document.querySelectorAll(".hhh");

elHamburgerBtn.addEventListener('click', ()=> {
    elHeader.classList.toggle('header--open');
})

for(let item of elLink){
    item.addEventListener('click',()=>{
        elHeader.classList.toggle('header--open');
    })
}

elModal_link.addEventListener('click',()=>{
    elModal_post.classList.toggle('kkklll');
})
elModal_close.addEventListener('click',()=>{
    elModal_post.classList.toggle('kkklll');
})

alert('Assalomu aleykum Ustoz');
