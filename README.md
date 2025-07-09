🍋 Little Lemon Table Booking App
Crafted by Aneesh Srinivas — not just a developer, but a deployer of elegance.
Inspired by Mediterranean vibes and caffeine-fueled code sessions.

👨‍💻 Tech Stack
⚛️ React 18+

🎨 CSS Modules & Global CSS (No Tailwind, No Bootstrap—just vibes)

🧪 Jest & React Testing Library for unit testing

💥 GitHub Pages for deployment

🔧 Create React App for scaffolding

📱 React Router DOM for navigation

🔗 Live Demo
Reserve your table in style:
👉 Visit the App

🧠 Features
Dynamic booking form with real-time input validation

Interactive table selection with visual table map

Responsive layout for mobile, tablet, and desktop

Smooth scrolling navigation with active section highlighting

Accessibility support with ARIA labels and semantic HTML

Mediterranean-inspired design with custom color palette

Customer testimonials with star ratings

Menu specials showcase with pricing and descriptions

Restaurant story section with about information

Contact information and social media links

Clean file structure & maintainable codebase

🎨 Design System
Custom Color Palette:

--primary-green: #495e57 (Mediterranean green)

--primary-yellow: #f4ce14 (Lemon yellow)

--light-background: #edefee (Soft background)

--text-color: #333 (Dark text)

Typography:

Georgia serif font family for elegant readability

Responsive font sizes across all devices

🧪 Unit Tests
To run unit tests locally:

bash
npm install
npm test
Key test file: src/BookingForm.test.js — checks for form validation and required input fields.

Test Coverage includes:

Form validation logic

Required field validation

Date/time picker functionality

Table selection validation

Component rendering tests

📁 Project Structure
text
little-lemon-booking/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   │   ├── Hero.js
│   │   │   └── Hero.css
│   │   ├── Specials/
│   │   │   ├── Specials.js
│   │   │   └── Specials.css
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   └── About.css
│   │   ├── BookingModal/
│   │   │   ├── BookingModal.js
│   │   │   └── BookingModal.css
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.js
│   │   │   └── Testimonials.css
│   │   └── Footer/
│   │       ├── Footer.js
│   │       └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
🎨 Wireframes & Screenshots
Design Process:

Wireframes created in Figma for responsive design

Mobile-first approach with progressive enhancement

Accessibility considerations throughout design process

Home Page	Booking Modal	Table Selection	Menu Specials	Testimonials
Hero section with CTA	Interactive form	Visual table map	Food showcase	Customer reviews
📦 Installation & Setup
Prerequisites
Node.js (v14 or higher)

npm or yarn package manager

Git for version control

Local Development
Clone the repository:

bash
git clone https://github.com/aneeshsrinivas/little-lemon-booking.git
cd little-lemon-booking
Install dependencies:

bash
npm install
Start development server:

bash
npm start
Open in browser:
Navigate to http://localhost:3000

Build for Production
bash
npm run build
🚀 Deployment
GitHub Pages Deployment
Configure package.json:

json
"homepage": "https://aneeshsrinivas.github.io/little-lemon-booking",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Install gh-pages:

bash
npm install --save-dev gh-pages
Deploy:

bash
npm run deploy
Enable GitHub Pages:

Go to repository Settings → Pages

Select gh-pages branch as source

Site will be live at the homepage URL

Alternative Deployment Options
Vercel: Connect GitHub repo for automatic deployments

Netlify: Drag and drop build folder or connect repository

AWS S3: Upload build files to S3 bucket with static hosting

🌐 SEO & Meta Tags
Open Graph tags for social sharing:

xml
<meta property="og:title" content="Little Lemon Table Booking" />
<meta property="og:description" content="Reserve your table at Little Lemon – a Mediterranean dining experience in Chicago" />
<meta property="og:image" content="%PUBLIC_URL%/og-image.png" />
<meta property="og:url" content="https://aneeshsrinivas.github.io/little-lemon-booking" />
<meta name="twitter:card" content="summary_large_image" />
Performance optimizations:

Lazy loading for images

Minified CSS and JavaScript

Compressed assets

Semantic HTML structure

🛠️ Development Scripts
bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Deploy to GitHub Pages
npm run deploy

# Lint code
npm run lint

# Format code
npm run format
🔧 Configuration
Environment Variables
bash
# .env.local
REACT_APP_API_URL=your_api_url_here
REACT_APP_GOOGLE_MAPS_KEY=your_maps_key_here
Browser Support
Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create a feature branch: git checkout -b feature/amazing-feature

Commit changes: git commit -m 'Add amazing feature'

Push to branch: git push origin feature/amazing-feature

Open a Pull Request

Code Style Guidelines
Use ESLint and Prettier for consistent formatting

Follow React best practices and hooks patterns

Write meaningful commit messages

Add tests for new features

🐛 Troubleshooting
Common Issues
GitHub Pages shows README instead of app:

Ensure gh-pages branch is selected in repository settings

Check that homepage field in package.json is correct

Verify build files are in the gh-pages branch

Build fails:

Check Node.js version compatibility

Clear npm cache: npm cache clean --force

Delete node_modules and reinstall: rm -rf node_modules && npm install

CSS styles not loading:

Verify CSS import statements

Check file paths and naming conventions

Ensure CSS modules are properly configured

📄 License
This project is for educational and demonstration purposes only.
Images used are royalty-free via Unsplash and Pixabay.

MIT License - feel free to use this code for learning and personal projects.

🙏 Acknowledgments
Meta Frontend Developer Course for project inspiration

Unsplash & Pixabay for high-quality, royalty-free images

React Community for excellent documentation and support

GitHub Pages for free hosting solution

📞 Contact & Support
Made with focus and finesse by Aneesh Srinivas

GitHub: github.com/aneeshsrinivas

Email: Contact via GitHub profile

LinkedIn: Connect for professional inquiries

🔮 Future Enhancements
 Backend API integration for real reservations

 Email confirmation system

 Admin dashboard for restaurant management

 Multi-language support

 Advanced table management system

 Payment integration

 Mobile app development (React Native)

🍋 Mediterranean code, lemon-fresh UI, and a sprinkle of accessibility magic!

Star this repo if you found it helpful! ⭐
