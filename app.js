window.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger-menu');
  const navBar = document.querySelector('.nav-bar');


  const navList = document.querySelector('.nav-list');

  burger.addEventListener('click', function () {

    burger.classList.toggle('active');

    const navbarH = navBar.getBoundingClientRect().height;
    const navListH = navList.getBoundingClientRect().height;
    if (navbarH === 0) {
      navBar.style.height = `${navListH}px`;
    }
    else {
      navBar.style.height = 0;
    }

  })

  const body = document.querySelector('body');
  const darkMode = document.querySelector('.dark__mode');
  


  darkMode.addEventListener('click', function () {
    body.classList.toggle('dark');

  })


  window.addEventListener('scroll', function (e) {
    const header = document.getElementById('header');
    const headerH = header.getBoundingClientRect().height;
    const position = window.pageYOffset;


    if (position >= headerH / 2) {
      header.classList.add('fixed');

    } else {
      header.classList.remove('fixed');

    }

  });

  let links = document.querySelectorAll('.nav-list li a');
  navList.addEventListener('click', function (e) {
    let target = e.target;
    if (target.tagName === 'A') {
      links.forEach(lnk => {
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
    { src: 'img/portfolio_img6.jpg', type: 'Website', link: 'https://amirzukhair.github.io/website-surf/' },

    { src: 'img/portfolio_img4.jpg', type: 'JavaScript', link: 'https://amirzukhair.github.io/vanila-js/index.html/' },

    { src: 'img/portfolio_img7.jpg', type: 'React', link: 'https://amirzukhair.github.io/PokemonsAPI/' },

    { src: 'img/portfolio_img3.jpg', type: 'Website', link: 'https://amirzukhair.github.io/website-Atlas-Concorde/' },

    { src: 'img/portfolio_img1.jpg', type: 'Website', link: 'https://amirzukhair.github.io/Zebra-Lending-website/' },

    { src: 'img/portfolio_img5.jpg', type: 'Website', link: 'https://amirzukhair.github.io/Responsive-Navigation/' },

    { src: 'img/portfolio_img2.jpg', type: 'Website', link: 'https://amirzukhair.github.io/Landing-page-start-up/' },


  ];

  showButtons = () => {
    let rdx = info.reduce((values, item) => {
      if (!values.includes(item.type)) {
        values.push(item.type);
      }
      return values;
    }, ['all']);

    let mapRdx = rdx.map(item => {
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

  btnsType.forEach(btn => {
    btn.addEventListener('click', function (e) {

      let target = e.currentTarget.dataset.id;

      let filterOn = info.filter(f => {
        if (target == f.type) {
          return f;
        }
      })

      if (target == 'all') {
        showTypes(info);
      } else {
        showTypes(filterOn);
      }


    })
  })


  showTypes = (inf) => {

    let mapping = inf.map(item => {
      return `<a  href=${item.link}>
            <div class="portfolio-item" data-id=${item.type}>
          <img src=${item.src}>
       
           
        </div>
        </a>`
    }).join(' ');

    containerPrt.innerHTML = mapping;

  }

  showTypes(info);

})









