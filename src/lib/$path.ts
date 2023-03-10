export const pagesPath = {
  "home": {
    $url: (url?: { hash?: string }) => ({ pathname: '/home' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
