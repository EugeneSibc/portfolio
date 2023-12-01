import React from 'react';
import { S } from './Slyder_Styles';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../styles/slyde.css';

type SlidePropsType = {
  text: string
  userName: string
  jobTitle: string
}

export const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <S.Text>
        {props.text}
      </S.Text>
      <S.Name>{props.userName}</S.Name>
      <S.JobTitle>{props.jobTitle}</S.JobTitle>
    </S.Slide>
  )
}

const items = [
  <Slide userName={"Michal John"}
    jobTitle={"CEO of MZP"}
    text={"Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust."} />,
  <Slide userName={"Igor Vladimirov"}
    jobTitle={"CEO of SoftDev"}
    text={"Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust."} />,
  <Slide userName={"Ivan Pyetrovich"}
    jobTitle={"CEO of YaGuru"}
    text={"Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust."} />
];


export const Slider = () => (
  <S.Slider>
    <AliceCarousel
      mouseTracking
      items={items}
    />
  </S.Slider>
);



{/* export const Slider = () => {
    return (
        <S.Slider>
            <S.Slide>
                <S.Text>
                    Quote testimonials demonstrate support for your product or feature
                    from a user who has experience with it. This can be significantly
                    more effective than traditional advertising methods as most
                    consumers will trust.
                </S.Text>
                <S.Name>Michal John</S.Name>
                <S.JobTitle>CEO of MZP</S.JobTitle>
            </S.Slide>
             <S.Paginator>
                 <span> </span>
                 <span className="active"> </span>
                 <span> </span>
             </S.Paginator>
         </S.Slider>
     );
 }; */}


