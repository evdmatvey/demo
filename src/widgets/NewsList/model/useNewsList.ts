import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { type NewsType, newsQueries } from '@/entities/news';

export const useNewsList = (newsPerPage: number, type: NewsType) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, isPlaceholderData } = useQuery(
    newsQueries.list(page, newsPerPage, type),
  );

  const totalPages = data?.totalPages || 1;
  const isNextDisabled = page >= totalPages || isFetching;
  const isPrevDisabled = page <= 1 || isFetching;

  const showNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const showPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return {
    data,
    isLoading,
    isFetching,
    isPlaceholderData,
    isNextDisabled,
    isPrevDisabled,
    showNextPage,
    showPrevPage,
  };
};
