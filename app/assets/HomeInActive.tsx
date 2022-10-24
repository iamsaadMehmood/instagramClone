import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../helpers/responsive';

const xml: string = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#573695" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 22V12H15V22" stroke="#23004C" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);