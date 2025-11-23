# AION — Minimal Pomodoro Timer

A beautifully designed, minimalist Pomodoro timer built with Next.js. AION helps you focus with a clean interface, smooth animations, and a distraction-free environment.

![AION Pomodoro Timer](https://aion.burakbasci.com)

## ✨ Features

- **Flip Clock Display**: Elegant flip-style clock animation with smooth transitions
- **Multiple Durations**: Choose from 5, 15, or 25-minute sessions via lever selector
- **Precise Timing**: Millisecond-accurate timer with smooth countdown
- **Session Tracking**: Automatically tracks completed Pomodoro sessions
- **Control Buttons**: Play, pause (stop), and reset functionality
- **Progress Visualization**: Visual progress bar showing session completion
- **Minimalist Design**: Clean, distraction-free interface with decorative elements
- **Responsive**: Works seamlessly on desktop and mobile devices
- **Dark/Light Mode Support**: Adaptive favicons and icons

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI**: Custom React components with smooth animations
- **Deployment**: Optimized for production builds

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:

```bash
git clone git@github.com:morphine-cake/Aion.git
cd AION
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Usage

1. **Select Duration**: Use the lever selector to choose 5, 15, or 25 minutes
2. **Start Timer**: Click the play button to begin your Pomodoro session
3. **Pause**: Click the stop button to pause the timer
4. **Reset**: Click the reset button to restart the current session
5. **Track Progress**: Watch the progress bar and completed session counter

## 📁 Project Structure

```
AION/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main timer page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ControlButton.tsx  # Play/Stop/Reset buttons
│   ├── DecorationFan.tsx  # Decorative fan element
│   ├── DoubleDigitCard.tsx # Flip clock digit cards
│   ├── FlipClock.tsx      # Main clock component
│   ├── LeverSelector.tsx  # Duration selector
│   └── ProgressBar.tsx    # Progress visualization
├── public/                # Static assets
│   ├── assets/           # SVG assets
│   ├── favicon/          # Favicon files
│   ├── icon/             # Control icons
│   └── SEO-image/        # Social media images
└── package.json          # Dependencies and scripts
```

## 🎨 Design Philosophy

AION follows a minimalist design approach, focusing on:

- **Clarity**: Clean interface without distractions
- **Elegance**: Smooth animations and transitions
- **Functionality**: Intuitive controls and clear feedback
- **Aesthetics**: Thoughtful use of space and visual hierarchy

## 🌐 Live Demo

Visit the live application at: [https://aion.burakbasci.com](https://aion.burakbasci.com)

## 👨‍💻 Author

**Burak Başcı**

- Website: [burakbasci.com](https://burakbasci.com)
- GitHub: [@morphine-cake](https://github.com/morphine-cake)

## 📄 License

This project is licensed under the ISC License.

---

Made with ❤️ by [Burak Başcı](https://burakbasci.com)
