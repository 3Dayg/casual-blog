import styles from "./Post.module.css";

function Post({ image }) {
    return (
        <div className={styles.post}>
            <h2>Post Title</h2>
            <img src={image} alt="Post Thumbnail" className={styles.post__image} />
            <p>Posted by <strong>Author Name</strong> on <em>October 1, 2023</em></p>
            <p>This is a sample post content.</p>
        </div>
    );
}

export default Post;