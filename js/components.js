// ── SHARED COMPONENTS — HYDRO FIX BRAND ───────────────────────
// Brand: Playfair Display headings · Inter body
// Navy #0e1f2f · Teal #2d7d6f · Cream #f7f3ee

// ── GOOGLE SEARCH CONSOLE VERIFICATION ───────────────────────
// Paste your GSC verification meta tag content value below
// Get it from: Search Console → Add Property → HTML tag method
const GSC_VERIFICATION = "G-13Z2Z6MJXB";

// ── FACEBOOK PIXEL ID ─────────────────────────────────────────
// Paste your Pixel ID below (numbers only)
// Get it from: Facebook Ads Manager → Events Manager → Pixels
const FB_PIXEL_ID = "701492359663771";

// Inject tracking tags into <head> on every page
document.addEventListener('DOMContentLoaded', () => {

  // Google Search Console verification
  if (GSC_VERIFICATION) {
    const gscMeta = document.createElement('meta');
    gscMeta.name = 'google-site-verification';
    gscMeta.content = GSC_VERIFICATION;
    document.head.appendChild(gscMeta);
  }

  // Google Analytics 4
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-13Z2Z6MJXB';
  document.head.appendChild(gaScript);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-13Z2Z6MJXB');

  // Facebook Pixel
  if (FB_PIXEL_ID) {
    // Base pixel code
    !function(f,b,e,v,n,t,s){
      if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)
    }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', FB_PIXEL_ID);
    fbq('track', 'PageView');

    // Noscript fallback
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.body.insertBefore(noscript, document.body.firstChild);
  }

});


