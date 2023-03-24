import PostGrid from '../../post/PostGrid/PostGrid'

import classes from './FeaturedPosts.module.css'
const FeaturePost = (props) => {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostGrid posts={props.posts} />
        </section>
    )
}

export default FeaturePost
