import { useState } from "react";
import Logo from "../../assests/images/homeLogo.png";

import {
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenSideBarButton,
  NavbarLinkSideBar,
  Backdrop,
} from "./Styles";

const Navigation = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const toggleSidebar = () => {
    setExtendNavbar((curr) => !curr);
  };

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <OpenSideBarButton
          onClick={toggleSidebar}
          aria-label="Open"
          aria-expanded="false"
        >
          &#9776;
        </OpenSideBarButton>
        <img src={Logo} alt="Home" height="30px" />
        <NavbarLinkContainer>
          <NavbarLink to="flights">Flights</NavbarLink>
          <NavbarLink to="hotels">Hotels</NavbarLink>
          <NavbarLink to="trains">Trains</NavbarLink>
          <NavbarLink to="homestays">Homestays</NavbarLink>
        </NavbarLinkContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <>
          <Backdrop onClick={toggleSidebar} />
          <NavbarExtendedContainer>
            <NavbarLinkSideBar to="flights">Flights</NavbarLinkSideBar>
            <NavbarLinkSideBar to="hotels">Hotels</NavbarLinkSideBar>
            <NavbarLinkSideBar to="trains">Trains</NavbarLinkSideBar>
            <NavbarLinkSideBar to="homestays">Homestays</NavbarLinkSideBar>
          </NavbarExtendedContainer>
        </>
      )}
    </NavbarContainer>
  );
};

export default Navigation;
