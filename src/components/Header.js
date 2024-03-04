import React from "react";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
        <span>Resume Builder</span> 
        </p>
      </div>
    </div>
  );
}

export default Header;



/*
<div className={styles.right}>
  <img src={resumeSvg} alt="Resume" />
</div>
*/

/*
<p className={styles.heading}>
  A <span>Resume Builder</span> that stands out!
</p>
<p className={styles.heading}>
  Make your own resume. <span>It's free</span>
</p>
*/
