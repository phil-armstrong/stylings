import styled, {createGlobalStyle} from 'styled-components';

export const NavbarStyle = styled.nav`
  width: 100%;
  background: #123432;
  color: #fff;
  font-size: ${props => props.theme.layout.navbar.fontSize};
  position: ${props => props.theme.layout.navbar.fixed ? 'fixed' : 'static'};
  height: ${props => props.theme.layout.navbar.height};
  top: ${props => props.theme.layout.navbar.fixed ? 0 : undefined};

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      
  }
`;

export const NavbarMenuStyle = styled.div<NavbarMenuProps>`
  display: ${props => props.display ? 'block' : 'none'};
  position: fixed;
  width: 10em;
  top: ${props => props.theme.layout.navbar.height};
  left: 0;
  height: 100%;
  background: #123432;
  color: white;
  
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    position: static;
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }
`;

export interface NavbarMenuProps {
  display: boolean;
}

interface ContainerProps {
  display?: string;
}

export const Container = styled.div<ContainerProps>`
  display: ${props => props.display || 'block'};  
  align-items: center;
  height: 100%;
  
  padding: 0 0.5rem;
  
  // ${NavbarStyle} & {
  //   color: white;
  // }
    
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 0 2rem;
    width: ${props => props.theme.layout.container.width};
    margin: 0 auto;
  }
`;

export const NavbarOffset = createGlobalStyle`
  body {
    padding-top: ${props => props.theme.layout.navbar.fixed ? props.theme.layout.navbar.height : 0}
  }
`;

export const Burger = styled.span`
  margin-right: 0.5em;
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const NavbarDropdownTitle = styled.span`
  padding: 0 1rem;
  display: flex;
  cursor: default;
  
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 0 0.25em;
    height: 100%;
    align-items: center;
    :hover {
      background: #fff;
      color: #123432;
    }
  }
`;


export const NavbarDropdown = styled.div`
  color: white;
  text-decoration: none;
  display: block;
  margin: 0.25em 0;
  
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 100%;
    padding: 0;
  }
`;

export const NavbarDropdownContent = styled.div`
  border-bottom: 1px solid white;
  padding-bottom: 1rem;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: none;
    position: absolute;
    border: none;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;

    ${NavbarDropdown}:hover & {
      display: block;
      background: #123432;
      padding: 0;
    }
  }
`;

export const NavbarLink = styled.a`
  display: flex;
  
  color: white;
  text-decoration: none;
  margin: 0.25em 0;
  padding: 0 1rem;
  
  :hover {
    background: #fff;
    color: #123432;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 0 0.25em;
    height: 100%;
    align-items: center;
  }
  
  ${NavbarDropdownContent} & {
    display: block;
    font-size: .75em;
    padding: 0.25em 1em;
    margin: 0.25em 0;
  }
`;


