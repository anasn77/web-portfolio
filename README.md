# Modern Portfolio Website

A sleek, responsive portfolio website showcasing skills, projects, and contact information. Built with HTML, CSS, and vanilla JavaScript.

## ✨ Features

- 📱 Fully responsive design
- 🎨 Smooth animations and transitions
- 💼 Dynamic project showcase
- 📊 Skills section with logos
- 📬 Contact form with EmailJS integration
- ☎️ International phone number input
- ✅ Form validation

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Configure EmailJS**
   - Create account at [EmailJS](https://www.emailjs.com/)
   - Get your Public Key
   - Update `script.js`:
     ```javascript
     emailjs.init("YOUR_PUBLIC_KEY");
     ```

3. **Customize Content**
   - Update `script.js`:
     - Modify `skillsData` array
     - Edit `projectsData` array
   - Update `index.html`:
     - Change personal information
     - Edit social links

4. **Launch**
   - Open `index.html` in a browser
   - Or deploy to GitHub Pages

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # Core styles
├── animations.css      # Animation definitions
├── script.js          # JavaScript functionality
└── images/            # Image assets
```

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- [EmailJS](https://www.emailjs.com/)
- [Font Awesome](https://fontawesome.com/)
- [International Telephone Input](https://intl-tel-input.com/)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚙️ Customization

### Colors
```css
:root {
  --text-color: #1a1c20;
  --link-color: #4a76ee;
  --background-color: #eeeff1;
}
```

### Animations
Add custom animations in `animations.css`:
```css
@keyframes customAnimation {
  from { /* start state */ }
  to { /* end state */ }
}
```

## 🎨 Theme Customization

1. **Colors**: Modify the CSS variables in `styles.css`
2. **Fonts**: Update Google Fonts link in `index.html`
3. **Images**: Replace images in the `images` folder
4. **Content**: Update text in `index.html`

## 🔧 Development

### Prerequisites
- Modern web browser
- Text editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Local Development
1. Clone the repository
2. Open `index.html` in your browser
3. Make changes to files
4. Refresh browser to see updates

## 📦 Deployment

### GitHub Pages
1. Push to your GitHub repository
2. Go to Settings > Pages
3. Select main branch
4. Save and wait for deployment

### Traditional Hosting
1. Upload all files to your hosting provider
2. Ensure `index.html` is in the root directory

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Made with ❤️ by NavyBits
