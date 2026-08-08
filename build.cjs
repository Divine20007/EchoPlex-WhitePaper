/**
 * Build script: generates complete index.html with full whitepaper content
 * Reads original whitepaper text files from ../WhitePaper/
 * Usage: cd EchoPlex-WhitePaper && node build.cjs
 */
const fs = require('fs');
const path = require('path');

const root = __dirname;
// Source whitepaper text files live in ../Website/WhitePaper/
const whitepaperDir = path.join(root, '..', 'Website', 'WhitePaper');

function readWP(filename) {
  return fs.readFileSync(path.join(whitepaperDir, filename), 'utf8');
}

function escapeHtml(str) {
  return str.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
}

function isAsciiArt(line) {
  const arts = ['┌','│','└','├','┤','┬','┴','┼','═','║','─','▲','▼','►','◄','│'];
  return arts.some(function(a) { return line.indexOf(a) !== -1; });
}

function isCoFounderNote(line) {
  return line.indexOf('📌') !== -1 || line.indexOf('Co-Founder') !== -1 || line.indexOf('Co-founder') !== -1;
}

// Convert raw whitepaper text to HTML
function textToHtml(text) {
  const lines = text.split('\n');
  const html = [];
  let inCallout = false;

  function closeCallout() {
    if (inCallout) { html.push('  </div>'); html.push('</div>'); inCallout = false; }
  }

  lines.forEach(function(rawLine) {
    const line = rawLine.replace(/\r$/, '');
    const trimmed = line.trim();

    if (trimmed === '') {
      closeCallout();
      return;
    }

    if (isAsciiArt(trimmed)) {
      closeCallout();
      html.push('<div class="ascii-art">' + escapeHtml(trimmed) + '</div>');
      return;
    }

    if (isCoFounderNote(trimmed)) {
      closeCallout();
      html.push('<div class="callout callout-info">');
      html.push('  <div class="callout-title">Design Note</div>');
      html.push('  <div class="callout-body">');
      html.push('    <p>' + escapeHtml(trimmed) + '</p>');
      inCallout = true;
      return;
    }

    // Skip chapter header lines like "Chapter 3"
    if (/^Chapter \d+/.test(trimmed)) return;

    closeCallout();
    html.push('<p>' + escapeHtml(trimmed) + '</p>');
  });

  closeCallout();
  return html.join('\n');
}

// Chapter definitions: [id, title, description, filename]
const chapters = [
  ['abstract', 'Abstract', 'The core vision in brief', null],
  ['executive-summary', 'Executive Summary', 'A unified entertainment ecosystem', 'Executive Summary.txt'],
  ['vision-mission', 'Vision & Mission', 'Why EchoPlex exists', 'Vision & Mission.txt'],
  ['the-problem', 'The Problem', 'Fragmentation across digital life', 'The Problem.txt'],
  ['why-platforms-fall-short', 'Why Existing Platforms Fall Short', 'The structural gaps today', 'Why Existing Platforms Fall Short.txt'],
  ['the-solution', 'The Solution', 'Four foundational principles', 'The Solution.txt'],
  ['ecosystem', 'The EchoPlex Ecosystem', 'Six interconnected products', 'The EchoPlex Ecosystem.txt'],
  ['user-journey', 'User Journey', 'From newcomer to citizen', 'User Journey.txt'],
  ['game-hub', 'Game Hub', 'The entertainment engine', 'Game Hub.txt'],
  ['creator-hub', 'Creator Hub', 'Create, publish, monetize', 'Creators Hub.txt'],
  ['story-hub', 'Story Hub', 'Living worlds and narratives', 'Story Hub.txt'],
  ['marketplace', 'Marketplace', 'Digital commerce and royalties', 'MarketPlace.txt'],
  ['communities', 'Communities', 'Guilds, mentorship, belonging', 'Community & Guide.txt'],
  ['tradefusion', 'TradeFusion', 'The financial layer', 'TradeFusion.txt'],
  ['architecture', 'Technical Architecture', 'Layered, modular, evolvable', 'Technical Architecture.txt'],
  ['reputation', 'Reputation & Progression', 'Earned, not purchased', 'Reputation & Progression.txt'],
  ['rewards', 'Rewards (EchoPlex Points)', 'Recognize meaningful contribution', 'Rewards.txt'],
  ['token', 'Future Token Framework', 'ECP and beyond', 'Future Token.txt'],
  ['business-model', 'Business Model', 'Diversified, ecosystem-aligned', 'Business Model.txt'],
  ['roadmap', 'Roadmap', 'Eight phases of development', 'RoadMap.txt'],
  ['risk-factors', 'Risk Factors', 'Transparent risk disclosure', 'Risk Factors.txt'],
  ['team-vision', 'Team & Vision', 'The people behind EchoPlex', 'Team & Vision.txt'],
  ['conclusion', 'Conclusion', 'One identity, one journey', 'Conclusion.txt'],
];

