import styles from "styles/Home/Tooltip.module.css";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

function Tooltip() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Link className={styles.toolTip} to="header-link-popup" smooth={true}>
          <span className={styles.popupScroll}>↑</span>
          <span className={styles.toolTipText}>Voltar ao topo</span>
        </Link>
      )}
    </>
  );
}

export default Tooltip;
