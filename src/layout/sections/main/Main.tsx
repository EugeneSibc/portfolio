import React from 'react';
import styled from "styled-components";
import Pic from "../../../assets/images/JaneDoePhoto.png"
import {FlexWrapper} from "../../../component/FlexWrapper";
import {Container} from "../../../component/Container";
import {theme} from "../../../styles/Theme";
import { font } from '../../../styles/Common';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
                    <div >
                        <SmallText>Hi, I am</SmallText>
                        <Name>Eugeny Markin</Name>
                        <MainTitle>A Web developer</MainTitle>
                    </div>
                    <Photo src={Pic} alt=""/>
                </FlexWrapper>
            </Container>
        </StyledMain>

    );
};

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;

`
const SmallText = styled.h2`
  font-size: 18px;
  font-weight: 400;

`
const Name = styled.h2`
  ${font({weight:700, Fmax:50, Fmin:30})};
  margin:0px 0 10px; 
  
  
  background-image: linear-gradient(90deg,#00F5A0 0%,#00D9F5 100%);
  color:transparent;
  -webkit-background-clip: text;

  @media ${theme.media.mobile}{
    margin:5px 0 10px;
  }
  
`
const MainTitle = styled.h1`
  ${font({family:"Tinos, sans-serif", Fmax:18, Fmin:12})};
  text-transform: uppercase;
`
const Photo = styled.img`
  width: 300px;
  height:300px;
`