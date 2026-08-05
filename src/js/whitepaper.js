/* ============================================
   EchoPlex Whitepaper — Interactive Features
   ============================================ */

(function () {
  'use strict';

  // --- Elements ---
  const progressBar = document.getElementById('progressBar');
  const miniProgress = document.getElementById('miniProgress');
  const backToTop = document.getElementById('backToTop');
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const tocLinks = Array.from(document.querySelectorAll('.toc-link[data-toc]'));
  const sections = Array.from(document.querySelectorAll('.doc-section'));
  const rightbarToc = document.getElementById('rightbarToc');
  const readingTimeEl = document.getElementById('readingTime');

  // --- Reading Time ---
  function calculateReadingTime() {
    const content = document.querySelector('.doc-content');
    if (!content) return;
    const text = content.innerText || '';
    const words = text.trim().split(/\s+/).length;
    const wpm = 200;
    const minutes = Math.max(1, Math.round(words / wpm));
    if (readingTimeEl) readingTimeEl.textContent = '~ ' + minutes + ' min';
  }

  // --- Right Sidebar TOC (h2 + h3 of current section) ---
  function buildRightbarToc() {
    if (!rightbarToc) return;
    rightbarToc.innerHTML = '';

    sections.forEach(function (section) {
      const h2 = section.querySelector('h2');
      if (!h2) return;

      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + section.id;
      a.className = 'rightbar-toc-link';
      a.dataset.rightbarToc = section.id;
      a.textContent = h2.textContent.replace(/\s+$/, '').split('\n')[0].trim();
      li.appendChild(a);
      rightbarToc.appendChild(li);

      const h3s = section.querySelectorAll('h3');
      h3s.forEach(function (h3) {
        if (!h3.id) return;
        const subLi = document.createElement('li');
        const subA = document.createElement('a');
        subA.href = '#' + h3.id;
        subA.className = 'rightbar-toc-link';
        subA.style.paddingLeft = '20px';
        subA.dataset.rightbarToc = h3.id;
        subA.textContent = h3.textContent.trim();
        subLi.appendChild(subA);
        rightbarToc.appendChild(subLi);
      });
    });
  }

  // Give h3s IDs if they don't have them
  function ensureHeadingIds() {
    const headings = document.querySelectorAll('.doc-content h2, .doc-content h3, .doc-content h4');
    headings.forEach(function (heading, i) {
      if (!heading.id) {
        const text = heading.textContent.trim().toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
        heading.id = text || 'heading-' + i;
      }
    });
  }

  // --- Scroll Progress ---
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) progressBar.style.width = progress + '%';
    if (miniProgress) miniProgress.style.width = progress + '%';

    // Back to top visibility
    if (backToTop) {
      if (scrollTop > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  }

  // --- Scrollspy ---
  function updateActiveSection() {
    const scrollPos = window.scrollY + 100;
    let currentId = null;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        currentId = section.id;
        break;
      }
    }

    // If we're past the last section, highlight it
    if (!currentId && sections.length > 0 && scrollPos > sections[sections.length - 1].offsetTop) {
      currentId = sections[sections.length - 1].id;
    }

    if (!currentId) return;

    // Update left sidebar TOC
    tocLinks.forEach(function (link) {
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update right sidebar TOC
    const rightbarLinks = rightbarToc ? rightbarToc.querySelectorAll('.rightbar-toc-link') : [];
    rightbarLinks.forEach(function (link) {
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // --- Smooth Scroll ---
  function setupSmoothScroll() {
    const allLinks = document.querySelectorAll('a[href^="#"]');
    allLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        const href = link.getAttribute('href');
        if (href === '#' || href === '') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const navHeight = 56;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth',
        });

        // Close mobile sidebar if open
        if (sidebar && sidebar.classList.contains('open')) {
          closeSidebar();
        }
      });
    });
  }

  // --- Copy Anchor Link ---
  function setupAnchorButtons() {
    const anchorBtns = document.querySelectorAll('.anchor-btn');
    anchorBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const anchorId = btn.dataset.anchor;
        if (!anchorId) return;

        const url = window.location.origin + window.location.pathname + '#' + anchorId;

        // Copy to clipboard
        if (navigator.clipboard) {
          navigator.clipboard.writeText(url).then(function () {
            showCopied(btn);
          }).catch(function () {
            fallbackCopy(url, btn);
          });
        } else {
          fallbackCopy(url, btn);
        }

        // Also scroll to it
        const target = document.getElementById(anchorId);
        if (target) {
          const navHeight = 56;
          const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      });
    });
  }

  function showCopied(btn) {
    btn.classList.add('copied');
    setTimeout(function () {
      btn.classList.remove('copied');
    }, 1500);
  }

  function fallbackCopy(text, btn) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showCopied(btn);
    } catch (e) {
      // ignore
    }
    document.body.removeChild(textarea);
  }

  // --- Code Block Copy ---
  function setupCodeBlockCopy() {
    const copyBtns = document.querySelectorAll('.code-block-copy');
    copyBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const codeBlock = btn.closest('.code-block');
        if (!codeBlock) return;
        const code = codeBlock.querySelector('code');
        if (!code) return;

        const text = code.textContent;

        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(function () {
            const original = btn.textContent;
            btn.textContent = 'Copied!';
            setTimeout(function () { btn.textContent = original; }, 1500);
          });
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = text;
          document.body.appendChild(textarea);
          textarea.select();
          try { document.execCommand('copy'); } catch (e) {}
          document.body.removeChild(textarea);
          const original = btn.textContent;
          btn.textContent = 'Copied!';
          setTimeout(function () { btn.textContent = original; }, 1500);
        }
      });
    });
  }

  // --- Mobile Sidebar ---
  function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (sidebarOverlay) sidebarOverlay.classList.add('visible');
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('visible');
  }

  function setupMobileMenu() {
    if (menuToggle) {
      menuToggle.addEventListener('click', function () {
        if (sidebar && sidebar.classList.contains('open')) {
          closeSidebar();
        } else {
          openSidebar();
        }
      });
    }
    if (sidebarOverlay) {
      sidebarOverlay.addEventListener('click', closeSidebar);
    }
    // Close on escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeSidebar();
    });
  }

  // --- Throttle ---
  function throttle(fn, wait) {
    let last = 0;
    let timer = null;
    return function () {
      const now = Date.now();
      const remaining = wait - (now - last);
      if (remaining <= 0) {
        if (timer) { clearTimeout(timer); timer = null; }
        last = now;
        fn();
      } else if (!timer) {
        timer = setTimeout(function () {
          last = Date.now();
          timer = null;
          fn();
        }, remaining);
      }
    };
  }

  // --- Init ---
  function init() {
    ensureHeadingIds();
    calculateReadingTime();
    buildRightbarToc();
    setupSmoothScroll();
    setupAnchorButtons();
    setupCodeBlockCopy();
    setupMobileMenu();

    const onScroll = throttle(function () {
      updateProgress();
      updateActiveSection();
    }, 60);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // Initial call
    updateProgress();
    updateActiveSection();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
