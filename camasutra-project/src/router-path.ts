const pathsMap = {
    dialogs: () => '/dialogs',
    profile: (userId?: string) => `/profile/${userId}`,
    users: () => '/users',
    music: () => '/music',
    news: () => '/news',
    settings: () => '/settings',
    login: () => '/login',
    notFound: () => '*',
};
type PathsMap = typeof pathsMap;

export const getPath = <TRoute extends keyof PathsMap>(
    route: TRoute,
    ...params: Parameters<PathsMap[TRoute]>
) => {
    const pathCb: (...args: any[]) => string = pathsMap[route];
    return pathCb(...params);
};