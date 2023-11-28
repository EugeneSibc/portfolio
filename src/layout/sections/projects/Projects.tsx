import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../component/SectionTitle";
import {FlexWrapper} from "../../../component/FlexWrapper";
import {Project} from "./Project/Project";
import {Container} from "../../../component/Container";
import {TabMenu} from "./tabMenu/TabMenu";

const projectItems = ["ALL", "Landing Page", "React", "SPA"]

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>My Projects</SectionTitle>
                <TabMenu menuItems={projectItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <Project
                        src={require('../../../assets/images/Progect-1.webp')}
                        title={"Social Network"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                    />
                    <Project
                        src={require('../../../assets/images/Progect-2.webp')}
                        title={"Timer"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                    />

                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  ${FlexWrapper}{
    gap: 30px
  }   
  
`
