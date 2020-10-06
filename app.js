window.onload =() =>{


const burger = document.querySelector('.burger-menu');
const navBar = document.querySelector('.nav-bar');
const lock = document.querySelector('body');

const navList = document.querySelector('.nav-list');

burger.addEventListener('click', function(){
  burger.classList.toggle('active');
  
const navbarH = navBar.getBoundingClientRect().height;
const navListH = navList.getBoundingClientRect().height;
  if(navbarH === 0){
     navBar.style.height = `${navListH}px`;
  }
  else{
    navBar.style.height = 0;
  }
  
})

navBar.addEventListener('click', function(e){

 
  navBar.classList.remove('active');
  burger.classList.remove('active');
  lock.classList.remove('lock');
})


window.addEventListener('scroll',function(e){
  const header = document.getElementById('header');
  const headerH = header.getBoundingClientRect().height;
  const position = window.pageYOffset;
 
 
  if(position >= headerH / 2){
    header.classList.add('fixed');
   
  } else{
      header.classList.remove('fixed');

  }

  });

let links = document.querySelectorAll('.nav-list li a');
navList.addEventListener('click',function(e){
  let target = e.target;
  if(target.tagName === 'A'){
    links.forEach(lnk=>{
         lnk.classList.remove('active-lnk');
  })
    target.classList.add('active-lnk')
  }
})


   /*

  window.addEventListener('scroll', event => {
  let links = document.querySelectorAll('.nav-list li a');
  let windowOffsetY = window.scrollY;

  links.forEach(link => {
     const refValue = link.getAttribute("href").slice(1);
     const block = document.getElementById(refValue);

     if(!block){
      return;
     }

   
    if (
      block.offsetTop <= windowOffsetY &&
      block.offsetTop + block.getBoundingClientRect().height - 10 > windowOffsetY
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
    
    
  });
});

*/

}