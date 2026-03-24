import React from "react";

const User = {
  name: "Her",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};
const Profile = () => {
  return (
    <div>
      <h2>{User.name}</h2>
      <img
        src={User.imageUrl}
        alt={"Photo of" + User.name}
        style={{
          width: User.imageSize,
          height: User.imageSize,
        }}
      />
    </div>
  );
};

export default Profile;
