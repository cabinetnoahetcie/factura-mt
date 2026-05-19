// lib/api.js
import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000',
  timeout: 30000,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get('factura_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && typeof window !== 'undefined') {
      if (window.location.pathname.startsWith('/admin')) {
        Cookies.remove('factura_token');
        window.location.href = '/auth/login';
      }
    }
    return Promise.reject(err);
  }
);

export const clientsAPI = {
  createOrFind: (data) => api.post('/api/clients', data),
  getById:      (id)   => api.get(`/api/clients/${id}`),
};

export const dossiersAPI = {
  create:  (formData) => api.post('/api/dossiers', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    timeout: 60000,
  }),
  getById: (id) => api.get(`/api/dossiers/${id}`),
};

export const authAPI = {
  login:          (data) => api.post('/api/auth/login', data),
  me:             ()     => api.get('/api/auth/me'),
  logout:         ()     => api.post('/api/auth/logout'),
  changePassword: (data) => api.post('/api/auth/change-password', data),
};

export const adminAPI = {
  getStats:       ()           => api.get('/api/admin/stats'),
  getDossiers:    (params)     => api.get('/api/admin/dossiers', { params }),
  getDossier:     (id)         => api.get(`/api/admin/dossiers/${id}`),
  updateDossier:  (id, data)   => api.patch(`/api/admin/dossiers/${id}`, data),
  getClients:     (params)     => api.get('/api/admin/clients', { params }),
  getClient:      (id)         => api.get(`/api/admin/clients/${id}`),
  getUsers:       ()           => api.get('/api/admin/users'),
  createUser:     (data)       => api.post('/api/admin/users', data),
  updateUser:     (id, data)   => api.patch(`/api/admin/users/${id}`, data),
  deleteUser:     (id)         => api.delete(`/api/admin/users/${id}`),
  exportDossiers: ()           => api.get('/api/admin/export/dossiers', { responseType:'blob' }),
};

export default api;
