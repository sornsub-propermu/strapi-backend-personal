export default ({ env }) => ({
  ckeditor: {
    enabled: true,
  },
  seo: {
    enabled: true,
  },
  scheduler: {
    enabled: true,
    config: {
      contentTypes: {
        "api::page.page": {},
      },
      singleTypes: {
        "api::blog-page.blog-page": {},
      },
      collectionTypes: {
        "api::article.article": {},
      },
    },
  },
});
