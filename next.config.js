module.exports = {
  images: {
    minimumCacheTTL: 60*60*24,
  },

  async rewrites() {
    return [
      {
        source: '/gioi-thieu.html',
        destination: '/gioi-thieu',
      },
      {
        source: '/tin-tuc.html',
        destination: '/tin-tuc',
      },
      {
        source: '/khach-hang.html',
        destination: '/khach-hang',
      },
      {
        source: '/nha-san-xuat.html',
        destination: '/nha-san-xuat',
      },
      {
        source: '/tuyen-dung.html',
        destination: '/tuyen-dung',
      },
      {
        source: '/dich-vu.html',
        destination: '/dich-vu',
      },
      {
        source: '/lien-he.html',
        destination: '/lien-he',
      },


      {
        source: '/san-pham.html',
        destination: '/san-pham',
      },
      {
        source: '/san-pham/:slug.html',
        destination: '/san-pham/:slug',
      },
      {
        source: '/detail/:slug.html',
        destination: '/detail/:slug',
      },
    ]
  },

  productionBrowserSourceMaps: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};