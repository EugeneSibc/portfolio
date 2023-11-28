import React from 'react';
import {Icon} from "../../component/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../component/FlexWrapper";
import {Button} from "../../component/Button";
import {theme} from "../../styles/Theme";
import {Container} from "../../component/Container";
import {Link} from "../../component/Link";
import {Main} from "../sections/main/Main";
import { font } from '../../styles/Common';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <Invite>Connect with me</Invite>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"telegrm"} width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"vk"} width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"insta"} width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"linkedin"} width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                    <GoTopLink>
                      <Icon iconId={"goTop"} width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"}/>
                    </GoTopLink>
                    <Copyright>© 2023 Designed by Evgeny Markin, All Rights Reserved.</Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  padding:40px 0;
  position:relative;
  
  
  ${Button}{
    align-self: flex-start;
    position:absolute;
    top: 20px;
    left: 20px;
    
    @media ${theme.media.mobile}{
      padding:6px 8px;
    }
  }
  
`
const Invite = styled.span`
  ${font({weight:500, Fmax:16, Fmin:12})};  
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin:20px 0;    
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
  background-color:${theme.colors.miniBlock};
  color:${theme.colors.font};
  border-radius: 50%;
  width: 35px;
  height: 35px;
  
  display:flex;
  justify-content: center;
  align-items: center;  
  
  &:hover{
    background:linear-gradient(90deg,#00F5A0 0%,#00D9F5 100%);
    color:${theme.colors.button};
    transform: translateY(-4px);
  }
`
const GoTopLink = styled.a`
  position: absolute;
  right:15px;
  bottom:10px;

  &:hover{
    color:${theme.colors.accent};
  }  
`
const Copyright = styled.small`
  ${font({lineHeight:1.5, Fmax:12, Fmin:6})};
  /* font-weight: 400;
  font-size:12px;
  line-height: 1.5; */
  text-align: center;
  opacity: 0.5;
  
`
