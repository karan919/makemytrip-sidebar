import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100vw;
  background-color: #061423;
  color: white;
  display: flex;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0 1rem;
  flex-direction: row;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 1rem;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const NavbarLinkSideBar = styled(Link)`
  color: white;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const OpenSideBarButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 35px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const CloseSideBarButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 35px;
  cursor: pointer;
  margin-left: auto;
`;

export const NavbarExtendedContainer = styled.div`
  position: absolute;
  background-color: #061423;
  color black;
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(255, 255, 255, 0.2) 1.95px 1.95px 2.6px;
  @media (min-width: 400px) {
    width: 40vw;
  }
`;
