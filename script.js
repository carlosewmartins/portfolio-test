// Animação de entrada dos elementos

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);


// Observar os elementos para animação
document.querySelectorAll('.sobre-content, .projeto-card, .habilidade-categoria, .contato-form').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Função para animação estilo maquina de escrever
function typeWriter (elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}
const titulo = document.querySelector("#typing")
typeWriter(titulo)

// Botão Voltar ao topo
const backToTopButton = document.getElementById('voltar')

// Mostrar/ocultar botão
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
});

// Back to top
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Menu
const navToggle = document.querySelector('.mobile-menu');
const navMenu = document.getElementById('nav_links');

if (navToggle && navMenu) {
  const icon = navToggle.querySelector('i');

  function openMenu() {
    navMenu.classList.add('open');
    navToggle.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    if (icon) { icon.classList.remove('fa-bars'); icon.classList.add('fa-xmark'); }
    document.body.style.overflow = 'hidden'; // trava scroll do fundo
  }

  function closeMenu() {
    navMenu.classList.remove('open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    if (icon) { icon.classList.remove('fa-xmark'); icon.classList.add('fa-bars'); }
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Fechar ao clicar em um link do menu
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Ao voltar para tela grande, fecha o menu
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });
}
