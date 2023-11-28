import React from 'react';
import {FlexWrapper} from "../../../component/FlexWrapper";
import {SectionTitle} from "../../../component/SectionTitle";
import styled, {ThemeContext} from "styled-components";
import {Container} from "../../../component/Container";

export const AboutMe = () => {
    return (
        <StyledIntro>
            <Container>
                <SectionTitle>About Me</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <Text>
                        Hi, I'm Eugene - Front-end developer from Tomsk.
                        I'm studying at courses "Web and mobile development" in IT-Academy.
                        Ready to implement excellent projects with wonderful people.
                    </Text>
                </FlexWrapper>
            </Container>
            
        </StyledIntro>
    );
};

const StyledIntro = styled.section`
  
  
`
const Text = styled.p`
  max-width: 520px;
  padding: 0 0 40px;

`
