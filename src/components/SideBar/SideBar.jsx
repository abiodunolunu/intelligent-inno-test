/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/images/logo.png";
import { useGlobalContext } from "../../context/GlobalContext";
import styles, { brand } from "./SiderBar.module.scss";
const SideBar = () => {
  const { showSideBar } = useGlobalContext();
  return (
    <div className={`${styles["side-bar"]} ${showSideBar ? styles["open"] : ""}`}>
      <a href="#" className={brand}>
        <img src={logo} alt="" />
      </a>

      <ul className={styles["list"]} style={{ marginTop: "2rem" }}>
        <li>
          <a href="#" className={styles["active-link"]}>
            <i className="fas fa-home"></i> Home
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-envelope"></i> Message
          </a>
        </li>
      </ul>

      <div className={styles["list"]}>
        <p>Share</p>
        <ul>
          <li>
            <a href="#">
              <i className="fas fa-chess"></i>Ranking
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-users"></i>Challenge
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-music"></i>Party
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-link"></i>Connect
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-user"></i>Parade
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-users"></i>Group
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
