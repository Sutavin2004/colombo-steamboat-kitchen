# Colombo Steam Boat Kitchen — Owner's Guide

Welcome! This guide explains how to update your website without any coding knowledge.
Everything you need to change is in ONE file: **`src/data/info.js`** and **`src/data/menu.js`**.

---

## 1. How to Update Menu Items

Open the file: `src/data/menu.js`

Each menu item looks like this:
```js
{
  id: 1,
  category: "Broths",           // Which tab it appears under
  name: "Coconut Curry Broth",  // Item name
  description: "Rich, creamy broth...", // Short description
  price: "$6.99",               // Price (always include the $ sign)
  veg: true,                    // true = shows 🌿 Veg badge
  glutenFree: true,             // true = shows 🌾 GF badge
  spicy: 1,                     // 0=not spicy, 1=mild, 2=medium, 3=hot
  popular: true,                // true = shows "Popular" ribbon
  newItem: false,               // true = shows pulsing "New" dot
},
```

**To add a new item:** Copy an existing item, paste it at the end of the list, change the `id` to the next number, and fill in the details.

**To remove an item:** Delete the entire `{ ... }` block for that item.

**To change a price:** Find the item by name and update the `price: "$X.XX"` value.

---

## 2. How to Update Hours

Open `src/data/info.js` and find the `hours` array:

```js
hours: [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "11:00 AM – 10:00 PM" },
  // ...
],
```

Simply change the hours text for any day. Today's hours will automatically highlight in orange on the website.

---

## 3. How to Add Your DoorDash & Uber Eats Links

In `src/data/info.js`, replace the placeholder values:

```js
doordashURL: "https://www.doordash.com/store/YOUR-STORE-ID/",
uberEatsURL: "https://www.ubereats.com/store/YOUR-STORE/",
```

These links appear in the navbar, hero section, and the dedicated ordering section.

---

## 4. How to Add Google Maps

1. Go to [Google Maps](https://maps.google.com) and search for your restaurant address
2. Click **Share** → **Embed a map**
3. Copy the URL inside `src="..."` from the embed code
4. Paste it into `info.js`:
   ```js
   googleMapsEmbed: "https://www.google.com/maps/embed?pb=...",
   googleMapsLink: "https://goo.gl/maps/...",
   ```

---

## 5. How to Set Up Formspree (Free Contact Form)

This lets customers submit reservation requests and you'll receive emails.

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Click **New Form** and name it "Reservation Requests"
3. Enter your email address where you want to receive requests
4. Copy your form ID — it looks like: `xabcdefg`
5. In `info.js`, update:
   ```js
   formspreeURL: "https://formspree.io/f/xabcdefg",
   ```
6. Done! Test it by submitting the form on your website.

**Free plan:** Up to 50 submissions/month. Upgrade at Formspree if you need more.

---

## 6. How to Push Updates to GitHub (Save Your Changes)

After making any changes, open Terminal and run these 3 commands:

```bash
cd "Coding Projects/colombo-steamboat-kitchen"
git add .
git commit -m "Updated menu prices and hours"
git push origin main
```

---

## 7. How to Deploy Updates Live

After pushing to GitHub, run:

```bash
npm run deploy
```

Your live site will update within 2-3 minutes at:
`https://sutavin2004.github.io/colombo-steamboat-kitchen/`

---

## 8. Getting Google Reviews Live

Currently the reviews shown are sample reviews. To pull real Google Reviews:

1. Set up a Google Places API key (free tier available)
2. See `README.md` for technical setup instructions
3. Or use a third-party service like Elfsight Google Reviews Widget (easiest option — no coding required)

---

## Need Help?

Contact your web developer or refer to the `README.md` for technical documentation.
