import { Link, useNavigate } from "react-router-dom";
import {
  ButtonLogo,
  Footer,
  Header,
  LayoutComponent,
  Logo,
  Main,
  NavContainer,
  StyledNavLink,
} from "./style";
import type { LayoutProps, NavLink } from "./type";
import Button from "../Button/Button";
import { navLinksData } from "./data";
import NavigationLink from "../NavigationLinks/NavigationLinks";
import { v4 } from "uuid";

function Lyout({ children }: LayoutProps) {
  // children pomogaet perenesti vsyu stranicu
  const navigate = useNavigate();
  const goToHome = () => {
    navigate(-1);
  };
  const navLinks = navLinksData.map(({path,name}:NavLink)=>{
    return <NavigationLink key={v4()} path={path} name={name} />
  })
  return (
    <LayoutComponent>
      <Header>
      </Header>
      <Main>{children}</Main>
      <Footer>
      </Footer>
    </LayoutComponent>
  );
}
export default Lyout;
