export type Fetcher<T> = () => Promise<T>;
export type CreateFetcher<T> = () => { fetcher: Fetcher<T>; cacheKey: string };
