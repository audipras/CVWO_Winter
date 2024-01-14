import Topbar from "./Components/Topbar";
import MainBox from "./Components/MainBox";
import PostDisplayBox from "./Components/PostDisplayBox";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Topbar />
      <MainBox>
        <PostDisplayBox></PostDisplayBox>
      </MainBox>
    </div>
  );
}
export default Home;
