# 🐍 Snake Game — Vite + Vanilla JavaScript + Docker

A classic Snake Game built using **Vanilla JavaScript** and powered by **Vite** for a fast and modern development experience. This project also includes **Docker** support for easy deployment.

## 🕹 Demo

> Play it locally or deploy with Docker. See instructions below.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/BrownEdgar/Snake_Game.git
cd snake-game
```

📦 Install Dependencies and run

```bash
npm install
npm run dev
```

📦 Build for Production

```bash
npm run build
npm run preview
```

### 🐳 Run with Docker

Build Docker Image and run Container

```bash
docker build -t snake-game .
docker run -p '5173:5173' snake-game
or
docker-compose up --build
```

---

📜 Scripts

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start Vite development server |
| `npm run build`   | Build static production files |
| `npm run preview` | Preview the production build  |
