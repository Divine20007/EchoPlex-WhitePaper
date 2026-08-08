/**
 * SVG Diagram Library for EchoPlex Whitepaper
 * All diagrams use the same design language as the existing theme
 */

function diagramWrap(title, svg, caption) {
  return '\n<div class="diagram">\n  <div class="diagram-title">' + title + '</div>\n  <div class="diagram-body">\n' + svg + '\n  </div>\n  <div class="diagram-caption">' + caption + '</div>\n</div>';
}

function flywheelDiagram() {
  return diagramWrap(
    'The EchoPlex Flywheel',
    '    <svg class="diagram-svg flywheel" viewBox="0 0 520 520" role="img" aria-label="The EchoPlex Flywheel">\n' +
    '      <defs>\n' +
    '        <linearGradient id="fwGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#2a6678" /></linearGradient>\n' +
    '        <marker id="fwArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#6ba9bc" /></marker>\n' +
    '      </defs>\n' +
    '      <circle cx="260" cy="260" r="200" fill="none" stroke="#1c3a48" stroke-width="1.5" stroke-dasharray="4 6" />\n' +
    '      <circle cx="260" cy="260" r="120" fill="none" stroke="#1c3a48" stroke-width="1" stroke-dasharray="2 5" />\n' +
    '      <g transform="translate(260,60)"><circle r="34" fill="url(#fwGrad)" /><text y="5" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Game</text></g>\n' +
    '      <g transform="translate(433,190)"><circle r="34" fill="url(#fwGrad)" /><text y="5" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Creator</text></g>\n' +
    '      <g transform="translate(433,330)"><circle r="34" fill="url(#fwGrad)" /><text y="5" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Story</text></g>\n' +
    '      <g transform="translate(260,460)"><circle r="34" fill="url(#fwGrad)" /><text y="5" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Market</text></g>\n' +
    '      <g transform="translate(87,330)"><circle r="34" fill="url(#fwGrad)" /><text y="5" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Community</text></g>\n' +
    '      <g transform="translate(87,190)"><circle r="34" fill="url(#fwGrad)" /><text y="5" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Trade</text></g>\n' +
    '      <g stroke="#6ba9bc" stroke-width="1.5" fill="none" marker-end="url(#fwArrow)">\n' +
    '        <path d="M 260 100 A 200 200 0 0 1 420 200" /><path d="M 420 240 A 200 200 0 0 1 420 320" /><path d="M 400 400 A 200 200 0 0 1 300 450" /><path d="M 220 450 A 200 200 0 0 1 100 400" /><path d="M 100 320 A 200 200 0 0 1 100 240" /><path d="M 120 200 A 200 200 0 0 1 220 100" />\n' +
    '      </g>\n' +
    '      <text x="260" y="255" text-anchor="middle" fill="#a8bcc7" font-size="12" font-weight="500">Identity</text>\n' +
    '      <text x="260" y="275" text-anchor="middle" fill="#6d8a99" font-size="10">one persistent layer</text>\n' +
    '    </svg>',
    'Figure 1 — The self-reinforcing ecosystem loop'
  );
}

function pillarsDiagram() {
  return diagramWrap(
    'Four-Pillar Solution Architecture',
    '    <svg class="diagram-svg pillars" viewBox="0 0 520 240" role="img" aria-label="Four pillars">\n' +
    '      <defs>\n' +
    '        <linearGradient id="pillarGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '      </defs>\n' +
    '      <g class="pillar"><rect x="30" y="60" width="100" height="120" rx="8" fill="url(#pillarGrad)" opacity="0.9" /><text x="80" y="130" text-anchor="middle" fill="#e6edf0" font-size="13" font-weight="600">Identity</text><text x="80" y="150" text-anchor="middle" fill="#a8bcc7" font-size="10">one persistent profile</text></g>\n' +
    '      <g class="pillar"><rect x="160" y="60" width="100" height="120" rx="8" fill="url(#pillarGrad)" opacity="0.75" /><text x="210" y="130" text-anchor="middle" fill="#e6edf0" font-size="13" font-weight="600">Ecosystem</text><text x="210" y="150" text-anchor="middle" fill="#a8bcc7" font-size="10">products compound</text></g>\n' +
    '      <g class="pillar"><rect x="290" y="60" width="100" height="120" rx="8" fill="url(#pillarGrad)" opacity="0.6" /><text x="340" y="130" text-anchor="middle" fill="#e6edf0" font-size="13" font-weight="600">Reputation</text><text x="340" y="150" text-anchor="middle" fill="#a8bcc7" font-size="10">earned, not bought</text></g>\n' +
    '      <g class="pillar"><rect x="420" y="60" width="100" height="120" rx="8" fill="url(#pillarGrad)" opacity="0.45" /><text x="470" y="130" text-anchor="middle" fill="#e6edf0" font-size="13" font-weight="600">Infrastructure</text><text x="470" y="150" text-anchor="middle" fill="#a8bcc7" font-size="10">invisible blockchain</text></g>\n' +
    '      <line x1="30" y1="200" x2="520" y2="200" stroke="#1c3a48" stroke-width="1.5" />\n' +
    '    </svg>',
    'Figure 2 — The foundational principles of EchoPlex'
  );
}

