# Kimstay — property booking mockup

A front-end clone of an Airbnb-style booking site, built as a **view-only demo for a client**.
No backend, no build step, no dependencies — open the HTML and it runs.

The content is scraped from a real listing:
[airbnb.com/rooms/886961805317485128](https://www.airbnb.com/rooms/886961805317485128) —
an entire home in Chandler, Arizona hosted by Kim.

## Running it

Any static server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` straight off the filesystem works too. Photos are hot-linked
from Airbnb's CDN (`a0.muscache.com`), so an internet connection is needed for images.

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Search/browse page — hero search, category rail, listing grid |
| `listing.html` | Full property detail page with the booking widget |
| `assets/data.js` | All listing content as one `window.SITE` object |
| `assets/app.js` | Shared runtime — icons, header/footer, theme, calendar, guest picker |
| `assets/styles.css` | Design system and all layout |

## What it does

- **Photo gallery** — 5-up hero grid, a 17-room photo tour, and a full-screen lightbox for all 100 photos with keyboard arrows, thumbnails and swipe.
- **Booking widget** — two-month range picker with a 2-night minimum, guest stepper capped at 14, and a live price breakdown (nightly × nights, cleaning, service fee, AZ TPT tax, optional $85/day pool heating, automatic weekly/monthly discounts).
- **Search state** persists across pages and reloads via `localStorage`, so dates picked on the home page carry into the listing.
- **Wishlist** hearts persist per listing.
- **Dark mode** — follows the OS by default, toggled with the globe button, remembered across pages.
- **Responsive** down to 390px, with a sticky mobile booking bar replacing the sidebar.

## Real data vs. placeholder

Taken from the live listing:

- All 100 photos, grouped into the host's own 17 room categories
- Title, location, coordinates, "entire home · 14 guests · 4 bedrooms · 9 beds · 2 baths"
- The full description and licence numbers
- All 70 amenities across 14 categories
- Sleeping arrangements per bedroom
- Rating (4.91), review count (69), star distribution, all six category ratings, and the review topic tags with their counts
- Host profile — name, photo, 187 reviews, 4.89 rating, 8 years hosting, verification, profile highlights
- House rules, safety items, and the host's pool rules

Placeholder content, because Airbnb does not expose it publicly:

- **Nightly rate** ($389) and the fee structure — set in `assets/data.js` under `pricing`
- **Guest review text** — the names and prose are written for the demo; the ratings and counts around them are real
- **The eight other listings** on the home page — demo neighbours built from this home's photos to fill out the grid

A footer note states this on every page.

## Changing the content

Everything lives in `assets/data.js` as a single JSON object. To reprice the stay,
edit `listing.pricing`:

```js
pricing: {
  nightly: 389,        // headline rate
  cleaning: 175,
  service: 0.14,       // fraction of the discounted subtotal
  taxRate: 0.129,      // AZ transaction privilege tax, applied to fees too
  poolHeat: 85,        // per day, opt-in
  petFee: 75,          // per pet, per stay
  lateCheckoutHourly: 20,  // per hour past the 11:00 AM checkout
  maxLateHours: 4,     // how far the late-checkout stepper goes
  weeklyDiscount: 0.10,   // 7+ nights
  monthlyDiscount: 0.22,  // 28+ nights
}
```

Fee policy shown on the page: **$75 per pet**, and **late checkout at $20 per hour,
offered only when the space is free the next day** — the guest picks the hours as
an opt-in extra and the copy states the host confirms availability.

## Notes

- Nothing is submitted anywhere. "Reserve" shows a summary toast and takes no payment.
- Controls that are out of scope for a mockup (Become a host, footer links, destination search) show a "demo only" toast rather than silently doing nothing.
- Photos are hot-linked rather than committed. For an offline handoff, download the URLs in `assets/data.js` and rewrite them to local paths.
