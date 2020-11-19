export const PLATFORM = window.config.platform ? "/" + window.config.platform : '';

console.log(window.config.platform);

export const HOME_PAGE_ROUTE = PLATFORM + "/home";
export const LOGIN_PAGE_ROUTE = PLATFORM + "/login";
export const FAVORITES_PAGE_ROUTE = PLATFORM + "/favorites";
export const MOVIES_PAGE_ROUTE = PLATFORM + "/movies";
export const SERIES_PAGE_ROUTE = PLATFORM + "/series";
export const ACTION_GENRE_PAGE_ROUTE = PLATFORM + "/action";
export const COMEDY_GENRE_PAGE_ROUTE = PLATFORM + "/comedy";
export const ROMANCE_GENRE_PAGE_ROUTE = PLATFORM + "/romance";
export const DRAMA_GENRE_PAGE_ROUTE = PLATFORM + "/drama";
export const CRIME_GENRE_PAGE_ROUTE = PLATFORM + "/crime";
export const THRILLER_GENRE_PAGE_ROUTE = PLATFORM + "/thriller";
export const FAMILY_GENRE_PAGE_ROUTE = PLATFORM + "/family";
export const SEARCH_PAGE_ROUTE = PLATFORM + "/search";




