import Hero from '../components/home/Hero/Hero';
import FeaturePost from '../components/home/FeaturePost/FeaturePost';
import { getFeaturedPosts } from '../lib/posts-utils';
import Head from 'next/head';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Alena's blog</title>
        <meta
          name='description'
          content='I post about programming and web-development'
        />
      </Head>
      <Hero />
      <FeaturePost posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featurePosts = getFeaturedPosts();

  return {
    props: {
      posts: featurePosts,
    },
    revalidate: 1800,
  };
};
export default HomePage;
