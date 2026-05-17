# FacturaMT — Analyse intelligente de factures ENEO MT

## Stack
- **Frontend** : Next.js 14 + Tailwind CSS → Vercel
- **Backend**  : Node.js + Express → Railway
- **Base de données** : PostgreSQL (Supabase)
- **Stockage** : Supabase Storage
- **IA** : Claude API (Anthropic)
- **Emails** : Resend
- **Auth** : JWT

## Lancer le projet

```bash
# Backend
cd backend
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev        # http://localhost:4000

# Frontend
cd frontend
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
```

## Déploiement
- Backend  → Railway
- Frontend → Vercel
