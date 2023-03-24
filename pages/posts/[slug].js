import PostContent from '../../components/post/Post/PostContent/PostContent'
import { getPostData, getPostsFiles } from '../../lib/posts-utils'
import Head from 'next/head'

const PostDetailPage = (props) => {
    return (
        <>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content={props.post.excerpt} />
            </Head>
            <PostContent post={props.post} />
        </>
    )
}

export const getStaticProps = (context) => {
    const { params } = context

    const { slug } = params

    const postData = getPostData(slug)

    return {
        props: {
            post: postData,
        },
        revalidate: 600,
    }
}

export const getStaticPaths = () => {
    const postFileNames = getPostsFiles()
    const paths = postFileNames.map((fileName) => ({
        params: { slug: fileName.replace(/\.md$/, '') },
    }))

    return {
        paths: paths,
        fallback: false,
    }
}
export default PostDetailPage
