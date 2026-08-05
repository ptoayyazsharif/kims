/* ==========================================================================
   Kimstay — shared runtime: icons, chrome, theme, search state, calendar
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- icon set ---------------------------------------------------- */

  const P = (d, extra) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"${extra || ''}>${d}</svg>`;

  const ICONS = {
    search: P('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
    globe: P('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18"/>'),
    menu: P('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    user: P('<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/>'),
    heart: '<svg viewBox="0 0 32 32" stroke-linecap="round" stroke-linejoin="round"><path d="M16 28c7-4.7 13-10 13-16A7 7 0 0 0 16 8 7 7 0 0 0 3 12c0 6 6 11.3 13 16z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.7l1.2-6.6L2.5 9.5l6.6-.9z"/></svg>',
    chevL: P('<path d="M15 5l-7 7 7 7"/>'),
    chevR: P('<path d="M9 5l7 7-7 7"/>'),
    chevD: P('<path d="M6 9l6 6 6-6"/>'),
    close: P('<path d="M6 6l12 12M18 6L6 18"/>'),
    share: P('<path d="M12 3v13"/><path d="M8 7l4-4 4 4"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/>'),
    grid: P('<rect x="3" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6"/>'),
    sliders: P('<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>'),
    minus: P('<path d="M5 12h14"/>'),
    plus: P('<path d="M12 5v14M5 12h14"/>'),
    check: P('<path d="M4.5 12.5l5 5 10-11"/>'),
    info: P('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.6v.6"/>'),
    flag: P('<path d="M5 21V4M5 4h11l-2 3.5L16 11H5"/>'),
    pin: P('<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>'),
    key: P('<circle cx="8" cy="14" r="4"/><path d="M11 11l8-8M17 5l2 2M15 7l2 2"/>'),
    cal: P('<rect x="3.5" y="5" width="17" height="16" rx="2.6"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'),
    clock: P('<circle cx="12" cy="12" r="9"/><path d="M12 7v5.4l3.4 2"/>'),
    shield: P('<path d="M12 3l7 3v5.5c0 4.6-3 8.2-7 9.5-4-1.3-7-4.9-7-9.5V6z"/><path d="M9 12l2 2 4-4"/>'),
    /* laurel half-wreath — the markup mirrors it for the right-hand branch */
    laurel: '<svg viewBox="0 0 16 28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">'
      + '<path d="M13 2C8.2 5.4 5.6 9.6 5.6 14.2c0 4.5 2.5 8.6 7.4 11.8"/>'
      + '<g fill="currentColor" stroke="none">'
      + '<ellipse cx="6.4" cy="5" rx="3" ry="1.5" transform="rotate(-52 6.4 5)"/>'
      + '<ellipse cx="3.6" cy="9.8" rx="3" ry="1.5" transform="rotate(-26 3.6 9.8)"/>'
      + '<ellipse cx="2.9" cy="15.2" rx="3" ry="1.5" transform="rotate(8 2.9 15.2)"/>'
      + '<ellipse cx="4.4" cy="20.4" rx="3" ry="1.5" transform="rotate(36 4.4 20.4)"/>'
      + '<ellipse cx="8" cy="24.6" rx="3" ry="1.5" transform="rotate(62 8 24.6)"/>'
      + '</g></svg>',
    sparkle: P('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>'),
    lang: P('<path d="M3 6h11M8.5 4v2c0 4.2-2.2 7.7-5.5 9.4"/><path d="M6 11.5c1.6 2.7 4 4.6 7 5.5"/><path d="M13 21l4.2-10L21.5 21M14.9 17.4h4.6"/>'),
    /* amenity icons */
    wifi: P('<path d="M4.5 9.5a12 12 0 0 1 15 0M7.5 13a7.5 7.5 0 0 1 9 0"/><circle cx="12" cy="17.5" r="1.3" fill="currentColor" stroke="none"/>'),
    pool: P('<path d="M3 18c1.5 0 1.5 1.4 3 1.4S7.5 18 9 18s1.5 1.4 3 1.4S13.5 18 15 18s1.5 1.4 3 1.4S19.5 18 21 18"/><path d="M8 17V6a2.2 2.2 0 0 1 4.4 0M15.6 17V6A2.2 2.2 0 0 1 20 6"/><path d="M8 10.5h7.6M8 14h7.6"/>'),
    kitchen: P('<path d="M6 3v7a2 2 0 0 0 4 0V3M8 10v11"/><path d="M17 3c-1.7 1.6-2.5 3.6-2.5 6 0 1.7.8 2.8 2.5 3v9"/>'),
    tv: P('<rect x="3" y="4.5" width="18" height="12.5" rx="2"/><path d="M8.5 21h7"/>'),
    car: P('<path d="M4.5 16v2.5h-2V16M21.5 16v2.5h-2V16"/><path d="M3 16v-4l1.8-4.6A2 2 0 0 1 6.7 6h10.6a2 2 0 0 1 1.9 1.4L21 12v4z"/><path d="M3 12h18M6.5 14.5h1.5M16 14.5h1.5"/>'),
    pets: P('<circle cx="7" cy="9" r="2"/><circle cx="12" cy="6.5" r="2"/><circle cx="17" cy="9" r="2"/><path d="M12 11c-2.6 0-5 2.4-5 4.6C7 18 8.8 19 12 19s5-1 5-3.4C17 13.4 14.6 11 12 11z"/>'),
    desk: P('<rect x="3" y="5" width="13" height="9" rx="1.6"/><path d="M6 19h14M20 10v9"/>'),
    mountain: P('<path d="M2.5 19l6.5-11 4 6.4 2.5-3.8 6 8.4z"/><circle cx="17" cy="6" r="2"/>'),
    desert: P('<path d="M10 21V7a2.5 2.5 0 0 1 5 0v14"/><path d="M10 13H7.5A2.5 2.5 0 0 1 5 10.5V9M15 11h2.2a2.3 2.3 0 0 0 2.3-2.3V7"/>'),
    camera: P('<rect x="3" y="7" width="18" height="12" rx="2.4"/><circle cx="12" cy="13" r="3.2"/><path d="M8.5 7l1.3-2.4h4.4L15.5 7"/>'),
    fire: P('<path d="M12 3c3.2 3.4 6 6.4 6 10a6 6 0 0 1-12 0c0-1.8.7-3.2 2-4.6.4 1.4 1.2 2.3 2.3 2.6C10 8.6 10.6 5.8 12 3z"/>'),
    ac: P('<path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9"/><path d="M12 6.6l2-2M12 6.6l-2-2M12 17.4l2 2M12 17.4l-2 2"/>'),
    washer: P('<rect x="4" y="3" width="16" height="18" rx="2.4"/><circle cx="12" cy="14" r="4.2"/><path d="M8 6.5h.5M11 6.5h.5"/>'),
    bath: P('<path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M6 12V6.2A2.2 2.2 0 0 1 8.2 4c1 0 1.7.5 2.1 1.3"/><path d="M7 19l-1 2M17 19l1 2"/>'),
    golf: P('<path d="M11 21V4l7 3.5-7 3.5"/><ellipse cx="10" cy="20.5" rx="5" ry="1.6"/>'),
    book: P('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H19v3H6.5"/>'),
    door: P('<rect x="6" y="3" width="12" height="18" rx="1.6"/><circle cx="14.5" cy="12" r="1" fill="currentColor" stroke="none"/>'),
    smoke: P('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2"/>'),
    view: P('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18"/>'),
    dot: P('<circle cx="12" cy="12" r="7"/>'),
    grillsvg: P('<circle cx="12" cy="9" r="6.5"/><path d="M7.5 14l-2 7M16.5 14l2 7M9 18h6"/>'),
    school: P('<path d="M3 9l9-4.5L21 9l-9 4.5z"/><path d="M7 11v5c0 1.7 2.2 3 5 3s5-1.3 5-3v-5"/>'),
    events: P('<rect x="3.5" y="5" width="17" height="16" rx="2.6"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'),
    tag: P('<path d="M4 11V5a1 1 0 0 1 1-1h6l8.5 8.5a1.6 1.6 0 0 1 0 2.3l-5.7 5.7a1.6 1.6 0 0 1-2.3 0z"/><circle cx="8.5" cy="8.5" r="1.4"/>'),
    house: P('<path d="M4 10.6L12 4l8 6.6V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M9.5 21v-6h5v6"/>'),
    chat: P('<path d="M20 15a2.5 2.5 0 0 1-2.5 2.5H8L4 21V6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5z"/>'),
  };

  /* map Airbnb SYSTEM_* icon keys onto our set */
  const AMENITY_ICON = {
    SYSTEM_WI_FI: 'wifi', SYSTEM_POOL: 'pool', SYSTEM_COOKING_BASICS: 'kitchen', SYSTEM_TV: 'tv',
    SYSTEM_MAPS_CAR_RENTAL: 'car', SYSTEM_PETS: 'pets', SYSTEM_WORKSPACE: 'desk',
    SYSTEM_VIEW_MOUNTAIN: 'mountain', SYSTEM_DESERT_CACTUS: 'desert', SYSTEM_SURVEILLANCE: 'camera',
    SYSTEM_FIRE_PIT: 'fire', SYSTEM_SNOWFLAKE: 'ac', SYSTEM_WASHER: 'washer', SYSTEM_DRYER: 'washer',
    SYSTEM_BATHTUB: 'bath', SYSTEM_GOLF: 'golf', SYSTEM_BOOK: 'book', SYSTEM_DOOR: 'door',
    SYSTEM_DETECTOR_SMOKE: 'smoke', SYSTEM_DETECTOR_CO: 'smoke', SYSTEM_GRILL: 'grillsvg',
    SYSTEM_MAPS_SCHOOL_UNIVERSITY: 'school', SYSTEM_EVENTS: 'events', SYSTEM_KEY: 'key',
  };

  /* keyword fallback so every amenity gets a sensible glyph */
  const KEYWORD_ICON = [
    [/wifi|internet/i, 'wifi'], [/pool/i, 'pool'], [/kitchen|oven|stove|fridge|refriger|microwave|dish|cook|freezer|toaster|blender|baking|coffee|wine/i, 'kitchen'],
    [/tv|television/i, 'tv'], [/park|street parking|garage/i, 'car'], [/pet/i, 'pets'],
    [/workspace|office/i, 'desk'], [/mountain/i, 'mountain'], [/desert/i, 'desert'],
    [/camera|security/i, 'camera'], [/fire pit/i, 'fire'], [/air condition|heating|fan|cooling/i, 'ac'],
    [/washer|dryer|laundr|iron|hanger|linen|pillow|shade/i, 'washer'],
    [/bath|shower|shampoo|conditioner|soap|hair dryer|hot water|clean/i, 'bath'],
    [/golf/i, 'golf'], [/book|board game|reading/i, 'book'],
    [/entrance|check-in|keypad|self/i, 'key'], [/alarm|extinguish|first aid/i, 'smoke'],
    [/bbq|grill|barbecue/i, 'grillsvg'], [/patio|backyard|outdoor|sun lounger|beach|furniture|dining area/i, 'view'],
    [/view/i, 'view'],
  ];

  function amenityIcon(a) {
    const k = AMENITY_ICON[a.icon];
    if (k && ICONS[k]) return ICONS[k];
    for (const [re, name] of KEYWORD_ICON) if (re.test(a.title)) return ICONS[name];
    return ICONS.dot;
  }

  /* ---------- small helpers ------------------------------------------------ */

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const el = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const money = (n) => '$' + Math.round(n).toLocaleString('en-US');

  /* Resize muscache images on the fly — a big win on the photo grids. The CDN
     renders only this fixed ladder of widths; any other value 404s, so round the
     requested width up to the next rung rather than passing it through. */
  const IM_WIDTHS = [120, 240, 320, 480, 720, 960, 1200, 1440, 1920, 2560];
  const img = (url, w) => {
    if (!/muscache\.com/.test(url)) return url;
    const width = IM_WIDTHS.find((x) => x >= w) || IM_WIDTHS[IM_WIDTHS.length - 1];
    return url + (url.includes('?') ? '&' : '?') + 'im_w=' + width;
  };

  const MON = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const MON_S = MON.map((m) => m.slice(0, 3));
  const DOW = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const ymd = (d) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const parseYmd = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const nights = (a, b) => Math.round((parseYmd(b) - parseYmd(a)) / 86400000);
  const fmtShort = (s) => { const d = parseYmd(s); return MON_S[d.getMonth()] + ' ' + d.getDate(); };
  const fmtLong = (s) => { const d = parseYmd(s); return MON[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear(); };

  /* ---------- theme --------------------------------------------------------- */

  function initTheme() {
    const saved = localStorage.getItem('ks-theme');
    const sys = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = saved || sys;
  }
  function toggleTheme() {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('ks-theme', next);
  }

  /* ---------- favourites ---------------------------------------------------- */

  const favs = {
    all: () => { try { return JSON.parse(localStorage.getItem('ks-favs') || '[]'); } catch (e) { return []; } },
    has: (id) => favs.all().includes(id),
    toggle(id) {
      const list = favs.all(); const i = list.indexOf(id);
      i > -1 ? list.splice(i, 1) : list.push(id);
      localStorage.setItem('ks-favs', JSON.stringify(list));
      return i === -1;
    },
  };

  /* ---------- toast ---------------------------------------------------------- */

  let toastEl, toastT;
  function toast(msg) {
    if (!toastEl) { toastEl = el('<div class="toast" role="status" aria-live="polite"></div>'); document.body.appendChild(toastEl); }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(() => toastEl.classList.remove('show'), 3200);
  }

  /* ---------- search state (shared between pages via URL + storage) ---------- */

  const DEFAULTS = { checkIn: '2026-08-25', checkOut: '2026-08-28', adults: 1, children: 0, infants: 0, pets: 0, where: '' };

  const search = {
    get() {
      const q = new URLSearchParams(location.search);
      let s;
      try { s = JSON.parse(localStorage.getItem('ks-search') || 'null'); } catch (e) { s = null; }
      s = Object.assign({}, DEFAULTS, s || {});
      ['checkIn', 'checkOut', 'where'].forEach((k) => { if (q.get(k)) s[k] = q.get(k); });
      ['adults', 'children', 'infants', 'pets'].forEach((k) => { if (q.get(k)) s[k] = +q.get(k); });
      if (s.checkIn && parseYmd(s.checkIn) < today()) { s.checkIn = DEFAULTS.checkIn; s.checkOut = DEFAULTS.checkOut; }
      return s;
    },
    set(patch) {
      const s = Object.assign(search.get(), patch);
      localStorage.setItem('ks-search', JSON.stringify(s));
      return s;
    },
    guests(s) { return (s.adults || 0) + (s.children || 0); },
    guestLabel(s) {
      const g = search.guests(s);
      let t = g + ' guest' + (g === 1 ? '' : 's');
      if (s.infants) t += ', ' + s.infants + ' infant' + (s.infants === 1 ? '' : 's');
      if (s.pets) t += ', ' + s.pets + ' pet' + (s.pets === 1 ? '' : 's');
      return t;
    },
    qs(s) {
      return new URLSearchParams({ checkIn: s.checkIn || '', checkOut: s.checkOut || '', adults: s.adults, children: s.children, infants: s.infants, pets: s.pets }).toString();
    },
  };

  /* ---------- date-range calendar ------------------------------------------- */

  /**
   * Renders a two-month range picker into `host`.
   * opts: { checkIn, checkOut, minNights, onChange(range), onDone() }
   */
  function Calendar(host, opts) {
    const o = Object.assign({ minNights: 1 }, opts);
    let cursor = o.checkIn ? parseYmd(o.checkIn) : today();
    cursor = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
    let start = o.checkIn || null, end = o.checkOut || null, hover = null;

    function monthHtml(base, offset) {
      const m = new Date(base.getFullYear(), base.getMonth() + offset, 1);
      const first = m.getDay(), len = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();
      let cells = '';
      for (let i = 0; i < first; i++) cells += '<span class="cal-day blank"></span>';
      for (let d = 1; d <= len; d++) {
        const date = new Date(m.getFullYear(), m.getMonth(), d);
        const key = ymd(date);
        const past = date < today();
        const cls = ['cal-day'];
        if (past) cls.push('past');
        const rangeEnd = end || hover;
        if (key === start || key === end) cls.push('sel');
        if (start && rangeEnd && key > (start < rangeEnd ? start : rangeEnd) && key < (start < rangeEnd ? rangeEnd : start)) cls.push('in-range');
        if (start && rangeEnd && key === start && start < rangeEnd) cls.push('range-start');
        if (start && rangeEnd && key === rangeEnd && start < rangeEnd) cls.push('range-end');
        cells += `<button type="button" class="${cls.join(' ')}" data-d="${key}" ${past ? 'tabindex="-1"' : ''} aria-label="${fmtLong(key)}">${d}</button>`;
      }
      return `<div class="cal-m"><h4>${MON[m.getMonth()]} ${m.getFullYear()}</h4>
        <div class="cal-dow">${DOW.map((x) => `<span>${x}</span>`).join('')}</div>
        <div class="cal-days">${cells}</div></div>`;
    }

    function label() {
      if (start && end) { const n = nights(start, end); return `${n} night${n === 1 ? '' : 's'} in Chandler`; }
      if (start) return 'Select a checkout date';
      return 'Select your dates';
    }

    function render() {
      host.innerHTML = `
        <div class="cal-head">
          <div><h3>${label()}</h3><p>${start ? fmtLong(start) + (end ? ' – ' + fmtLong(end) : '') : 'Add dates for exact pricing'}</p></div>
          <div class="cal-nav">
            <button type="button" class="icon-btn" data-nav="-1" aria-label="Previous month">${ICONS.chevL}</button>
            <button type="button" class="icon-btn" data-nav="1" aria-label="Next month">${ICONS.chevR}</button>
          </div>
        </div>
        <div class="cal-months">${monthHtml(cursor, 0)}${monthHtml(cursor, 1)}</div>
        <div class="cal-foot">
          <button type="button" class="ghost-btn" data-act="clear" style="text-decoration:underline">Clear dates</button>
          <button type="button" class="ghost-btn" data-act="done" style="background:var(--text);color:var(--bg)">Close</button>
        </div>`;
    }

    host.addEventListener('click', (e) => {
      const nav = e.target.closest('[data-nav]');
      if (nav) { cursor = new Date(cursor.getFullYear(), cursor.getMonth() + (+nav.dataset.nav), 1); return render(); }
      const act = e.target.closest('[data-act]');
      if (act) {
        if (act.dataset.act === 'clear') { start = end = null; o.onChange && o.onChange({ checkIn: null, checkOut: null }); return render(); }
        return o.onDone && o.onDone();
      }
      const day = e.target.closest('[data-d]');
      if (!day) return;
      const k = day.dataset.d;
      if (!start || (start && end)) { start = k; end = null; }
      else if (k <= start) { start = k; end = null; }
      else if (nights(start, k) < o.minNights) { toast(`Minimum stay is ${o.minNights} nights`); return; }
      else { end = k; }
      o.onChange && o.onChange({ checkIn: start, checkOut: end });
      render();
      if (start && end) setTimeout(() => o.onDone && o.onDone(), 260);
    });

    host.addEventListener('mouseover', (e) => {
      const day = e.target.closest('[data-d]');
      if (!day || !start || end) return;
      if (hover !== day.dataset.d) { hover = day.dataset.d; render(); }
    });
    host.addEventListener('mouseleave', () => { if (hover) { hover = null; render(); } });

    /* Adopt a range chosen elsewhere (header pill, booking widget). Without this
       a re-render would just repaint the instance's own stale selection. */
    function set(r) {
      start = r.checkIn || null;
      end = r.checkOut || null;
      hover = null;
      if (start) { const d = parseYmd(start); cursor = new Date(d.getFullYear(), d.getMonth(), 1); }
      render();
    }

    render();
    return { render, set, get: () => ({ checkIn: start, checkOut: end }) };
  }

  /* ---------- guest stepper -------------------------------------------------- */

  function GuestPicker(host, state, max, onChange) {
    const rows = [
      ['adults', 'Adults', 'Ages 13 or above', 1],
      ['children', 'Children', 'Ages 2–12', 0],
      ['infants', 'Infants', 'Under 2', 0],
      ['pets', 'Pets', 'Bringing a service animal?', 0],
    ];
    function render() {
      host.innerHTML = rows.map(([k, t, s]) => {
        const v = state[k] || 0;
        const capped = k === 'adults' || k === 'children';
        const atMax = capped ? (state.adults + state.children) >= max : v >= 5;
        return `<div class="g-row">
          <div><b>${t}</b><span>${s}</span></div>
          <div class="stepper">
            <button type="button" data-k="${k}" data-v="-1" ${v <= (k === 'adults' ? 1 : 0) ? 'disabled' : ''} aria-label="Decrease ${t}">${ICONS.minus}</button>
            <output aria-live="polite">${v}</output>
            <button type="button" data-k="${k}" data-v="1" ${atMax ? 'disabled' : ''} aria-label="Increase ${t}">${ICONS.plus}</button>
          </div></div>`;
      }).join('') + `<p class="muted" style="font-size:12.5px;margin:14px 0 0">This place has a maximum of ${max} guests, not including infants.</p>`;
    }
    host.addEventListener('click', (e) => {
      const b = e.target.closest('[data-k]');
      if (!b) return;
      state[b.dataset.k] = Math.max(0, (state[b.dataset.k] || 0) + (+b.dataset.v));
      if (state.adults < 1) state.adults = 1;
      render(); onChange && onChange(state);
    });
    render();
    return { render };
  }

  /* ---------- page chrome ------------------------------------------------------ */

  function header(page) {
    const s = search.get();
    const dates = s.checkIn && s.checkOut ? fmtShort(s.checkIn) + ' – ' + fmtShort(s.checkOut) : 'Add dates';
    return `
<header class="hdr">
  <div class="hdr-in">
    <a class="logo" href="index.html" aria-label="Kimstay home">
      <svg viewBox="0 0 32 32" fill="none"><path d="M16 3.2c1.9 0 3.4 1.1 4.7 3.5l6.4 12.6c1.6 3.2.4 6.9-2.7 8.2-2.4 1-5 .1-8.4-3-3.4 3.1-6 4-8.4 3-3.1-1.3-4.3-5-2.7-8.2L11.3 6.7C12.6 4.3 14.1 3.2 16 3.2z" stroke="url(#lg)" stroke-width="2.4" stroke-linejoin="round"/><defs><linearGradient id="lg" x1="4" y1="4" x2="28" y2="28"><stop stop-color="#e0245e"/><stop offset="1" stop-color="#f0653f"/></linearGradient></defs></svg>
      <span>kimstay</span>
    </a>
    <nav class="nav-tabs">
      <a href="index.html"${page === 'home' ? ' aria-current="page"' : ''}>Homes</a>
      <a href="index.html#experiences">Experiences</a>
      <a href="index.html#services">Services</a>
    </nav>
    ${page === 'listing' ? `<form class="searchbar" id="hdrSearch" autocomplete="off">
      <button type="button" class="seg filled" data-open="dates"><b>Chandler</b><span id="hdrDates">${esc(dates)}</span></button>
      <span class="div"></span>
      <button type="button" class="seg filled" data-open="guests"><b>Guests</b><span id="hdrGuestLbl">${esc(search.guestLabel(s))}</span></button>
      <button type="submit" class="go" aria-label="Search">${ICONS.search}</button>
      <div id="hdrCal" class="cal-pop" hidden></div>
      <div id="hdrGuests" class="guest-pop" hidden></div>
    </form>` : '<div style="flex:1"></div>'}
    <div class="hdr-right">
      <a class="ghost-btn" href="#" data-demo>Become a host</a>
      <button class="icon-btn" data-theme-toggle aria-label="Toggle dark mode" title="Toggle theme">${ICONS.globe}</button>
      <button class="acct" data-demo aria-label="Main menu">
        ${ICONS.menu}<span class="avatar">${ICONS.user}</span>
      </button>
    </div>
  </div>
</header>`;
  }

  function footer() {
    const cols = [
      ['Support', ['Help Centre', 'AirCover', 'Anti-discrimination', 'Disability support', 'Cancellation options', 'Report a concern']],
      ['Hosting', ['Kimstay your home', 'AirCover for Hosts', 'Hosting resources', 'Community forum', 'Hosting responsibly']],
      ['Kimstay', ['Newsroom', 'New features', 'Careers', 'Investors', 'Gift cards']],
      ['Destinations', ['Chandler, AZ', 'Scottsdale, AZ', 'Sedona, AZ', 'Phoenix, AZ', 'Tucson, AZ']],
    ];
    return `
<footer class="ftr">
  <div class="ftr-in">
    <div class="ftr-cols">
      ${cols.map(([h, items]) => `<div><h4>${h}</h4><ul>${items.map((i) => `<li><a href="#" data-demo>${i}</a></li>`).join('')}</ul></div>`).join('')}
    </div>
    <div class="ftr-bot">
      <span>© 2026 Kimstay Demo · <a href="#" data-demo>Privacy</a> · <a href="#" data-demo>Terms</a> · <a href="#" data-demo>Sitemap</a></span>
      <span class="spacer"></span>
      <span style="display:flex;align-items:center;gap:7px">${ICONS.lang} English (US)</span>
      <span>$ USD</span>
    </div>
  </div>
  <div class="demo-note">
    ${ICONS.info}
    <span><b>Front-end mockup.</b> Photos, amenities, ratings, host stats, house rules and geolocation are pulled from a real Airbnb listing in Chandler, Arizona for demonstration purposes. Nightly rates, the additional listings on the home page and the guest review text are placeholder content. No backend, no payments, nothing is booked.</span>
  </div>
</footer>`;
  }

  /**
   * Wires the header search pill's date and guest popovers. Pages that render
   * the listing header must call this, otherwise the pill looks interactive but
   * opens nothing. `onChange` fires with the updated search state so the host
   * page can re-render anything priced off it.
   */
  function wireHeaderSearch(onChange) {
    const form = document.getElementById('hdrSearch');
    if (!form) return;
    const calBox = document.getElementById('hdrCal');
    const gBox = document.getElementById('hdrGuests');
    const state = search.get();

    const close = () => {
      calBox.hidden = true; gBox.hidden = true;
      $$('#hdrSearch .seg').forEach((x) => x.classList.remove('active'));
    };
    const sync = () => {
      const s = search.get();
      const d = document.getElementById('hdrDates');
      const g = document.getElementById('hdrGuestLbl');
      if (d) d.textContent = s.checkIn && s.checkOut ? fmtShort(s.checkIn) + ' – ' + fmtShort(s.checkOut) : 'Add dates';
      if (g) g.textContent = search.guestLabel(s);
    };

    const cal = Calendar(calBox, {
      checkIn: state.checkIn, checkOut: state.checkOut, minNights: 2,
      onChange: (r) => { search.set(r); sync(); onChange && onChange(search.get()); },
      onDone: close,
    });
    GuestPicker(gBox, state, 14, (g) => { search.set(g); sync(); onChange && onChange(search.get()); });

    form.addEventListener('click', (e) => {
      const seg = e.target.closest('[data-open]');
      if (!seg) return;
      const box = seg.dataset.open === 'guests' ? gBox : calBox;
      const wasOpen = !box.hidden;
      close();
      if (!wasOpen) { box.hidden = false; seg.classList.add('active'); }
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      close();
      const s = search.get();
      toast(s.checkIn && s.checkOut
        ? `Showing ${fmtShort(s.checkIn)} – ${fmtShort(s.checkOut)} for ${search.guestLabel(s)}`
        : 'Add dates to see the total');
    });
    /* capture phase — the popovers rebuild their own innerHTML on click */
    document.addEventListener('click', (e) => { if (!e.target.closest('#hdrSearch')) close(); }, true);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    sync();
    /* adopt() lets the host page push in dates picked in another widget */
    return { sync, close, adopt: (r) => { cal.set(r); sync(); } };
  }

  /* delegated handlers for the demo links + theme toggle */
  function wireChrome() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-theme-toggle]')) { toggleTheme(); return; }
      const d = e.target.closest('[data-demo]');
      if (d) { e.preventDefault(); toast('Demo only — this control is not wired up.'); }
    });
  }

  /* ---------- expose ------------------------------------------------------------ */

  window.KS = {
    ICONS, amenityIcon, $, $$, el, esc, money, img,
    MON, MON_S, ymd, parseYmd, today, addDays, nights, fmtShort, fmtLong,
    initTheme, toggleTheme, favs, toast, search, Calendar, GuestPicker,
    header, footer, wireChrome, wireHeaderSearch,
  };

  initTheme();
})();