const NAV = `
<style>
.nav-dropdown-wide {
  display: none;
  flex-direction: row;
  gap: 0;
  padding: 8px;
  min-width: 480px;
  list-style: none;
}
.nav-dropdown.open .nav-dropdown-wide { display: flex; }
.nav-dd-col {
  list-style: none;
  flex: 1;
  padding: 4px;
}
.nav-dd-group-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-light);
  padding: 6px 14px 10px;
}
.nav-dd-divider {
  width: 1px;
  background: var(--border);
  margin: 8px 4px;
  flex-shrink: 0;
}
.nav-dd-tool {
  width: 180px;
  flex-shrink: 0;
  padding: 4px;
  display: flex;
  flex-direction: column;
}
.nav-dd-tool-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-light);
  padding: 6px 14px 10px;
}
.nav-dd-tool-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: var(--teal-pale);
  border: 1px solid rgba(45,125,111,0.2);
  border-radius: var(--r-lg);
  padding: 16px;
  text-decoration: none;
  color: inherit;
  transition: background 0.15s, border-color 0.15s;
  flex: 1;
}
.nav-dd-tool-card:hover {
  background: #d4ede9;
  border-color: rgba(45,125,111,0.4);
}
.nav-dd-tool-icon { font-size: 22px; margin-bottom: 2px; }
.nav-dd-tool-title { font-size: 14px; font-weight: 600; color: var(--navy); }
.nav-dd-tool-desc { font-size: 12px; color: var(--text-mid); line-height: 1.5; }
.nav-dd-tool-cta { font-size: 12px; font-weight: 600; color: var(--teal); margin-top: 4px; }
</style>
<nav class="nav">
  <div class="nav-inner">
    <a href="/index.html" class="nav-logo" aria-label="Hydro Fix home">
      <svg style="display:block;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="180" height="41" viewBox="0 0 1150 260" xml:space="preserve">
<desc>HydroFix Alt 1 - HYDRO navy, FIX teal</desc>
<defs>
</defs>
<g transform="matrix(1 0 0 1 640 512)" id="background-logo"  >
<rect style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-opacity: 0; fill-rule: nonzero; opacity: 1;"  paint-order="stroke"  x="-640" y="-512" rx="0" ry="0" width="1280" height="1024" />
</g>
<g transform="matrix(0.902 0 0 0.902 110 130)" id="logo-logo"  >
<g style=""  paint-order="stroke"   >
		<g transform="matrix(0.5256105787118807 0 0 0.5256105787118807 0.013186011651896479 -9.548771325538041)"  >
<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(14,31,47); fill-rule: nonzero; opacity: 1;"  paint-order="stroke"  transform=" translate(-526.2774288334338, -371.8330078)" d="M 389.3052673 511.2958679 C 389.3052673 511.2958679 427.2749023 490.5591736 492.229187 497.4960327 C 557.1834717 504.4328918 620.5611572 542.7528076 620.5611572 542.7528076 L 389.3052673 511.2958679 z M 654.1296387 353.7208252 C 647.0235596 340.58770749999996 638.9212646999999 327.7336426 630.3161011 315.4040222 C 605.357544 321.7782287 575.0913085999999 321.0237732 548.0758056999999 316.96591179999996 C 511.7285461999999 311.69427479999996 474.07687379999993 300.63864129999996 436.19747929999994 296.41067499999997 C 417.5783996999999 320.6579895 399.9741821999999 347.7117614 387.82354739999994 375.3858337 C 473.5455322 355.4011536 565.1539307 322.1629639 654.1296387 353.7208252 z M 616.0635986 297.2537842 C 583.6395874 253.9820557 558.5897216 228.21386719999998 526.2944335999999 200.913208 C 521.3821410999999 205.1785583 489.75311279999994 233.0888977 457.86096189999995 271.5933533 C 471.427063 274.2622986 484.60903929999995 277.70309449999996 497.5655211999999 281.176178 C 535.4984741 291.2707214 575.4211426 303.5532532 616.0635986 297.2537842 z M 679.5233154 428.4390259 C 678.1525268 427.20791629999997 676.7721557 426.0124512 675.3840332 424.8467407 L 678.4067383 422.184906 C 643.9445801 394.45294190000004 594.7324219000001 389.3736572 594.7324219000001 389.3736572 L 594.7308350000001 389.38314820000005 C 524.4056397 378.90563970000005 445.43634040000006 405.79449460000006 376.21566780000006 413.19241330000006 C 372.1201783000001 428.88626100000005 370.63418590000003 446.20452880000005 371.85617070000006 459.29449460000006 C 382.99584970000006 454.55841060000006 393.5561524000001 452.26528930000006 403.68032840000006 451.00341790000004 C 498.03759770000005 436.18862910000007 590.0238648000001 518.7708129 678.3648072000001 474.9994811 C 681.8930054 459.0707092 681.7359619 442.6685181 679.5233154 428.4390259 z" stroke-linecap="round" />
</g>
		<g transform="matrix(0.5256105787118807 0 0 0.5256105787118807 0 2.842171e-14)"  >
<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(61,157,141); fill-rule: nonzero; opacity: 1;"  paint-order="stroke"  transform=" translate(-526.2523417971641, -390.0000153)" d="M 642.4685059 534.4841309 L 643.5454712 534.3754882999999 L 642.7427978999999 535.1014403999999 C 611.1013184 563.7227172999999 569.9592286 579.4851683999999 526.8951415999999 579.4851683999999 C 480.16796869999985 579.4851683999999 436.4987487999999 561.2994383999999 403.9320373999999 528.2782591999999 C 398.5920410999999 522.8639525999998 393.6707458999999 517.1503904999998 389.3052673999999 511.2958677999999 L 388.95843509999986 510.8306272999999 L 389.53024299999987 510.7330930999999 L 389.6646118999999 510.7101743999999 L 389.9236145999999 510.6660764999999 C 391.10055549999987 510.4188840999999 392.2903442999999 510.2279355999999 393.3902283999999 510.0602414999999 C 397.4067688999999 509.31866439999993 401.4993286999999 508.6663205999999 405.83218399999987 507.9754025999999 L 407.82153339999985 507.6580807999999 C 414.70370499999984 506.5714108999999 422.2191468999998 506.0204464999999 430.15884419999986 506.0204464999999 C 436.43276999999983 506.02078219999987 443.0827027999999 506.3648373999999 449.9239198999999 507.04324309999987 C 462.9480897999999 508.3187862999999 477.7373353999999 510.85147059999986 496.4657289999999 515.0138546999999 C 503.3680421999999 516.5455929999999 510.2526552999999 518.1638181 517.5410158999999 519.8768307999999 C 527.0333254999999 522.1077877999999 536.8485109999999 524.4147946999999 546.8730472 526.5559078999999 C 568.5392459 531.1730343999999 585.537659 533.7616573999999 601.9891971 534.9493404999998 C 607.9801639 535.3850704999999 613.9846805 535.6062008999999 619.8360599 535.6062008999999 C 627.4844971 535.6062012 635.098877 535.2288208 642.4685059 534.4841309 z M 469.3257446 350.3189697 C 488.2670898 354.4448547 507.1776428 359.9363708 525.4656372000001 365.24691770000004 C 562.2788086 375.93679810000003 600.3453369000001 386.99078370000007 639.4911499000001 386.99078370000007 C 649.3807983000002 386.99078370000007 659.1810913 386.28115850000006 668.6204834000001 384.88153080000006 L 669.0369873000001 384.81970220000005 L 668.8831787 384.42776490000006 C 659.4993896000001 360.49154660000005 644.8298950000001 334.6990357000001 625.2822876 307.76629640000004 L 625.185791 307.63348390000004 L 625.0215454 307.62823490000005 C 622.1974487 307.53991700000006 619.2369385000001 307.49508670000006 616.2221069000001 307.49508670000006 C 600.1853637 307.49508670000006 583.4134521000001 308.76318360000005 567.1941528000001 309.99005130000006 C 550.5537719000001 311.24835210000003 533.3467407 312.5494995000001 516.4672241000001 312.5494995000001 C 483.9311218000001 312.5494995000001 458.33358760000004 307.50064090000006 435.91085810000004 296.66061400000007 L 435.66482540000004 296.54187010000004 L 435.49896240000004 296.75845340000006 C 424.1116028 311.6262207000001 414.04989620000003 326.3421936000001 405.59362790000006 340.49774170000006 L 405.30505370000003 340.98031620000006 L 405.86712650000004 341.00418090000005 C 424.2264404 341.7812195 447.3561401 345.1762085 469.3257446 350.3189697 z M 451.4226685 279.8872681 L 451.59759529999997 279.9565125 C 467.0176087 285.90292359999995 484.1372987 288.7941285 503.93304449999994 288.7941285 C 523.4464721999999 288.7941285 543.5565185999999 286.0209962 563.0045167 283.3390199 C 575.7227174 281.5851747 588.8739015 279.77185069999996 601.7078247999999 278.7570192 L 602.2843628999999 278.7114259 L 601.9185792 278.2633363 C 574.8612062 245.1151582 554.4155274 224.0879213 526.4812013 200.6808931 L 526.2828980999999 200.51486219999998 L 526.0878907999999 200.68443309999998 C 522.0291138999999 204.2089998 485.44512959999986 236.35981759999999 451.15069599999987 279.3580934 L 450.8923341999999 279.6818849 L 451.2794191999999 279.8298646 L 451.4226685 279.8872681 z M 678.7348633 422.1171875 L 678.6638794 421.7730103 L 678.3233032 421.8603516 C 661.9537964000001 426.0674134 644.9862671000001 428.1121827 626.4512939000001 428.1121827 C 589.9142456000001 428.1121827 552.8455810000002 419.9111024 516.9972534000001 411.9802552 C 481.0582886000001 404.0291138 443.89572140000007 395.8074036 407.1705627000001 395.80673229999996 C 398.14205930000014 395.80642709999995 389.2902221000001 396.3082887 380.8611145000001 397.2976381 L 380.6523743000001 397.32217419999995 L 380.5836487000001 397.52078259999996 C 373.4478150000001 418.10971079999996 370.3050537000001 437.52151499999997 371.24304200000006 455.21667489999993 L 371.52178960000003 459.31704719999993 L 371.55255130000006 459.77017219999993 L 371.97656250000006 459.6072388999999 C 372.49871830000006 459.4060364999999 425.03454590000007 439.49792489999993 496.8182373000001 439.37066659999994 C 559.1991577000001 439.6939087999999 621.8928833000001 452.2944031999999 678.1184692 475.80953989999995 L 678.4855346 475.96298229999996 L 678.5742187000001 475.57495129999995 C 682.3163452 459.2218628 682.374939 439.7374268 678.7348633 422.1171875 z" stroke-linecap="round" />
</g>
</g>
</g>
<g transform="matrix(1.921 0 0 1.921 659 130)" id="text-logo"  >
<g style=""  paint-order="stroke"   >
		<g transform="matrix(1 0 0 1 0 0)" id="text-logo-path-0"  >
<path style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(14,31,47); fill-rule: nonzero; opacity: 1;"  paint-order="stroke"  transform=" translate(-234.69, 22.4)" d="M 16 -44.8 L 3.2 -44.8 L 3.2 0 L 16 0 L 16 -16.64 L 30.08 -16.64 L 30.08 0 L 42.88 0 L 42.88 -28.16 L 16 -28.16 Z M 42.88 -44.8 L 30.08 -44.8 L 30.08 -33.34 L 42.88 -33.34 Z M 58.37 -44.8 L 75.01 -10.43 L 75.01 0 L 87.81 0 L 87.81 -11.71 L 71.81 -44.8 Z M 91.01 -44.8 L 85.44 -33.34 L 98.88 -33.34 L 104.45 -44.8 Z M 119.87 -28.16 L 119.87 0 L 139.01 0 C 154.94 0 163.01 -7.55 163.01 -22.4 C 163.01 -37.25 154.94 -44.8 139.01 -44.8 L 119.87 -44.8 L 119.87 -33.34 L 139.01 -33.34 C 146.43 -33.34 150.21 -29.7 150.21 -22.4 C 150.21 -15.17 146.43 -11.46 139.01 -11.46 L 132.67 -11.46 L 132.67 -28.16 Z M 201.6 -44.8 L 177.98 -44.8 L 177.98 -33.28 L 200.26 -33.28 C 203.84 -33.28 205.76 -31.62 205.76 -28.16 C 205.76 -24.83 203.84 -23.04 200.26 -23.04 L 184.38 -23.04 L 184.38 -11.52 L 191.04 -11.52 L 200.38 0 L 215.74 0 L 206.14 -11.84 C 214.66 -13.18 219.01 -18.62 219.01 -28.1 C 219.01 -39.17 213.12 -44.8 201.6 -44.8 Z M 258.88 0.64 C 274.82 0.64 282.88 -7.1 282.88 -22.4 C 282.88 -37.7 274.75 -45.44 258.88 -45.44 C 243.01 -45.44 234.88 -37.7 234.88 -22.4 C 234.88 -7.17 242.94 0.64 258.88 0.64 Z M 258.88 -11.65 C 251.46 -11.65 247.68 -15.3 247.68 -22.4 C 247.68 -29.57 251.46 -33.15 258.88 -33.15 C 266.3 -33.15 270.08 -29.57 270.08 -22.4 C 270.08 -15.3 266.3 -11.65 258.88 -11.65 Z" stroke-linecap="round" />
<path style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(61,157,141); fill-rule: nonzero; opacity: 1;"  paint-order="stroke"  transform=" translate(-234.69, 22.4)" d="M 369.54 -33.28 L 369.54 -44.8 L 337.22 -44.8 L 337.22 -33.28 Z M 350.02 -16.64 L 363.14 -16.64 L 363.14 -28.16 L 337.22 -28.16 L 337.22 0 L 350.02 0 Z M 398.78 -44.8 L 385.98 -44.8 L 385.98 0 L 398.78 0 Z M 429.89 -44.8 L 415.17 -44.8 L 432.64 -22.78 L 414.53 0 L 429.25 0 L 440 -13.57 L 450.82 0 L 465.54 0 Z M 451.46 -44.8 L 442.37 -33.41 L 457.09 -33.41 L 466.18 -44.8 Z" stroke-linecap="round" />
</g>
</g>
</g>
</svg>
    </a>
    <ul class="nav-links">
      <li class="nav-dropdown">
        <a href="#" class="nav-dropdown-trigger">Services <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style="vertical-align:middle;margin-left:3px"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <div class="nav-dropdown-menu nav-dropdown-wide">
          <div class="nav-dd-grid">
            <a href="/residential.html" class="nav-dd-item"><div class="dd-icon">🏡</div><div><strong>Residential</strong><span>Yard flooding, foundation moisture &amp; failed French drains</span></div></a>
            <a href="/commercial.html" class="nav-dd-item"><div class="dd-icon">🏢</div><div><strong>Commercial</strong><span>Warehouses, parking lots, HOA &amp; multifamily</span></div></a>
            <a href="/golf.html" class="nav-dd-item"><div class="dd-icon">⛳</div><div><strong>Golf Courses</strong><span>Fairways, greens, bunkers &amp; cart paths</span></div></a>
            <a href="/sports.html" class="nav-dd-item"><div class="dd-icon">🏟️</div><div><strong>Sports Complexes</strong><span>Athletic fields, synthetic turf &amp; tracks</span></div></a>
            <a href="/residential-checklist.html" class="nav-dd-item"><div class="dd-icon">📋</div><div><strong>Free Drainage Audit</strong><span>Interactive checklist — is your yard a fit?</span></div></a>
            <a href="/howwehelp.html" class="nav-dd-item"><div class="dd-icon">💡</div><div><strong>How It Works</strong><span>Pressure-fed vs. traditional drainage explained</span></div></a>
          </div>
          <div class="nav-dd-footer">
            <a href="/service-areas.html" class="nav-dd-footer-link">View all service areas →</a>
            <a href="/howwehelp.html" class="nav-dd-footer-link">See how it works →</a>
          </div>
        </div>
      </li>
      <li class="nav-dropdown">
        <a href="#" class="nav-dropdown-trigger">Calculators <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style="vertical-align:middle;margin-left:3px"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <ul class="nav-dropdown-menu" style="min-width:300px;">
          <li><a href="/golf-calculator"><span class="dd-icon">⛳</span><div><strong>Golf Revenue Calculator</strong><span>How much are rain closures costing per year?</span></div></a></li>
          <li><a href="/sports-calculator"><span class="dd-icon">🏟️</span><div><strong>Sports Complex Calculator</strong><span>Revenue lost to field closures per season</span></div></a></li>
          <li><a href="/solar-calculator"><span class="dd-icon">☀️</span><div><strong>Solar Farm Calculator</strong><span>NPDES compliance cost vs. Hydro Fix ROI</span></div></a></li>
          <li><a href="/golf-audit.html"><span class="dd-icon">📊</span><div><strong>Golf Course Audit</strong><span>Free drainage assessment for your course</span></div></a></li>
        </ul>
      </li>
      <li><a href="/blog.html">Blog</a></li>
      <li><a href="/contact.html">Contact</a></li>
    </ul>
    <a href="https://calendar.app.google/yHwfh8ZnLQXPHaW78" target="_blank" class="nav-cta">Schedule a Call</a>
    <button class="nav-hamburger" aria-label="Menu" id="nav-hamburger-btn">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu">
  <a href="/index.html">Home</a>
  <div class="mobile-section-label">Services</div>
  <a href="/residential.html" class="mobile-sub">🏡 Residential</a>
  <a href="/residential-checklist.html" class="mobile-sub">📋 Residential Audit Checklist</a>
  <a href="/commercial.html" class="mobile-sub">🏢 Commercial</a>
  <a href="/golf.html" class="mobile-sub">⛳ Golf Courses</a>
  <a href="/sports.html" class="mobile-sub">🏟️ Sports Complexes</a>
  <div class="mobile-section-label">Calculators</div>
  <a href="/golf-calculator" class="mobile-sub">⛳ Golf Course Calculator</a>
  <a href="/sports-calculator" class="mobile-sub">🏟️ Sports Complex Calculator</a>
  <a href="/solar-calculator" class="mobile-sub">☀️ Solar Farm Calculator</a>
  <a href="/blog.html">Blog</a>
  <a href="/contact.html">Contact</a>
  <a href="https://calendar.app.google/yHwfh8ZnLQXPHaW78" target="_blank" style="color:var(--teal);font-weight:600;">Schedule a Call →</a>
</div>`;

