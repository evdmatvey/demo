import type { NewsVariant } from '../model/news-variant.ts';
import { BusinessNewsCardSkeleton } from './BusinessNewsCardSkeleton/index.tsx';
import { CompanyNewsCardSkeleton } from './CompanyNewsCardSkeleton/index.tsx';

interface NewsCardSkeletonProps {
  variant: NewsVariant;
  isPrimary?: boolean;
}

export const NewsCardSkeleton = ({
  variant,
  isPrimary,
}: NewsCardSkeletonProps) => {
  return variant === 'company' ? (
    <CompanyNewsCardSkeleton isPrimary={isPrimary} />
  ) : (
    <BusinessNewsCardSkeleton isPrimary={isPrimary} />
  );
};
