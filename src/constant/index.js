import { useCallback } from 'react';
export const TAPS_DATA = [
    {
        name: 'UpComing',
        nameAPI: 'upcoming',
        pageNumber: 1
    },
    {
        name: 'Popular',
        nameAPI: 'popular',
        pageNumber: 1
    },
    {
        name: 'Top Rated',
        nameAPI: 'top_rated',
        pageNumber: 1
    },
];


export const BASE_API = "https://api.themoviedb.org/3/movie/"

export const API_KEY = "?api_key=02a43ea0c1fb907acd48f26bff0a7c75"

export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";


export const getLayoutParams = (data, index) => ({
    length: data?.length,
    offset: data?.length * index,
    index,
  })
