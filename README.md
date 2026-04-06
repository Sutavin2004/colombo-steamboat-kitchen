# Colombo Steam Boat Kitchen

Authentic Tamil/Sri Lankan steamboat restaurant website — Toronto, ON.

Built with React + Vite + Tailwind CSS v4 + Framer Motion.

**Live Site:** https://sutavin2004.github.io/colombo-steamboat-kitchen/

---

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173/colombo-steamboat-kitchen/

---

## Deployment to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` then pushes the `dist/` folder to the `gh-pages` branch.
The site goes live at `https://sutavin2004.github.io/colombo-steamboat-kitchen/` within 1-2 minutes.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          — Fixed nav with scroll behavior & order dropdown
│   ├── Hero.jsx            — Full-viewport hero with parallax & steam effects
│   ├── About.jsx           — Restaurant story, two-column layout
│   ├── Menu.jsx            — Category tabs, data-driven menu grid
│   ├── OrderOnline.jsx     — DoorDash & Uber Eats glassmorphism cards
│   ├── Reviews.jsx         — Auto-scrolling Google Reviews carousel
│   ├── Gallery.jsx         — CSS masonry photo grid
│   ├── HoursLocation.jsx   — Hours table + Google Maps embed
│   ├── Contact.jsx         — Formspree reservation form with success state
│   ├── Footer.jsx          — Three-column footer with social links
│   ├── SteamEffect.jsx     — Pure CSS animated steam wisps
│   └── SectionDivider.jsx  — Decorative SVG wave divider
├── data/
│   ├── info.js             — PRIMARY CONFIG — edit this file
│   ├── menu.js             — Full menu data (7 categories, 50+ items)
│   ├── reviews.js          — Sample review data
│   └── gallery.js          — Gallery image URLs
├── App.jsx
├── main.jsx
└── index.css               — Design system, CSS variables, animations
```

---

## Updating Content

All content is data-driven. Edit the files in `src/data/`:

| File | What to edit |
|------|-------------|
| `info.js` | Restaurant name, address, phone, hours, social links, DoorDash/Uber Eats URLs |
| `menu.js` | All menu items, prices, descriptions, dietary flags |
| `reviews.js` | Sample reviews (replace with real ones) |
| `gallery.js` | Gallery photos (replace Unsplash URLs with real photos) |

---

## Setting Up Live Google Reviews

### Option A: Google Places API (Developer)

1. Enable Places API in Google Cloud Console
2. Create an API key restricted to your domain
3. Use Places API `getDetails` with `reviews` field
4. Replace the static `reviews.js` data with API response

### Option B: Elfsight Widget (No-Code)

1. Go to elfsight.com and search for Google Reviews widget
2. Connect your Google Business profile
3. Embed the widget script in `index.html`
4. Hide the static Reviews section in `App.jsx`

---

## Replacing Placeholder Links

Search for these strings and replace with real values in `src/data/info.js`:

| Placeholder | Replace with |
|-------------|-------------|
| `#doordash-link` | Your DoorDash store URL |
| `#ubereats-link` | Your Uber Eats store URL |
| `YOUR_ID` in formspreeURL | Your Formspree form ID |
| `""` in googleMapsEmbed | Your Google Maps embed src |
| `"#"` in googleMapsLink | Your Google Maps direct link |
| `"#"` in instagram/facebook/tiktok | Your social profile URLs |

---

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (via @tailwindcss/vite)
- **Framer Motion 12** — page animations
- **react-icons** — icon library
- **gh-pages** — GitHub Pages deployment
- **Formspree** — contact form backend (free tier)
- **Google Fonts** — Playfair Display, Cormorant Garamond, DM Sans, Eczar
