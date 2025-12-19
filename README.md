# The Loft Basel

🎨 Delaware's Premier Art Experience - Inspired by Miami's Art Basel

## About

The Loft Basel is a vibrant celebration of contemporary art and culture, bringing the spirit of Miami's Art Basel to Delaware. This two-day creative event showcases over 50 featured artists, live performances, interactive installations, and immersive art experiences.

**Event Dates:** December 20-21, 2024

## Features

- 🎨 **Artist Showcase** - Curated exhibitions from 50+ local and regional artists
- 🎫 **Event Ticketing** - Multiple ticket tiers (General Admission, Weekend Pass, VIP)
- 📅 **Event Information** - Complete details on dates, times, and location
- 🌈 **Vibrant Design** - Miami Art Basel-inspired aesthetic with bold colors and modern UI
- 📱 **Responsive** - Fully optimized for all devices

## Tech Stack

- HTML5
- CSS3 (Custom styling with gradients, animations, and modern design)
- Vanilla JavaScript (No framework dependencies)
- Google Fonts (Playfair Display & Inter)

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. No build process required - it's pure HTML/CSS/JS!

## Project Structure

```
loftbasel/
├── index.html       # Main landing page
├── styles.css       # All styling and animations
├── script.js        # Interactive features
└── README.md        # Project documentation
```

## Customization

### Adding Artist Photos

Replace the `.placeholder-image` divs in `index.html` with actual artist images:

```html
<div class="artist-image">
    <img src="path/to/artist-photo.jpg" alt="Artist Name">
    <div class="artist-overlay">
        <button class="view-work-btn">View Work</button>
    </div>
</div>
```

### Updating Event Details

Edit the event information in the HTML sections:
- Hero dates
- Event details section
- Ticket prices and features

### Color Scheme

Modify the CSS variables in `styles.css`:

```css
:root {
    --primary: #FF006E;
    --secondary: #FB5607;
    --accent: #FFBE0B;
    --blue: #3A86FF;
    --purple: #8338EC;
}
```

## Features to Add

- Backend ticketing integration
- Artist portfolio modals
- Email newsletter signup
- Social media feed integration
- Photo gallery from previous events

## License

© 2024 The Loft Basel. All rights reserved.

