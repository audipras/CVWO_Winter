import Topbar from "../Components/Topbar";
import MainBox from "../Components/MainBox";
import PostDisplayBox from "../Components/PostDisplayBox";
import CreatePost from "../Components/CreatePost";
import IndividualPostBox from "../Components/IndividualPostBox";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Topbar />
      <div style={{ height: "8vh" }}></div>
      <MainBox>
        <PostDisplayBox />
      </MainBox>
    </div>
  );
}
export default Home;
