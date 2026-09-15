var header = document.getElementById('site-header');
  window.addEventListener('scroll', function(){
    header.classList.toggle('scrolled', window.scrollY > 8);
  });

  // Menu mobile (hambúrguer)
  var menuToggle = document.getElementById('menu-toggle');
  var navMenu = document.getElementById('nav-menu');
  if(menuToggle && navMenu){
    menuToggle.addEventListener('click', function(){
      var isOpen = navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });
    // Fecha o menu ao clicar em um link
    navMenu.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
      });
    });
    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function(e){
      if(navMenu.classList.contains('open') && !navMenu.contains(e.target) && !menuToggle.contains(e.target)){
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
      }
    });
  }

  var revealEls = document.querySelectorAll('[data-reveal]');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.12});
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }
