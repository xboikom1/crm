export interface SummaryStats {
  promotions: number;
  categories: number;
  newCompanies: number;
  activeCompanies: number;
}

export interface SummarySales {
  id: string;
  companyId: string;
  companyTitle: string;
  sold: number;
  income: number;
}

export interface Country {
  id: string;
  title: string;
}

export interface Category {
  id: string;
  title: string;
}

export enum CompanyStatus {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface Company {
  id: string;
  title: string;
  description: string;
  status: CompanyStatus;
  joinedDate: string;
  hasPromotions: boolean;
  categoryId: string;
  categoryTitle: string;
  countryId: string;
  countryTitle: string;
  avatar?: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: number;
  companyId: string;
  companyTitle: string;
  avatar?: string;
}

const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

const buildApiUrl = (path: string, params: Record<string, string> = {}) => {
  let base = '';

  if (process.env.NEXT_PUBLIC_BASE_URL) base = process.env.NEXT_PUBLIC_BASE_URL;
  else base = 'http://localhost:3000';

  const hasParams = Object.keys(params).length > 0;

  const url = new URL(path, base);
  if (hasParams) url.search = stringifyQueryParams(params);
  return url.toString();
};

const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);

  if (!res.ok) throw new Error(await res.text());

  return (await res.json()) as T;
};

export const getSummaryStats = (init?: RequestInit) => {
  return sendRequest<SummaryStats>(buildApiUrl('/api/summary-stats/1'), init);
};

export const getSummarySales = (init?: RequestInit) => {
  return sendRequest<SummarySales[]>(buildApiUrl('/api/summary-sales'), init);
};

export const getCountries = (init?: RequestInit) => {
  return sendRequest<Country[]>(buildApiUrl('/api/countries'), init);
};

export const getCategories = (init?: RequestInit) => {
  return sendRequest<Category[]>(buildApiUrl('/api/categories'), init);
};

export const getCompanies = (init?: RequestInit) => {
  return sendRequest<Company[]>(buildApiUrl('/api/companies'), init);
};

export const getCompany = (id: string, init?: RequestInit) => {
  return sendRequest<Company>(buildApiUrl(`/api/companies/${id}`), init);
};

export const getPromotions = async (
  params: Record<string, string> = {},
  init?: RequestInit,
) => {
  return sendRequest<Promotion[]>(buildApiUrl('/api/promotions', params), init);
};
