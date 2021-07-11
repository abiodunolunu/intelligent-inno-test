import React from "react";
import { useImages } from "../../context/ImageContext";
import PersonCard from "../PersonCard/PersonCard";
import styles from "./PersonList.module.scss";

const ProfileList = () => {
  const { images, error } = useImages();

  return (
    <div className={styles["person-list"]}>
      {!error &&
        images.length > 0 &&
        images.map((image, idx) => {
          return <PersonCard image={image.image} alt={image.alt} key={image.id} />;
        })}

      {!error && images.length < 1 && <p style={{ marginTop: "3rem", textAlign: "center" }}>Nothing found!</p>}

      {error && <p style={{ marginTop: "3rem", textAlign: "center" }}>{error}</p>}
    </div>
  );
};

export default ProfileList;
