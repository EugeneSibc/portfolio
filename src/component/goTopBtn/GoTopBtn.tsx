import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { theme } from '../../styles/Theme';
import { animateScroll as scroll } from 'react-scroll';

export const GoTopBtn = () => {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })
    })

    return (
        <>
            {showButton && (
                <StyledGoTopBtn onClick={() => { scroll.scrollToTop() }}>
                    <Icon iconId={"goTop"} width={"30"} height={"30"} viewBox={"0 0 30 30"} />
                </StyledGoTopBtn>
            )}
        </>

    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(0,0,0,0);
    color:${theme.colors.font};
    /* padding: 8px; */
    position: fixed;
    right:30px;
    bottom:30px;

    &:hover{
        color:${theme.colors.accent};
    }    
`