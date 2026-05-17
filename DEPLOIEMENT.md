# Guide de déploiement FacturaMT

## 1. Prérequis

- Compte GitHub
- Compte Supabase (gratuit) → supabase.com
- Compte Railway (gratuit) → railway.app
- Compte Vercel (gratuit)  → vercel.com
- Compte Resend (gratuit)  → resend.com
- Clé API Anthropic        → console.anthropic.com

---

## 2. Supabase — Base de données & Stockage

### Créer le projet
1. Aller sur supabase.com → New Project
2. Choisir un nom (ex: factura-mt), une région (EU West)
3. Copier la `Database URL`, `Project URL` et `service_role key`

### Créer le bucket de stockage
1. Storage → New Bucket → nom: `factures`
2. Rendre public : Yes
3. Politique d'accès : Allow public read

### Variables à récupérer
```
DATABASE_URL     = Settings → Database → Connection string (URI)
SUPABASE_URL     = Settings → API → Project URL
SUPABASE_SERVICE_KEY = Settings → API → service_role key (secret)
```

---

## 3. Backend → Railway

### Déploiement
1. Pousser le dossier `backend/` sur GitHub
2. Railway → New Project → Deploy from GitHub
3. Sélectionner le repo, dossier `backend`
4. Ajouter les variables d'environnement :

```env
DATABASE_URL=postgresql://...
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_KEY=eyJ...
ANTHROPIC_API_KEY=sk-ant-...
JWT_SECRET=<générer avec : openssl rand -hex 32>
JWT_EXPIRES_IN=7d
RESEND_API_KEY=re_...
EMAIL_FROM=FacturaMT <contact@factura-mt.cm>
EMAIL_ADMIN=admin@factura-mt.cm
FRONTEND_URL=https://factura-mt.vercel.app
PORT=4000
NODE_ENV=production
```

5. Après déploiement, récupérer l'URL Railway (ex: https://factura-mt.up.railway.app)

### Migration base de données
Dans Railway → Shell :
```bash
npx prisma migrate deploy
node prisma/seed.js
```

---

## 4. Frontend → Vercel

### Déploiement
1. Pousser le dossier `frontend/` sur GitHub
2. Vercel → New Project → Import depuis GitHub
3. Root Directory : `frontend`
4. Framework : Next.js (détecté auto)
5. Variables d'environnement :

```env
NEXT_PUBLIC_API_URL=https://factura-mt.up.railway.app
```

6. Deploy → récupérer l'URL Vercel

### Mettre à jour FRONTEND_URL sur Railway
Retourner sur Railway et changer :
```
FRONTEND_URL=https://factura-mt.vercel.app
```

---

## 5. Resend — Emails

1. Aller sur resend.com → créer un compte
2. Ajouter votre domaine (ex: factura-mt.cm) ou utiliser le domaine test
3. API Keys → Create API Key
4. Copier la clé dans `RESEND_API_KEY`

---

## 6. Nom de domaine (optionnel)

1. Acheter `factura-mt.cm` sur un registrar camerounais ou `.com` sur Namecheap
2. Dans Vercel → Settings → Domains → ajouter le domaine
3. Configurer les DNS selon les instructions Vercel

---

## 7. Première connexion admin

Aller sur `https://votre-domaine.com/auth/login`
```
Email    : admin@factura-mt.cm
Password : FacturaMT2024!
```

⚠️ Changer immédiatement le mot de passe depuis l'interface admin.

---

## 8. Commandes utiles

```bash
# Voir les logs Railway
railway logs

# Accéder à la DB Prisma Studio
npx prisma studio

# Rebuild si nécessaire
railway up

# Redéployer Vercel
vercel --prod
```

---

## 9. Coûts mensuels estimés

| Service     | Plan gratuit           | Plan payant si croissance   |
|-------------|------------------------|-----------------------------|
| Supabase    | 500 Mo DB, 1 Go stockage| Pro : $25/mois              |
| Railway     | $5 crédits/mois        | Starter : $5/mois           |
| Vercel      | Illimité hobby         | Pro : $20/mois              |
| Resend      | 3 000 emails/mois      | Pro : $20/mois              |
| Anthropic   | Pay-as-you-go (~$0.003/analyse) | —               |
| **Total démarrage** | **~0–5$/mois** | **~70$/mois si croissance** |
