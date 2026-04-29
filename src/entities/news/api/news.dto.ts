export type NewsDtoCoverType = 'gallery';

export type NewsDtoCoverSize = 's' | 'm' | 'l' | 'hd';

export interface NewsCover {
  type: NewsDtoCoverType;
  images: Record<NewsDtoCoverSize, string>[];
}

export interface NewsDtoRubric {
  id: number;
  slug: string;
  name: string;
}

export interface NewsDtoDirection {
  id: number;
  name: string;
  slug: string;
}

export interface NewsDtoData {
  id: string;
  title: string;
  cover: NewsCover;
  likeCount: number;
  viewCount: number;
  publishedAt: string;
  rubrics: NewsDtoRubric[];
  directions: NewsDtoDirection[];
  isBreaking: boolean;
  isImportant: boolean;
  isLiked: boolean;
  viewed: boolean;
  needConfirmation: boolean;
}

export interface NewsDto {
  news: NewsDtoData[];
  perPage: number;
  totalPages: number;
  minDatePublication: string;
}