const FOOTER = `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-top">
      <div>
        <a href="/index.html" class="footer-logo" aria-label="Hydro Fix home">
          <svg style="display:block;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="160" height="36" viewBox="0 0 1150 260" xml:space="preserve">
<desc>HydroFix Alt 2 - HYDRO white, FIX teal (dark background)</desc>
<defs>
</defs>
<g transform="matrix(1 0 0 1 640 512)" id="background-logo"  >
<rect style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-opacity: 0; fill-rule: nonzero; opacity: 1;"  paint-order="stroke"  x="-640" y="-512" rx="0" ry="0" width="1280" height="1024" />
</g>
<g transform="matrix(0.902 0 0 0.902 110 130)" id="logo-logo"  >
<g style=""  paint-order="stroke"   >
		<g transform="matrix(0.5256105787118807 0 0 0.5256105787118807 0.013186011651896479 -9.548771325538041)"  >
<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"  paint-order="stroke"  transform=" translate(-526.2774288334338, -371.8330078)" d="M 389.3052673 511.2958679 C 389.3052673 511.2958679 427.2749023 490.5591736 492.229187 497.4960327 C 557.1834717 504.4328918 620.5611572 542.7528076 620.5611572 542.7528076 L 389.3052673 511.2958679 z M 654.1296387 353.7208252 C 647.0235596 340.58770749999996 638.9212646999999 327.7336426 630.3161011 315.4040222 C 605.357544 321.7782287 575.0913085999999 321.0237732 548.0758056999999 316.96591179999996 C 511.7285461999999 311.69427479999996 474.07687379999993 300.63864129999996 436.19747929999994 296.41067499999997 C 417.5783996999999 320.6579895 399.9741821999999 347.7117614 387.82354739999994 375.3858337 C 473.5455322 355.4011536 565.1539307 322.1629639 654.1296387 353.7208252 z M 616.0635986 297.2537842 C 583.6395874 253.9820557 558.5897216 228.21386719999998 526.2944335999999 200.913208 C 521.3821410999999 205.1785583 489.75311279999994 233.0888977 457.86096189999995 271.5933533 C 471.427063 274.2622986 484.60903929999995 277.70309449999996 497.5655211999999 281.176178 C 535.4984741 291.2707214 575.4211426 303.5532532 616.0635986 297.2537842 z M 679.5233154 428.4390259 C 678.1525268 427.20791629999997 676.7721557 426.0124512 675.3840332 424.8467407 L 678.4067383 422.184906 C 643.9445801 394.45294190000004 594.7324219000001 389.3736572 594.7324219000001 389.3736572 L 594.7308350000001 389.38314820000005 C 524.4056397 378.90563970000005 445.43634040000006 405.79449460000006 376.21566780000006 413.19241330000006 C 372.1201783000001 428.88626100000005 370.63418590000003 446.20452880000005 371.85617070000006 459.29449460000006 C 382.99584970000006 454.55841060000006 393.5561524000001 452.26528930000006 403.68032840000006 451.00341790000004 C 498.03759770000005 436.18862910000007 590.0238648000001 518.7708129 678.3648072000001 474.9994811 C 681.8930054 459.0707092 681.7359619 442.6685181 679.5233154 428.4390259 z" stroke-linecap="round" />
</g>
		<g transform="matrix(0.5256105787118807 0 0 0.5256105787118807 0 2.842171e-14)"  >
<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(61,157,141); fill-rule: nonzero; opacity: 1;"  paint-order="stroke"  transform=" translate(-526.2523417971641, -390.0000153)" d="M 642.4685059 534.4841309 L 643.5454712 534.3754882999999 L 642.7427978999999 535.1014403999999 C 611.1013184 563.7227172999999 569.9592286 579.4851683999999 526.8951415999999 579.4851683999999 C 480.16796869999985 579.4851683999999 436.4987487999999 561.2994383999999 403.9320373999999 528.2782591999999 C 398.5920410999999 522.8639525999998 393.6707458999999 517.1503904999998 389.3052673999999 511.2958677999999 L 388.95843509999986 510.8306272999999 L 389.53024299999987 510.7330930999999 L 389.6646118999999 510.7101743999999 L 389.9236145999999 510.6660764999999 C 391.10055549999987 510.4188840999999 392.2903442999999 510.2279355999999 393.3902283999999 510.0602414999999 C 397.4067688999999 509.31866439999993 401.4993286999999 508.6663205999999 405.83218399999987 507.9754025999999 L 407.82153339999985 507.6580807999999 C 414.70370499999984 506.5714108999999 422.2191468999998 506.0204464999999 430.15884419999986 506.0204464999999 C 436.43276999999983 506.02078219999987 443.0827027999999 506.3648373999999 449.9239198999999 507.04324309999987 C 462.9480897999999 508.3187862999999 477.7373353999999 510.85147059999986 496.4657289999999 515.0138546999999 C 503.3680421999999 516.5455929999999 510.2526552999999 518.1638181 517.5410158999999 519.8768307999999 C 527.0333254999999 522.1077877999999 536.8485109999999 524.4147946999999 546.8730472 526.5559078999999 C 568.5392459 531.1730343999999 585.537659 533.7616573999999 601.9891971 534.9493404999998 C 607.9801639 535.3850704999999 613.9846805 535.6062008999999 619.8360599 535.6062008999999 C 627.4844971 535.6062012 635.098877 535.2288208 642.4685059 534.4841309 z M 469.3257446 350.3189697 C 488.2670898 354.4448547 507.1776428 359.9363708 525.4656372000001 365.24691770000004 C 562.2788086 375.93679810000003 600.3453369000001 386.99078370000007 639.4911499000001 386.99078370000007 C 649.3807983000002 386.99078370000007 659.1810913 386.28115850000006 668.6204834000001 384.88153080000006 L 669.0369873000001 384.81970220000005 L 668.8831787 384.42776490000006 C 659.4993896000001 360.49154660000005 644.8298950000001 334.6990357000001 625.2822876 307.76629640000004 L 625.185791 307.63348390000004 L 625.0215454 307.62823490000005 C 622.1974487 307.53991700000006 619.2369385000001 307.49508670000006 616.2221069000001 307.49508670000006 C 600.1853637 307.49508670000006 583.4134521000001 308.76318360000005 567.1941528000001 309.99005130000006 C 550.5537719000001 311.24835210000003 533.3467407 312.5494995000001 516.4672241000001 312.5494995000001 C 483.9311218000001 312.5494995000001 458.33358760000004 307.50064090000006 435.91085810000004 296.66061400000007 L 435.66482540000004 296.54187010000004 L 435.49896240000004 296.75845340000006 C 424.1116028 311.6262207000001 414.04989620000003 326.3421936000001 405.59362790000006 340.49774170000006 L 405.30505370000003 340.98031620000006 L 405.86712650000004 341.00418090000005 C 424.2264404 341.7812195 447.3561401 345.1762085 469.3257446 350.3189697 z M 451.4226685 279.8872681 L 451.59759529999997 279.9565125 C 467.0176087 285.90292359999995 484.1372987 288.7941285 503.93304449999994 288.7941285 C 523.4464721999999 288.7941285 543.5565185999999 286.0209962 563.0045167 283.3390199 C 575.7227174 281.5851747 588.8739015 279.77185069999996 601.7078247999999 278.7570192 L 602.2843628999999 278.7114259 L 601.9185792 278.2633363 C 574.8612062 245.1151582 554.4155274 224.0879213 526.4812013 200.6808931 L 526.2828980999999 200.51486219999998 L 526.0878907999999 200.68443309999998 C 522.0291138999999 204.2089998 485.44512959999986 236.35981759999999 451.15069599999987 279.3580934 L 450.8923341999999 279.6818849 L 451.2794191999999 279.8298646 L 451.4226685 279.8872681 z M 678.7348633 422.1171875 L 678.6638794 421.7730103 L 678.3233032 421.8603516 C 661.9537964000001 426.0674134 644.9862671000001 428.1121827 626.4512939000001 428.1121827 C 589.9142456000001 428.1121827 552.8455810000002 419.9111024 516.9972534000001 411.9802552 C 481.0582886000001 404.0291138 443.89572140000007 395.8074036 407.1705627000001 395.80673229999996 C 398.14205930000014 395.80642709999995 389.2902221000001 396.3082887 380.8611145000001 397.2976381 L 380.6523743000001 397.32217419999995 L 380.5836487000001 397.52078259999996 C 373.4478150000001 418.10971079999996 370.3050537000001 437.52151499999997 371.24304200000006 455.21667489999993 L 371.52178960000003 459.31704719999993 L 371.55255130000006 459.77017219999993 L 371.97656250000006 459.6072388999999 C 372.49871830000006 459.4060364999999 425.03454590000007 439.49792489999993 496.8182373000001 439.37066659999994 C 559.1991577000001 439.6939087999999 621.8928833000001 452.2944031999999 678.1184692 475.80953989999995 L 678.4855346 475.96298229999996 L 678.5742187000001 475.57495129999995 C 682.3163452 459.2218628 682.374939 439.7374268 678.7348633 422.1171875 z" stroke-linecap="round" />
</g>
</g>
</g>
<g transform="matrix(1.921 0 0 1.921 659 130)" id="text-logo"  >
<g style=""  paint-order="stroke"   >
		<g transform="matrix(1 0 0 1 0 0)" id="text-logo-path-0"  >
<path style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"  paint-order="stroke"  transform=" translate(-234.69, 22.4)" d="M 16 -44.8 L 3.2 -44.8 L 3.2 0 L 16 0 L 16 -16.64 L 30.08 -16.64 L 30.08 0 L 42.88 0 L 42.88 -28.16 L 16 -28.16 Z M 42.88 -44.8 L 30.08 -44.8 L 30.08 -33.34 L 42.88 -33.34 Z M 58.37 -44.8 L 75.01 -10.43 L 75.01 0 L 87.81 0 L 87.81 -11.71 L 71.81 -44.8 Z M 91.01 -44.8 L 85.44 -33.34 L 98.88 -33.34 L 104.45 -44.8 Z M 119.87 -28.16 L 119.87 0 L 139.01 0 C 154.94 0 163.01 -7.55 163.01 -22.4 C 163.01 -37.25 154.94 -44.8 139.01 -44.8 L 119.87 -44.8 L 119.87 -33.34 L 139.01 -33.34 C 146.43 -33.34 150.21 -29.7 150.21 -22.4 C 150.21 -15.17 146.43 -11.46 139.01 -11.46 L 132.67 -11.46 L 132.67 -28.16 Z M 201.6 -44.8 L 177.98 -44.8 L 177.98 -33.28 L 200.26 -33.28 C 203.84 -33.28 205.76 -31.62 205.76 -28.16 C 205.76 -24.83 203.84 -23.04 200.26 -23.04 L 184.38 -23.04 L 184.38 -11.52 L 191.04 -11.52 L 200.38 0 L 215.74 0 L 206.14 -11.84 C 214.66 -13.18 219.01 -18.62 219.01 -28.1 C 219.01 -39.17 213.12 -44.8 201.6 -44.8 Z M 258.88 0.64 C 274.82 0.64 282.88 -7.1 282.88 -22.4 C 282.88 -37.7 274.75 -45.44 258.88 -45.44 C 243.01 -45.44 234.88 -37.7 234.88 -22.4 C 234.88 -7.17 242.94 0.64 258.88 0.64 Z M 258.88 -11.65 C 251.46 -11.65 247.68 -15.3 247.68 -22.4 C 247.68 -29.57 251.46 -33.15 258.88 -33.15 C 266.3 -33.15 270.08 -29.57 270.08 -22.4 C 270.08 -15.3 266.3 -11.65 258.88 -11.65 Z" stroke-linecap="round" />
<path style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(61,157,141); fill-rule: nonzero; opacity: 1;"  paint-order="stroke"  transform=" translate(-234.69, 22.4)" d="M 369.54 -33.28 L 369.54 -44.8 L 337.22 -44.8 L 337.22 -33.28 Z M 350.02 -16.64 L 363.14 -16.64 L 363.14 -28.16 L 337.22 -28.16 L 337.22 0 L 350.02 0 Z M 398.78 -44.8 L 385.98 -44.8 L 385.98 0 L 398.78 0 Z M 429.89 -44.8 L 415.17 -44.8 L 432.64 -22.78 L 414.53 0 L 429.25 0 L 440 -13.57 L 450.82 0 L 465.54 0 Z M 451.46 -44.8 L 442.37 -33.41 L 457.09 -33.41 L 466.18 -44.8 Z" stroke-linecap="round" />
</g>
</g>
</g>
</svg>
        </a>
        <p class="footer-desc">Permanent, pressure-fed drainage systems that never clog, crush, or fail. Made from 100% recycled materials. Serving the Southeast.</p>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <a href="/residential.html">Residential</a>
        <a href="/residential-checklist.html">Residential Audit Checklist</a>
        <a href="/commercial.html">Commercial</a>
        <a href="/golf.html">Golf Courses</a>
        <a href="/calculators.html">All Calculators</a>
        <a href="/calculators.html#golf">Golf Revenue Calculator</a>
        <a href="/sports.html">Sports Complexes</a>
        <a href="/calculators.html#sports">Sports Complex Calculator</a>
        <a href="/calculators.html#solar">Solar Farm ROI Calculator</a>
      </div>
      <div class="footer-col footer-col-areas">
        <h5>Areas We Serve</h5>
        <a href="/service-areas" class="footer-areas-all">View All Service Areas →</a>
        <div class="footer-state-list">
          <a href="/locations/georgia" class="footer-state-link">
            <span class="fsl-icon">🍑</span>
            <span class="fsl-name">Georgia</span>
            <span class="fsl-arrow">→</span>
          </a>
          <a href="/locations/florida" class="footer-state-link">
            <span class="fsl-icon">🌴</span>
            <span class="fsl-name">Florida</span>
            <span class="fsl-arrow">→</span>
          </a>
          <a href="/locations/north-carolina" class="footer-state-link">
            <span class="fsl-icon">🏔️</span>
            <span class="fsl-name">North Carolina</span>
            <span class="fsl-arrow">→</span>
          </a>
          <a href="/locations/south-carolina" class="footer-state-link">
            <span class="fsl-icon">🌊</span>
            <span class="fsl-name">South Carolina</span>
            <span class="fsl-arrow">→</span>
          </a>
          <a href="/locations/tennessee" class="footer-state-link">
            <span class="fsl-icon">🎸</span>
            <span class="fsl-name">Tennessee</span>
            <span class="fsl-arrow">→</span>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <a href="/blog.html">Blog</a>
        <a href="/contact.html">Contact Us</a>
        <a href="https://calendar.app.google/yHwfh8ZnLQXPHaW78" target="_blank">Schedule a Call</a>
        <a href="https://calendar.app.google/yHwfh8ZnLQXPHaW78" target="_blank">Free Evaluation</a>
        <a href="https://www.myhydrofix.com/legal/privacy-policy" target="_blank">Privacy Policy</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Hydro Fix. Serving the Southeast. All rights reserved.</p>
      <div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap;">
        <div style="display:flex;gap:14px;align-items:center;">
          <a href="https://www.facebook.com/myhydrofix" target="_blank" rel="noopener" aria-label="Hydro Fix on Facebook" class="social-icon-link">
            <img src="/img/social/facebook.svg" alt="Facebook" width="20" height="20">
          </a>
          <a href="https://www.instagram.com/myhydrofix" target="_blank" rel="noopener" aria-label="Hydro Fix on Instagram" class="social-icon-link">
            <img src="/img/social/instagram.svg" alt="Instagram" width="20" height="20">
          </a>
          <a href="https://www.linkedin.com/company/hydro-fix" target="_blank" rel="noopener" aria-label="Hydro Fix on LinkedIn" class="social-icon-link">
            <img src="/img/social/linkedin.svg" alt="LinkedIn" width="20" height="20">
          </a>
          <a href="https://x.com/myhydrofix" target="_blank" rel="noopener" aria-label="Hydro Fix on X" class="social-icon-link">
            <img src="/img/social/x.svg" alt="X (Twitter)" width="20" height="20">
          </a>
        </div>
        <a href="https://www.myhydrofix.com/legal/privacy-policy" target="_blank">Privacy</a>
        <a href="https://www.myhydrofix.com/legal/cookies-policy" target="_blank">Cookies</a>
      </div>
    </div>
  </div>
</footer>`;