// Read all chapters and generate HTML
const chapterSections = [];

chapters.forEach(function(ch, idx) {
  var id = ch[0], title = ch[1], desc = ch[2], filename = ch[3];
  var content;

  if (filename) {
    try {
      var text = readWP(filename);
      content = textToHtml(text);
    } catch(e) {
      content = '<p>Content not available.</p>';
    }
  } else if (id === 'abstract') {
    content = '<p>EchoPlex is a unified digital entertainment ecosystem that addresses the fundamental fragmentation of online experiences. Today, users maintain separate identities, separate communities, and separate creative portfolios across dozens of disconnected platforms. EchoPlex proposes a single persistent identity that grows with every action — across games, creations, stories, communities, and commerce — where every contribution strengthens the whole.</p>\n<p>This whitepaper outlines the architectural foundation, product ecosystem, reputation system, reward mechanisms, and phased roadmap for building EchoPlex into a self-sustaining digital economy. The design philosophy is simple: <strong>entertainment first, ownership second, rewards third. Crypto last.</strong></p>';
  } else {
    content = '<p>Content not available.</p>';
  }

  // For abstract and executive-summary, show the flywheel and pillars diagrams
  // from the original HTML
  if (id === 'abstract') {
    content += '\n<div class="callout callout-info">\n  <div class="callout-title">Note</div>\n  <div class="callout-body">\n    <p>This document is a living whitepaper. It will be updated as the ecosystem evolves, components are built, and community feedback is incorporated.</p>\n  </div>\n</div>';
  }

  if (id === 'executive-summary') {
    content += '\n<div class="diagram">\n  <div class="diagram-title">The EchoPlex Flywheel</div>\n  <div class="diagram-body">\n    <svg class="diagram-svg flywheel" viewBox="0 0 520 520" role="img" aria-label="The EchoPlex Flywheel">\n      <defs>\n        <linearGradient id="fwGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#2a6678" /></linearGradient>\n        <marker id="fwArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#6ba9bc" /></marker>\n      </defs>\n      <circle cx="260" cy="260" r="200" fill="none" stroke="#1c3a48" stroke-width="1.5" stroke-dasharray="4 6" />\n      <circle cx="260" cy="260" r="120" fill="none" stroke="#1c3a48" stroke-width="1" stroke-dasharray="2 5" />\n      <g transform="translate(260,60)"><circle r="34" fill="url(#fwGrad)" /><text y="5" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Game</text></g>\n      <g transform="translate(433,190)"><circle r="34" fill="url(#fwGrad)" /><text y="5" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Creator</text></g>\n      <g transform="translate(433,330)"><circle r="34" fill="url(#fwGrad)" /><text y="5" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Story</text></g>\n      <g transform="translate(260,460)"><circle r="34" fill="url(#fwGrad)" /><text y="5" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Market</text></g>\n      <g transform="translate(87,330)"><circle r="34" fill="url(#fwGrad)" /><text y="5" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Community</text></g>\n      <g transform="translate(87,190)"><circle r="34" fill="url(#fwGrad)" /><text y="5" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Trade</text></g>\n      <g stroke="#6ba9bc" stroke-width="1.5" fill="none" marker-end="url(#fwArrow)">\n        <path d="M 260 100 A 200 200 0 0 1 420 200" /><path d="M 420 240 A 200 200 0 0 1 420 320" /><path d="M 400 400 A 200 200 0 0 1 300 450" /><path d="M 220 450 A 200 200 0 0 1 100 400" /><path d="M 100 320 A 200 200 0 0 1 100 240" /><path d="M 120 200 A 200 200 0 0 1 220 100" />\n      </g>\n      <text x="260" y="255" text-anchor="middle" fill="#a8bcc7" font-size="12" font-weight="500">Identity</text>\n      <text x="260" y="275" text-anchor="middle" fill="#6d8a99" font-size="10">one persistent layer</text>\n    </svg>\n  </div>\n  <div class="diagram-caption">Figure 1 — The self-reinforcing ecosystem loop</div>\n</div>';
  }

  if (id === 'the-solution') {
    content += '\n<div class="diagram">\n  <div class="diagram-title">Four-Pillar Solution Architecture</div>\n  <div class="diagram-body">\n    <svg class="diagram-svg pillars" viewBox="0 0 520 240" role="img" aria-label="Four pillars">\n      <defs>\n        <linearGradient id="pillarGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n      </defs>\n      <g class="pillar"><rect x="30" y="60" width="100" height="120" rx="8" fill="url(#pillarGrad)" opacity="0.9" /><text x="80" y="130" text-anchor="middle" fill="#e6edf0" font-size="13" font-weight="600">Identity</text><text x="80" y="150" text-anchor="middle" fill="#a8bcc7" font-size="10">one persistent profile</text></g>\n      <g class="pillar"><rect x="160" y="60" width="100" height="120" rx="8" fill="url(#pillarGrad)" opacity="0.75" /><text x="210" y="130" text-anchor="middle" fill="#e6edf0" font-size="13" font-weight="600">Ecosystem</text><text x="210" y="150" text-anchor="middle" fill="#a8bcc7" font-size="10">products compound</text></g>\n      <g class="pillar"><rect x="290" y="60" width="100" height="120" rx="8" fill="url(#pillarGrad)" opacity="0.6" /><text x="340" y="130" text-anchor="middle" fill="#e6edf0" font-size="13" font-weight="600">Reputation</text><text x="340" y="150" text-anchor="middle" fill="#a8bcc7" font-size="10">earned, not bought</text></g>\n      <g class="pillar"><rect x="420" y="60" width="100" height="120" rx="8" fill="url(#pillarGrad)" opacity="0.45" /><text x="470" y="130" text-anchor="middle" fill="#e6edf0" font-size="13" font-weight="600">Infrastructure</text><text x="470" y="150" text-anchor="middle" fill="#a8bcc7" font-size="10">invisible blockchain</text></g>\n      <line x1="30" y1="200" x2="520" y2="200" stroke="#1c3a48" stroke-width="1.5" />\n    </svg>\n  </div>\n  <div class="diagram-caption">Figure 2 — The foundational principles of EchoPlex</div>\n</div>';
  }

  var num = String(idx + 1).padStart(2, '0');
  var section = '        <!-- ===== CHAPTER ' + num + ' \u2014 ' + escapeHtml(title) + ' ===== -->\n';
  section += '        <section class="chapter" id="chapter-' + id + '" data-chapter="' + id + '" hidden>\n';
  section += '          <span class="section-number">' + num + '</span>\n';
  section += '          <h2 class="section-heading">' + escapeHtml(title) + '</h2>\n';
  section += content + '\n';
  section += '        </section>\n';
  chapterSections.push(section);
});

