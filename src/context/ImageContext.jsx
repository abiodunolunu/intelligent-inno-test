import React, { createContext, useContext, useEffect, useState } from "react";

const ImageContext = createContext(null);

export const useImages = function () {
  return useContext(ImageContext);
};

const ImageContextProvider = (props) => {
  const [images, setImages] = useState([]);
  const defaultUrl = process.env.REACT_APP_UNSPLASH_URL + "/photos/random/?count=10&client_id=" + process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  const [url, setUrl] = useState(defaultUrl);
  const [error, setError] = useState(null);

  //curl https://api.unsplash.com/photos/random?count=5 █

  useEffect(() => {
    if (url === "") {
      return setUrl(defaultUrl);
    }

    setError(null);

    fetch(url, {})
      .then((res) => {
        console.log(res.status);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Rate Limit Exceeded");
        }
      })
      .then((data) => {
        let fetchedImages;
        if (data.results) {
          fetchedImages = data.results.map((d) => {
            return { image: d.urls.small, alt: d.alt_description, id: d.id };
          });
        } else {
          fetchedImages = data.map((d) => {
            return { image: d.urls.small, alt: d.alt_description, id: d.id };
          });
        }
        setImages(fetchedImages);
        localStorage.setItem("images", JSON.stringify(images));
      })
      .catch((err) => {
        setError(err.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return <ImageContext.Provider value={{ images, url, setUrl, error }}>{props.children}</ImageContext.Provider>;
};

export default ImageContextProvider;
