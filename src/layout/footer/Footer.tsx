import React from 'react';
import { Icon } from "../../component/icon/Icon";
import { FlexWrapper } from "../../component/FlexWrapper";
import { Container } from "../../component/Container";
import { S } from './Footer_Styles';
import { GoTopBtn } from '../../component/goTopBtn/GoTopBtn';

const socialItemsData = [
  {
    iconId: "telegrm"
  },
  {
    iconId: "vk"
  },
  {
    iconId: "insta"
  },
  {
    iconId: "linkedin"
  }
]

export const Footer = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <S.Invite>Connect with me</S.Invite>
          <S.SocialList>

            {socialItemsData.map((item, index) => {
            return (
              <S.SocialItem>
                <S.SocialLink key={index}>
                  <Icon iconId={item.iconId} width={"21px"} height={"21px"} viewBox={"0 0 21 21"} />
                </S.SocialLink>
              </S.SocialItem>
            )})}

          </S.SocialList>
          <GoTopBtn/>
          <S.Copyright>© 2023 Designed by Evgeny Markin, All Rights Reserved.</S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer >
  );
};


