# Images Folder

This folder contains all images used on The Loft Basel website.

## Folder Structure

### `/images/hero/`
Hero section images - add 3 images here:
- `hero-1.jpg` (or .png)
- `hero-2.jpg`
- `hero-3.jpg`

**Recommended size:** 800x1000px (portrait orientation)

---

### `/images/artists/`
Artist photos and artwork:
- `featured-artist.jpg` - Main large featured artist image
- `artist-1.jpg` through `artist-7.jpg` - Grid artist cards

**Recommended sizes:**
- Featured: 1200x1500px (portrait)
- Grid cards: 600x600px (square)

---

### `/images/gallery/`
Bottom gallery strip - add 6 images:
- `gallery-1.jpg` through `gallery-6.jpg`

**Recommended size:** 600x600px (square)

---

## How to Use

1. **Add your photos** to the appropriate folders
2. **Update the HTML** in `index.html`:
   - Replace `.placeholder-1` with `<img src="images/hero/hero-1.jpg" alt="Art">`
   - Replace `.placeholder-artist-1` with `<img src="images/artists/featured-artist.jpg" alt="Artist Name">`
   - And so on...

## Image Guidelines

- **Format:** JPG or PNG
- **Optimization:** Compress images before uploading (use TinyPNG or similar)
- **Naming:** Use lowercase, hyphens for spaces
- **Alt text:** Always add descriptive alt text for accessibility

## Quick Replace Example

In `index.html`, change this:
```html
<div class="hero-img placeholder-1"></div>
```

To this:
```html
<div class="hero-img">
    <img src="images/hero/hero-1.jpg" alt="Art Basel Installation">
</div>
```

Don't forget to add CSS for the images:
```css
.hero-img img,
.artist-feature-img img,
.artist-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

