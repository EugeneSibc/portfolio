import React, { useState } from 'react';
import styled from "styled-components";
import { SectionTitle } from "../../../component/SectionTitle";
import { FlexWrapper } from "../../../component/FlexWrapper";
import { Project } from "./Project/Project";
import { Container } from "../../../component/Container";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import socialImg from '../../../assets/images/Progect-1.webp';
import { S } from './Project_Styles';

// const tabItems = ["ALL", "Landing Page", "React", "SPA"]
const tabItems:Array<{status: TabsStatusType, title:string}> = [
    {
        title: "ALL",
        status: "all"
    },
    {
        title: "Landing Page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "SPA",
        status: "spa"
    },
]

const worksData=[
    {
        title:"Social Network",
        src:socialImg,
        discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type:"spa"
    },
    {
        title:"Timer",
        src:require('../../../assets/images/Progect-2.webp'),
        discription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type:"react" 
    },
]

export const Projects:React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredProject = worksData

    if(currentFilterStatus === "landing") {
        filteredProject = worksData.filter(work=>work.type === "landing")
    }
    if(currentFilterStatus === "react") {
        filteredProject = worksData.filter(work=>work.type === "react")
    }
    if(currentFilterStatus === "spa") {
        filteredProject = worksData.filter(work=>work.type === "spa")
    }

    function changeFilterStatus(value:TabsStatusType){
        setCurrentFilterStatus(value)
    }

    return (
        <S.Projects>
            <Container>
                <SectionTitle>My Projects</SectionTitle>
                <TabMenu tabItems={tabItems} 
                        changeFilterStatus={changeFilterStatus}
                        currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {filteredProject.map((item,index)=>{
                        return <Project key={index}
                        title={item.title}
                        src={item.src}
                        description={item.discription}
                                         
                        />
                    })}                    
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};