// Generate the full HTML
var allChapters = chapterSections.join('\n');

var fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="EchoPlex Whitepaper \u2014 A Connected Digital Entertainment Ecosystem. Version 1.0" />
  <title>EchoPlex Whitepaper \u2014 A Connected Digital Ecosystem</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="./src/css/whitepaper.css" />
</head>
<body>

  <!-- ===================== INTRO / LANDING ===================== -->
  <div class="intro-screen" id="introScreen" role="dialog" aria-modal="true" aria-label="EchoPlex Whitepaper introduction">
    <div class="intro-inner">
      <div class="intro-logo" aria-hidden="true">
        <svg width="52" height="52" viewBox="0 0 48 48" fill="none">
          <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#introGrad)" />
          <path d="M14 30V18h4l6 8 6-8h4v12h-4V24l-6 8-6-8v6h-4z" fill="#e6edf0" />
          <defs>
            <linearGradient id="introGrad" x1="0" y1="0" x2="48" y2="48">
              <stop stop-color="#2a6678" />
              <stop offset="1" stop-color="#1e5263" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="intro-eyebrow">Technical Whitepaper</div>
      <h1 class="intro-title">EchoPlex</h1>
      <p class="intro-subtitle">
        A unified digital entertainment ecosystem connecting creators, gamers, storytellers,
        communities, and digital commerce into one connected platform.
      </p>
      <div class="intro-meta">
        <span class="intro-meta-item">Version 1.0</span>
        <span class="intro-meta-dot" aria-hidden="true">\u00b7</span>
        <span class="intro-meta-item">August 2025</span>
        <span class="intro-meta-dot" aria-hidden="true">\u00b7</span>
        <span class="intro-meta-item" id="introTotalTime">~ 12 min read</span>
      </div>
      <button class="intro-cta" id="startReadingBtn" type="button">
        Start Reading
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </div>
  </div>

  <!-- ===================== APP SHELL ===================== -->
  <div class="app-shell" id="appShell" hidden>

    <!-- Reading Progress Bar (per chapter) -->
    <div class="progress-bar" id="progressBar" aria-hidden="true"></div>

    <!-- Top Header -->
    <header class="top-nav">
      <div class="top-nav-inner">
        <div class="nav-brand">
          <div class="nav-brand-mark" aria-hidden="true">E</div>
          <span class="nav-brand-text">EchoPlex</span>
          <span class="nav-brand-sep" aria-hidden="true">/</span>
          <span class="nav-brand-sub">Whitepaper</span>
        </div>
        <div class="nav-right">
          <div class="nav-progress-wrap" aria-label="Chapter reading progress">
            <span class="nav-progress-label" id="navProgressLabel">0%</span>
            <div class="nav-progress-track" aria-hidden="true">
              <div class="nav-progress-fill" id="navProgressFill"></div>
            </div>
          </div>
          <button class="theme-toggle" id="themeToggle" type="button" aria-label="Toggle color theme">
            <svg class="icon-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="2" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="22" />
              <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
              <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
              <line x1="2" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
              <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
            </svg>
            <svg class="icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
          <button class="nav-menu-toggle" id="menuToggle" type="button" aria-label="Toggle table of contents">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Sidebar overlay (mobile) -->
    <div class="sidebar-overlay" id="sidebarOverlay"></div>

    <!-- Main Layout -->
    <div class="doc-layout">

      <!-- Left Sidebar — Table of Contents -->
      <aside class="doc-sidebar" id="sidebar">
        <div class="sidebar-header">
          <div class="sidebar-title">Contents</div>
          <div class="sidebar-subtitle">EchoPlex Whitepaper \u00b7 v1.0</div>
        </div>
        <nav class="toc" id="toc" aria-label="Table of contents"></nav>
      </aside>

      <!-- Center — Chapter Content -->
      <main class="doc-content" id="content">

        <!-- ===== TABLE OF CONTENTS PAGE ===== -->
        <section class="chapter toc-page" id="chapter-toc" data-chapter="toc">
          <div class="toc-page-head">
            <span class="section-number">TOC</span>
            <h2 class="section-heading">Table of Contents</h2>
            <p class="toc-page-desc">Select a chapter to begin reading. Each chapter is self-contained with its own reading progress.</p>
          </div>
          <div class="toc-page-grid" id="tocPageGrid"></div>
        </section>

