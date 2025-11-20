import { Link, useNavigate } from "react-router-dom";
import {
  ButtonLogo,
  // Footer,
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
import type { FormikTypesInput, MainCardContextType } from "../../Pages/component/CreateEmployee/types";
import { createContext, useState } from "react";

export const InfoUser= createContext<MainCardContextType>({
      name: "",
      surname: "",
      age: 0,
      jobPosition: "",
       onDataChange: () => {},
    
})
function Lyout({ children }: LayoutProps) {
   const[postMessage,setPostMessage] = useState< FormikTypesInput>({
        name:"",
        surname:"",
        age:0,
        jobPosition:"",
    
    })

  // children pomogaet perenesti vsyu stranicu
  const navigate = useNavigate();
  const goToHome = () => {
    navigate(-1);
  };
  const navLinks = navLinksData.map(({ path, name }: NavLink) => {
    return <NavigationLink key={v4()} path={path} name={name} />;
  });
  return (
<InfoUser.Provider value={{
  name:postMessage.name,
  surname:postMessage.surname,
  age:postMessage.age,
  jobPosition:postMessage.jobPosition,
  onDataChange:setPostMessage,

}}
>

    <LayoutComponent>
      <Header>
        <Logo>App Logo</Logo>
        <NavContainer>{navLinks}</NavContainer>
      </Header>

      <Main>{children}</Main>
      {/* <Footer></Footer> */}
    </LayoutComponent>
    </InfoUser.Provider>
  );
}
export default Lyout;
