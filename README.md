# Personal Portfolio - Sudhanshu Shukla

[![React](https://img.shields.io/badge/React-v18.2.0-blue.svg)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-v0.176.0-green.svg)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-v10.18.0-purple.svg)](https://www.framer.com/motion/)

A modern, responsive portfolio website built with React, featuring interactive 3D elements, smooth animations, and dark mode support.

## ✨ Features

- **Interactive 3D Hero Section** - Engaging 3D model visualization using Three.js
- **Dark/Light Theme** - Toggle between color modes with smooth transitions
- **Responsive Design** - Optimized layout for all device sizes
- **Animated UI** - Smooth transitions and animations using Framer Motion
- **Contact Form** - Integrated form submission with Formspree
- **Project Filtering** - Filter projects by category
- **Timeline Components** - Clean visualization of experience and education

## 🛠️ Technologies

- **React** - Frontend library
- **Three.js / React Three Fiber** - 3D graphics
- **Framer Motion** - Animations
- **Styled Components** - Component styling
- **React Router** - Navigation
- **Formik** - Form validation
- **Yup** - Schema validation
- **React Intersection Observer** - Scroll animations

## 📋 Prerequisites

- Node.js (v14.0 or higher recommended)
- npm or yarn

## 🚀 Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Portfolio.git
cd Portfolio/portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

4. Open your browser and visit `http://localhost:3000`

## 🔧 Configuration

### Custom Domain

To use a custom domain, update the `homepage` field in package.json:

```json
"homepage": "https://yourdomainname.com"
```

### Form Submission

The contact form is configured to use Formspree. To change the endpoint, update the form action URL in Contact.js:

```js
const response = await fetch('https://formspree.io/YOUR_NEW_ENDPOINT', {
    // Rest of the code
});
```

## 📂 Project Structure

```
portfolio/
├── public/                 # Static files
│   ├── index.html         # HTML template
│   ├── manifest.json      # Web app manifest
│   ├── robots.txt         # Robots configuration
│   └── ...
├── src/                    # Source files
│   ├── components/        # React components
│   │   ├── About/         # About section
│   │   ├── Blog/          # Achievements section
│   │   ├── Contact/       # Contact section
│   │   ├── Experience/    # Experience section
│   │   ├── Hero/          # Hero section with 3D model
│   │   ├── Layout/        # Layout components
│   │   ├── Projects/      # Projects section
│   │   ├── Skills/        # Skills section
│   │   └── shared/        # Shared components
│   ├── context/           # Context providers
│   ├── styles/            # CSS styles
│   ├── App.js             # Main App component
│   ├── App.css            # Global styles
│   ├── index.js           # Entry point
│   └── ...
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## 📦 Deployment

### GitHub Pages

This project is already configured for GitHub Pages deployment:

1. Update the `homepage` field in package.json with your GitHub Pages URL.
2. Build and deploy:

```bash
npm run deploy
# or
yarn deploy
```

### Other Hosting Options

For other hosting options (Netlify, Vercel, etc.), follow their respective documentation for deploying React applications.

## 🎨 Customization

### Adding Projects

Add new projects by modifying the `projects` array in Projects.js:

```js
const projects = [
    {
        title: "Your New Project",
        description: "Project description goes here...",
        tech: ["React", "Node.js", "MongoDB"],
        icon: "fa-code",
        githubUrl: "https://github.com/yourusername/project",
        demoUrl: "https://demo-link.com",
        date: "April 2025",
        category: "web"
    },
    // Other projects...
];
```

### Changing the 3D Model

To use your own 3D model, update the HeroModel.js component:

1. Place your GLTF/GLB model in the `public` folder
2. Uncomment and update the model loading code in HeroModel.js

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgements

- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) - For 3D rendering
- [Framer Motion](https://www.framer.com/motion/) - For animations
- [Font Awesome](https://fontawesome.com/) - For icons
- [Formspree](https://formspree.io/) - For form handling

---

Designed and developed by Sudhanshu Shukla © 2025#
