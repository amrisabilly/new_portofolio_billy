# Amri Sabilly - Portfolio Website

A modern, minimalistic black and white portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## 🎨 Features

- **Black & White Design**: Strict monochrome color palette with grayscale accents
- **Parallax Effects**: Smooth parallax scrolling and motion effects
- **Framer Motion Animations**: Sophisticated animations and transitions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Component-Based**: Modular architecture for easy maintenance
- **Tailwind CSS First**: Utility-first styling with minimal custom CSS
- **TypeScript**: Type-safe development experience

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization Guide

### 1. Personal Information

#### Hero Section

File: `app/components/sections/Hero.tsx`

- Update your name (lines 46-48)
- Change the tagline (line 55)

#### About Section

File: `app/components/sections/About.tsx`

- Update the description paragraphs (lines 48-62)
- Modify stats: years of experience, projects, clients (lines 71-73)

### 2. Skills

File: `app/components/sections/Skills.tsx`

Edit the `skillCategories` array (lines 7-27):

```typescript
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', ...] // Add your skills
  },
  // ... add more categories
];
```

### 3. Projects

File: `app/components/sections/Projects.tsx`

Edit the `projects` array (lines 9-44):

```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description...",
    technologies: ["Tech1", "Tech2"],
    link: "https://yourproject.com",
    year: "2024",
  },
  // ... add more projects
];
```

### 4. Certificates

File: `app/components/sections/Certificates.tsx`

Update the `certificates` array (lines 7-42):

```typescript
const certificates = [
  {
    title: "Your Certificate",
    issuer: "Issuing Organization",
    year: "2024",
    id: "CERT-ID-001",
  },
  // ... add more certificates
];
```

### 5. Experience

File: `app/components/sections/Experience.tsx`

Modify:

- `experiences` array (lines 7-42) - Add your work history
- `education` array (lines 44-50) - Update your education

### 6. Contact Information

File: `app/components/sections/Contact.tsx`

Update:

- Email address (lines 8 and 80)
- Social links in `socialLinks` array (lines 7-12)

### 7. Footer

File: `app/components/sections/Footer.tsx`

Update your name (line 26)

### 8. SEO & Metadata

File: `app/layout.tsx`

Update metadata (lines 14-17):

```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your description...",
};
```

## 🎨 Styling

The project uses Tailwind CSS with the following design tokens:

- **Fonts**: Geist Sans (body), Geist Mono (code)
- **Colors**: Black (#000000), White (#FFFFFF), Grayscale variants
- **Spacing**: Tailwind's default spacing scale
- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

## 📦 Project Structure

```
app/
├── components/
│   ├── ui/
│   │   ├── AnimatedText.tsx    # Animated text component
│   │   ├── Button.tsx          # Button with variants
│   │   ├── Card.tsx            # Card with hover effects
│   │   ├── Container.tsx       # Content container
│   │   ├── FadeIn.tsx          # Fade-in animation
│   │   └── ParallaxSection.tsx # Parallax wrapper
│   └── sections/
│       ├── About.tsx           # About section
│       ├── Certificates.tsx    # Certificates section
│       ├── Contact.tsx         # Contact section
│       ├── Experience.tsx      # Experience & Education
│       ├── Footer.tsx          # Footer
│       ├── Hero.tsx            # Hero section
│       ├── Projects.tsx        # Projects section
│       └── Skills.tsx          # Skills section
├── globals.css                 # Global styles
├── layout.tsx                  # Root layout
└── page.tsx                    # Main page
```

## 🛠️ Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **React Spring** - Spring physics animations

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Development

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint

```bash
npm run lint
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ using Next.js and Tailwind CSS**
