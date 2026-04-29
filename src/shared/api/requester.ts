import type { CreateAxiosDefaults } from 'axios';
import axios from 'axios';

const options: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const requester = axios.create(options);
