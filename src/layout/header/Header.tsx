import React from 'react';
import styled from "styled-components";
import { Logo } from "../../component/logo/Logo";
import { theme } from "../../styles/Theme";
import { Container } from "../../component/Container";
import { FlexWrapper } from "../../component/FlexWrapper";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";

const items = ["About", "Skills", "Projects", "Contact"]

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo />
                    {width < breakpoint ? <MobileMenu menuItems={items} />
                                        : <DesktopMenu menuItems={items} />}
                </FlexWrapper>
            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  padding: 20px 0;       
`