document.addEventListener('DOMContentLoaded', function() {
  // Efek klik pada tombol
  var buttons = document.querySelectorAll('.btn');
  buttons.forEach(function(btn) {
    btn.addEventListener('mousedown', function() {
      btn.style.transform = 'scale(0.96)';
    });
    btn.addEventListener('mouseup', function() {
      btn.style.transform = '';
    });
    btn.addEventListener('mouseleave', function() {
      btn.style.transform = '';
    });
  });

  // Efek animasi pada foto profil saat di-scroll ke view (jika ingin ditambah)
  var profileImg = document.querySelector('.profile-img.besar');
  if (profileImg) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          profileImg.classList.add('in-view');
        }
      });
    }, { threshold: 0.5 });
    observer.observe(profileImg);
  }
  // Smooth scroll untuk tombol "Selengkapnya" jika mengarah ke anchor di halaman yang sama
  var internalLinks = document.querySelectorAll('a.btn[href^="#"]');
  internalLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var targetId = link.getAttribute('href').substring(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Dark mode toggle (opsional, jika ingin menambah tombol dark mode di HTML)
  var darkToggle = document.getElementById('dark-toggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
    });
  }
  // Typewriter effect pada judul (h1)
  var h1 = document.querySelector('header h1');
  if (h1) {
    var text = h1.textContent;
    h1.textContent = '';
    var i = 0;
    function typeWriter() {
      if (i < text.length) {
        h1.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
      }
    }
    typeWriter();
  }

  // Sticky navbar (jika ada nav)
  var nav = document.querySelector('nav');
  if (nav) {
    var navOffset = nav.offsetTop;
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > navOffset) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    });
  }

  // Reveal animasi saat elemen masuk viewport (summary, portfolio-item)
  var revealEls = document.querySelectorAll('.summary, .portfolio-item');
  var revealObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in');
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(function(el) { revealObs.observe(el); });

  // Scroll to top button
  var scrollBtn = document.createElement('button');
  scrollBtn.textContent = '↑';
  scrollBtn.id = 'scrollToTopBtn';
  scrollBtn.style.position = 'fixed';
  scrollBtn.style.bottom = '32px';
  scrollBtn.style.right = '32px';
  scrollBtn.style.display = 'none';
  scrollBtn.style.zIndex = '1000';
  scrollBtn.className = 'btn';
  document.body.appendChild(scrollBtn);
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Dark mode toggle (opsional, jika ingin menambah tombol dark mode di HTML)
  var darkToggle = document.getElementById('dark-toggle');
  if (darkToggle) {
    darkToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });
    // Load preferensi dark mode
    if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  }
});
