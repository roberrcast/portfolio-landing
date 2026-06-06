# Portfolio — Landing Page

    An interactive, minimalist landing page designed as a portfolio showcase for architectural photography and historical relics captured across Europe. Built with a

focus on conversion, elegant typography, fluid animations, and a fully responsive layout.

    ## 🚀 Features

    - 📸 **Interactive Gallery**: Photographic grid with custom aspect ratios showcasing iconic European landmarks and sculptures (Westminster, Louvre, etc.).
    - 🎭 **Reveal-on-Scroll Animations**: Custom React hook (`useReveal`) utilizing the `IntersectionObserver` API to animate components as they enter the viewport.
    - 🎨 **Dynamic Styling**: A premium dark theme system implemented using `styled-components` and `modern-normalize`.
    - 📱 **Fully Responsive**: Optimized for mobile devices, tablets, and desktops alike.
    - ✉️ **Inquiry Form**: Integrated contact and call-to-action (CTA) form for print acquisitions and project inquiries.
    - ⚡ **Lightning Fast Builds**: Configured with Vite 8 and TypeScript.

    ---

    ## 🛠️ Tech Stack

    - **React 19** (UI Library)
    - **TypeScript** (Static Typing)
    - **Vite 8** (Build tool & dev server)
    - **Styled Components v6** (CSS-in-JS styling)
    - **Intersection Observer API** (Scroll reveal effects)
    - **Modern Normalize** (CSS normalization)

    ---

    ## 📁 Project Structure

    ```text
    landing-project/
    ├── public/                 # Static public assets
    ├── src/
    │   ├── assets/             # Images and visual assets (camera, artwork)
    │   ├── components/         # Page components:
    │   │   ├── Footer          # Site footer with links and copyright
    │   │   ├── Gallery         # Asymmetric photographic gallery grid
    │   │   ├── Header          # Navigation header
    │   │   ├── Hero            # Main welcome section with CTA
    │   │   ├── Inquiry         # Contact / inquiry form
    │   │   ├── Philosophy      # Aesthetic philosophy quote section
    │   │   └── Technical       # Camera gear and digital process details
    │   ├── hooks/
    │   │   └── useReveal.ts    # Custom hook for scroll-triggered animations
    │   ├── App.tsx             # Root application component
    │   ├── GlobalStyle.ts      # Global styles (fonts, resets)
    │   ├── theme.ts            # Design tokens (colors, layout variables)
    │   ├── mixins.ts           # Reusable CSS helper mixins
    │   └── main.tsx            # Application entry point
    ├── netlify.toml            # Netlify deployment configuration
    ├── vite.config.ts          # Vite configuration
    └── package.json            # Scripts and package dependencies

──────

## 🔧 Installation & Local Setup

Follow these steps to get the project running locally:

1. Clone the repository:
   git clone <YOUR_REPOSITORY_URL>
   cd landing-project

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev
   The site will be running at http://localhost:5173 (or the port specified in your terminal).
4. Build for production:
   npm run build
   This will generate a production-ready dist folder.
   ──────

## 🌐 Deployment

The project includes a pre-configured netlify.toml file for seamless deployment on Netlify:

    [build]
      publish = "dist"
      command = "npm run build"

### Steps to Deploy on Netlify:

1. Connect your GitHub repository to your Netlify account.
2. Select this project folder.
3. Netlify will automatically detect the settings and deploy the website with every subsequent git push to your main branch.
   ──────

## 📝 License

This project was built as part of a practical educational activity. Feel free to use and adapt it for your own purposes.
