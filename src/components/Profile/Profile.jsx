import React from "react";
import styles from "./Profile.module.scss";

const Profile = ({ style }) => {
  return (
    <div className={styles["profile"] + " " + style}>
      <div className={styles["profile-img"]}>
        <img src="http://unsplash.it/56/56?random&gravity=north" alt="" />
      </div>
      <div className={styles["drop-down"]}>
        <p>Abigail</p>
        <i className="fas fa-angle-down"></i>
      </div>
    </div>
  );
};

export default Profile;
