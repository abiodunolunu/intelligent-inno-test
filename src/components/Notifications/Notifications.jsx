import React, { useState } from "react";
import styles from "./Notifications.module.scss";

const Notifications = () => {
  const [showNotification, setShowNotifaction] = useState(!false);

  return (
    <div className={styles["notification-wrapper"]}>
      <div className={styles["bell-wrapper"]}>
        <i className="fas fa-bell" onClick={() => setShowNotifaction(!showNotification)}>
          <span>3</span>
        </i>
      </div>

      {showNotification && (
        <div className={styles["notification-list"]}>
          <div className={styles["notification"] + " " + styles["notification-like"]}>
            <img src="http://unsplash.it/80/80?gravity=center" alt="" />
            <div>
              <p>Michael liked you!</p>
              <small>About 20 minutes ago</small>
            </div>
            <i className="fas fa-heart"></i>
          </div>
          <div className={styles["notification"] + " " + styles["notification-like"]}>
            <img src="http://unsplash.it/80/80?gravity=center" alt="" />
            <div>
              <p>Michael liked you!</p>
              <small>About 20 minutes ago</small>
            </div>
            <i className="fas fa-heart"></i>
          </div>
          <div className={styles["notification"] + " " + styles["notification-comment"]}>
            <img src="http://unsplash.it/80/80?gravity=center" alt="" />
            <div>
              <p>Martin commented on your photo!</p>
              <small>About 56 minutes ago</small>
            </div>
            <i className="fas fa-comment-alt"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
