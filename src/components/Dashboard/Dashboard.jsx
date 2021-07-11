import { useGlobalContext } from "../../context/GlobalContext";
import Filters from "../Filters/Filters";
import Notifications from "../Notifications/Notifications";
import PersonList from "../PersonList/PersonList";
import Profile from "../Profile/Profile";
import SearchForm from "../SearchForm/SearchForm";
import SideBar from "../SideBar/SideBar";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const { toggleSideBar, closeSideBar } = useGlobalContext();

  return (
    <div className={styles.dashboard} onClick={closeSideBar}>
      <SideBar />
      <div className={styles.content} style={{ marginTop: "2rem" }}>
        <div className={styles["top-nav"]}>
          <div className={styles["toggle-btn"]} onClick={toggleSideBar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <SearchForm />
          <Notifications />
          <Profile style={styles["profile"]} />
        </div>
        <div style={{ margin: "1.5rem 0" }}>
          <Filters />
        </div>
        <PersonList />
      </div>
    </div>
  );
};

export default Dashboard;
