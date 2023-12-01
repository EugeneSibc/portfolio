import styled from "styled-components"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"



const Slider = styled.div`
  max-width: 500px;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
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
export const S = {
    Slider,
    Slide,
    Text,
    Name,
    JobTitle,
    Paginator,
}