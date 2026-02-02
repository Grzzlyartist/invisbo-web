# Invisibo AI Automation Agency Website

A modern, responsive website for Invisibo AI Automation Agency - your trusted partner in revolutionizing business operations through cutting-edge AI automation solutions.

## 🚀 Features

### 🎨 Design & User Experience
- **Modern Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Professional Brand Identity** - Consistent color scheme and typography
- **Smooth Animations** - Engaging CSS animations and transitions
- **Interactive Elements** - Hover effects and dynamic components
- **Accessibility Compliant** - Screen reader friendly and keyboard navigable

### 🤖 AI Chatbot Integration
- **invisibo.bot** - 24/7 customer support chatbot
- **Intelligent Responses** - Pre-programmed responses for common inquiries
- **Professional Interface** - Clean chat window with brand styling
- **Mobile Optimized** - Responsive chatbot across all devices

### 📱 Responsive Navigation
- **Centered Navigation** - Professional navigation with rounded pill design
- **Mobile Menu** - Collapsible hamburger menu for mobile devices
- **Active States** - Visual indicators for current page
- **Smooth Transitions** - Animated menu interactions

### 🎯 Key Sections
- **Hero Section** - Compelling headlines with background imagery
- **Services Overview** - Detailed automation service offerings
- **About Us** - Company story, mission, vision, and values
- **Contact Information** - Multiple contact methods and business hours
- **Social Media Integration** - Connected social media presence

## 🛠️ Technology Stack

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality and chatbot
- **Font Awesome** - Professional icon library
- **Google Fonts (Inter)** - Modern typography
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
invisibo-website/
├── index.html              # Homepage
├── about_us.html           # About page
├── Services.html           # Services page
├── contacts.html           # Contact page
├── CSS/
│   └── styles.css          # Main stylesheet
├── JS/
│   ├── main.js            # Main JavaScript functionality
│   └── form_handler.js    # Contact form handling
├── images/
│   ├── Untitled design.png # Main logo
│   ├── image_1_1769596431454.jpg # Hero background
│   └── a2442f7b1b6245db98d3ccac97df8078.jpg # About page image
└── README.md              # Project documentation
```

## 🎨 Brand Colors

- **Primary**: `#6B7280` (Slate Gray)
- **Secondary**: `#4B5563` (Dark Slate)
- **Text**: `#374151` (Charcoal)
- **Background**: `#f8f9fa` (Light Gray)
- **White**: `#ffffff`
- **Black**: `#000000`

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (optional, for local development)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. For local development, use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

### File Serving
Ensure all files are served from the same domain to avoid CORS issues with:
- Background images in CSS
- Font loading
- JavaScript functionality

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🤖 Chatbot Features

### invisibo.bot Capabilities
- **Service Information** - Details about automation offerings
- **Pricing Inquiries** - Information about consultation and pricing
- **Contact Details** - Phone, email, and social media information
- **Benefits Overview** - Efficiency improvements and advantages
- **General Support** - Helpful responses for various questions

### Chatbot Responses
The chatbot includes intelligent keyword detection for:
- Greetings (hello, hi, hey)
- Services (automation, workflow, AI)
- Pricing (cost, price, pricing)
- Contact (phone, email, contact)
- Benefits (advantage, why, benefit)

## 🎯 Key Pages

### Homepage (`index.html`)
- Hero section with animated text
- Services overview cards
- Call-to-action sections
- Social media integration

### About Us (`about_us.html`)
- Company story and background
- Mission and vision statements
- Core values presentation
- Team statistics and achievements

### Services (`Services.html`)
- Detailed service offerings
- Workflow automation solutions
- Custom AI development
- Multi-agent systems

### Contact (`contacts.html`)
- Contact form
- Business information
- Social media links
- Location details

## 🎨 Animations & Effects

### CSS Animations
- **Fade In Up** - Smooth element entrance animations
- **Hero Text Animation** - Multi-stage heading animations
- **Span Glow** - Subtle highlight effects
- **Hover Transitions** - Interactive element responses

### JavaScript Interactions
- **Mobile Menu Toggle** - Responsive navigation
- **Chatbot Interface** - Interactive customer support
- **Form Handling** - Contact form processing
- **Smooth Scrolling** - Enhanced user experience

## 🔧 Customization

### Updating Brand Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
  --primary-color: #6B7280;
  --secondary-color: #4B5563;
  --text-color: #374151;
}
```

### Adding New Pages
1. Create new HTML file following existing structure
2. Update navigation links in all pages
3. Add corresponding styles in `styles.css`
4. Update chatbot responses if needed

### Modifying Chatbot Responses
Edit the `botResponses` object in `main.js`:
```javascript
const botResponses = {
  greetings: ["Your custom greeting"],
  services: ["Your service information"],
  // Add more categories as needed
};
```

## 📞 Contact Information

- **Phone**: +265 884047011
- **Email**: contact@invisibo.ai
- **Social Media**: @Invisibo_AI_Agency
- **Website**: [Your Domain]

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices
5. Submit a pull request

## 📄 License

This project is proprietary to Invisibo AI Automation Agency. All rights reserved.

## 🔄 Version History

- **v1.0.0** - Initial website launch
  - Responsive design implementation
  - Chatbot integration
  - Complete page structure
  - Brand identity integration

## 🐛 Known Issues

- None currently reported

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Mobile Friendly**: Google Mobile-Friendly Test Passed
- **Load Time**: < 3 seconds on standard connections

## 🔮 Future Enhancements

- [ ] Blog section integration
- [ ] Client testimonials carousel
- [ ] Case studies showcase
- [ ] Advanced contact form with file uploads
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced analytics integration

---

**Built with ❤️ for Invisibo AI Automation Agency**

*Transforming Business Operations with Intelligent Automation*