${allChapters}

        <!-- Footnotes -->
        <section class="footnotes" id="footnotes">
          <div class="footnotes-title">Footnotes</div>
          <ol>
            <li id="footnote-1">Cross-product identity linkage means that actions in one product (e.g., winning a tournament in Game Hub) influence reputation visible in all other products. <a href="#ref-1">\u21a9</a></li>
          </ol>
        </section>

        <!-- Prev / Next Navigation -->
        <nav class="doc-nav-footer" id="chapterNav" aria-label="Chapter navigation"></nav>

      </main>

      <!-- Right Sidebar — On This Page -->
      <aside class="doc-rightbar" id="rightbar">
        <div class="rightbar-section">
          <div class="rightbar-label">Reading Time</div>
          <div class="reading-time" id="readingTime">~ 1 min</div>
          <div class="reading-progress-mini" aria-hidden="true">
            <div class="reading-progress-mini-fill" id="miniProgress"></div>
          </div>
        </div>
        <div class="rightbar-section">
          <div class="rightbar-label">On This Page</div>
          <ul class="rightbar-toc" id="rightbarToc"></ul>
        </div>
      </aside>

    </div>

    <!-- Back to Top -->
    <button class="back-to-top" id="backToTop" type="button" aria-label="Back to top">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>

  </div>

  <script type="module" src="./src/js/whitepaper.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(root, 'index.html'), fullHtml);
console.log('\nFull index.html written: ' + fullHtml.length + ' chars');