const STICKY = `
<div class="sticky-cta">
  <a href="https://calendar.app.google/yHwfh8ZnLQXPHaW78" target="_blank">Schedule Free Evaluation</a>
</div>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = NAV;

  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = FOOTER;

  const stickyEl = document.getElementById('sticky-placeholder');
  if (stickyEl) stickyEl.outerHTML = STICKY;

  // Active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href !== '#' && path.includes(href.replace('.html',''))) {
      link.classList.add('active');
    }
  });

  // Close dropdown on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
    }
  });

  // Dropdown toggle on click (touch-friendly)
  function initDropdowns() {
    document.querySelectorAll('.nav-dropdown-trigger').forEach(trigger => {
      // Avoid double-binding
      if (trigger.dataset.dropdownBound) return;
      trigger.dataset.dropdownBound = 'true';
      trigger.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        const parent = trigger.closest('.nav-dropdown');
        const wasOpen = parent.classList.contains('open');
        document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
        if (!wasOpen) parent.classList.add('open');
      });
    });
  }
  // Run immediately and after a tick to catch dynamically injected nav
  initDropdowns();
  setTimeout(initDropdowns, 100);

  // FAQ accordion is handled by main.js (document-level delegation).
  // A second handler here caused a double-toggle that cancelled every open.
});
