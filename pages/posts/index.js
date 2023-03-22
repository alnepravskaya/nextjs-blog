import AllPosts from "../../components/post/AllPosts/AllPosts";

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
const AllPostPage = () => {
    return <AllPosts posts={DUMMY_POST}/>
}

export default AllPostPage;
