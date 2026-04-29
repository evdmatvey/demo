export type NewsCoverType = 'gallery';

export type NewsCoverSize = 's' | 'm' | 'l' | 'hd';

export interface NewsCover {
  type: NewsCoverType;
  images: Record<NewsCoverSize, string>[];
}

export interface NewsRubric {
  id: number;
  slug: string;
  name: string;
}

export interface NewsDirection {
  id: number;
  name: string;
  slug: string;
}

export interface NewsData {
  id: string;
  title: string;
  cover: NewsCover;
  likeCount: number;
  viewCount: number;
  publishedAt: Date;
  rubrics: NewsRubric[];
  directions: NewsDirection[];
  isBreaking: boolean;
  isImportant: boolean;
  isLiked: boolean;
  viewed: boolean;
  needConfirmation: boolean;
}

export interface News {
  news: NewsData[];
  perPage: number;
  totalPages: number;
  minDatePublication: Date;
}
