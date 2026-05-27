# Kvinikadze Family Heritage Website

A beautiful family heritage website built with HTML, CSS, and JavaScript.

**Live site:** https://tinatin-kvinikadze.github.io/heritage-tree/

---

## How to Deploy on GitHub Pages

1. **Create a repository** on GitHub named `heritage-tree` (or any name you like)
2. **Upload all files** from this folder to the repository (keep the folder structure: `css/`, `js/`, `images/`)
3. Go to your repo → **Settings** → **Pages**
4. Under *Source*, select `main` branch and `/ (root)` folder
5. Click **Save** — your site will be live in a few minutes!

---

## How to Edit Your Family Data

Open `js/script.js` and find the `familyMembers` array at the top.

For each family member you can edit:
- `name` — their full name
- `years` — birth and death year (e.g. `"1920 – 2005"` or `"1960 – Present"`)
- `relation` — relationship label (e.g. `"Grandfather (Paternal)"`)
- `profession` — their occupation
- `professionIcon` — Font Awesome icon class (browse at https://fontawesome.com/icons)
- `bio` — a short description (1–2 sentences)
- `photo` — path to their photo (see below)
- `color` — avatar background color (used when no photo is set)

To **add a new family member**, copy one of the existing objects and paste it in the array with a new `id`.

---

## How to Add Real Photos

### Family member photos (cards):
1. Put the photo file in the `images/` folder (e.g. `images/grandmother.jpg`)
2. In `js/script.js`, set the `photo` field on that family member:
   ```js
   photo: 'images/grandmother.jpg'
   ```

### Gallery photos:
1. Name your photos `photo1.jpg`, `photo2.jpg`, ... `photo6.jpg`
2. Place them in the `images/` folder
3. The gallery will automatically show them (the placeholder disappears)
4. Edit the captions in `js/script.js` in the `galleryCaptions` array

---

## File Structure

```
/
├── index.html          ← Main page
├── css/
│   └── style.css       ← All styles
├── js/
│   └── script.js       ← Family data + interactivity
├── images/             ← Put your family photos here
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ...
├── .nojekyll           ← Tells GitHub Pages not to use Jekyll
└── README.md           ← This file
```

---

## Contact Form

The contact form currently shows a success message on submission (no data is sent anywhere). To receive real emails, you can connect it to a free service:

- **[Formspree](https://formspree.io/)** — free, easy setup. Change the form's `action` attribute to your Formspree endpoint.
- **[Netlify Forms](https://www.netlify.com/products/forms/)** — works if you host on Netlify instead.
