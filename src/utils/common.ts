export const isClient = () => typeof window !== 'undefined';

export const wait = (time: number) => new Promise((res) => setTimeout(res, time));
