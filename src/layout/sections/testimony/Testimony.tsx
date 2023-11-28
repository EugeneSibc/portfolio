import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../component/SectionTitle";
import {FlexWrapper} from "../../../component/FlexWrapper";
import {Slider} from "../../../component/slider/Slider";
import {Icon} from "../../../component/icon/Icon";
import {Container} from "../../../component/Container";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"}  align={"center"}>
                    <Icon iconId={"quote"} width={"50"} height={"50"} viewBox={"0 0 50px 50px"}/>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  
  ${SectionTitle}{
    color: snow;
  }
`