function ecosystemDiagram() {
  return diagramWrap(
    'EchoPlex Ecosystem Architecture',
    '    <svg class="diagram-svg" viewBox="0 0 520 420" role="img" aria-label="EchoPlex ecosystem architecture">\n' +
    '      <defs>\n' +
    '        <linearGradient id="ecoGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '        <marker id="ecoArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#6ba9bc" /></marker>\n' +
    '      </defs>\n' +
    '      <rect x="160" y="20" width="200" height="50" rx="10" fill="url(#ecoGrad)" />\n' +
    '      <text x="260" y="50" text-anchor="middle" fill="#e6edf0" font-size="13" font-weight="600">EchoPlex Identity</text>\n' +
    '      <line x1="260" y1="70" x2="260" y2="100" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#ecoArrow)" />\n' +
    '      <g><rect x="30" y="100" width="130" height="45" rx="8" fill="url(#ecoGrad)" opacity="0.9" /><text x="95" y="128" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Game Hub</text></g>\n' +
    '      <g><rect x="195" y="100" width="130" height="45" rx="8" fill="url(#ecoGrad)" opacity="0.8" /><text x="260" y="128" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Creator Hub</text></g>\n' +
    '      <g><rect x="360" y="100" width="130" height="45" rx="8" fill="url(#ecoGrad)" opacity="0.7" /><text x="425" y="128" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Story Hub</text></g>\n' +
    '      <line x1="95" y1="145" x2="95" y2="180" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#ecoArrow)" />\n' +
    '      <line x1="260" y1="145" x2="260" y2="180" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#ecoArrow)" />\n' +
    '      <line x1="425" y1="145" x2="425" y2="180" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#ecoArrow)" />\n' +
    '      <g><rect x="30" y="180" width="130" height="45" rx="8" fill="url(#ecoGrad)" opacity="0.6" /><text x="95" y="208" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Marketplace</text></g>\n' +
    '      <g><rect x="195" y="180" width="130" height="45" rx="8" fill="url(#ecoGrad)" opacity="0.55" /><text x="260" y="208" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Communities</text></g>\n' +
    '      <g><rect x="360" y="180" width="130" height="45" rx="8" fill="url(#ecoGrad)" opacity="0.5" /><text x="425" y="208" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Guilds</text></g>\n' +
    '      <line x1="95" y1="225" x2="95" y2="260" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#ecoArrow)" />\n' +
    '      <line x1="260" y1="225" x2="260" y2="260" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#ecoArrow)" />\n' +
    '      <line x1="425" y1="225" x2="425" y2="260" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#ecoArrow)" />\n' +
    '      <g><rect x="30" y="260" width="130" height="45" rx="8" fill="url(#ecoGrad)" opacity="0.45" /><text x="95" y="288" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Reputation</text></g>\n' +
    '      <g><rect x="195" y="260" width="130" height="45" rx="8" fill="url(#ecoGrad)" opacity="0.4" /><text x="260" y="288" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">ECP</text></g>\n' +
    '      <g><rect x="360" y="260" width="130" height="45" rx="8" fill="url(#ecoGrad)" opacity="0.35" /><text x="425" y="288" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Governance</text></g>\n' +
    '      <line x1="95" y1="305" x2="95" y2="340" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#ecoArrow)" />\n' +
    '      <line x1="260" y1="305" x2="260" y2="340" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#ecoArrow)" />\n' +
    '      <line x1="425" y1="305" x2="425" y2="340" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#ecoArrow)" />\n' +
    '      <g><rect x="160" y="340" width="200" height="50" rx="10" fill="url(#ecoGrad)" opacity="0.3" /><text x="260" y="370" text-anchor="middle" fill="#e6edf0" font-size="13" font-weight="600">TradeFusion</text></g>\n' +
    '    </svg>',
    'Figure 3 — How every product connects through one identity'
  );
}

function journeyDiagram() {
  return diagramWrap(
    'The Citizen Journey',
    '    <svg class="diagram-svg" viewBox="0 0 520 360" role="img" aria-label="Citizen journey stages">\n' +
    '      <defs>\n' +
    '        <linearGradient id="journeyGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '        <marker id="journeyArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#6ba9bc" /></marker>\n' +
    '      </defs>\n' +
    '      <g><rect x="20" y="20" width="100" height="40" rx="8" fill="url(#journeyGrad)" opacity="0.9" /><text x="70" y="45" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Discover</text></g>\n' +
    '      <line x1="120" y1="40" x2="150" y2="40" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#journeyArrow)" />\n' +
    '      <g><rect x="150" y="20" width="100" height="40" rx="8" fill="url(#journeyGrad)" opacity="0.8" /><text x="200" y="45" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Join</text></g>\n' +
    '      <line x1="250" y1="40" x2="280" y2="40" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#journeyArrow)" />\n' +
    '      <g><rect x="280" y="20" width="100" height="40" rx="8" fill="url(#journeyGrad)" opacity="0.7" /><text x="330" y="45" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Explore</text></g>\n' +
    '      <line x1="380" y1="40" x2="410" y2="40" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#journeyArrow)" />\n' +
    '      <g><rect x="410" y="20" width="90" height="40" rx="8" fill="url(#journeyGrad)" opacity="0.6" /><text x="455" y="45" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Contribute</text></g>\n' +
    '      <line x1="455" y1="60" x2="455" y2="90" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#journeyArrow)" />\n' +
    '      <g><rect x="410" y="90" width="90" height="40" rx="8" fill="url(#journeyGrad)" opacity="0.55" /><text x="455" y="115" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Earn Progress</text></g>\n' +
    '      <line x1="455" y1="130" x2="455" y2="160" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#journeyArrow)" />\n' +
    '      <g><rect x="410" y="160" width="90" height="40" rx="8" fill="url(#journeyGrad)" opacity="0.5" /><text x="455" y="185" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Create</text></g>\n' +
    '      <line x1="455" y1="200" x2="455" y2="230" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#journeyArrow)" />\n' +
    '      <g><rect x="410" y="230" width="90" height="40" rx="8" fill="url(#journeyGrad)" opacity="0.45" /><text x="455" y="255" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Collaborate</text></g>\n' +
    '      <line x1="455" y1="270" x2="455" y2="300" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#journeyArrow)" />\n' +
    '      <g><rect x="410" y="300" width="90" height="40" rx="8" fill="url(#journeyGrad)" opacity="0.4" /><text x="455" y="325" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Build Reputation</text></g>\n' +
    '      <line x1="410" y1="320" x2="70" y2="320" stroke="#6ba9bc" stroke-width="1.5" stroke-dasharray="4 4" marker-end="url(#journeyArrow)" />\n' +
    '      <text x="240" y="310" text-anchor="middle" fill="#6d8a99" font-size="9">return tomorrow</text>\n' +
    '    </svg>',
    'Figure 4 — The continuous engagement loop'
  );
}

