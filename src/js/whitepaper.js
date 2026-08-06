/* ============================================
   EchoPlex Whitepaper — Interactive Features
   Chapter-based navigation · Per-chapter progress
   ============================================ */

(function () {
  'use strict';

  // --- Elements ---
  const introScreen = document.getElementById('introScreen');
  const startReadingBtn = document.getElementById('startReadingBtn');
  const appShell = document.getElementById('appShell');
  const progressBar = document.getElementById('progressBar');
  const miniProgress = document.getElementById('miniProgress');
  const navProgressFill = document.getElementById('navProgressFill');
  const navProgressLabel = document.getElementById('navProgressLabel');
  const backToTop = document.getElementById('backToTop');
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const tocEl = document.getElementById('toc');
  const tocPageGrid = document.getElementById('tocPageGrid');
  const chapterNav = document.getElementById('chapterNav');
  const rightbarToc = document.getElementById('rightbarToc');
  const readingTimeEl = document.getElementById('readingTime');
  const introTotalTime = document.getElementById('introTotalTime');
  const themeToggle = document.getElementById('themeToggle');

  // --- Chapter data ---
  const chapters = Array.from(document.querySelectorAll('.chapter[data-chapter]'));
  const chapterOrder = chapters.map(function (ch) { return ch.dataset.chapter; });

  // Reading speed: words per minute
  const WPM = 200;

  // Chapter metadata (title + short description for TOC)
  const chapterMeta = {
    toc: { title: 'Table of Contents', desc: 'Browse all chapters of the EchoPlex whitepaper' },
    abstract: { title: 'Abstract', desc: 'The core vision in brief' },
    'executive-summary': { title: 'Executive Summary', desc: 'Six products, one identity' },
    'vision-mission': { title: 'Vision & Mission', desc: 'Why EchoPlex exists' },
    'the-problem': { title: 'The Problem', desc: 'Fragmentation across digital life' },
    'why-platforms-fall-short': { title: 'Why Existing Platforms Fall Short', desc: 'The structural gaps today' },
    'the-solution': { title: 'The Solution', desc: 'Four foundational principles' },
    ecosystem: { title: 'The EchoPlex Ecosystem', desc: 'Six interconnected products' },
    'user-journey': { title: 'User Journey', desc: 'From newcomer to citizen' },
    'game-hub': { title: 'Game Hub', desc: 'The entertainment engine' },
    'creator-hub': { title: 'Creator Hub', desc: 'Create, publish, monetize' },
    'story-hub': { title: 'Story Hub', desc: 'Living worlds and narratives' },
    marketplace: { title: 'Marketplace', desc: 'Digital commerce and royalties' },
    communities: { title: 'Communities', desc: 'Guilds, mentorship, belonging' },
    tradefusion: { title: 'TradeFusion', desc: 'The financial layer' },
    architecture: { title: 'Technical Architecture', desc: 'Layered, modular, evolvable' },
    reputation: { title: 'Reputation & Progression', desc: 'Earned, not purchased' },
    rewards: { title: 'Rewards System', desc: 'Recognize meaningful contribution' },
    token: { title: 'Future Token Framework', desc: 'ECP and beyond' },
    'business-model': { title: 'Business Model', desc: 'Diversified, ecosystem-aligned' },
    roadmap: { title: 'Roadmap', desc: 'Six phases of development' },
    'risk-factors': { title: 'Risk Factors', desc: 'Transparent risk disclosure' },
    'team-vision': { title: 'Team & Vision', desc: 'The people behind EchoPlex' },
    conclusion: { title: 'Conclusion', desc: 'One identity, one journey' }
  };

  // --- State ---
  let currentChapter = 'toc';
  const readingTimeCache = {};

  // ============================================
  // Reading Time (per chapter)
  // ============================================
  function countWords(el) {
    const text = el.innerText || el.textContent || '';
    return text.trim().split(/\s+/).filter(Boolean).length;
  }

  function getReadingMinutes(chapterId) {
    if (readingTimeCache[chapterId] !== undefined) return readingTimeCache[chapterId];

    const el = document.querySelector('.chapter[data-chapter="' + chapterId + '"]');
    if (!el) return 1;

    const words = countWords(el);
    const minutes = Math.max(1, Math.round(words / WPM));
    readingTimeCache[chapterId] = minutes;
    return minutes;
  }

  function formatReadingTime(minutes) {
    return '~ ' + minutes + ' min' + (minutes > 1 ? 's' : '');
  }

  function getTotalReadingTime() {
    let total = 0;
    chapterOrder.forEach(function (id) {
      if (id === 'toc') return;
      total += getReadingMinutes(id);
    });
    return total;
  }

  // ============================================
  // Build Table of Contents (left sidebar)
  // ============================================
  function buildSidebarToc() {
    if (!tocEl) return;
    tocEl.innerHTML = '';

    chapterOrder.forEach(function (id, index) {
      const meta = chapterMeta[id];
      if (!meta) return;

      const num = id === 'toc' ? 'TOC' : String(index).padStart(2, '0');

      const item = document.createElement('div');
      item.className = 'toc-item';

      const link = document.createElement('a');
      link.href = '#' + id;
      link.className = 'toc-link';
      link.dataset.chapterLink = id;
      link.setAttribute('aria-current', id === currentChapter ? 'true' : 'false');

      const numSpan = document.createElement('span');
      numSpan.className = 'toc-num';
      numSpan.textContent = num;

      const titleSpan = document.createElement('span');
      titleSpan.textContent = meta.title;

      link.appendChild(titleSpan);
      link.appendChild(numSpan);

      if (id === currentChapter) link.classList.add('active');

      item.appendChild(link);
      tocEl.appendChild(item);
    });
  }

  // ============================================
  // Build TOC Page Cards (center content)
  // ============================================
  function buildTocPageGrid() {
    if (!tocPageGrid) return;
    tocPageGrid.innerHTML = '';

    chapterOrder.forEach(function (id, index) {
      const meta = chapterMeta[id];
      if (!meta || id === 'toc') return;

      const num = String(index).padStart(2, '0');

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'toc-page-card';
      btn.dataset.chapterLink = id;
      btn.setAttribute('role', 'link');

      const numEl = document.createElement('div');
      numEl.className = 'toc-page-card-num';
      numEl.textContent = num;

      const textWrap = document.createElement('div');
      const titleEl = document.createElement('div');
      titleEl.className = 'toc-page-card-title';
      titleEl.textContent = meta.title;

      const descEl = document.createElement('div');
      descEl.className = 'toc-page-card-desc';
      descEl.textContent = meta.desc;

      textWrap.appendChild(titleEl);
      textWrap.appendChild(descEl);

      btn.appendChild(numEl);
      btn.appendChild(textWrap);

      tocPageGrid.appendChild(btn);
    });
  }

  // ============================================
  // Build "On This Page" (right sidebar)
  // ============================================
  function buildRightbarToc(chapterId) {
    if (!rightbarToc) return;
    rightbarToc.innerHTML = '';

    // Only show headings in the current chapter
    const chapterEl = document.querySelector('.chapter[data-chapter="' + chapterId + '"]');
    if (!chapterEl || chapterId === 'toc') {
      // Empty state for TOC page
      const empty = document.createElement('li');
      empty.className = 'rightbar-empty';
      empty.textContent = 'Select a chapter to view its contents.';
      rightbarToc.appendChild(empty);
      return;
    }

    const headings = chapterEl.querySelectorAll('h2, h3');

    headings.forEach(function (heading, i) {
      // Give heading an id if it doesn't have one
      if (!heading.id) {
        const text = heading.textContent.trim().toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
        heading.id = text || chapterId + '-heading-' + i;
      }

      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + heading.id;
      a.className = 'rightbar-toc-link';
      a.dataset.rightbarToc = heading.id;

      if (heading.tagName === 'H3') {
        a.style.paddingLeft = '24px';
        a.style.fontSize = '0.6875rem';
      }

      a.textContent = heading.textContent.trim();
      a.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScrollTo(heading.id);
        updateRightbarActive(heading.id);
      });

      li.appendChild(a);
      rightbarToc.appendChild(li);
    });
  }

  function updateRightbarActive(activeId) {
    const links = rightbarToc ? rightbarToc.querySelectorAll('.rightbar-toc-link') : [];
    links.forEach(function (link) {
      if (link.dataset.rightbarToc === activeId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // ============================================
  // Navigation (chapter switching)
  // ============================================
  function showChapter(chapterId, opts) {
    opts = opts || {};
    const isInitial = !!opts.initial;

    // Validate chapter exists
    if (chapterOrder.indexOf(chapterId) === -1) chapterId = 'toc';

    // Only transition if actually changing
    if (chapterId === currentChapter && !isInitial) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Hide all chapters, show the current one
    chapters.forEach(function (ch) {
      ch.hidden = ch.dataset.chapter !== chapterId;
    });

    // Hide footnotes unless it's a content chapter (not TOC)
    const footnotes = document.getElementById('footnotes');
    if (footnotes) footnotes.hidden = chapterId === 'toc';

    // Update state
    currentChapter = chapterId;

    // Update sidebar TOC active state
    updateSidebarActive(chapterId);

    // Build right sidebar for this chapter
    buildRightbarToc(chapterId);

    // Update reading time display
    const minutes = getReadingMinutes(chapterId);
    if (readingTimeEl) readingTimeEl.textContent = formatReadingTime(minutes);

    // Build prev/next navigation
    buildChapterNav(chapterId);

    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: isInitial ? 'auto' : 'smooth' });

    // Reset progress (progress is per-chapter, computed in updateProgress)
    updateProgress();

    // Update URL hash if not initial
    if (!isInitial) {
      try {
        history.replaceState(null, '', '#' + chapterId);
      } catch (e) { /* ignore */ }
    }

    // Close mobile sidebar
    closeSidebar();

    // Focus main content for accessibility
    const content = document.getElementById('content');
    if (content) content.setAttribute('tabindex', '-1');
  }

  function updateSidebarActive(chapterId) {
    const links = tocEl ? tocEl.querySelectorAll('.toc-link[data-chapter-link]') : [];
    links.forEach(function (link) {
      const isActive = link.dataset.chapterLink === chapterId;
      link.classList.toggle('active', isActive);
      link.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  }

  // ============================================
  // Chapter Prev / Next Navigation
  // ============================================
  function buildChapterNav(chapterId) {
    if (!chapterNav) return;

    const idx = chapterOrder.indexOf(chapterId);
    if (idx === -1) return;

    const prevIdx = idx - 1;
    const nextIdx = idx + 1;

    chapterNav.innerHTML = '';

    // Previous link
    if (prevIdx >= 0) {
      const prev = chapterOrder[prevIdx];
      const meta = chapterMeta[prev];

      const link = document.createElement('a');
      link.href = '#' + prev;
      link.className = 'doc-nav-link prev';
      link.dataset.chapterLink = prev;
      link.innerHTML =
        '<span class="doc-nav-label">← Previous</span>' +
        '<span class="doc-nav-title">' + escapeHtml(meta.title) + '</span>';

      chapterNav.appendChild(link);
    } else {
      // First chapter: no previous, reserve space
      const spacer = document.createElement('div');
      spacer.className = 'doc-nav-link prev nav-spacer';
      spacer.setAttribute('aria-hidden', 'true');
      chapterNav.appendChild(spacer);
    }

    // Next link
    if (nextIdx < chapterOrder.length) {
      const next = chapterOrder[nextIdx];
      const meta = chapterMeta[next];

      const link = document.createElement('a');
      link.href = '#' + next;
      link.className = 'doc-nav-link next';
      link.dataset.chapterLink = next;
      link.innerHTML =
        '<span class="doc-nav-label">Next →</span>' +
        '<span class="doc-nav-title">' + escapeHtml(meta.title) + '</span>';

      chapterNav.appendChild(link);
    } else {
      // Last chapter: no next
      const spacer = document.createElement('div');
      spacer.className = 'doc-nav-link next nav-spacer';
      spacer.setAttribute('aria-hidden', 'true');
      chapterNav.appendChild(spacer);
    }

    // Bind clicks
    chapterNav.querySelectorAll('[data-chapter-link]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        showChapter(link.dataset.chapterLink);
      });
    });
  }

  // ============================================
  // Smooth scroll within a chapter
  // ============================================
  function smoothScrollTo(id) {
    const target = document.getElementById(id);
    if (!target) return;

    const navHeight = 60;
    const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top: targetPos, behavior: 'smooth' });
  }

  // ============================================
  // Reading Progress (per chapter)
  // ============================================
  function updateProgress() {
    const chapterEl = document.querySelector('.chapter[data-chapter="' + currentChapter + '"]');
    if (!chapterEl) return;

    const scrollTop = window.scrollY;
    const chapterTop = chapterEl.offsetTop;
    const chapterHeight = chapterEl.offsetHeight;

    // Progress within the current chapter only
    const start = chapterTop - 80;
    const end = chapterTop + chapterHeight - window.innerHeight;
    let progress = 0;

    if (end > start) {
      progress = Math.min(100, Math.max(0, ((scrollTop - start) / (end - start)) * 100));
    }

    const progressStr = progress.toFixed(0) + '%';

    if (progressBar) progressBar.style.width = progressStr;
    if (miniProgress) miniProgress.style.width = progressStr;
    if (navProgressFill) navProgressFill.style.width = progressStr;
    if (navProgressLabel) navProgressLabel.textContent = progressStr;

    // Back to top visibility
    if (backToTop) {
      if (scrollTop > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  }

  // ============================================
  // Theme Toggle
  // ============================================
  function setupThemeToggle() {
    if (!themeToggle) return;

    themeToggle.addEventListener('click', function () {
      const root = document.documentElement;
      const current = root.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';

      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem('echoplex-theme', next);
      } catch (e) { /* ignore */ }
    });

    // Restore saved theme
    try {
      const saved = localStorage.getItem('echoplex-theme');
      if (saved === 'light' || saved === 'dark') {
        document.documentElement.setAttribute('data-theme', saved);
      }
    } catch (e) { /* ignore */ }
  }

  // ============================================
  // Mobile Sidebar
  // ============================================
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

  // ============================================
  // Code Block Copy
  // ============================================
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
          try { document.execCommand('copy'); } catch (e) { /* ignore */ }
          document.body.removeChild(textarea);
          const original = btn.textContent;
          btn.textContent = 'Copied!';
          setTimeout(function () { btn.textContent = original; }, 1500);
        }
      });
    });
  }

  // ============================================
  // Event Delegation for chapter links
  // ============================================
  function setupChapterLinkDelegation() {
    // Left sidebar TOC links
    if (tocEl) {
      tocEl.addEventListener('click', function (e) {
        const link = e.target.closest('[data-chapter-link]');
        if (!link) return;
        e.preventDefault();
        showChapter(link.dataset.chapterLink);
      });
    }

    // TOC page cards
    if (tocPageGrid) {
      tocPageGrid.addEventListener('click', function (e) {
        const btn = e.target.closest('[data-chapter-link]');
        if (!btn) return;
        showChapter(btn.dataset.chapterLink);
      });
    }
  }

  // ============================================
  // Throttle
  // ============================================
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

  // ============================================
  // Escape HTML helper
  // ============================================
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ============================================
  // Init
  // ============================================
  function init() {
    // Build TOCs
    buildSidebarToc();
    buildTocPageGrid();

    // Setup interactions
    setupThemeToggle();
    setupMobileMenu();
    setupCodeBlockCopy();
    setupChapterLinkDelegation();

    // Set total reading time on intro
    if (introTotalTime) {
      introTotalTime.textContent = formatReadingTime(getTotalReadingTime());
    }

    // Start Reading button
    if (startReadingBtn) {
      startReadingBtn.addEventListener('click', function () {
        // Show app shell
        if (appShell) appShell.hidden = false;

        // Hide intro with fade
        if (introScreen) introScreen.classList.add('hidden');

        // Show TOC chapter initially
        showChapter('toc', { initial: true });

        // Start scroll listener
        const onScroll = throttle(function () {
          updateProgress();
        }, 60);

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        // Initial progress update
        updateProgress();
      });
    }

    // Back to top
    if (backToTop) {
      backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Handle hash on load (deep link to a chapter)
    const hash = window.location.hash.replace('#', '');
    if (hash && chapterOrder.indexOf(hash) !== -1) {
      // If user lands with a chapter hash, skip intro and go straight to chapter
      if (appShell) appShell.hidden = false;
      if (introScreen) introScreen.classList.add('hidden');

      showChapter(hash, { initial: true });

      const onScroll = throttle(function () {
        updateProgress();
      }, 60);

      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      updateProgress();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();