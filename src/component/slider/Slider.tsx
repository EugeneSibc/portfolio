import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";
import { font } from '../../styles/Common';

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <Text>
                    Quote testimonials demonstrate support for your product or feature
                    from a user who has experience with it. This can be significantly
                    more effective than traditional advertising methods as most
                    consumers will trust.
                </Text>
                <Name>Michal John</Name>
                <JobTitle>CEO of MZP</JobTitle>
            </Slide>
            <Paginator>
                <span> </span>
                <span className="active"> </span>
                <span> </span>
            </Paginator>

        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Text = styled.p`
  
`
const Name = styled.span`
  ${font({weight:500,Fmax:18,Fmin:14})};
  display:inline-block;
  margin:22px 0 0;
`
const JobTitle = styled.span`
  ${font({Fmax:16,Fmin:12})};  
  display: inline-block;
  margin:5px 0 42px;
`
const Paginator = styled.div`
  span{
    display: inline-block;
    width:7px;
    height:7px;
    
    background-color: rgba(255,255,255,0.5);
    border-radius:20px;
    
    & + span{
      margin-left:5px ;
    }
    &.active{
      background-color:${theme.colors.accent};
      width: 20px;
    }
  }
  
`
