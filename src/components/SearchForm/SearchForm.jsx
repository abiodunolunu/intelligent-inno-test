import React from "react";
import { useImages } from "../../context/ImageContext";
import styles from "./SearchForm.module.scss";

const SearchForm = () => {
  const { setUrl } = useImages();
  let debounce = null;

  // Used a debounce so it will only execute when user pauses while typing for 550ms
  const handleChange = (e) => {
    const { value } = e.target;

    clearTimeout(debounce);

    debounce = setTimeout(() => {
      if (value.trim() === "") {
        return setUrl("");
      }
      const urlString = process.env.REACT_APP_UNSPLASH_URL + "/search/photos?query=" + value + "&client_id=" + process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
      setUrl(urlString);
    }, 550);
  };

  return (
    <div>
      <form action="#" className={styles["search-form"]}>
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Find Something" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
