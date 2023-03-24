import Image from 'next/image'
import classes from './Hero.module.css'

const Hero = () => (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image
                src="/images/site/avatar.png"
                alt="An image showing Alena"
                width="400"
                height="400"
            />
        </div>
        <h1>Hi, I'm Alena</h1>
        <p>I blog about web-development</p>
    </section>
)

export default Hero
