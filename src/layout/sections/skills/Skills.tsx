import React from 'react';
import {FlexWrapper} from "../../../component/FlexWrapper";
import {SectionTitle} from "../../../component/SectionTitle";
import styled from "styled-components";
import {Skill} from "./skill/Skill";
import {Container} from "../../../component/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper justify={"space-around"} wrap={"wrap"} >
                    <Skill iconId={"html"} title={"HTML5"}/>
                    <Skill iconId={"css"} title={"CSS3"}/>
                    <Skill iconId={"js"} title={"JS"}/>
                    <Skill iconId={"ts"} title={"TS"}/>
                    <Skill iconId={"react"} title={"React JS"}/>
                    <Skill iconId={"redux"} title={"Redux"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  
`