function gameHubDiagram() {
  return diagramWrap(
    'Game Hub Feature Map',
    '    <svg class="diagram-svg" viewBox="0 0 520 300" role="img" aria-label="Game Hub features">\n' +
    '      <defs>\n' +
    '        <linearGradient id="gameGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '      </defs>\n' +
    '      <rect x="160" y="20" width="200" height="50" rx="10" fill="url(#gameGrad)" />\n' +
    '      <text x="260" y="50" text-anchor="middle" fill="#e6edf0" font-size="13" font-weight="600">Game Hub</text>\n' +
    '      <g><rect x="20" y="110" width="110" height="40" rx="8" fill="url(#gameGrad)" opacity="0.8" /><text x="75" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Discovery</text></g>\n' +
    '      <g><rect x="145" y="110" width="110" height="40" rx="8" fill="url(#gameGrad)" opacity="0.7" /><text x="200" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Achievements</text></g>\n' +
    '      <g><rect x="270" y="110" width="110" height="40" rx="8" fill="url(#gameGrad)" opacity="0.6" /><text x="325" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Tournaments</text></g>\n' +
    '      <g><rect x="395" y="110" width="110" height="40" rx="8" fill="url(#gameGrad)" opacity="0.5" /><text x="450" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Leaderboards</text></g>\n' +
    '      <g><rect x="20" y="190" width="110" height="40" rx="8" fill="url(#gameGrad)" opacity="0.45" /><text x="75" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Daily Quests</text></g>\n' +
    '      <g><rect x="145" y="190" width="110" height="40" rx="8" fill="url(#gameGrad)" opacity="0.4" /><text x="200" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Seasonal Events</text></g>\n' +
    '      <g><rect x="270" y="190" width="110" height="40" rx="8" fill="url(#gameGrad)" opacity="0.35" /><text x="325" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Social Play</text></g>\n' +
    '      <g><rect x="395" y="190" width="110" height="40" rx="8" fill="url(#gameGrad)" opacity="0.3" /><text x="450" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Indie Support</text></g>\n' +
    '      <line x1="260" y1="70" x2="75" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="260" y1="70" x2="200" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="260" y1="70" x2="325" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="260" y1="70" x2="450" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="260" y1="70" x2="75" y2="190" stroke="#6ba9bc" stroke-width="1" opacity="0.4" />\n' +
    '      <line x1="260" y1="70" x2="200" y2="190" stroke="#6ba9bc" stroke-width="1" opacity="0.4" />\n' +
    '      <line x1="260" y1="70" x2="325" y2="190" stroke="#6ba9bc" stroke-width="1" opacity="0.4" />\n' +
    '      <line x1="260" y1="70" x2="450" y2="190" stroke="#6ba9bc" stroke-width="1" opacity="0.4" />\n' +
    '    </svg>',
    'Figure 5 — Core Game Hub capabilities'
  );
}

function creatorHubDiagram() {
  return diagramWrap(
    'Creator Hub Workflow',
    '    <svg class="diagram-svg" viewBox="0 0 520 300" role="img" aria-label="Creator Hub workflow">\n' +
    '      <defs>\n' +
    '        <linearGradient id="creatorGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '        <marker id="creatorArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#6ba9bc" /></marker>\n' +
    '      </defs>\n' +
    '      <g><rect x="20" y="20" width="100" height="40" rx="8" fill="url(#creatorGrad)" opacity="0.9" /><text x="70" y="45" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Create</text></g>\n' +
    '      <line x1="120" y1="40" x2="150" y2="40" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#creatorArrow)" />\n' +
    '      <g><rect x="150" y="20" width="100" height="40" rx="8" fill="url(#creatorGrad)" opacity="0.8" /><text x="200" y="45" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Publish</text></g>\n' +
    '      <line x1="250" y1="40" x2="280" y2="40" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#creatorArrow)" />\n' +
    '      <g><rect x="280" y="20" width="100" height="40" rx="8" fill="url(#creatorGrad)" opacity="0.7" /><text x="330" y="45" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Collaborate</text></g>\n' +
    '      <line x1="380" y1="40" x2="410" y2="40" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#creatorArrow)" />\n' +
    '      <g><rect x="410" y="20" width="90" height="40" rx="8" fill="url(#creatorGrad)" opacity="0.6" /><text x="455" y="45" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Monetize</text></g>\n' +
    '      <line x1="455" y1="60" x2="455" y2="90" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#creatorArrow)" />\n' +
    '      <g><rect x="410" y="90" width="90" height="40" rx="8" fill="url(#creatorGrad)" opacity="0.5" /><text x="455" y="115" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Grow</text></g>\n' +
    '      <line x1="410" y1="110" x2="70" y2="110" stroke="#6ba9bc" stroke-width="1.5" stroke-dasharray="4 4" marker-end="url(#creatorArrow)" />\n' +
    '      <text x="240" y="100" text-anchor="middle" fill="#6d8a99" font-size="9">feedback loop</text>\n' +
    '      <g><rect x="20" y="150" width="150" height="40" rx="8" fill="url(#creatorGrad)" opacity="0.4" /><text x="95" y="175" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Creator Profile</text></g>\n' +
    '      <g><rect x="185" y="150" width="150" height="40" rx="8" fill="url(#creatorGrad)" opacity="0.35" /><text x="260" y="175" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Portfolio</text></g>\n' +
    '      <g><rect x="350" y="150" width="150" height="40" rx="8" fill="url(#creatorGrad)" opacity="0.3" /><text x="425" y="175" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Analytics</text></g>\n' +
    '      <g><rect x="20" y="230" width="150" height="40" rx="8" fill="url(#creatorGrad)" opacity="0.25" /><text x="95" y="255" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Licensing</text></g>\n' +
    '      <g><rect x="185" y="230" width="150" height="40" rx="8" fill="url(#creatorGrad)" opacity="0.2" /><text x="260" y="255" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Education</text></g>\n' +
    '      <g><rect x="350" y="230" width="150" height="40" rx="8" fill="url(#creatorGrad)" opacity="0.15" /><text x="425" y="255" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">AI Tools</text></g>\n' +
    '    </svg>',
    'Figure 6 — From idea to sustainable creative career'
  );
}

