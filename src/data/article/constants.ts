export const FEATURED_ARTICLES_QUERY = `
  query {
    allArticle(
      where: {
        featured: { eq: true },
        _: { is_draft: false }
      },
      limit: 2,
      sort: { _createdAt: DESC }
    ) {
      _id
      slug { current }
      title
      featured
      author { name, default, fallback }
      body
      _createdAt
    }
  }
`;
