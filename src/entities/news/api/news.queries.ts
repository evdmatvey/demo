import { keepPreviousData, queryOptions } from '@tanstack/react-query';
import { type NewsType, getNews } from './get-news';

export const newsQueries = {
  all: () => ['posts'],
  lists: (type: NewsType) => [...newsQueries.all(), 'list', type],
  list: (page: number, limit: number, type: NewsType) =>
    queryOptions({
      queryKey: [...newsQueries.lists(type), page, limit],
      queryFn: () => getNews(page, limit, type),
      placeholderData: keepPreviousData,
    }),
};