function storyHubDiagram() {
  return diagramWrap(
    'Story Hub Living World Model',
    '    <svg class="diagram-svg" viewBox="0 0 520 300" role="img" aria-label="Story Hub living world model">\n' +
    '      <defs>\n' +
    '        <linearGradient id="storyGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '      </defs>\n' +
    '      <circle cx="260" cy="120" r="50" fill="url(#storyGrad)" />\n' +
    '      <text x="260" y="115" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Story</text>\n' +
    '      <text x="260" y="132" text-anchor="middle" fill="#a8bcc7" font-size="9">World</text>\n' +
    '      <g><rect x="20" y="40" width="100" height="35" rx="8" fill="url(#storyGrad)" opacity="0.7" /><text x="70" y="62" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Characters</text></g>\n' +
    '      <g><rect x="20" y="100" width="100" height="35" rx="8" fill="url(#storyGrad)" opacity="0.6" /><text x="70" y="122" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Locations</text></g>\n' +
    '      <g><rect x="20" y="160" width="100" height="35" rx="8" fill="url(#storyGrad)" opacity="0.5" /><text x="70" y="182" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Lore</text></g>\n' +
    '      <g><rect x="400" y="40" width="100" height="35" rx="8" fill="url(#storyGrad)" opacity="0.7" /><text x="450" y="62" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Fan Art</text></g>\n' +
    '      <g><rect x="400" y="100" width="100" height="35" rx="8" fill="url(#storyGrad)" opacity="0.6" /><text x="450" y="122" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Music</text></g>\n' +
    '      <g><rect x="400" y="160" width="100" height="35" rx="8" fill="url(#storyGrad)" opacity="0.5" /><text x="450" y="182" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Games</text></g>\n' +
    '      <g><rect x="20" y="240" width="100" height="35" rx="8" fill="url(#storyGrad)" opacity="0.4" /><text x="70" y="262" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Collectibles</text></g>\n' +
    '      <g><rect x="400" y="240" width="100" height="35" rx="8" fill="url(#storyGrad)" opacity="0.4" /><text x="450" y="262" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Events</text></g>\n' +
    '      <line x1="120" y1="58" x2="210" y2="95" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="120" y1="118" x2="210" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="120" y1="178" x2="210" y2="130" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="400" y1="58" x2="310" y2="95" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="400" y1="118" x2="310" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="400" y1="178" x2="310" y2="130" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="120" y1="258" x2="210" y2="150" stroke="#6ba9bc" stroke-width="1" opacity="0.4" />\n' +
    '      <line x1="400" y1="258" x2="310" y2="150" stroke="#6ba9bc" stroke-width="1" opacity="0.4" />\n' +
    '    </svg>',
    'Figure 7 — Every story becomes a living ecosystem'
  );
}

function marketplaceDiagram() {
  return diagramWrap(
    'Marketplace Value Flow',
    '    <svg class="diagram-svg" viewBox="0 0 520 300" role="img" aria-label="Marketplace value flow">\n' +
    '      <defs>\n' +
    '        <linearGradient id="marketGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '        <marker id="marketArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#6ba9bc" /></marker>\n' +
    '      </defs>\n' +
    '      <g><rect x="20" y="20" width="140" height="50" rx="10" fill="url(#marketGrad)" opacity="0.9" /><text x="90" y="42" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Creator</text><text x="90" y="58" text-anchor="middle" fill="#a8bcc7" font-size="8">publishes work</text></g>\n' +
    '      <line x1="160" y1="45" x2="190" y2="45" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#marketArrow)" />\n' +
    '      <g><rect x="190" y="20" width="140" height="50" rx="10" fill="url(#marketGrad)" opacity="0.8" /><text x="260" y="42" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Marketplace</text><text x="260" y="58" text-anchor="middle" fill="#a8bcc7" font-size="8">lists & distributes</text></g>\n' +
    '      <line x1="330" y1="45" x2="360" y2="45" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#marketArrow)" />\n' +
    '      <g><rect x="360" y="20" width="140" height="50" rx="10" fill="url(#marketGrad)" opacity="0.7" /><text x="430" y="42" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Citizen</text><text x="430" y="58" text-anchor="middle" fill="#a8bcc7" font-size="8">discovers & buys</text></g>\n' +
    '      <line x1="430" y1="70" x2="430" y2="100" stroke="#6ba9bc" stroke-width="1.5" marker-end="url(#marketArrow)" />\n' +
    '      <g><rect x="360" y="100" width="140" height="50" rx="10" fill="url(#marketGrad)" opacity="0.6" /><text x="430" y="122" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Royalties</text><text x="430" y="138" text-anchor="middle" fill="#a8bcc7" font-size="8">ongoing support</text></g>\n' +
    '      <line x1="360" y1="125" x2="90" y2="125" stroke="#6ba9bc" stroke-width="1.5" stroke-dasharray="4 4" marker-end="url(#marketArrow)" />\n' +
    '      <text x="225" y="115" text-anchor="middle" fill="#6d8a99" font-size="9">revenue flows back</text>\n' +
    '      <g><rect x="20" y="160" width="150" height="40" rx="8" fill="url(#marketGrad)" opacity="0.4" /><text x="95" y="185" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Licensing</text></g>\n' +
    '      <g><rect x="185" y="160" width="150" height="40" rx="8" fill="url(#marketGrad)" opacity="0.35" /><text x="260" y="185" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Collectibles</text></g>\n' +
    '      <g><rect x="350" y="160" width="150" height="40" rx="8" fill="url(#marketGrad)" opacity="0.3" /><text x="425" y="185" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Reviews</text></g>\n' +
    '      <g><rect x="20" y="240" width="150" height="40" rx="8" fill="url(#marketGrad)" opacity="0.25" /><text x="95" y="265" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Asset Pages</text></g>\n' +
    '      <g><rect x="185" y="240" width="150" height="40" rx="8" fill="url(#marketGrad)" opacity="0.2" /><text x="260" y="265" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Ownership Timeline</text></g>\n' +
    '      <g><rect x="350" y="240" width="150" height="40" rx="8" fill="url(#marketGrad)" opacity="0.15" /><text x="425" y="265" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Security</text></g>\n' +
    '    </svg>',
    'Figure 8 — How value circulates through the ecosystem'
  );
}

