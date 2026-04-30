export type {
  News,
  NewsCover,
  NewsCoverSize,
  NewsCoverType,
  NewsData,
  NewsDirection,
  NewsRubric,
} from './model/news';
export type { NewsType } from './api/get-news';
export type { NewsVariant } from './model/news-variant';
export { newsQueries } from './api/news.queries';
export { NewsCard } from './ui/NewsCard';
export { NewsCardSkeleton } from './ui/NewsCardSkeleton';
