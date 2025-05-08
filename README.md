# SoftSell - Software Resale Startup Website

A responsive single-page marketing website for a fictional software resale startup called SoftSell.

## Features Implemented

1. **Responsive Design**
   - Fully responsive layout using Tailwind CSS
   - Mobile-first approach with breakpoints for tablets and desktops

2. **Sections**
   - Hero section with headline, subheading, and CTA button
   - "How It Works" section with 3-step process and icons
   - "Why Choose Us" section with 4 feature tiles
   - Customer testimonials section with 2 dummy reviews
   - Contact/lead form with frontend validation

3. **UI/UX Enhancements**
   - Dark/light mode toggle with persistent state
   - Animations using Framer Motion for scroll-triggered and hover effects
   - Cohesive color palette (blue as primary color)
   - Modern, clean typography

4. **Chat Widget**
   - AI-powered customer chat interface
   - Example questions for quick interactions
   - OpenAI API responses based on common queries
   - Loading states and animations

5. **SEO**
   - Proper meta tags in index.html
   - Semantic HTML structure

## Design Choices

- **Color Scheme**: Used a blue-based palette with blue-600 as the primary color, which conveys trust and professionalism.
- **Typography**: Clean, modern outfit fonts from Tailwind's default font stack.
- **Layout**: Card-based design for features and testimonials to create visual hierarchy.
- **Animations**: Subtle animations to enhance user experience without being distracting.
- **Dark Mode**: Implemented with a toggle that changes all components appropriately.

## Time Spent

- Planning & Setup: 2 hour
- Component Development: 4 hours
- Styling & Responsiveness: 2 hours
- Animations & Interactions: 2 hours
- Chat Widget Implementation: 2 hours
- Testing & Refinements: 1 hour

**Total**: Approximately 13 hours

## How to Run

1. Clone the repository
2. Install dependencies: `npm install`
3. Add .env file and add `VITE_OPENAI_API_KEY: ""`
4. Run the development server: `npm run dev`
5. Open http://localhost:5173 in your browser

## Live Hosted Link
[Softsell](https://softsell-lemon.vercel.app/)

## Dependencies

- React.js + Vite
- Tailwind CSS
- Framer Motion
- React Icons 