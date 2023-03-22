import PostItem from "../PostItem/PostItem";
import classes from "./PostsGrid.module.css"

const PostGrid = (props)=>{
    const {posts} = props;

    return <ul className={classes.grid}>
        {posts.map(post=><PostItem  key={post.slug} post={post}/>)}
    </ul>
}

export default PostGrid;
