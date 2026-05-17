// backend/prisma/seed.js
// Crée le premier compte super admin
// Usage : node prisma/seed.js

require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email    = process.env.ADMIN_EMAIL    || 'admin@factura-mt.cm';
  const password = process.env.ADMIN_PASSWORD || 'FacturaMT2024!';
  const nom      = process.env.ADMIN_NOM      || 'Super Admin';

  const existing = await prisma.adminUser.findUnique({ where: { email } });
  if (existing) {
    console.log(`✓ Admin déjà existant : ${email}`);
    return;
  }

  const hash = await bcrypt.hash(password, 12);
  await prisma.adminUser.create({
    data: { nom, email, password: hash, role: 'SUPER_ADMIN' },
  });

  console.log('✅ Super Admin créé avec succès !');
  console.log(`   Email    : ${email}`);
  console.log(`   Password : ${password}`);
  console.log('\n⚠️  Changez le mot de passe après la première connexion !');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
