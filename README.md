# 🎲 Meeple
### *Where Every Game Finds Its Next Adventure*


## 🀄 About Meeple

Meeple Mate is a modern board game lending platform that connects board game enthusiasts and transforms dusty shelves into thriving game libraries. Our platform makes it easy to share, discover, and enjoy board games within your local community.

### 🌟 Key Features

- **Smart Game Matching**: Find the perfect game based on player count, complexity, and play time
- **Trust-Based Lending**: Comprehensive rating system and user verification
- **Local Community Building**: Connect with nearby board game enthusiasts
- **Condition Tracking**: Detailed game condition monitoring with photo documentation
- **Real-Time Notifications**: Stay updated on game requests, returns, and local gaming events



## 🏗 Project Structure

```
meeple-mate/
├── app/                   # Next.js app directory
│   ├── api/              # API routes
│   ├── (auth)/          # Authentication routes
│   ├── games/           # Game-related pages
│   └── profile/         # User profile pages
├── components/           # React components
├── lib/                  # Utility functions
├── db/                  # Database schema and migrations
└── public/              # Static assets
```

## 🔐 Security Features

- **Secure Authentication**: JWT-based authentication with refresh tokens
- **Privacy Controls**: Granular user privacy settings
- **Rate Limiting**: Protection against abuse

## 🛠 Tech Stack

[![Next.js](https://img.shields.io/badge/Next.js-13.0-black)](https://nextjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14.0-blue)](https://www.postgresql.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

### Frontend
- Next.js 13+ (App Router)
- TypeScript
- TailwindCSS
- ShadcnUI
- React Query

### Backend
- PostgreSQL
- Drizzle ORM
- Node.js
- Imagekit.io (image storage)

### Infrastructure
- Vercel (deployment)
- Neon (database)
- Redis (caching)

## 📱 Mobile Support

Meeple is built with a mobile-first approach, ensuring a seamless experience across all devices.

## 🚀 Getting Started

### Prerequisites

```bash
Node.js >= 18.0.0
PostgreSQL >= 14.0
pnpm >= 8.0.0 (recommended)
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/MwangangiBrian/meeple-meet
cd meeple-mate
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

4. **Set up the database**
```bash
pnpm db:migrate
pnpm db:seed
```

5. **Start the development server**
```bash
pnpm dev
```

### Progressive Web App Features
- Offline support
- Push notifications
- Home screen installation
- Geolocation services

## 🤝 Contributing

We welcome contributions! 

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
<!-- 
## 🙏 Acknowledgments

- BoardGameGeek API for game data
- The board gaming community for inspiration
- All our amazing contributors -->

## 📞 Support


- Discord: [bryy1n](https://discord.gg/bryy1n)

---

Made with ♥️ by board game lovers, for board game lovers