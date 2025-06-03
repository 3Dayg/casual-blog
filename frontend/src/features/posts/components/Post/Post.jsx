import styles from "./Post.module.css";
import { Typography } from "@components/Typography/Typography";

function Post({ 
    title, 
    image, 
    description
}) {
    return (
        <div className={styles.post}>
            <div className={styles.post__imageWrapper}>
                <img src={image} alt="Post Thumbnail" className={styles.post__image} />
                {/* <h2 className={styles.post__title}>{title}</h2> */}
                <Typography variant="h2" size="responsive" spacing="responsive"className={styles.post__title}>{title}</Typography>
            </div>
            <section className={styles.post__content}>
            <p>{description}</p>
            <p>Posted by <strong>Papuga lady</strong> on <em>October 1, 2025</em></p>
            </section>
        </div>
    );
}

export default Post;