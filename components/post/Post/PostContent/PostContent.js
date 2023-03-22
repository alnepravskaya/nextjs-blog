import classes from "./PostContent.module.css"
import PostHeader from "../PostHeader/PostHeader";
import ReactMarkdown from "react-markdown";

const DUMMY_POST =     {
    slug: 'getting-started',
    title: 'Getting started',
    image: 'getting-started-nextjs.png',
    excerpt: '# This is a first post',
    date: '2022-01-10',
}
const PostContent = () => {
  return <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={`/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`}/>
      <ReactMarkdown>{DUMMY_POST.excerpt}</ReactMarkdown>
  </article>
}

export default PostContent;
