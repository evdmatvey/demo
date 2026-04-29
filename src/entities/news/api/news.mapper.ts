import type { News } from '../model/news';
import type { NewsDto } from './news.dto';

export const mapFromDto = (newsDto: NewsDto): News => {
  const mappedNewsData = newsDto.news.map((post) => ({
    ...post,
    publishedAt: new Date(post.publishedAt),
  }));

  return {
    ...newsDto,
    minDatePublication: new Date(newsDto.minDatePublication),
    news: mappedNewsData,
  };
};
