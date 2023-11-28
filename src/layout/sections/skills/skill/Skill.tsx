import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../component/icon/Icon";
import { FlexWrapper } from '../../../../component/FlexWrapper';
import { font } from '../../../../styles/Common';

type IconSkillPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    title: string
}
export const Skill = (props: IconSkillPropsType) => {
    return (
        <StyledSkill>
          <FlexWrapper direction='column' align='center'>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
          </FlexWrapper>            
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  padding: 20px 20px 40px;
  width:140px;

`

const SkillTitle = styled.h3`
  ${font({weight:300,Fmax:16,Fmin:10})};
  padding:10px;
  text-align: center;
  text-transform: uppercase;  

`


