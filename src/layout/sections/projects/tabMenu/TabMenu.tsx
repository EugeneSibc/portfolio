import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../component/Link";
import {Button} from "../../../../component/Button";
import { S } from '../Project_Styles';

export type TabsStatusType = "all" | "landing" | "react" | "spa"
type TabMenuPropsType = {
    tabItems:Array<{status:TabsStatusType , title:string}>
    changeFilterStatus:(value:TabsStatusType)=>void
    currentFilterStatus:string
}

export const TabMenu = (props:TabMenuPropsType)=>
{
    return (
        <S.TabMenu>
            <ul>
                {props.tabItems.map((item,index)=>{
                    return <S.ListItem key={index}>
                    <Link active={props.currentFilterStatus === item.status} as={Button} onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</Link>
                    </S.ListItem>
                })}
            </ul>
        </S.TabMenu>
    );
};




