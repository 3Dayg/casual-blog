import Post from "../components/Post";
import ViewWrapper from "../components/ViewWrapper";
import Picture1 from "../assets/picture-1.jpg";
import Picture2 from "../assets/picture-2.jpg";
import Picture3 from "../assets/picture-3.jpg";

function Home() {
    return(
        <ViewWrapper>
            <h1>Welcome to Papuga!</h1>
            <Post image={Picture1} />
            <Post image={Picture2} />
            <Post image={Picture3} />
        </ViewWrapper>
    )
}

export default Home;