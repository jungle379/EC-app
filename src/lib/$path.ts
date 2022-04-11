export const pagesPath = {
  "cart": {
    $url: (url?: { hash?: string }) => ({ pathname: '/cart' as const, hash: url?.hash })
  },
  "category": {
    $url: (url?: { hash?: string }) => ({ pathname: '/category' as const, hash: url?.hash }),
    "books": {
      $url: (url?: { hash?: string }) => ({ pathname: '/category/books' as const, hash: url?.hash })
    },
    "fashion": {
      $url: (url?: { hash?: string }) => ({ pathname: '/category/fashion' as const, hash: url?.hash })
    },
    "foods": {
      $url: (url?: { hash?: string }) => ({ pathname: '/category/foods' as const, hash: url?.hash })
    },
    "news": {
      "books": {
        $url: (url?: { hash?: string }) => ({ pathname: '/category/news/books' as const, hash: url?.hash })
      },
      "fashion": {
        $url: (url?: { hash?: string }) => ({ pathname: '/category/news/fashion' as const, hash: url?.hash })
      },
      "foods": {
        $url: (url?: { hash?: string }) => ({ pathname: '/category/news/foods' as const, hash: url?.hash })
      }
    }
  },
  "footer": {
    "kiyaku": {
      $url: (url?: { hash?: string }) => ({ pathname: '/footer/kiyaku' as const, hash: url?.hash })
    },
    "others": {
      $url: (url?: { hash?: string }) => ({ pathname: '/footer/others' as const, hash: url?.hash })
    },
    "personal": {
      $url: (url?: { hash?: string }) => ({ pathname: '/footer/personal' as const, hash: url?.hash })
    },
    "privacy": {
      $url: (url?: { hash?: string }) => ({ pathname: '/footer/privacy' as const, hash: url?.hash })
    }
  },
  "newest": {
    $url: (url?: { hash?: string }) => ({ pathname: '/newest' as const, hash: url?.hash })
  },
  "user": {
    _index: (index?: string[]) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/user/[[...index]]' as const, query: { index }, hash: url?.hash })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
