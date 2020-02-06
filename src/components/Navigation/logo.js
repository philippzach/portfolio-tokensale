import React from "react"
import Logo from "../../images/tokeninverse.svg"
import { Link } from "gatsby"
import styles from "./navigation.module.css"

const LogoNav = props => (
  <div className={styles._38GougRNE8}>
    <Link to={"/" + props.lang}>
      <img
        className={styles.logo}
        src={Logo}
        alt="ELoop One Token Logo"
        width="55px"
      />
    </Link>
  </div>
)

export default LogoNav
