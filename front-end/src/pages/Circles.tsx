import MainBox from "../Components/MainBox";
import PostDisplayBox from "../Components/PostDisplayBox";
import Topbar from "../Components/Topbar";

function Circles() {
  return (
    <div>
      <Topbar></Topbar>{" "}
      <MainBox>
        <PostDisplayBox></PostDisplayBox>
      </MainBox>
    </div>
  );
}

export default Circles;
