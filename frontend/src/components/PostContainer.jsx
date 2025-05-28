import Post from "./Post";
import Picture1 from "../assets/picture-1.jpg";
import Picture2 from "../assets/picture-2.jpg";
import Picture3 from "../assets/picture-3.jpg";
import styles from "./PostContainer.module.css";

const POSTS = [
    {
      id: 1,
        title: "Imitation experts",
        image: Picture1,
        description: "Some parrot species are famous for mimicking human speech and sounds.",
    },
    {
        id: 2,
        title: "Intelligent birds",
        image: Picture2,
        description: "Parrots are considered one of the most intelligent bird species, capable of learning and problem-solving.",
    },
    {
        id: 3,
        title: "Social creatures",
        image: Picture3,
        description: "Parrots are social animals, often living in flocks and communicating with each other using a variety of calls and body language.",
    }
];

function PostContainer() {
  return (
    <div className={styles.postContainer}>
      {POSTS.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default PostContainer;