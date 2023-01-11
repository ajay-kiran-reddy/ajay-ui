import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userData } from "../../features/authReducer";
import ResponsiveAppBar from "../shared/Appbar";

const Home: React.FC<{}> = () => {
  const navigate = useNavigate();
  let user: any = useSelector(userData);

  // useEffect(() => {
  //   console.log(user.userInfo);
  //   if (!user.userInfo) {
  //     navigate("/");
  //   }
  // }, [user]);

  return (
    <div>
      {/* <ResponsiveAppBar /> */}
      This is HOME page
    </div>
  );
};

export default Home;
