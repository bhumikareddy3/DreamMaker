import { create } from 'zustand';

export interface BrandData {
  brandName: string;
  tagline: string;
  description: string;
  colorPalette: string[];
  logoConcept: string;
  landingPageCopy: {
    headline: string;
    features: {
      title: string;
      description: string;
    }[];
    cta: string;
  };
}

interface BrandState {
  brandData: BrandData | null;
  setBrandData: (data: BrandData) => void;
}

export const useBrandStore = create<BrandState>((set) => ({
  brandData: null,
  setBrandData: (data) => set({ brandData: data }),
}));
