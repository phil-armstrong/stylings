import React from 'react';
import { Angry as FaAngry } from "styled-icons/fa-regular";
import styled from "styled-components";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export const MyAngry = styled(FaAngry)`
    width: 1em;
    height: 1em;
`;

interface IconProps {
    
}

export const Icon = styled(FontAwesomeIcon)<IconProps & FontAwesomeIconProps>`

`;