function communityDiagram() {
  return diagramWrap(
    'Community & Guild Structure',
    '    <svg class="diagram-svg" viewBox="0 0 520 300" role="img" aria-label="Community and guild structure">\n' +
    '      <defs>\n' +
    '        <linearGradient id="commGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '      </defs>\n' +
    '      <rect x="160" y="20" width="200" height="50" rx="10" fill="url(#commGrad)" />\n' +
    '      <text x="260" y="50" text-anchor="middle" fill="#e6edf0" font-size="13" font-weight="600">Communities</text>\n' +
    '      <g><rect x="20" y="110" width="110" height="40" rx="8" fill="url(#commGrad)" opacity="0.7" /><text x="75" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Discussions</text></g>\n' +
    '      <g><rect x="145" y="110" width="110" height="40" rx="8" fill="url(#commGrad)" opacity="0.6" /><text x="200" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Events</text></g>\n' +
    '      <g><rect x="270" y="110" width="110" height="40" rx="8" fill="url(#commGrad)" opacity="0.5" /><text x="325" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Mentorship</text></g>\n' +
    '      <g><rect x="395" y="110" width="110" height="40" rx="8" fill="url(#commGrad)" opacity="0.4" /><text x="450" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Recognition</text></g>\n' +
    '      <line x1="260" y1="70" x2="75" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="260" y1="70" x2="200" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="260" y1="70" x2="325" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="260" y1="70" x2="450" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <rect x="160" y="190" width="200" height="50" rx="10" fill="url(#commGrad)" opacity="0.8" />\n' +
    '      <text x="260" y="220" text-anchor="middle" fill="#e6edf0" font-size="13" font-weight="600">Guilds</text>\n' +
    '      <g><rect x="20" y="240" width="110" height="40" rx="8" fill="url(#commGrad)" opacity="0.5" /><text x="75" y="265" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Guild Hall</text></g>\n' +
    '      <g><rect x="145" y="240" width="110" height="40" rx="8" fill="url(#commGrad)" opacity="0.45" /><text x="200" y="265" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Trophy Room</text></g>\n' +
    '      <g><rect x="270" y="240" width="110" height="40" rx="8" fill="url(#commGrad)" opacity="0.4" /><text x="325" y="265" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Knowledge Library</text></g>\n' +
    '      <g><rect x="395" y="240" width="110" height="40" rx="8" fill="url(#commGrad)" opacity="0.35" /><text x="450" y="265" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Showcase Gallery</text></g>\n' +
    '      <line x1="260" y1="150" x2="260" y2="190" stroke="#6ba9bc" stroke-width="1.5" />\n' +
    '    </svg>',
    'Figure 9 — From open communities to structured guilds'
  );
}

function tradefusionDiagram() {
  return diagramWrap(
    'TradeFusion Financial Layer',
    '    <svg class="diagram-svg" viewBox="0 0 520 300" role="img" aria-label="TradeFusion financial layer">\n' +
    '      <defs>\n' +
    '        <linearGradient id="tradeGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '      </defs>\n' +
    '      <rect x="160" y="20" width="200" height="50" rx="10" fill="url(#tradeGrad)" />\n' +
    '      <text x="260" y="50" text-anchor="middle" fill="#e6edf0" font-size="13" font-weight="600">TradeFusion</text>\n' +
    '      <g><rect x="20" y="110" width="110" height="40" rx="8" fill="url(#tradeGrad)" opacity="0.7" /><text x="75" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Wallet</text></g>\n' +
    '      <g><rect x="145" y="110" width="110" height="40" rx="8" fill="url(#tradeGrad)" opacity="0.6" /><text x="200" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Payments</text></g>\n' +
    '      <g><rect x="270" y="110" width="110" height="40" rx="8" fill="url(#tradeGrad)" opacity="0.5" /><text x="325" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Asset Mgmt</text></g>\n' +
    '      <g><rect x="395" y="110" width="110" height="40" rx="8" fill="url(#tradeGrad)" opacity="0.4" /><text x="450" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Trading</text></g>\n' +
    '      <line x1="260" y1="70" x2="75" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="260" y1="70" x2="200" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="260" y1="70" x2="325" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="260" y1="70" x2="450" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <g><rect x="20" y="190" width="110" height="40" rx="8" fill="url(#tradeGrad)" opacity="0.35" /><text x="75" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Security</text></g>\n' +
    '      <g><rect x="145" y="190" width="110" height="40" rx="8" fill="url(#tradeGrad)" opacity="0.3" /><text x="200" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Creator Payouts</text></g>\n' +
    '      <g><rect x="270" y="190" width="110" height="40" rx="8" fill="url(#tradeGrad)" opacity="0.25" /><text x="325" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Cross-Chain</text></g>\n' +
    '      <g><rect x="395" y="190" width="110" height="40" rx="8" fill="url(#tradeGrad)" opacity="0.2" /><text x="450" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Privacy</text></g>\n' +
    '      <g><rect x="20" y="250" width="230" height="35" rx="8" fill="url(#tradeGrad)" opacity="0.15" /><text x="135" y="272" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Community Funding</text></g>\n' +
    '      <g><rect x="270" y="250" width="230" height="35" rx="8" fill="url(#tradeGrad)" opacity="0.12" /><text x="385" y="272" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">AI Financial Insights</text></g>\n' +
    '    </svg>',
    'Figure 10 — The invisible financial engine'
  );
}

function architectureDiagram() {
  return diagramWrap(
    'Technical Architecture Layers',
    '    <svg class="diagram-svg layers" viewBox="0 0 520 340" role="img" aria-label="Technical architecture layers">\n' +
    '      <defs>\n' +
    '        <linearGradient id="archGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '      </defs>\n' +
    '      <g class="layer"><rect x="20" y="20" width="480" height="50" rx="10" fill="url(#archGrad)" opacity="0.9" /><text x="260" y="50" text-anchor="middle" fill="#e6edf0" font-size="12" font-weight="600">Application Layer</text></g>\n' +
    '      <g class="layer"><rect x="20" y="90" width="480" height="50" rx="10" fill="url(#archGrad)" opacity="0.75" /><text x="260" y="120" text-anchor="middle" fill="#e6edf0" font-size="12" font-weight="600">Product Modules</text></g>\n' +
    '      <g class="layer"><rect x="20" y="160" width="480" height="50" rx="10" fill="url(#archGrad)" opacity="0.6" /><text x="260" y="190" text-anchor="middle" fill="#e6edf0" font-size="12" font-weight="600">Core Platform Services</text></g>\n' +
    '      <g class="layer"><rect x="20" y="230" width="480" height="50" rx="10" fill="url(#archGrad)" opacity="0.45" /><text x="260" y="260" text-anchor="middle" fill="#e6edf0" font-size="12" font-weight="600">Identity & Data Layer</text></g>\n' +
    '      <g class="layer"><rect x="20" y="300" width="480" height="30" rx="8" fill="url(#archGrad)" opacity="0.3" /><text x="260" y="320" text-anchor="middle" fill="#e6edf0" font-size="11" font-weight="600">Blockchain & Infrastructure</text></g>\n' +
    '    </svg>',
    'Figure 11 — Modular, layered architecture'
  );
}

