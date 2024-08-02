import styles from "styles/Home/Tooltip.module.css";
import { Link } from "react-scroll";

function Tooltip() {
  return (
    <>
      <Link className={styles.toolTip} to="header-link-popup" smooth={true}>
        <span className={styles.popupScroll}>↑</span>
        <span className={styles.toolTipText}>Voltar ao topo</span>
      </Link>
    </>
  );
}

export default Tooltip;
