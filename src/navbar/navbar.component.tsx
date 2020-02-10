import React, {useState} from "react";
import {
  Burger,
  Container,
  NavbarDropdown, NavbarDropdownContent, NavbarDropdownTitle,
  NavbarLink,
  NavbarMenuProps,
  NavbarMenuStyle,
  NavbarStyle
} from "./navbar.styles";
import * as icons from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => setShowMenu(!showMenu);

  return <NavbarStyle>
    <Container display="flex">
      <Burger onClick={toggleShowMenu}>
        <FontAwesomeIcon icon={icons.faBars}/>
      </Burger>
      <span>CHEESE</span>
      <NavbarMenu display={showMenu}>
      </NavbarMenu>
    </Container>
  </NavbarStyle>;
};

  export const NavbarMenu: React.FC<NavbarMenuProps> = ({display}) => <NavbarMenuStyle display={display}>
    <NavbarLink href='#'>Cheese</NavbarLink>
    <NavbarDropdown>
      <NavbarDropdownTitle>Petrol</NavbarDropdownTitle>
      <NavbarDropdownContent>
        <NavbarLink href='#'>More cheese</NavbarLink>
        <NavbarLink href='#'>More petrol</NavbarLink>
      </NavbarDropdownContent>
    </NavbarDropdown>
    <NavbarDropdown>
      <NavbarDropdownTitle>About</NavbarDropdownTitle>
      <NavbarDropdownContent>
        <NavbarLink href='#'>Join us</NavbarLink>
        <NavbarLink href='#'>Who are we?</NavbarLink>
      </NavbarDropdownContent>
    </NavbarDropdown>
  </NavbarMenuStyle>;
