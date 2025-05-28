import Post from "../components/Post";
import ViewWrapper from "../components/ViewWrapper";
import Picture1 from "../assets/picture-1.jpg";
import Picture2 from "../assets/picture-2.jpg";
import Picture3 from "../assets/picture-3.jpg";
import PostContainer from "../components/PostContainer";

function Home() {
    return(
        <ViewWrapper>
            <PostContainer />
        </ViewWrapper>
    )
}

export default Home;