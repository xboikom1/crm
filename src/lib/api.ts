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

const buildApiUrl = (path: string, params: Record<string, string> = {}) => {
  let base = '';

  if (process.env.NEXT_PUBLIC_BASE_URL) {
    base = process.env.NEXT_PUBLIC_BASE_URL;
  } else {
    base = 'http://localhost:3000';
  }
  const url = new URL(path, base);

  const hasParams = Object.keys(params).length > 0;
  if (hasParams) url.search = new URLSearchParams(params).toString();

  return url.toString();
};

const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);

  if (!res.ok) throw new Error(await res.text());

  return (await res.json()) as T;
};

export const getSummaryStats = async (init?: RequestInit) => {
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

export const getSummarySales = async (init?: RequestInit) => {
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

export const getCompany = async (id: string, init?: RequestInit) => {
  try {
    return await sendRequest<Company>(
      buildApiUrl(`/api/companies/${id}`),
      init,
    );
  } catch {
    return null;
  }
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
