import { requester } from '@/shared/api/requester';
import type { News } from '../model/news';
import type { NewsDto } from './news.dto';
import { mapFromDto } from './news.mapper';

export type NewsType = 'short' | 'empty';

export const getNews = async (
  page: number,
  perPage: number,
  type: NewsType,
): Promise<News> => {
  const searchParams = new URLSearchParams();
  searchParams.set('page', String(page));
  searchParams.set('perPage', String(perPage));

  const queryParams = searchParams.toString();

  try {
    const response = await requester.get<NewsDto>(
      `/news/feed/company/${type}?${queryParams}`,
    );

    const dto: NewsDto = response.data;

    return mapFromDto(dto);
  } catch (error) {
    throw new Error('Не удалось получить новости', { cause: error });
  }
};
