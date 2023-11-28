import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../component/Link";
import {Button} from "../../../../component/Button";

export const TabMenu = (props:{menuItems:Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item,index)=>{
                    return <ListItem key={index}>
                        <Link as={Button} href="#">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  margin-bottom: 40px;
  
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 356px;
    width:100%;
    margin:0 auto 40px;

  }
`
const ListItem = styled.li`

`


