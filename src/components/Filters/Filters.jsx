import React from "react";
import styles from "./Filters.module.scss";

const Filters = () => {
  return (
    <div className={styles["filters"]}>
      <div>
        <p>
          World <i className="fas fa-angle-down"></i>
        </p>
      </div>
      <div>
        <p>
          Following <i className="fas fa-angle-down"></i>
        </p>
      </div>
      <div>
        <p>
          Popular <i className="fas fa-angle-down"></i>
        </p>
      </div>
      <div>
        <p>
          Post <i className="fas fa-angle-down"></i>
        </p>
      </div>
      <div>
        <p>
          Gender <i className="fas fa-angle-down"></i>
        </p>
      </div>
      <div>
        <p>
          Location <i className="fas fa-angle-down"></i>
        </p>
      </div>
      <div>
        <p>
          Profession <i className="fas fa-angle-down"></i>
        </p>
      </div>
      <div>
        <p>
          Skills <i className="fas fa-angle-down"></i>
        </p>
      </div>
    </div>
  );
};

export default Filters;
