# 3D Developer Portfolio Website
A modern, interactive 3D portfolio built using React and Three.js to showcase 3D models, animations, and immersive experiences.

# Features
Interactive 3D Plane: Animated plane moving back and forth across the screen.
Dynamic Sky: A rotating sky backdrop with adjustable lighting.
Responsive Design: Optimized for mobile and desktop with adaptive 3D scaling.


# Installation

# Clone the Repository:
git clone https://github.com/manuc108/MyPortfolio.git

# Install Dependencies:
cd 3d-portfolio
npm install

# Run the Development Server: 
npm run dev

Visit http://localhost:5174 in your browser.

# Technologies Used
React: JavaScript library for building the UI.
Three.js: 3D rendering library for web.
@react-three/fiber: React renderer for Three.js.
@react-three/drei: Utility functions for Three.js in React.
GLTF Models: 3D assets like the plane, loaded with useGLTF.
CSS: Custom styles for layout and UI.

# File Structure
/src
  /assets
    /3d
      - plane.glb       # 3D model of the plane
      - sky.glb         # 3D model of the sky
  /components
    - HomeInfo.js       # Stage info display
    - Loader.js         # Loader component
    - Navbar.js         # Navbar component
  /models
    - Plane.jsx         # Animated plane component
    - Sky.jsx           # Dynamic sky component
  /pages 
    - About.jsx         # About me page
    - Certificates.jsx   # Certificates page
    - Contact.jsx        # Contact page
    - Home.jsx           # Home page (3D scene)
    - Projects.jsx       # Projects page
    - Resume.jsx         # Resume page
  App.js                # Main app component
  index.js              # Entry point



# How It Works
Plane Animation: The plane moves horizontally using useFrame, reversing direction at set limits.
Sky Rotation: A rotating sky enhances the 3D effect.
Responsive Scaling: 3D models scale and position adjust based on screen size.
Model Loading: Asynchronous model loading with Suspense, showing a fallback loader until ready.

# License
This project is open-source and available under the MIT License.


