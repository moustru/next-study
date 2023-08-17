import { httpStrapi } from '@/config/api';

export const getPartners = () => httpStrapi.get('/partners').json();
