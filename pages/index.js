import Hero from "../components/home/Hero/Hero";
import FeaturePost from "../components/home/FeaturePost/FeaturePost";
import {getFeaturedPosts} from "../lib/posts-utils";

const DUMMY_POST = [
    {
        slug: 'getting-started',
        title: 'Getting started',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJs is framework',
        date: '2022-01-10',
    },
    {
        slug: 'getting-started-2',
        title: 'Getting started 2',
        image: 'nextjs-file-based-routing.png',
        excerpt: 'NextJs is framework 2',
        date: '2023-01-10',
    }
]

const HomePage = (props) => {


  return <>
      <Hero />
      <FeaturePost posts={props.posts}/>
  </>
}

export const getStaticProps = () => {
    const featurePosts = getFeaturedPosts();

    return {
        props: {
            posts: featurePosts
        },
        revalidate: 1800
    }
}
export default HomePage;



