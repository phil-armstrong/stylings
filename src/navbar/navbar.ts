import styled from 'styled-components';
import * as Breakpoint from '../values/breakpoints';

export const Navbar = styled.nav`
    width: 100%;
    height: 50px;
    background: #123432;
    padding: 1rem 2rem;

    @media (min-width: ${Breakpoint.DESKTOP}) {
        
    }
`;

export const Container = styled.div`
    @media (min-width: ${Breakpoint.DESKTOP}) {
        width: 960px;
        margin: 0 auto;
    }
`;