function reputationDiagram() {
  return diagramWrap(
    'Reputation & Progression System',
    '    <svg class="diagram-svg" viewBox="0 0 520 300" role="img" aria-label="Reputation and progression system">\n' +
    '      <defs>\n' +
    '        <linearGradient id="repGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '      </defs>\n' +
    '      <g><rect x="20" y="20" width="230" height="50" rx="10" fill="url(#repGrad)" opacity="0.9" /><text x="135" y="42" text-anchor="middle" fill="#e6edf0" font-size="12" font-weight="600">Progression</text><text x="135" y="58" text-anchor="middle" fill="#a8bcc7" font-size="9">experience · levels</text></g>\n' +
    '      <g><rect x="270" y="20" width="230" height="50" rx="10" fill="url(#repGrad)" opacity="0.7" /><text x="385" y="42" text-anchor="middle" fill="#e6edf0" font-size="12" font-weight="600">Reputation</text><text x="385" y="58" text-anchor="middle" fill="#a8bcc7" font-size="9">trust · character</text></g>\n' +
    '      <g><rect x="20" y="110" width="110" height="40" rx="8" fill="url(#repGrad)" opacity="0.5" /><text x="75" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Levels</text></g>\n' +
    '      <g><rect x="145" y="110" width="110" height="40" rx="8" fill="url(#repGrad)" opacity="0.45" /><text x="200" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Badges</text></g>\n' +
    '      <g><rect x="270" y="110" width="110" height="40" rx="8" fill="url(#repGrad)" opacity="0.4" /><text x="325" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Milestones</text></g>\n' +
    '      <g><rect x="395" y="110" width="110" height="40" rx="8" fill="url(#repGrad)" opacity="0.35" /><text x="450" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Signals</text></g>\n' +
    '      <g><rect x="20" y="190" width="230" height="40" rx="8" fill="url(#repGrad)" opacity="0.3" /><text x="135" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Recognition Without Popularity</text></g>\n' +
    '      <g><rect x="270" y="190" width="230" height="40" rx="8" fill="url(#repGrad)" opacity="0.25" /><text x="385" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Reputation Recovery</text></g>\n' +
    '      <g><rect x="20" y="250" width="480" height="35" rx="8" fill="url(#repGrad)" opacity="0.15" /><text x="260" y="272" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Anti-Abuse Measures</text></g>\n' +
    '    </svg>',
    'Figure 12 — Two complementary systems'
  );
}

function rewardsDiagram() {
  return diagramWrap(
    'ECP Reward Ecosystem',
    '    <svg class="diagram-svg" viewBox="0 0 520 300" role="img" aria-label="ECP reward ecosystem">\n' +
    '      <defs>\n' +
    '        <linearGradient id="ecpGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '      </defs>\n' +
    '      <circle cx="260" cy="100" r="45" fill="url(#ecpGrad)" />\n' +
    '      <text x="260" y="95" text-anchor="middle" fill="#e6edf0" font-size="12" font-weight="600">ECP</text>\n' +
    '      <text x="260" y="112" text-anchor="middle" fill="#a8bcc7" font-size="9">contribution</text>\n' +
    '      <g><rect x="20" y="30" width="100" height="35" rx="8" fill="url(#ecpGrad)" opacity="0.7" /><text x="70" y="52" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Gaming</text></g>\n' +
    '      <g><rect x="20" y="90" width="100" height="35" rx="8" fill="url(#ecpGrad)" opacity="0.6" /><text x="70" y="112" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Creation</text></g>\n' +
    '      <g><rect x="20" y="150" width="100" height="35" rx="8" fill="url(#ecpGrad)" opacity="0.5" /><text x="70" y="172" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Community</text></g>\n' +
    '      <g><rect x="20" y="210" width="100" height="35" rx="8" fill="url(#ecpGrad)" opacity="0.4" /><text x="70" y="232" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Learning</text></g>\n' +
    '      <g><rect x="400" y="30" width="100" height="35" rx="8" fill="url(#ecpGrad)" opacity="0.7" /><text x="450" y="52" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Profile</text></g>\n' +
    '      <g><rect x="400" y="90" width="100" height="35" rx="8" fill="url(#ecpGrad)" opacity="0.6" /><text x="450" y="112" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Badges</text></g>\n' +
    '      <g><rect x="400" y="150" width="100" height="35" rx="8" fill="url(#ecpGrad)" opacity="0.5" /><text x="450" y="172" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Events</text></g>\n' +
    '      <g><rect x="400" y="210" width="100" height="35" rx="8" fill="url(#ecpGrad)" opacity="0.4" /><text x="450" y="232" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">ECP Store</text></g>\n' +
    '      <line x1="120" y1="48" x2="215" y2="80" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="120" y1="108" x2="215" y2="95" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="120" y1="168" x2="215" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="120" y1="228" x2="215" y2="125" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="400" y1="48" x2="305" y2="80" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="400" y1="108" x2="305" y2="95" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="400" y1="168" x2="305" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="400" y1="228" x2="305" y2="125" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '    </svg>',
    'Figure 13 — Earning and using EchoPlex Points'
  );
}

function tokenDiagram() {
  return diagramWrap(
    'ECP → $ECHO Evolution',
    '    <svg class="diagram-svg" viewBox="0 0 520 300" role="img" aria-label="ECP to ECHO token evolution">\n' +
    '      <defs>\n' +
    '        <linearGradient id="tokenGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '        <marker id="tokenArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#6ba9bc" /></marker>\n' +
    '      </defs>\n' +
    '      <g><rect x="20" y="20" width="200" height="60" rx="10" fill="url(#tokenGrad)" opacity="0.9" /><text x="120" y="45" text-anchor="middle" fill="#e6edf0" font-size="12" font-weight="600">ECP</text><text x="120" y="65" text-anchor="middle" fill="#a8bcc7" font-size="9">contribution · non-tradable</text></g>\n' +
    '      <line x1="220" y1="50" x2="300" y2="50" stroke="#6ba9bc" stroke-width="2" marker-end="url(#tokenArrow)" />\n' +
    '      <text x="260" y="40" text-anchor="middle" fill="#6d8a99" font-size="9">ecosystem readiness</text>\n' +
    '      <g><rect x="300" y="20" width="200" height="60" rx="10" fill="url(#tokenGrad)" opacity="0.7" /><text x="400" y="45" text-anchor="middle" fill="#e6edf0" font-size="12" font-weight="600">$ECHO</text><text x="400" y="65" text-anchor="middle" fill="#a8bcc7" font-size="9">governance · tradable</text></g>\n' +
    '      <g><rect x="20" y="120" width="150" height="40" rx="8" fill="url(#tokenGrad)" opacity="0.5" /><text x="95" y="145" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Governance</text></g>\n' +
    '      <g><rect x="185" y="120" width="150" height="40" rx="8" fill="url(#tokenGrad)" opacity="0.45" /><text x="260" y="145" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Creator Economy</text></g>\n' +
    '      <g><rect x="350" y="120" width="150" height="40" rx="8" fill="url(#tokenGrad)" opacity="0.4" /><text x="425" y="145" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Marketplace</text></g>\n' +
    '      <g><rect x="20" y="200" width="150" height="40" rx="8" fill="url(#tokenGrad)" opacity="0.35" /><text x="95" y="225" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Community Funding</text></g>\n' +
    '      <g><rect x="185" y="200" width="150" height="40" rx="8" fill="url(#tokenGrad)" opacity="0.3" /><text x="260" y="225" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">TradeFusion</text></g>\n' +
    '      <g><rect x="350" y="200" width="150" height="40" rx="8" fill="url(#tokenGrad)" opacity="0.25" /><text x="425" y="225" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Security</text></g>\n' +
    '    </svg>',
    'Figure 14 — Token follows ecosystem readiness'
  );
}

