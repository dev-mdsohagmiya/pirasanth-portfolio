import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import '../../../styles/globals.css';
import { client } from '../../../lib/sanity.client';
import PreviewSuspense from '../../../components/PreviewSuspense';
import PreviewBlogList from '../../../components/PreviewBlogList';
import BlogList from '../../../components/BlogList';

const query = groq`
*[_type=='post'] {
    ...,
    author->,
    categories[]->
} | order(_createdAt desc)
`;

export async function getStaticProps() {
  if (previewData()) {
    return {
      props: {
        isPreview: true,
      },
    };
  }
  const posts = await client.fetch(query);
  return {
    props: {
      isPreview: false,
      posts,
    },
  };
}

function Home({ isPreview, posts }) {
  if (isPreview) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#FFC35B]">
              Loading Preview Data
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  return <BlogList posts={posts} />;
}

export default Home;
