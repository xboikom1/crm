import {
  Category,
  Company,
  Promotion,
  SummarySales,
  SummaryStats,
  Country,
} from '@/src/lib/types';
import { buildApiUrl, sendRequest } from '@/src/lib/api-helpers';

export const getSummaryStats = async (
  init?: RequestInit,
): Promise<SummaryStats> => {
  try {
    return await sendRequest<SummaryStats>(
      buildApiUrl('/api/summary-stats'),
      init,
    );
  } catch {
    return {
      promotions: 0,
      categories: 0,
      newCompanies: 0,
      activeCompanies: 0,
    };
  }
};

export const getSummarySales = async (
  init?: RequestInit,
): Promise<SummarySales[]> => {
  try {
    return await sendRequest<SummarySales[]>(
      buildApiUrl('/api/summary-sales'),
      init,
    );
  } catch {
    return [];
  }
};

export const getCountries = async (init?: RequestInit) => {
  try {
    return await sendRequest<Country[]>(buildApiUrl('/api/countries'), init);
  } catch {
    return [];
  }
};

export const getCategories = async (init?: RequestInit) => {
  try {
    return await sendRequest<Category[]>(buildApiUrl('/api/categories'), init);
  } catch {
    return [];
  }
};

export const getCompanies = async (
  params: Record<string, string> = {},
  init?: RequestInit,
) => {
  try {
    return await sendRequest<Company[]>(
      buildApiUrl('/api/companies', params),
      init,
    );
  } catch {
    return [];
  }
};

export const getCompany = async (
  id: string,
  init?: RequestInit,
): Promise<Company> => {
  return await sendRequest<Company>(buildApiUrl(`/api/companies/${id}`), init);
};

export const getPromotions = async (
  params: Record<string, string> = {},
  init?: RequestInit,
) => {
  try {
    return await sendRequest<Promotion[]>(
      buildApiUrl('/api/promotions', params),
      init,
    );
  } catch {
    return [];
  }
};

export const createPromotion = (data: Omit<Promotion, 'id'>) => {
  return sendRequest<Promotion>(buildApiUrl('/api/promotions'), {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
