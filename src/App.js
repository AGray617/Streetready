<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cleanli — Logo & Brand Identity v2</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --teal: #0D6E6E; --teal-deep: #0A5858; --teal-light: #E6F4F4;
    --teal-mid: #4DA8A8; --navy: #1A1A2E; --cream: #FAF8F4;
    --warm-white: #FDFCFA; --gold: #C9A96E; --gold-light: #F5EDD8;
    --gray: #8A8A8A; --gray-light: #EBEBEB;
  }
  body { background: #F2F0EB; font-family: 'Jost', sans-serif; color: var(--navy); }

.page-header { background: var(–navy); padding: 60px 80px; display: flex; justify-content: space-between; align-items: flex-end; }
.page-header h1 { font-family: ‘Cormorant Garamond’, serif; font-weight: 300; font-size: 14px; letter-spacing: 0.35em; color: var(–teal-mid); text-transform: uppercase; }
.page-header p { font-size: 11px; letter-spacing: 0.2em; color: #555570; text-transform: uppercase; }

.section-label { font-size: 10px; letter-spacing: 0.4em; text-transform: uppercase; color: var(–gray); padding: 60px 80px 24px; border-bottom: 1px solid #DEDAD4; }
.section-gap { height: 3px; background: #DEDAD4; }

.concept-panel { background: var(–warm-white); padding: 80px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.concept-rationale h2 { font-family: ‘Cormorant Garamond’, serif; font-weight: 400; font-size: 38px; line-height: 1.2; color: var(–navy); margin-bottom: 28px; }
.concept-rationale h2 em { color: var(–teal); font-style: italic; }
.concept-rationale p { font-size: 14px; font-weight: 300; color: #555; line-height: 1.9; margin-bottom: 20px; }
.tag { display: inline-block; font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase; color: var(–teal); border: 1px solid var(–teal); padding: 5px 14px; margin: 4px 4px 4px 0; }

.logo-primary-display { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px; background: var(–warm-white); border: 1px solid var(–gray-light); gap: 0; }
.logo-lockup { display: flex; align-items: center; gap: 18px; }
.logo-lockup.vertical { flex-direction: column; gap: 12px; }
.logo-wordmark { display: flex; flex-direction: column; gap: 4px; }
.logo-wordmark .name { font-family: ‘Cormorant Garamond’, serif; font-weight: 500; font-size: 36px; letter-spacing: 0.18em; text-transform: uppercase; line-height: 1; }
.logo-wordmark .tagline { font-family: ‘Jost’, sans-serif; font-weight: 200; font-size: 9px; letter-spacing: 0.38em; text-transform: uppercase; color: var(–gray); }
.logo-wordmark .tagline.light { color: rgba(255,255,255,0.45); }

.variants-panel { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
.variant { padding: 50px 30px; display: flex; flex-direction: column; align-items: center; gap: 20px; }
.variant-label { font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase; opacity: 0.45; }
.v1 { background: var(–warm-white); }
.v2 { background: var(–teal); }
.v3 { background: var(–navy); }
.v4 { background: var(–cream); border: 1px solid var(–gray-light); }

.icon-sizes { background: var(–warm-white); padding: 60px 80px; display: flex; align-items: flex-end; gap: 50px; border-top: 1px solid var(–gray-light); }
.icon-size-item { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.icon-size-label { font-size: 10px; letter-spacing: 0.2em; color: var(–gray); }

.mockup-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3px; background: #DEDAD4; }
.mockup-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 3px; background: #DEDAD4; }
.mockup-cell { background: #F2F0EB; padding: 60px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.mockup-title { font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase; color: var(–gray); margin-bottom: 36px; align-self: flex-start; }

/* Business card */
.business-card { width: 340px; height: 190px; border-radius: 4px; position: relative; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08); }
.bc-teal-bar { position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: var(–teal); }

/* Door hanger */
.door-hanger { width: 148px; background: var(–warm-white); border-radius: 6px; box-shadow: 0 24px 70px rgba(0,0,0,0.18), 0 4px 14px rgba(0,0,0,0.1); }
.dh-hole-wrap { display: flex; justify-content: center; padding-top: 12px; background: var(–warm-white); border-radius: 6px 6px 0 0; }
.dh-hole { width: 28px; height: 28px; border-radius: 50%; background: #F2F0EB; border: 2px solid var(–gray-light); }
.dh-header { background: var(–teal); padding: 16px 14px 20px; text-align: center; }
.dh-body { padding: 16px 14px; background: var(–warm-white); }
.dh-body-text { font-size: 7px; letter-spacing: 0.08em; color: #666; line-height: 1.7; text-align: center; }
.dh-offer { background: var(–gold-light); border: 1px solid var(–gold); margin: 10px 0; padding: 8px; text-align: center; }
.dh-offer-text { font-family: ‘Cormorant Garamond’, serif; font-size: 11px; font-weight: 600; color: var(–navy); }
.dh-offer-sub { font-size: 6.5px; letter-spacing: 0.1em; text-transform: uppercase; color: #888; }
.dh-footer { background: var(–navy); padding: 10px 14px; text-align: center; border-radius: 0 0 6px 6px; }
.dh-footer-text { font-size: 7px; letter-spacing: 0.15em; color: rgba(255,255,255,0.5); text-transform: uppercase; }

/* Website */
.website-mockup { width: 100%; max-width: 600px; border-radius: 8px; overflow: hidden; box-shadow: 0 24px 70px rgba(0,0,0,0.15); }
.browser-bar { background: #2A2A2A; padding: 10px 16px; display: flex; align-items: center; gap: 10px; }
.browser-dots { display: flex; gap: 5px; }
.dot { width: 9px; height: 9px; border-radius: 50%; }
.site-nav { background: var(–warm-white); padding: 16px 32px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(–gray-light); }
.site-nav-links { display: flex; gap: 24px; }
.site-nav-link { font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; color: #666; }
.site-nav-cta { background: var(–teal); color: white; font-size: 8px; letter-spacing: 0.2em; text-transform: uppercase; padding: 8px 16px; }
.site-hero { background: var(–navy); padding: 50px 32px; text-align: center; position: relative; overflow: hidden; }
.site-hero::before { content: ‘’; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 0%, rgba(13,110,110,0.3) 0%, transparent 70%); }

/* Social */
.social-row { display: flex; gap: 24px; align-items: flex-start; flex-wrap: wrap; justify-content: center; }
.social-item { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.social-item-label { font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(–gray); }
.avatar-circle { border-radius: 50%; overflow: hidden; display: flex; align-items: center; justify-content: center; }
.avatar-square { display: flex; align-items: center; justify-content: center; border-radius: 12px; }

/* Palette */
.palette-panel { background: var(–warm-white); padding: 60px 80px; display: grid; grid-template-columns: repeat(6, 1fr); gap: 20px; }
.swatch { display: flex; flex-direction: column; gap: 10px; }
.swatch-color { height: 80px; border-radius: 2px; }
.swatch-name { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(–navy); font-weight: 500; }
.swatch-hex { font-size: 10px; color: var(–gray); font-family: monospace; }

.type-panel { background: #F2F0EB; padding: 60px 80px; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; border-top: 3px solid var(–gray-light); }

.doc-footer { background: var(–navy); padding: 40px 80px; display: flex; justify-content: space-between; align-items: center; }
.doc-footer p { font-size: 10px; letter-spacing: 0.2em; color: #444460; text-transform: uppercase; }
</style>

</head>
<body>

<!-- ── PAGE HEADER ── -->

<div class="page-header">
  <div>
    <h1>Cleanli — Brand Identity System v2</h1>
    <p style="margin-top:8px;">Updated Mark · The Medical Drop · 2026</p>
  </div>
  <div style="text-align:right;">
    <p>Collin County, TX</p>
    <p style="margin-top:4px;">cleanlidfw.com</p>
  </div>
</div>

<!-- ── 01: CONCEPT ── -->

<div class="section-label">01 — Logo Concept & Rationale</div>
<div class="concept-panel">
  <div class="concept-rationale">
    <h2>The<br><em>Medical Drop</em></h2>
    <p>A water droplet — the universal symbol of purity and cleanliness. Organic, alive, nature-forward in form. Inside it, centered: a clean medical cross.</p>
    <p>No explanation required at a doorstep. Anyone who sees it understands immediately — this is a cleaning company with a healthcare background. The cross is the oldest shorthand for medical training in the world. The drop is the oldest shorthand for clean.</p>
    <p>Together they say: <em>hospital standards, brought into your home.</em> The story Andrew tells every potential client is embedded in the mark itself, before a single word is spoken.</p>
    <div style="margin-top:24px;">
      <span class="tag">Hospital Heritage</span>
      <span class="tag">Instantly Readable</span>
      <span class="tag">Premium Residential</span>
      <span class="tag">Health-Forward</span>
      <span class="tag">Nature + Medicine</span>
    </div>
  </div>

  <div class="logo-primary-display">
    <!-- PRIMARY HORIZONTAL LOCKUP -->
    <div class="logo-lockup">
      <svg width="58" height="80" viewBox="0 0 58 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Drop shape -->
        <path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/>
        <!-- Medical cross — clean, centered, well-proportioned -->
        <!-- Vertical bar -->
        <rect x="26" y="28" width="6" height="26" rx="1.5" fill="white" opacity="0.92"/>
        <!-- Horizontal bar -->
        <rect x="19" y="35" width="20" height="6" rx="1.5" fill="white" opacity="0.92"/>
      </svg>
      <div class="logo-wordmark">
        <div class="name" style="color:var(--navy);">Cleanli</div>
        <div class="tagline">Health-Grade Home Cleaning</div>
      </div>
    </div>

```
<div style="width:100%; height:1px; background:var(--gray-light); margin: 40px 0;"></div>

<!-- STACKED LOCKUP -->
<div class="logo-lockup vertical">
  <svg width="46" height="63" viewBox="0 0 58 80" fill="none">
    <path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/>
    <rect x="26" y="28" width="6" height="26" rx="1.5" fill="white" opacity="0.92"/>
    <rect x="19" y="35" width="20" height="6" rx="1.5" fill="white" opacity="0.92"/>
  </svg>
  <div class="logo-wordmark" style="align-items:center; text-align:center;">
    <div class="name" style="color:var(--navy); font-size:24px; letter-spacing:0.3em;">CLEANLI</div>
    <div class="tagline">Health-Grade Home Cleaning</div>
  </div>
</div>

<!-- Mark only -->
<div style="width:100%; height:1px; background:var(--gray-light); margin: 40px 0;"></div>
<div style="display:flex; align-items:center; gap:40px;">
  <svg width="70" height="96" viewBox="0 0 58 80" fill="none">
    <path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/>
    <rect x="26" y="28" width="6" height="26" rx="1.5" fill="white" opacity="0.92"/>
    <rect x="19" y="35" width="20" height="6" rx="1.5" fill="white" opacity="0.92"/>
  </svg>
  <div>
    <p style="font-size:11px; color:#888; font-weight:300; line-height:1.8; max-width:220px;">"It's a water drop with a medical cross — hospital standards for your home." One sentence. That's the whole pitch.</p>
  </div>
</div>
```

  </div>
</div>

<!-- ── 02: VARIANTS ── -->

<div class="section-gap"></div>
<div class="section-label">02 — Color Variants</div>
<div class="variants-panel">

  <!-- Light -->

  <div class="variant v1">
    <div class="logo-lockup vertical">
      <svg width="44" height="60" viewBox="0 0 58 80" fill="none">
        <path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/>
        <rect x="26" y="28" width="6" height="26" rx="1.5" fill="white" opacity="0.92"/>
        <rect x="19" y="35" width="20" height="6" rx="1.5" fill="white" opacity="0.92"/>
      </svg>
      <div class="logo-wordmark" style="text-align:center; align-items:center;">
        <div class="name" style="color:var(--navy); font-size:20px; letter-spacing:0.24em;">CLEANLI</div>
        <div class="tagline">Health-Grade Home Cleaning</div>
      </div>
    </div>
    <span class="variant-label">Primary · Light</span>
  </div>

  <!-- Teal -->

  <div class="variant v2">
    <div class="logo-lockup vertical">
      <svg width="44" height="60" viewBox="0 0 58 80" fill="none">
        <path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="white" opacity="0.18"/>
        <!-- cross in teal bg: white drop outline, cross visible -->
        <rect x="26" y="28" width="6" height="26" rx="1.5" fill="white" opacity="0.95"/>
        <rect x="19" y="35" width="20" height="6" rx="1.5" fill="white" opacity="0.95"/>
      </svg>
      <div class="logo-wordmark" style="text-align:center; align-items:center;">
        <div class="name" style="color:white; font-size:20px; letter-spacing:0.24em;">CLEANLI</div>
        <div class="tagline light">Health-Grade Home Cleaning</div>
      </div>
    </div>
    <span class="variant-label" style="color:rgba(255,255,255,0.35);">Reversed · Teal</span>
  </div>

  <!-- Navy -->

  <div class="variant v3">
    <div class="logo-lockup vertical">
      <svg width="44" height="60" viewBox="0 0 58 80" fill="none">
        <path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/>
        <rect x="26" y="28" width="6" height="26" rx="1.5" fill="white" opacity="0.92"/>
        <rect x="19" y="35" width="20" height="6" rx="1.5" fill="white" opacity="0.92"/>
      </svg>
      <div class="logo-wordmark" style="text-align:center; align-items:center;">
        <div class="name" style="color:white; font-size:20px; letter-spacing:0.24em;">CLEANLI</div>
        <div class="tagline light">Health-Grade Home Cleaning</div>
      </div>
    </div>
    <span class="variant-label" style="color:rgba(255,255,255,0.25);">Reversed · Navy</span>
  </div>

  <!-- Gold -->

  <div class="variant v4">
    <div class="logo-lockup vertical">
      <svg width="44" height="60" viewBox="0 0 58 80" fill="none">
        <path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/>
        <rect x="26" y="28" width="6" height="26" rx="1.5" fill="#C9A96E" opacity="0.95"/>
        <rect x="19" y="35" width="20" height="6" rx="1.5" fill="#C9A96E" opacity="0.95"/>
      </svg>
      <div class="logo-wordmark" style="text-align:center; align-items:center;">
        <div class="name" style="color:var(--navy); font-size:20px; letter-spacing:0.24em;">CLEANLI</div>
        <div class="tagline" style="color:var(--gold);">Health-Grade Home Cleaning</div>
      </div>
    </div>
    <span class="variant-label">Premium · Gold Cross</span>
  </div>
</div>

<!-- ── 03: SCALE ── -->

<div class="icon-sizes">
  <div style="flex:1;">
    <div style="font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:var(--gray); padding-bottom:16px;">Icon at Scale — Favicon to Signage</div>
    <p style="font-size:12px; color:#888; font-weight:300; line-height:1.8; max-width:360px;">The cross reads cleanly at every size — even at 16px the vertical and horizontal bars are unmistakable. At large format it becomes a bold, confident healthcare mark.</p>
  </div>
  <!-- 16px -->
  <div class="icon-size-item">
    <svg width="16" height="22" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/><rect x="26" y="28" width="6" height="26" rx="1" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1" fill="white"/></svg>
    <span class="icon-size-label">16px</span>
  </div>
  <!-- 32px -->
  <div class="icon-size-item">
    <svg width="29" height="40" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/><rect x="26" y="28" width="6" height="26" rx="1.5" fill="white" opacity="0.95"/><rect x="19" y="35" width="20" height="6" rx="1.5" fill="white" opacity="0.95"/></svg>
    <span class="icon-size-label">32px</span>
  </div>
  <!-- 48px -->
  <div class="icon-size-item">
    <svg width="44" height="60" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/><rect x="26" y="28" width="6" height="26" rx="1.5" fill="white" opacity="0.92"/><rect x="19" y="35" width="20" height="6" rx="1.5" fill="white" opacity="0.92"/></svg>
    <span class="icon-size-label">48px</span>
  </div>
  <!-- 80px -->
  <div class="icon-size-item">
    <svg width="70" height="96" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/><rect x="26" y="28" width="6" height="26" rx="1.5" fill="white" opacity="0.92"/><rect x="19" y="35" width="20" height="6" rx="1.5" fill="white" opacity="0.92"/></svg>
    <span class="icon-size-label">80px</span>
  </div>
  <!-- 120px -->
  <div class="icon-size-item">
    <svg width="110" height="151" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/><rect x="26" y="28" width="6" height="26" rx="1.5" fill="white" opacity="0.92"/><rect x="19" y="35" width="20" height="6" rx="1.5" fill="white" opacity="0.92"/></svg>
    <span class="icon-size-label">128px</span>
  </div>
</div>

<!-- ── 04: BUSINESS CARDS ── -->

<div class="section-gap"></div>
<div class="section-label">04 — Business Card Mockup</div>
<div class="mockup-grid">
  <!-- Card front + back -->
  <div class="mockup-cell">
    <div class="mockup-title">Front & Back · Standard Card</div>
    <div style="display:flex; flex-direction:column; gap:20px; align-items:center;">
      <!-- Front -->
      <div class="business-card" style="transform:rotate(-2deg);">
        <div class="bc-teal-bar"></div>
        <div style="background:var(--warm-white); width:100%; height:100%; padding:26px 30px; display:flex; flex-direction:column; justify-content:space-between;">
          <div style="display:flex; align-items:center; gap:10px;">
            <svg width="20" height="27" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/><rect x="26" y="28" width="6" height="26" rx="1" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1" fill="white"/></svg>
            <div>
              <div style="font-family:'Cormorant Garamond',serif; font-weight:500; font-size:13px; letter-spacing:0.18em; text-transform:uppercase; color:var(--navy);">Cleanli</div>
              <div style="font-size:6.5px; letter-spacing:0.2em; color:var(--teal); text-transform:uppercase; margin-top:1px;">Health-Grade Home Cleaning</div>
            </div>
          </div>
          <div>
            <div style="font-family:'Cormorant Garamond',serif; font-weight:400; font-size:15px; letter-spacing:0.1em; color:var(--navy);">Andrew Gray</div>
            <div style="font-size:7.5px; letter-spacing:0.22em; color:var(--teal); text-transform:uppercase; margin-top:3px;">Founder &amp; Lead Specialist</div>
          </div>
          <div style="font-size:7.5px; letter-spacing:0.08em; color:#999; line-height:2.1;">
            <div>(469) ___-____</div>
            <div>info@cleanlidfw.com</div>
            <div>cleanlidfw.com</div>
            <div style="margin-top:3px; color:var(--teal); font-size:7px;">✦ Background Checked · Hospital Trained</div>
          </div>
        </div>
      </div>
      <!-- Back -->
      <div class="business-card" style="transform:rotate(1.5deg);">
        <div style="background:var(--teal); width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; gap:12px;">
          <svg width="40" height="55" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="white" opacity="0.18"/><rect x="26" y="28" width="6" height="26" rx="1.5" fill="white" opacity="0.9"/><rect x="19" y="35" width="20" height="6" rx="1.5" fill="white" opacity="0.9"/></svg>
          <div style="font-family:'Cormorant Garamond',serif; font-size:20px; font-weight:300; letter-spacing:0.32em; color:white; text-transform:uppercase;">Cleanli</div>
          <div style="font-size:7px; letter-spacing:0.28em; color:rgba(255,255,255,0.45); text-transform:uppercase;">Health-Grade Home Cleaning</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Premium navy card -->

  <div class="mockup-cell" style="background:var(--navy);">
    <div class="mockup-title" style="color:#333350;">Premium Card · Navy</div>
    <div class="business-card" style="transform:rotate(-1deg);">
      <div style="background:var(--navy); width:100%; height:100%; padding:26px 30px; display:flex; flex-direction:column; justify-content:space-between; position:relative; overflow:hidden;">
        <!-- Watermark drop -->
        <svg style="position:absolute;right:-14px;bottom:-14px;opacity:0.06;" width="130" height="178" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="white"/></svg>
        <div style="display:flex; align-items:center; gap:10px;">
          <svg width="18" height="25" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/><rect x="26" y="28" width="6" height="26" rx="1" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1" fill="white"/></svg>
          <div style="font-family:'Cormorant Garamond',serif; font-weight:500; font-size:13px; letter-spacing:0.2em; text-transform:uppercase; color:white;">Cleanli</div>
        </div>
        <div>
          <div style="font-family:'Cormorant Garamond',serif; font-weight:300; font-size:15px; letter-spacing:0.1em; color:white;">Andrew Gray</div>
          <div style="font-size:7.5px; letter-spacing:0.22em; color:var(--teal-mid); text-transform:uppercase; margin-top:3px;">Founder · Hospital Trained Specialist</div>
        </div>
        <div style="font-size:7.5px; letter-spacing:0.08em; color:rgba(255,255,255,0.3); line-height:2.1;">
          <div>(469) ___-____</div>
          <div>cleanlidfw.com</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ── 05: DOOR HANGER ── -->

<div class="section-gap"></div>
<div class="section-label">05 — Door Hanger Mockup</div>
<div class="mockup-grid-3">
  <!-- Standard -->
  <div class="mockup-cell">
    <div class="mockup-title">Standard · Teal</div>
    <div class="door-hanger">
      <div class="dh-hole-wrap"><div class="dh-hole"></div></div>
      <div class="dh-header">
        <svg width="22" height="30" viewBox="0 0 58 80" fill="none" style="display:block;margin:0 auto 8px;"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="white" opacity="0.2"/><rect x="26" y="28" width="6" height="26" rx="1.5" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1.5" fill="white"/></svg>
        <div style="font-family:'Cormorant Garamond',serif; font-size:16px; letter-spacing:0.22em; color:white; text-transform:uppercase;">Cleanli</div>
        <div style="font-size:6px; letter-spacing:0.2em; color:rgba(255,255,255,0.5); text-transform:uppercase; margin-top:3px;">Health-Grade Home Cleaning</div>
      </div>
      <div class="dh-body">
        <p class="dh-body-text">Hospital-trained cleaning specialists bringing clinical precision to your Collin County home.</p>
        <div class="dh-offer">
          <div class="dh-offer-text">15% Off</div>
          <div class="dh-offer-sub">First Clean · This Month Only</div>
        </div>
        <p class="dh-body-text">HEPA filtration · UVC sanitization<br>Fragrance-free available</p>
        <div style="margin-top:10px; padding-top:10px; border-top:1px solid var(--gray-light); text-align:center;">
          <div style="font-size:8px; font-weight:500; color:var(--navy);">(469) ___-____</div>
          <div style="font-size:7px; color:var(--teal); margin-top:2px;">cleanlidfw.com</div>
        </div>
      </div>
      <div class="dh-footer"><div class="dh-footer-text">Collin County · Background Checked</div></div>
    </div>
  </div>

  <!-- Dark premium -->

  <div class="mockup-cell" style="background:var(--navy);">
    <div class="mockup-title" style="color:#333350;">Dark · Premium Neighborhoods</div>
    <div class="door-hanger">
      <div class="dh-hole-wrap" style="background:var(--navy);"><div class="dh-hole" style="background:#2A2A3A; border-color:#2A2A3A;"></div></div>
      <div class="dh-header" style="background:var(--navy); padding-bottom:24px;">
        <svg width="22" height="30" viewBox="0 0 58 80" fill="none" style="display:block;margin:0 auto 8px;"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/><rect x="26" y="28" width="6" height="26" rx="1.5" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1.5" fill="white"/></svg>
        <div style="font-family:'Cormorant Garamond',serif; font-size:16px; letter-spacing:0.22em; color:white; text-transform:uppercase;">Cleanli</div>
        <div style="font-size:6px; letter-spacing:0.2em; color:var(--teal-mid); text-transform:uppercase; margin-top:3px;">Health-Grade Home Cleaning</div>
      </div>
      <div class="dh-body" style="background:#0F0F1E;">
        <p class="dh-body-text" style="color:rgba(255,255,255,0.45);">Hospital-trained precision for Collin County's finest homes.</p>
        <div class="dh-offer" style="background:rgba(201,169,110,0.1); border-color:var(--gold);">
          <div class="dh-offer-text" style="color:var(--gold);">15% Off</div>
          <div class="dh-offer-sub" style="color:rgba(201,169,110,0.55);">First Clean · Intro Offer</div>
        </div>
        <p class="dh-body-text" style="color:rgba(255,255,255,0.35);">HEPA · UVC · Hospital-Grade</p>
        <div style="margin-top:10px; padding-top:10px; border-top:1px solid #222236; text-align:center;">
          <div style="font-size:8px; color:white;">(469) ___-____</div>
          <div style="font-size:7px; color:var(--teal-mid); margin-top:2px;">cleanlidfw.com</div>
        </div>
      </div>
      <div class="dh-footer" style="background:#070714;"><div class="dh-footer-text">Collin County · Background Checked</div></div>
    </div>
  </div>

  <!-- In-situ door -->

  <div class="mockup-cell">
    <div class="mockup-title">In Context · On Door</div>
    <div style="position:relative; width:140px;">
      <div style="background:#D8D4CC; border-radius:0; height:220px; position:relative; overflow:visible; box-shadow:4px 4px 12px rgba(0,0,0,0.14); border:2px solid #C4BFB5;">
        <div style="position:absolute; right:14px; top:50%; transform:translateY(-50%); width:10px; height:10px; border-radius:50%; background:#B0A070; box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>
        <!-- hanging hanger -->
        <div style="position:absolute; left:50%; top:0; transform:translateX(-50%);">
          <div class="door-hanger" style="transform:scale(0.66); transform-origin:top center; box-shadow:2px 4px 16px rgba(0,0,0,0.25);">
            <div class="dh-hole-wrap"><div class="dh-hole"></div></div>
            <div class="dh-header" style="padding:8px 10px 12px;">
              <svg width="14" height="19" viewBox="0 0 58 80" fill="none" style="display:block;margin:0 auto 5px;"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="white" opacity="0.2"/><rect x="26" y="28" width="6" height="26" rx="1" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1" fill="white"/></svg>
              <div style="font-family:'Cormorant Garamond',serif; font-size:13px; letter-spacing:0.2em; color:white;">Cleanli</div>
            </div>
            <div class="dh-body" style="padding:8px 10px;">
              <div class="dh-offer" style="margin:5px 0; padding:6px;"><div class="dh-offer-text" style="font-size:10px;">15% Off</div></div>
              <p class="dh-body-text" style="font-size:6px;">cleanlidfw.com</p>
            </div>
            <div class="dh-footer" style="padding:6px;"><div class="dh-footer-text" style="font-size:5.5px;">Collin County</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ── 06: VEHICLE ── -->

<div class="section-gap"></div>
<div class="section-label">06 — Vehicle Wrap / Magnetic Decal</div>
<div class="mockup-cell" style="background:#222; padding:60px 80px; display:block;">
  <div class="mockup-title" style="color:#444;">Side Panel — White Van / SUV</div>
  <div style="max-width:680px; margin:0 auto;">
    <div style="background:#E8E8E8; border-radius:12px 20px 8px 8px; height:180px; position:relative; overflow:hidden; box-shadow:0 8px 32px rgba(0,0,0,0.45);">
      <div style="position:absolute; top:16px; left:18px; right:185px; height:55px; background:#B8D4E0; border-radius:6px 12px 4px 4px; opacity:0.65;"></div>
      <div style="position:absolute; bottom:-20px; left:80px; width:70px; height:40px; border-radius:50%; background:#222;"></div>
      <div style="position:absolute; bottom:-20px; right:80px; width:70px; height:40px; border-radius:50%; background:#222;"></div>
      <!-- Branding panel -->
      <div style="position:absolute; top:0; right:0; bottom:0; left:42%; background:linear-gradient(135deg, #0D6E6E 0%, #0A5050 100%); display:flex; align-items:center; justify-content:center; padding:20px 28px;">
        <div style="display:flex; flex-direction:column; align-items:center; gap:10px; text-align:center;">
          <div style="display:flex; align-items:center; gap:14px;">
            <svg width="32" height="44" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="white" opacity="0.18"/><rect x="26" y="28" width="6" height="26" rx="1.5" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1.5" fill="white"/></svg>
            <div style="font-family:'Cormorant Garamond',serif; font-size:30px; font-weight:500; letter-spacing:0.2em; color:white; text-transform:uppercase;">Cleanli</div>
          </div>
          <div style="font-size:8px; letter-spacing:0.2em; color:rgba(255,255,255,0.5); text-transform:uppercase;">Health-Grade Home Cleaning</div>
          <div style="font-size:9px; color:rgba(255,255,255,0.7); letter-spacing:0.08em; margin-top:2px;">cleanlidfw.com · (469) ___-____</div>
        </div>
      </div>
      <!-- Teal stripe -->
      <div style="position:absolute; bottom:0; left:0; right:0; height:5px; background:var(--teal);"></div>
    </div>
    <p style="font-size:11px; color:#555; margin-top:20px; font-weight:300; line-height:1.7;">Magnetic panels $120–$180 via MagnaSign or 4OVER4. Teal panel on passenger side + rear. Matching rear window decal with QR code linking to InstaQuote booking page.</p>
  </div>
</div>

<!-- ── 07: UNIFORM ── -->

<div class="section-gap"></div>
<div class="section-label">07 — Uniform & Apparel</div>
<div class="mockup-grid-3">
  <!-- Navy polo -->
  <div class="mockup-cell">
    <div class="mockup-title">Navy Polo · Left Chest</div>
    <div style="width:180px; background:#1A1A2E; border-radius:0 0 16px 16px; height:160px; position:relative; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,0.2);">
      <div style="position:absolute; top:0; left:50%; transform:translateX(-50%); width:60px; height:30px; background:#111122; border-radius:0 0 20px 20px;"></div>
      <div style="position:absolute; top:0; left:50%; transform:translateX(-50%); width:6px; height:80px; background:#0D0D1A;"></div>
      <div style="position:absolute; top:36px; left:20px; display:flex; align-items:center; gap:5px;">
        <svg width="16" height="22" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/><rect x="26" y="28" width="6" height="26" rx="1" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1" fill="white"/></svg>
        <div style="font-family:'Cormorant Garamond',serif; font-size:10px; letter-spacing:0.18em; color:#4DA8A8; text-transform:uppercase;">Cleanli</div>
      </div>
    </div>
    <p style="font-size:11px; color:#888; margin-top:14px; text-align:center; font-weight:300;">Navy polo · Teal thread<br>Left chest embroidery</p>
  </div>

  <!-- White polo -->

  <div class="mockup-cell" style="background:var(--teal-light);">
    <div class="mockup-title">White Polo · Summer</div>
    <div style="width:180px; background:#FDFCFA; border-radius:0 0 16px 16px; height:160px; position:relative; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,0.1); border:1px solid var(--gray-light);">
      <div style="position:absolute; top:0; left:50%; transform:translateX(-50%); width:60px; height:30px; background:#EEEEE8; border-radius:0 0 20px 20px;"></div>
      <div style="position:absolute; top:0; left:50%; transform:translateX(-50%); width:5px; height:80px; background:#E4E4DC;"></div>
      <div style="position:absolute; top:36px; left:20px; display:flex; align-items:center; gap:5px;">
        <svg width="16" height="22" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/><rect x="26" y="28" width="6" height="26" rx="1" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1" fill="white"/></svg>
        <div style="font-family:'Cormorant Garamond',serif; font-size:10px; letter-spacing:0.18em; color:var(--navy); text-transform:uppercase;">Cleanli</div>
      </div>
    </div>
    <p style="font-size:11px; color:#888; margin-top:14px; text-align:center; font-weight:300;">White polo · Navy + teal thread<br>Summer / client-facing</p>
  </div>

  <!-- Cap -->

  <div class="mockup-cell">
    <div class="mockup-title">Structured Cap</div>
    <div style="width:160px;">
      <div style="background:#1A1A2E; border-radius:70px 70px 0 0; height:72px; position:relative; box-shadow:0 6px 20px rgba(0,0,0,0.2);">
        <div style="position:absolute; bottom:12px; left:50%; transform:translateX(-50%); display:flex; align-items:center; gap:5px;">
          <svg width="13" height="18" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/><rect x="26" y="28" width="6" height="26" rx="1" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1" fill="white"/></svg>
          <div style="font-family:'Cormorant Garamond',serif; font-size:9px; letter-spacing:0.2em; color:#4DA8A8; text-transform:uppercase;">Cleanli</div>
        </div>
      </div>
      <div style="background:#111122; height:12px; border-radius:0 0 4px 4px; margin:0 10px;"></div>
    </div>
    <p style="font-size:11px; color:#888; margin-top:14px; text-align:center; font-weight:300;">Navy structured cap<br>Teal mark + wordmark</p>
  </div>
</div>

<!-- ── 08: WEBSITE ── -->

<div class="section-gap"></div>
<div class="section-label">08 — Website Header</div>
<div class="mockup-cell" style="background:#E8E4DC; padding:60px 80px;">
  <div class="mockup-title">cleanlidfw.com</div>
  <div class="website-mockup">
    <div class="browser-bar">
      <div class="browser-dots"><div class="dot" style="background:#FF5F56;"></div><div class="dot" style="background:#FFBD2E;"></div><div class="dot" style="background:#27C93F;"></div></div>
      <div style="flex:1; background:#3A3A3A; border-radius:3px; padding:4px 10px; font-size:10px; color:#888; letter-spacing:0.05em;">cleanlidfw.com</div>
    </div>
    <div class="site-nav">
      <div style="display:flex; align-items:center; gap:10px;">
        <svg width="18" height="25" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/><rect x="26" y="28" width="6" height="26" rx="1" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1" fill="white"/></svg>
        <div style="font-family:'Cormorant Garamond',serif; font-weight:500; font-size:15px; letter-spacing:0.18em; text-transform:uppercase; color:var(--navy);">Cleanli</div>
      </div>
      <div class="site-nav-links">
        <span class="site-nav-link">Services</span>
        <span class="site-nav-link">About</span>
        <span class="site-nav-link">Areas</span>
      </div>
      <div class="site-nav-cta">Get Instant Quote</div>
    </div>
    <div class="site-hero">
      <div style="position:relative; z-index:1; display:flex; flex-direction:column; align-items:center;">
        <svg width="44" height="60" viewBox="0 0 58 80" fill="none" style="opacity:0.22;"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="white"/><rect x="26" y="28" width="6" height="26" rx="1.5" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1.5" fill="white"/></svg>
        <div style="font-family:'Cormorant Garamond',serif; font-weight:300; font-size:28px; color:var(--warm-white); letter-spacing:0.08em; margin-top:12px; position:relative; z-index:1;">Hospital Precision.<br>Your Home.</div>
        <div style="font-size:10px; letter-spacing:0.25em; color:var(--teal-mid); text-transform:uppercase; position:relative; z-index:1; margin-top:10px;">Collin County's Health-Grade Cleaning Service</div>
        <div style="display:flex; gap:12px; margin-top:20px; position:relative; z-index:1;">
          <div style="background:var(--teal); padding:10px 22px; font-size:9px; letter-spacing:0.25em; color:white; text-transform:uppercase;">Book Online →</div>
          <div style="border:1px solid rgba(255,255,255,0.18); padding:10px 22px; font-size:9px; letter-spacing:0.25em; color:rgba(255,255,255,0.55); text-transform:uppercase;">View Services</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ── 09: SOCIAL ── -->

<div class="section-gap"></div>
<div class="section-label">09 — Social Media & App Icons</div>
<div class="mockup-cell" style="background:var(--warm-white);">
  <div class="mockup-title">Profile Icons — All Platforms</div>
  <div class="social-row">
    <div class="social-item">
      <div class="avatar-circle" style="width:80px; height:80px; background:var(--teal);">
        <svg width="36" height="49" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="white" opacity="0.18"/><rect x="26" y="28" width="6" height="26" rx="1.5" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1.5" fill="white"/></svg>
      </div>
      <span class="social-item-label">Google Business</span>
    </div>
    <div class="social-item">
      <div class="avatar-circle" style="width:80px; height:80px; background:var(--navy);">
        <svg width="36" height="49" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/><rect x="26" y="28" width="6" height="26" rx="1.5" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1.5" fill="white"/></svg>
      </div>
      <span class="social-item-label">Instagram</span>
    </div>
    <div class="social-item">
      <div class="avatar-circle" style="width:80px; height:80px; background:var(--teal); border:3px solid white; box-shadow:0 2px 12px rgba(0,0,0,0.12);">
        <svg width="36" height="49" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="white" opacity="0.18"/><rect x="26" y="28" width="6" height="26" rx="1.5" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1.5" fill="white"/></svg>
      </div>
      <span class="social-item-label">Facebook</span>
    </div>
    <div class="social-item">
      <div class="avatar-circle" style="width:80px; height:80px; background:var(--warm-white); border:1px solid var(--gray-light);">
        <svg width="36" height="49" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="#0D6E6E"/><rect x="26" y="28" width="6" height="26" rx="1.5" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1.5" fill="white"/></svg>
      </div>
      <span class="social-item-label">Nextdoor</span>
    </div>
    <div class="social-item">
      <div class="avatar-square" style="width:80px; height:80px; background:var(--teal);">
        <svg width="38" height="52" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="white" opacity="0.16"/><rect x="26" y="28" width="6" height="26" rx="1.5" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1.5" fill="white"/></svg>
      </div>
      <span class="social-item-label">App Icon</span>
    </div>
    <div class="social-item">
      <div style="width:32px; height:32px; background:var(--teal); display:flex; align-items:center; justify-content:center; border-radius:4px; box-shadow:0 2px 8px rgba(0,0,0,0.15);">
        <svg width="14" height="19" viewBox="0 0 58 80" fill="none"><path d="M29 2 C29 2 5 28 5 50 C5 64.4 15.9 75 29 75 C42.1 75 53 64.4 53 50 C53 28 29 2 29 2Z" fill="white" opacity="0.18"/><rect x="26" y="28" width="6" height="26" rx="1" fill="white"/><rect x="19" y="35" width="20" height="6" rx="1" fill="white"/></svg>
      </div>
      <span class="social-item-label">Favicon</span>
    </div>
  </div>
</div>

<!-- ── 10: PALETTE ── -->

<div class="section-gap"></div>
<div class="section-label">10 — Brand Color Palette</div>
<div class="palette-panel">
  <div class="swatch"><div class="swatch-color" style="background:#0D6E6E;"></div><div class="swatch-name">Cleanli Teal</div><div class="swatch-hex">#0D6E6E</div><div style="font-size:9px;color:#999;margin-top:4px;">Primary mark · CTA buttons · Accent</div></div>
  <div class="swatch"><div class="swatch-color" style="background:#1A1A2E;"></div><div class="swatch-name">Deep Navy</div><div class="swatch-hex">#1A1A2E</div><div style="font-size:9px;color:#999;margin-top:4px;">Primary text · Premium bg · Apparel</div></div>
  <div class="swatch"><div class="swatch-color" style="background:#4DA8A8;"></div><div class="swatch-name">Light Teal</div><div class="swatch-hex">#4DA8A8</div><div style="font-size:9px;color:#999;margin-top:4px;">Taglines on dark · Thread · Hover</div></div>
  <div class="swatch"><div class="swatch-color" style="background:#C9A96E;"></div><div class="swatch-name">Warm Gold</div><div class="swatch-hex">#C9A96E</div><div style="font-size:9px;color:#999;margin-top:4px;">Premium tier · Cert badges · Awards</div></div>
  <div class="swatch"><div class="swatch-color" style="background:#FAF8F4; border:1px solid #E8E4DC;"></div><div class="swatch-name">Warm White</div><div class="swatch-hex">#FAF8F4</div><div style="font-size:9px;color:#999;margin-top:4px;">Backgrounds · Card face · Clean</div></div>
  <div class="swatch"><div class="swatch-color" style="background:#E6F4F4; border:1px solid #B2DCDC;"></div><div class="swatch-name">Teal Mist</div><div class="swatch-hex">#E6F4F4</div><div style="font-size:9px;color:#999;margin-top:4px;">Callouts · Trust badges · Tints</div></div>
</div>

<!-- ── 11: TYPOGRAPHY ── -->

<div class="section-label">11 — Typography System</div>
<div class="type-panel">
  <div>
    <div style="font-size:9px;letter-spacing:0.3em;text-transform:uppercase;color:var(--gray);margin-bottom:16px;">Display / Brand Name</div>
    <div style="font-family:'Cormorant Garamond',serif;font-weight:300;font-size:52px;color:var(--navy);letter-spacing:0.08em;line-height:1;">Cleanli</div>
    <div style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:26px;color:var(--teal);letter-spacing:0.2em;text-transform:uppercase;margin-top:12px;">CLEANLI</div>
    <div style="font-family:'Cormorant Garamond',serif;font-weight:300;font-style:italic;font-size:22px;color:#888;margin-top:8px;">Health-Grade Home Cleaning</div>
    <div style="margin-top:20px;font-size:10px;color:#999;letter-spacing:0.05em;line-height:1.7;">Cormorant Garamond · Light 300 / Medium 500<br>Google Fonts · Free commercial use</div>
  </div>
  <div>
    <div style="font-size:9px;letter-spacing:0.3em;text-transform:uppercase;color:var(--gray);margin-bottom:16px;">Body / UI / Supporting</div>
    <div style="font-family:'Jost',sans-serif;font-weight:200;font-size:22px;color:var(--navy);letter-spacing:0.28em;text-transform:uppercase;">HEALTH-GRADE</div>
    <div style="font-family:'Jost',sans-serif;font-weight:300;font-size:15px;color:#555;margin-top:12px;line-height:1.85;">Premium residential cleaning with hospital-grade equipment and protocol. Collin County, TX.</div>
    <div style="font-family:'Jost',sans-serif;font-weight:400;font-size:12px;color:var(--teal);letter-spacing:0.3em;text-transform:uppercase;margin-top:16px;">Book Instantly →</div>
    <div style="margin-top:20px;font-size:10px;color:#999;letter-spacing:0.05em;line-height:1.7;">Jost · ExtraLight 200 / Light 300 / Regular 400<br>Google Fonts · Free commercial use</div>
  </div>
</div>

<!-- ── FOOTER ── -->

<div class="doc-footer">
  <p>Cleanli LLC · Collin County, TX · 2026</p>
  <p>Brand Identity v2 — Medical Drop Mark</p>
  <p>All assets for exclusive use by Cleanli</p>
</div>

</body>
</html>
