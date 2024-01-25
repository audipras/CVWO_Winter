import Topbar from "../Components/Topbar";
import MainBox from "../Components/MainBox";

function Profile() {
  return (
    <div>
      <div style={{ height: "8vh" }} />
      <Topbar></Topbar>
      <MainBox children={undefined} />
    </div>
  );
}

export default Profile;
