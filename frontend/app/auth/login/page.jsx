'use client';
// app/auth/login/page.jsx
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { authAPI } from '@/lib/api';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await authAPI.login(data);
      Cookies.set('factura_token', res.data.token, { expires: 7 });
      toast.success(`Bienvenue ${res.data.user.nom} !`);
      router.push('/admin');
    } catch (err) {
      toast.error(err.response?.data?.error || 'Connexion échouée');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-off flex items-center justify-center p-4">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 w-full max-w-md">

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xl">⚡</div>
          <div>
            <div className="font-serif text-xl text-gray-900">FacturaMT</div>
            <div className="text-xs text-gray-400 tracking-widest uppercase">Espace Admin</div>
          </div>
        </div>

        <h1 className="font-serif text-2xl text-gray-900 mb-2">Connexion</h1>
        <p className="text-sm text-gray-500 mb-8">Accédez au tableau de bord administrateur.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
              placeholder="admin@factura-mt.cm"
              {...register('email', { required: 'Email requis' })}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Mot de passe</label>
            <input
              type="password"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
              placeholder="••••••••"
              {...register('password', { required: 'Mot de passe requis' })}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white font-semibold py-3 rounded-xl transition text-sm"
          >
            {loading ? 'Connexion…' : 'Se connecter →'}
          </button>
        </form>
      </div>
    </div>
  );
}
