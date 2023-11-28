import React from 'react';
import styled from "styled-components";
import {Button} from "../../../component/Button";
import {SectionTitle} from "../../../component/SectionTitle";
import {Container} from "../../../component/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={"name"} />
                    <Field placeholder={"email"}/>
                    <Field as={"textarea"} placeholder={"message"}/>
                    <Button type={"submit"}>Send Message</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 532px;
  width: 100%;
  gap: 16px;
  margin: 0 auto;
  
  ${Button}{
    width: 160px;
  }
  
  textarea {
    resize: none;
    height: 165px;
  }
  
  
  
`
const Field = styled.input`
  width: 100%;
  background-color: transparent;
  border:1px solid ${theme.colors.placeholderColor};
  border-radius: 6px;
  padding:7px 17px;  
  font-family: 'Montserrat',sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  color:${theme.colors.font};
  
  &::placeholder{
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 1px solid ${theme.colors.font};
  }
`
