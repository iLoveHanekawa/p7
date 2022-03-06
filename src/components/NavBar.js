import React from "react"
import {FaGlobeAsia} from "react-icons/fa"

export default function NavBar() {
    return <nav className = "navBarFlex">
            <h3 className = "navBarH3">
                <FaGlobeAsia className = "navBarIcon"/>my travel journal
            </h3>
    </nav>
}
