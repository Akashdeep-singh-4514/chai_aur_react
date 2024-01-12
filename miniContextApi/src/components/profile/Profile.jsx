import React, { useContext } from "react";
import userContext from "../../context/userContext";
function Profile() {
  const { user } = useContext(userContext);
  if (!user) {
    return <h4>enter Profile</h4>;
  }

  return (
    <div className="" style={{ marginLeft: 50 }}>
      welcome {user.name}
    </div>
  );
}

export default Profile;