function businessDiagram() {
  return diagramWrap(
    'Business Model Revenue Streams',
    '    <svg class="diagram-svg" viewBox="0 0 520 300" role="img" aria-label="Business model revenue streams">\n' +
    '      <defs>\n' +
    '        <linearGradient id="bizGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '      </defs>\n' +
    '      <rect x="160" y="20" width="200" height="50" rx="10" fill="url(#bizGrad)" />\n' +
    '      <text x="260" y="50" text-anchor="middle" fill="#e6edf0" font-size="13" font-weight="600">EchoPlex</text>\n' +
    '      <g><rect x="20" y="110" width="110" height="40" rx="8" fill="url(#bizGrad)" opacity="0.7" /><text x="75" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Marketplace</text></g>\n' +
    '      <g><rect x="145" y="110" width="110" height="40" rx="8" fill="url(#bizGrad)" opacity="0.6" /><text x="200" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Premium</text></g>\n' +
    '      <g><rect x="270" y="110" width="110" height="40" rx="8" fill="url(#bizGrad)" opacity="0.5" /><text x="325" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Creator Svcs</text></g>\n' +
    '      <g><rect x="395" y="110" width="110" height="40" rx="8" fill="url(#bizGrad)" opacity="0.4" /><text x="450" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Business</text></g>\n' +
    '      <line x1="260" y1="70" x2="75" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="260" y1="70" x2="200" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="260" y1="70" x2="325" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="260" y1="70" x2="450" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <g><rect x="20" y="190" width="110" height="40" rx="8" fill="url(#bizGrad)" opacity="0.35" /><text x="75" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Education</text></g>\n' +
    '      <g><rect x="145" y="190" width="110" height="40" rx="8" fill="url(#bizGrad)" opacity="0.3" /><text x="200" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">TradeFusion</text></g>\n' +
    '      <g><rect x="270" y="190" width="110" height="40" rx="8" fill="url(#bizGrad)" opacity="0.25" /><text x="325" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Partnerships</text></g>\n' +
    '      <g><rect x="395" y="190" width="110" height="40" rx="8" fill="url(#bizGrad)" opacity="0.2" /><text x="450" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Advertising</text></g>\n' +
    '      <g><rect x="20" y="250" width="480" height="35" rx="8" fill="url(#bizGrad)" opacity="0.12" /><text x="260" y="272" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Diversified · Sustainable · Ecosystem-Aligned</text></g>\n' +
    '    </svg>',
    'Figure 15 — Multiple aligned revenue streams'
  );
}

function roadmapDiagram() {
  return diagramWrap(
    'Eight-Phase Roadmap',
    '    <svg class="diagram-svg roadmap" viewBox="0 0 520 420" role="img" aria-label="Eight phase roadmap">\n' +
    '      <defs>\n' +
    '        <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '      </defs>\n' +
    '      <line x1="60" y1="30" x2="60" y2="390" stroke="#1c3a48" stroke-width="2" />\n' +
    '      <g class="road-node"><circle cx="60" cy="50" r="8" fill="url(#roadGrad)" /><text x="80" y="45" fill="#e6edf0" font-size="11" font-weight="600">Phase 1 — Foundation</text><text x="80" y="60" fill="#6d8a99" font-size="9">core platform · identity · ECP</text></g>\n' +
    '      <g class="road-node"><circle cx="60" cy="95" r="8" fill="url(#roadGrad)" /><text x="80" y="90" fill="#e6edf0" font-size="11" font-weight="600">Phase 2 — Creator Ecosystem</text><text x="80" y="105" fill="#6d8a99" font-size="9">Creator Hub · publishing · analytics</text></g>\n' +
    '      <g class="road-node"><circle cx="60" cy="140" r="8" fill="url(#roadGrad)" /><text x="80" y="135" fill="#e6edf0" font-size="11" font-weight="600">Phase 3 — Stories & Communities</text><text x="80" y="150" fill="#6d8a99" font-size="9">Story Hub · guilds · events</text></g>\n' +
    '      <g class="road-node"><circle cx="60" cy="185" r="8" fill="url(#roadGrad)" /><text x="80" y="180" fill="#e6edf0" font-size="11" font-weight="600">Phase 4 — Marketplace</text><text x="80" y="195" fill="#6d8a99" font-size="9">storefronts · licensing · royalties</text></g>\n' +
    '      <g class="road-node"><circle cx="60" cy="230" r="8" fill="url(#roadGrad)" /><text x="80" y="225" fill="#e6edf0" font-size="11" font-weight="600">Phase 5 — Game Hub</text><text x="80" y="240" fill="#6d8a99" font-size="9">discovery · tournaments · achievements</text></g>\n' +
    '      <g class="road-node"><circle cx="60" cy="275" r="8" fill="url(#roadGrad)" /><text x="80" y="270" fill="#e6edf0" font-size="11" font-weight="600">Phase 6 — TradeFusion</text><text x="80" y="285" fill="#6d8a99" font-size="9">wallet · payments · asset management</text></g>\n' +
    '      <g class="road-node"><circle cx="60" cy="320" r="8" fill="url(#roadGrad)" /><text x="80" y="315" fill="#e6edf0" font-size="11" font-weight="600">Phase 7 — Ecosystem Expansion</text><text x="80" y="330" fill="#6d8a99" font-size="9">APIs · SDKs · mobile · AI tools</text></g>\n' +
    '      <g class="road-node"><circle cx="60" cy="365" r="8" fill="url(#roadGrad)" /><text x="80" y="360" fill="#e6edf0" font-size="11" font-weight="600">Phase 8 — Decentralization</text><text x="80" y="375" fill="#6d8a99" font-size="9">$ECHO · governance · DAO</text></g>\n' +
    '    </svg>',
    'Figure 16 — Sequential phases toward a decentralized ecosystem'
  );
}

