import { useRef, useCallback } from 'react';

const useInfiniteScroll = (loading, pageNumber) => {
  const observer = useRef();
  const lastTrackElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log('intersect');
          pageNumber((prevPageNumber) => prevPageNumber + 10);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, pageNumber]
  );

  return [lastTrackElement];
};

export default useInfiniteScroll;
