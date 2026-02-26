import { movieService } from '@/services/movieService';

/**
 * Convert image URL to WEBP format to optimize performance
 */
export const getOptimizedImageUrl = (imageUrl: string | undefined): string => {
  if (!imageUrl || imageUrl.trim() === '') {
    // Return a placeholder SVG data URL
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5QaGltIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
  }
  
  // If the URL is already from phimapi.com/image.php, no need to convert
  if (imageUrl.includes('phimapi.com/image.php')) {
    return imageUrl;
  }
  
  // If this is already a full URL from phimimg.com, use it directly without conversion
  if (imageUrl.startsWith('https://phimimg.com/') || imageUrl.startsWith('http://phimimg.com/')) {
    return imageUrl;
  }
  
  // If this is a relative path (starting with "upload/"), add the domain
  let fullUrl = imageUrl;
  if (imageUrl.startsWith('upload/') || imageUrl.startsWith('/upload/')) {
    fullUrl = `https://phimimg.com/${imageUrl.replace(/^\//, '')}`;
  } else if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
    // If there is no protocol, prepend the domain
    fullUrl = `https://phimimg.com/${imageUrl}`;
  }
  
  // Only convert to WebP if the URL has not already been converted
  return movieService.convertImageToWebP(fullUrl);
};

/**
 * Get the movie's poster or thumbnail URL
 */
export const getMovieImage = (movie: { poster_url?: string; thumb_url?: string }): string => {
  return getOptimizedImageUrl(movie.poster_url || movie.thumb_url);
};
