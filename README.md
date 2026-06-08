# Forge & Frames Limited - Architecture Portfolio Website

A fully editable, responsive architecture portfolio website built with HTML, CSS, and JavaScript.

## Features

✅ **Fully Editable** - Click any text to edit directly in the browser  
✅ **Responsive Design** - Mobile, tablet, and desktop optimized  
✅ **Dynamic Content** - All sections rendered from `data.js`  
✅ **Local Storage** - Changes are automatically saved to browser storage  
✅ **Professional Design** - Luxury aesthetic with custom color scheme  
✅ **Easy Customization** - Update `data.js` to modify content  

## File Structure

```
├── index.html       # Main HTML file with page structure
├── styles.css       # Complete styling with responsive design
├── data.js          # Content data (all editable items)
├── app.js           # JavaScript for rendering and editing
└── README.md        # Documentation
```

## How to Use

### Local Development
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Click any text to edit it directly
4. Changes are automatically saved to browser storage

### Deployment
1. Push all files to your web hosting
2. Ensure all files are in the same directory
3. Open the website in your browser

## Editing Content

All editable content has a dashed outline when you hover over it. Simply click and type to make changes.

### To Edit via Data File
Modify `data.js` to update:
- Table of Contents items
- Statistics
- Vision & Mission statements
- Design Philosophy pillars
- Services list
- Process steps
- Project information
- Contact details
- Service tags

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Color Scheme

- **Navy Deep**: `#0d1e2d`
- **Navy**: `#1a2e40`
- **Gold**: `#b8965a`
- **Gold Light**: `#d4b07a`
- **Warm White**: `#f8f6f2`
- **Mid Gray**: `#e8e4de`

## Customization

### Add New Project
Edit `data.js` and add to the `projects` array:

```javascript
{
  id: "05.4",
  title: "Your Project",
  typology: "Project Type",
  location: "Location",
  description: "Project description"
}
```

### Change Colors
Update the CSS variables in `styles.css` `:root` section

### Add Sections
Add new HTML sections in `index.html` and corresponding data in `data.js`

## Storage

All edits are saved to browser's localStorage. To clear:
```javascript
localStorage.clear()
```

## Support

For issues or questions, contact: forgeandframelimited@gmail.com

---

**Forge and Frames Limited © 2026** - All rights reserved