import classes from './PostContent.module.css'
import PostHeader from '../PostHeader/PostHeader'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

const PostContent = (props) => {
    const { post } = props
    const customRender = {
        code(code) {
            const { className, children } = code
            const language = className.split('-')[1]
            return (
                <SyntaxHighlighter style={atomDark} language={language}>
                    {children}
                </SyntaxHighlighter>
            )
        },
        image(image) {
            return (
                <Image
                    src={`/image/posts/${post.slug}/${image.src}`}
                    alt={image.alt}
                    width={500}
                    height={500}
                />
            )
        },
    }

    return (
        <article className={classes.content}>
            <PostHeader
                title={post.title}
                image={`/images/posts/${post.slug}/${post.image}`}
            />
            <ReactMarkdown components={customRender}>
                {post.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent
