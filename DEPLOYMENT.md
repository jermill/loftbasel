# The Loft Basel - Deployment Guide

## ✅ Project Complete!

Your site is ready for Netlify deployment with:
- ✅ Brutalist/editorial design aesthetic
- ✅ 10+ featured artists updated
- ✅ Real photos integrated throughout
- ✅ Organized image folder structure
- ✅ All changes committed to git

## 📁 Project Structure

```
loftbasel/
├── images/
│   ├── artists/         (3 artist photos - can add more!)
│   ├── gallery/         (11 photos for hero & gallery strip)
│   ├── hero/           (empty - using gallery photos for now)
│   └── README.md       (guidelines for adding images)
├── index.html          (main page with real photos)
├── styles.css          (brutalist design)
├── script.js           (interactions)
├── netlify.toml        (deployment config)
└── README.md           (project docs)
```

## 🚀 Deploy to Netlify

### Option 1: GitHub/GitLab + Netlify (Recommended)

1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/yourusername/loftbasel.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Netlify auto-detects settings from `netlify.toml`
   - Click "Deploy site"

### Option 2: Netlify CLI (Quick)

```bash
# Install if needed
npm install -g netlify-cli

# Deploy
cd /Volumes/jermill/APPS/loftbasel
netlify deploy --prod
```

## 🎨 Current Photos

**Hero Section:** (3 images)
- IMG_4700.JPEG
- IMG_4701.JPEG  
- IMG_4705.JPEG

**Featured Artist:**
- DSC00232.JPG (large featured image)

**Artist Grid:** (6 images)
- DSC00265.JPG
- Think-Responsibly-flagship-hoodie-set-1.JPG
- IMG_4706.JPEG
- IMG_4744.JPG
- IMG_4751.JPG
- IMG_4752.JPG

**Gallery Strip:** (6 images)
- IMG_4789.JPEG
- IMG_4790.JPEG
- IMG_4826.JPG
- DSC00748.JPG
- IMG_4700.JPEG
- IMG_4701.JPEG

## 📝 To Add More Photos

1. Add photos to appropriate folders:
   - `images/hero/` - for hero section
   - `images/artists/` - for featured artists
   - `images/gallery/` - for gallery strip

2. Update `index.html` to reference new images

3. Commit and push:
   ```bash
   git add images/
   git commit -m "Add new artist photos"
   git push
   ```

Netlify will auto-deploy!

## 🎯 What's Next?

- [ ] Add artist names and bios (replace "Artist Name" placeholders)
- [ ] Add specific venue address in event details
- [ ] Integrate real ticketing system (Eventbrite/Stripe)
- [ ] Add social media links in footer
- [ ] Consider adding artist portfolio modals
- [ ] Add email newsletter signup

## 🌐 Live URL

After deploying, you'll get a URL like:
`https://loftbasel.netlify.app`

You can customize this in Netlify settings!

---

**Site Local Preview:** http://localhost:8000  
**Design Style:** Brutalist/Editorial with clean black & white aesthetic  
**Responsive:** ✅ Mobile, Tablet, Desktop optimized

