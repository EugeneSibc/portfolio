import React from 'react';
import {Link} from "../../../../component/Link";
import {Button} from "../../../../component/Button";
import { S } from '../Project_Styles';
import { TabsStatusType } from '../tabMenu/TabMenu';

type ProjectPropsType = {
    src: string
    title: string
    description: string
    
}

export const Project:React.FC<ProjectPropsType> = (props:ProjectPropsType) => {
    return (
        <S.Project>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title >{props.title}</S.Title>
                <S.Text>{props.description}</S.Text>
                
                <Link active as={Button}>Demo</Link>
                <Link active as={Button}>Code</Link>
            </S.Description>
        </S.Project>
    );
};

