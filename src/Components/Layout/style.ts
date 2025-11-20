import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const Header = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  padding: 20px;
  background-color: white;
  width: 1440px;
height: 120px;
opacity: 1;
border-width: 2px;

`;
export const Logo = styled.div`
  font-family: Lato;
  font-weight: 700;
  font-style: Bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #000000;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 16px;
`;
export const StyledNavLink = styled(NavLink)`
  /* zdes tak dobavlyaem ssilku zamenyaet a,pod kapotom a no soderzhit dop vozmozhnosti */
  text-decoration: none;
  font-size: 20px;
  color: #0a2837ff;
`;
export const Main = styled.main`
  display: flex;
  flex: 1;
`;


export const ButtonLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 200px;
`;