function riskDiagram() {
  return diagramWrap(
    'Risk Management Framework',
    '    <svg class="diagram-svg" viewBox="0 0 520 300" role="img" aria-label="Risk management framework">\n' +
    '      <defs>\n' +
    '        <linearGradient id="riskGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '      </defs>\n' +
    '      <rect x="160" y="20" width="200" height="50" rx="10" fill="url(#riskGrad)" />\n' +
    '      <text x="260" y="50" text-anchor="middle" fill="#e6edf0" font-size="13" font-weight="600">Risk Management</text>\n' +
    '      <g><rect x="20" y="110" width="110" height="40" rx="8" fill="url(#riskGrad)" opacity="0.7" /><text x="75" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Technology</text></g>\n' +
    '      <g><rect x="145" y="110" width="110" height="40" rx="8" fill="url(#riskGrad)" opacity="0.6" /><text x="200" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Security</text></g>\n' +
    '      <g><rect x="270" y="110" width="110" height="40" rx="8" fill="url(#riskGrad)" opacity="0.5" /><text x="325" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Regulatory</text></g>\n' +
    '      <g><rect x="395" y="110" width="110" height="40" rx="8" fill="url(#riskGrad)" opacity="0.4" /><text x="450" y="135" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Market</text></g>\n' +
    '      <line x1="260" y1="70" x2="75" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="260" y1="70" x2="200" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="260" y1="70" x2="325" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="260" y1="70" x2="450" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <g><rect x="20" y="190" width="110" height="40" rx="8" fill="url(#riskGrad)" opacity="0.35" /><text x="75" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Adoption</text></g>\n' +
    '      <g><rect x="145" y="190" width="110" height="40" rx="8" fill="url(#riskGrad)" opacity="0.3" /><text x="200" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Financial</text></g>\n' +
    '      <g><rect x="270" y="190" width="110" height="40" rx="8" fill="url(#riskGrad)" opacity="0.25" /><text x="325" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Blockchain</text></g>\n' +
    '      <g><rect x="395" y="190" width="110" height="40" rx="8" fill="url(#riskGrad)" opacity="0.2" /><text x="450" y="215" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Community</text></g>\n' +
    '      <g><rect x="20" y="250" width="480" height="35" rx="8" fill="url(#riskGrad)" opacity="0.12" /><text x="260" y="272" text-anchor="middle" fill="#e6edf0" font-size="10" font-weight="600">Transparent · Adaptive · Resilient</text></g>\n' +
    '    </svg>',
    'Figure 17 — Proactive risk identification and mitigation'
  );
}

function conclusionDiagram() {
  return diagramWrap(
    'One Identity, One Journey',
    '    <svg class="diagram-svg" viewBox="0 0 520 300" role="img" aria-label="One identity one journey">\n' +
    '      <defs>\n' +
    '        <linearGradient id="conclGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8398" /><stop offset="1" stop-color="#1e5263" /></linearGradient>\n' +
    '      </defs>\n' +
    '      <circle cx="260" cy="100" r="50" fill="url(#conclGrad)" />\n' +
    '      <text x="260" y="95" text-anchor="middle" fill="#e6edf0" font-size="12" font-weight="600">Identity</text>\n' +
    '      <text x="260" y="112" text-anchor="middle" fill="#a8bcc7" font-size="9">one persistent layer</text>\n' +
    '      <g><rect x="20" y="30" width="100" height="35" rx="8" fill="url(#conclGrad)" opacity="0.7" /><text x="70" y="52" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Create</text></g>\n' +
    '      <g><rect x="20" y="90" width="100" height="35" rx="8" fill="url(#conclGrad)" opacity="0.6" /><text x="70" y="112" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Play</text></g>\n' +
    '      <g><rect x="20" y="150" width="100" height="35" rx="8" fill="url(#conclGrad)" opacity="0.5" /><text x="70" y="172" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Learn</text></g>\n' +
    '      <g><rect x="20" y="210" width="100" height="35" rx="8" fill="url(#conclGrad)" opacity="0.4" /><text x="70" y="232" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Connect</text></g>\n' +
    '      <g><rect x="400" y="30" width="100" height="35" rx="8" fill="url(#conclGrad)" opacity="0.7" /><text x="450" y="52" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Own</text></g>\n' +
    '      <g><rect x="400" y="90" width="100" height="35" rx="8" fill="url(#conclGrad)" opacity="0.6" /><text x="450" y="112" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Earn</text></g>\n' +
    '      <g><rect x="400" y="150" width="100" height="35" rx="8" fill="url(#conclGrad)" opacity="0.5" /><text x="450" y="172" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Govern</text></g>\n' +
    '      <g><rect x="400" y="210" width="100" height="35" rx="8" fill="url(#conclGrad)" opacity="0.4" /><text x="450" y="232" text-anchor="middle" fill="#e6edf0" font-size="9" font-weight="600">Belong</text></g>\n' +
    '      <line x1="120" y1="48" x2="210" y2="80" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="120" y1="108" x2="210" y2="95" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="120" y1="168" x2="210" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="120" y1="228" x2="210" y2="125" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="400" y1="48" x2="310" y2="80" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="400" y1="108" x2="310" y2="95" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="400" y1="168" x2="310" y2="110" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '      <line x1="400" y1="228" x2="310" y2="125" stroke="#6ba9bc" stroke-width="1" opacity="0.5" />\n' +
    '    </svg>',
    'Figure 18 — Every experience strengthens one identity'
  );
}

module.exports = {
  flywheelDiagram: flywheelDiagram,
  pillarsDiagram: pillarsDiagram,
  ecosystemDiagram: ecosystemDiagram,
  journeyDiagram: journeyDiagram,
  gameHubDiagram: gameHubDiagram,
  creatorHubDiagram: creatorHubDiagram,
  storyHubDiagram: storyHubDiagram,
  marketplaceDiagram: marketplaceDiagram,
  communityDiagram: communityDiagram,
  tradefusionDiagram: tradefusionDiagram,
  architectureDiagram: architectureDiagram,
  reputationDiagram: reputationDiagram,
  rewardsDiagram: rewardsDiagram,
  tokenDiagram: tokenDiagram,
  businessDiagram: businessDiagram,
  roadmapDiagram: roadmapDiagram,
  riskDiagram: riskDiagram,
  conclusionDiagram: conclusionDiagram
};