import type { NewsData } from '../model/news';
import type { NewsVariant } from '../model/news-variant.ts';
import { BusinessNewsCard } from './BusinessNewsCard/index.tsx';
import { CompanyNewsCard } from './CompanyNewsCard/index.tsx';

interface NewsCardProps {
  news: NewsData;
  variant: NewsVariant;
  isPrimary?: boolean;
}

export const NewsCard = ({ news, variant, isPrimary }: NewsCardProps) => {
  return variant === 'company' ? (
    <CompanyNewsCard news={news} isPrimary={isPrimary} />
  ) : (
    <BusinessNewsCard news={news} isPrimary={isPrimary} />
  );
};
