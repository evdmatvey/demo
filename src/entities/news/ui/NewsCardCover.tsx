import { requestImage } from '@/shared/api/request-image';
import { useLazyLoad } from '@/shared/model/useLazyLoad';
import placeholder from '@/shared/ui/assets/image-placeholder.svg';
import type { NewsCover } from '../model/news';

interface NewsCardCoverProps {
  covers: NewsCover;
  className: string;
}

export const NewsCardCover = ({ className, covers }: NewsCardCoverProps) => {
  const { ref, isVisible } = useLazyLoad();
  const cover = covers.images[0];

  return (
    <picture>
      <source
        media="(min-width: 1200px)"
        srcSet={isVisible ? requestImage(cover.hd) : placeholder}
      />
      <source
        media="(min-width: 800px)"
        srcSet={isVisible ? requestImage(cover.m) : placeholder}
      />
      <img
        ref={ref}
        className={className}
        src={isVisible ? requestImage(cover.m) : placeholder}
        alt="Обложка новости"
      />
    </picture>
  );
};
