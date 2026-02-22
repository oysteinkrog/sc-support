/**
 * Swing Catalyst Support Site - Extra Interactions (Hugo/Relearn)
 * Lightbox, Feedback Widget, Keyboard Shortcuts, Particles, Related Articles
 */

(function () {
  'use strict';

  // ================================================================
  // IMAGE LIGHTBOX
  // ================================================================
  function initLightbox() {
    var overlay = document.createElement('div');
    overlay.className = 'sc-lightbox';
    overlay.innerHTML = '<button class="sc-lightbox__close" aria-label="Close">&times;</button><img src="" alt="" />';
    document.body.appendChild(overlay);

    var lightboxImg = overlay.querySelector('img');
    var closeBtn = overlay.querySelector('.sc-lightbox__close');

    function open(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      overlay.style.display = 'flex';
      requestAnimationFrame(function () {
        overlay.classList.add('active');
      });
      document.body.style.overflow = 'hidden';
    }

    function close() {
      overlay.classList.remove('active');
      setTimeout(function () {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }, 300);
    }

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    closeBtn.addEventListener('click', close);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        close();
      }
    });

    // Attach to all content images (Hugo Relearn selectors)
    document.querySelectorAll('article img, #body-inner img, .article-content img').forEach(function (img) {
      if (img.closest('.sc-hero')) return;
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () {
        open(this.src, this.alt);
      });
    });
  }

  // ================================================================
  // FEEDBACK WIDGET
  // ================================================================
  function initFeedback() {
    var content = document.querySelector('article') || document.querySelector('#body-inner') || document.querySelector('.article-content');
    if (!content) return;
    // Remove any existing feedback widget (re-init on navigation)
    var existing = content.querySelector('.sc-feedback');
    if (existing) existing.remove();
    // Don't add on homepage, 404, or tags page
    var isSpecial = document.querySelector('.sc-hero') ||
                    document.querySelector('.sc-404') ||
                    document.title.includes('Tags');
    if (isSpecial) return;

    var pageId = window.location.pathname;
    var stored = localStorage.getItem('sc-feedback-' + pageId);

    var widget = document.createElement('div');
    widget.className = 'sc-feedback';

    if (stored) {
      widget.innerHTML =
        '<p class="sc-feedback__title">Thanks for your feedback!</p>';
    } else {
      widget.innerHTML =
        '<p class="sc-feedback__title">Was this article helpful?</p>' +
        '<div class="sc-feedback__buttons">' +
        '  <button class="sc-feedback__btn" data-vote="yes"><span class="icon">\uD83D\uDC4D</span> Yes</button>' +
        '  <button class="sc-feedback__btn" data-vote="no"><span class="icon">\uD83D\uDC4E</span> No</button>' +
        '</div>' +
        '<p class="sc-feedback__thanks">Thank you! Your feedback helps us improve.</p>';
    }

    content.appendChild(widget);

    widget.querySelectorAll('.sc-feedback__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var vote = this.getAttribute('data-vote');
        localStorage.setItem('sc-feedback-' + pageId, vote);
        this.classList.add('voted');
        widget.querySelector('.sc-feedback__thanks').style.display = 'block';
        widget.querySelectorAll('.sc-feedback__btn').forEach(function (b) {
          if (!b.classList.contains('voted')) b.style.display = 'none';
        });
      });
    });
  }

  // ================================================================
  // KEYBOARD SHORTCUTS
  // ================================================================
  function initKeyboardShortcuts() {
    // Create modal
    var modal = document.createElement('div');
    modal.className = 'sc-shortcuts-modal';
    modal.id = 'sc-shortcuts';
    modal.innerHTML =
      '<div class="sc-shortcuts-modal__content">' +
      '  <div class="sc-shortcuts-modal__title">' +
      '    <span>Keyboard Shortcuts</span>' +
      '    <button class="sc-shortcuts-modal__close" aria-label="Close">&times;</button>' +
      '  </div>' +
      '  <div class="sc-shortcut-row"><span class="sc-shortcut-row__desc">Open search</span><span class="sc-shortcut-row__key">/</span></div>' +
      '  <div class="sc-shortcut-row"><span class="sc-shortcut-row__desc">Go to homepage</span><span class="sc-shortcut-row__key">H</span></div>' +
      '  <div class="sc-shortcut-row"><span class="sc-shortcut-row__desc">Go back</span><span class="sc-shortcut-row__key">Backspace</span></div>' +
      '  <div class="sc-shortcut-row"><span class="sc-shortcut-row__desc">Toggle dark/light mode</span><span class="sc-shortcut-row__key">D</span></div>' +
      '  <div class="sc-shortcut-row"><span class="sc-shortcut-row__desc">Scroll to top</span><span class="sc-shortcut-row__key">T</span></div>' +
      '  <div class="sc-shortcut-row"><span class="sc-shortcut-row__desc">Show keyboard shortcuts</span><span class="sc-shortcut-row__key">?</span></div>' +
      '</div>';
    document.body.appendChild(modal);

    var closeBtn = modal.querySelector('.sc-shortcuts-modal__close');

    function toggleModal() {
      modal.classList.toggle('active');
    }

    closeBtn.addEventListener('click', toggleModal);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) toggleModal();
    });

    document.addEventListener('keydown', function (e) {
      // Ignore when typing in inputs
      var tag = e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target.isContentEditable) return;

      // Close modal on Escape
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        toggleModal();
        return;
      }

      // ? - show shortcuts
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        toggleModal();
        return;
      }

      // / - navigate to search page
      if (e.key === '/' && !e.shiftKey) {
        e.preventDefault();
        window.location.href = window.location.origin + '/search/';
        return;
      }

      // H - home
      if (e.key === 'h' || e.key === 'H') {
        window.location.href = window.location.origin + '/';
        return;
      }

      // D - toggle dark/light (Hugo Relearn uses variant switcher)
      if (e.key === 'd' || e.key === 'D') {
        var toggle = document.querySelector('#R-variant-selector') ||
                     document.querySelector('.variant-selector button');
        if (toggle) toggle.click();
        return;
      }

      // T - scroll to top
      if (e.key === 't' || e.key === 'T') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    });
  }

  // ================================================================
  // HOMEPAGE LAYOUT — hide sidebar, add body class
  // ================================================================
  function initHomepageLayout() {
    if (!document.querySelector('.sc-hero')) return;
    document.body.classList.add('sc-homepage');

    // Scroll hint — smooth scroll past hero
    var scrollHint = document.getElementById('hero-scroll-hint');
    if (scrollHint) {
      scrollHint.addEventListener('click', function () {
        var hero = document.querySelector('.sc-hero');
        if (hero) {
          var target = hero.getBoundingClientRect().bottom + window.scrollY;
          window.scrollTo({ top: target, behavior: 'smooth' });
        }
      });
    }

    // Fade out scroll hint on scroll
    var hero = document.querySelector('.sc-hero');
    if (hero && scrollHint) {
      var didFade = false;
      window.addEventListener('scroll', function () {
        if (didFade) return;
        if (window.scrollY > 80) {
          scrollHint.style.opacity = '0';
          scrollHint.style.transition = 'opacity 0.4s ease';
          didFade = true;
        }
      });
    }
  }

  // ================================================================
  // HERO CANVAS PARTICLE NETWORK
  // ================================================================
  var particleAnimFrame = null;

  function initParticles() {
    var container = document.getElementById('hero-particles');
    if (!container) return;

    // Clean up previous canvas if re-initializing
    var oldCanvas = container.querySelector('canvas');
    if (oldCanvas) oldCanvas.remove();
    if (particleAnimFrame) {
      cancelAnimationFrame(particleAnimFrame);
      particleAnimFrame = null;
    }

    var canvas = document.createElement('canvas');
    container.appendChild(canvas);
    var ctx = canvas.getContext('2d');

    var dpr = window.devicePixelRatio || 1;
    var w, h;
    var mouse = { x: -1000, y: -1000 };
    var particles = [];
    var CONNECT_DIST = 140;
    var MOUSE_DIST = 180;

    function resize() {
      var rect = container.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
      // Scale count based on area, capped for performance
      var area = w * h;
      var count = Math.min(80, Math.max(30, Math.floor(area / 18000)));
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: 1.5 + Math.random() * 2,
          alpha: 0.15 + Math.random() * 0.35
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      // Update and draw particles
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];

        // Gentle mouse repulsion
        var dx = p.x - mouse.x;
        var dy = p.y - mouse.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DIST && dist > 0) {
          var force = (MOUSE_DIST - dist) / MOUSE_DIST * 0.02;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Dampen velocity
        p.vx *= 0.995;
        p.vy *= 0.995;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 92, 0, ' + p.alpha + ')';
        ctx.fill();
      }

      // Draw connections
      ctx.lineWidth = 0.6;
      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            var opacity = (1 - dist / CONNECT_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(255, 92, 0, ' + opacity + ')';
            ctx.stroke();
          }
        }
      }

      // Draw mouse connections
      for (var i = 0; i < particles.length; i++) {
        var dx = particles[i].x - mouse.x;
        var dy = particles[i].y - mouse.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DIST) {
          var opacity = (1 - dist / MOUSE_DIST) * 0.25;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = 'rgba(255, 122, 51, ' + opacity + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      particleAnimFrame = requestAnimationFrame(draw);
    }

    // Mouse tracking relative to container
    container.parentElement.addEventListener('mousemove', function (e) {
      var rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    container.parentElement.addEventListener('mouseleave', function () {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    // Resize handler
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        resize();
        createParticles();
      }, 200);
    });

    resize();
    createParticles();
    draw();
  }

  // ================================================================
  // RELATED ARTICLES (tag-based matching with sidebar fallback)
  // ================================================================
  function initRelatedArticles() {
    var content = document.querySelector('article') || document.querySelector('#body-inner') || document.querySelector('.article-content');
    if (!content) return;
    // Don't add on homepage, 404, tags, or category index pages
    var isSpecial = document.querySelector('.sc-hero') ||
                    document.querySelector('.sc-404') ||
                    document.querySelector('.sc-article-list') ||
                    document.title.includes('Tags');
    if (isSpecial) return;

    // Collect current page's tags from the tag links in the content
    var currentTags = [];
    content.querySelectorAll('.sc-tag, .tag, [data-tag]').forEach(function (tag) {
      var text = tag.textContent.trim().toLowerCase();
      if (text) currentTags.push(text);
    });

    var currentPath = window.location.pathname;

    // Collect sibling articles from sidebar, prioritize by tag overlap
    var sidebarLinks = document.querySelectorAll('#R-sidebar a, aside a, nav.menu a, .sidebar a');
    var candidates = [];

    sidebarLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      var resolved = new URL(href, window.location.href).pathname;
      if (resolved !== currentPath && !resolved.endsWith('/') && link.textContent.trim().length > 0) {
        candidates.push({ title: link.textContent.trim(), href: href });
      }
    });

    if (candidates.length < 2) return;

    // If we have tags, try to score candidates based on tag similarity
    // by checking if their URLs hint at related topics
    if (currentTags.length > 0) {
      candidates.forEach(function (c) {
        var score = 0;
        var slug = c.href.toLowerCase().replace(/[\/\-\.]/g, ' ');
        var title = c.title.toLowerCase();
        currentTags.forEach(function (tag) {
          if (slug.indexOf(tag) !== -1 || title.indexOf(tag) !== -1) {
            score += 2;
          }
          // Partial match on tag words
          tag.split(/[\s\-]+/).forEach(function (word) {
            if (word.length > 3 && (slug.indexOf(word) !== -1 || title.indexOf(word) !== -1)) {
              score += 1;
            }
          });
        });
        c.score = score;
      });

      // Sort by score descending, then shuffle ties
      candidates.sort(function (a, b) {
        if (b.score !== a.score) return b.score - a.score;
        return 0.5 - Math.random();
      });
    } else {
      // No tags: shuffle randomly
      candidates.sort(function () { return 0.5 - Math.random(); });
    }

    var related = candidates.slice(0, 4);

    var section = document.createElement('div');
    section.className = 'sc-related';
    section.innerHTML =
      '<h3 class="sc-related__title">Related Articles</h3>' +
      '<div class="sc-related__grid">' +
      related.map(function (a) {
        return '<a href="' + a.href + '" class="sc-related__item">' +
               '<span class="sc-related__icon">\u{1F4C4}</span>' +
               '<span class="sc-related__text">' + a.title + '</span>' +
               '</a>';
      }).join('') +
      '</div>';

    // Insert before feedback widget if it exists, otherwise at end
    var feedback = content.querySelector('.sc-feedback');
    if (feedback) {
      content.insertBefore(section, feedback);
    } else {
      content.appendChild(section);
    }
  }

  // ================================================================
  // INIT
  // ================================================================
  function init() {
    initHomepageLayout();
    initLightbox();
    initRelatedArticles();
    initFeedback();
    initKeyboardShortcuts();
    initParticles();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
