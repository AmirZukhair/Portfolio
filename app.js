window.onload =() =>{


const burger = document.querySelector('.burger-menu');
const navBar = document.querySelector('.nav-bar');


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
       burger.classList.remove('active');
         lnk.classList.remove('active-lnk');
          navBar.style.height = 0;
  })
    target.classList.add('active-lnk')
  }
})

const containerPrt = document.querySelector('.portfolio__inner');
const portfolio__btns = document.querySelector('.portfolio__btns');

const info = [
{src: 'img/portfolio_img6.jpg', type: 'Website'},

{src: 'img/portfolio_img4.jpg' , type: 'JavaScript'},

{src: 'img/portfolio_img2.jpg' , type: 'Website'},

{src: 'img/portfolio_img3.jpg' , type: 'Website'},

{src: 'img/portfolio_img1.jpg' , type: 'Website'},

{src: 'img/portfolio_img5.jpg' , type: 'Other'},

];

showButtons = () => {
  let rdx = info.reduce((values,item)=>{
  if(!values.includes(item.type)){
    values.push(item.type);
  }
  return values;
},['all']);

let mapRdx = rdx.map(item=>{
  return `
  <div class='hide'>
  <button data-id=${item} class="btn__type">${item}</button>
  </div>
  `
}).join(' ');

portfolio__btns.innerHTML = mapRdx;

}
showButtons();



let btnsType = document.querySelectorAll('.btn__type');

btnsType.forEach(btn=>{
  btn.addEventListener('click',function(e){

    let target = e.currentTarget.dataset.id;

    let filterOn = info.filter(f=>{
      if(target == f.type){
        return f;
      }
    })

    if(target == 'all'){
      showTypes(info);
    } else{
       showTypes(filterOn);
    }


  })
})


showTypes =(inf)=>{

  let mapping = inf.map(item=>{
  return `<div class="portfolio-item" data-id=${item.type}>
          <img src=${item.src}>
            <div class="behind"><a class="behind-btn" href="https://amirzukhair.github.io/vanila-js/index.html/">View Website</a></div>
        </div>`
}).join(' ');

containerPrt.innerHTML = mapping;

}

showTypes(info);


}


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

