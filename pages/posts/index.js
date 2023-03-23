import AllPosts from '../../components/post/AllPosts/AllPosts';
import { getAllPosts } from '../../lib/posts-utils';
import Head from 'next/head';

const AllPostPage = (props) => {
  return (
    <>
      <Head>
        <title>All post</title>
        <meta name='description' content='list of all post' />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostPage;
