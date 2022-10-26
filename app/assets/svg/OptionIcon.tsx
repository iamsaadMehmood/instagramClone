import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../../helpers/responsive';

const xml: string = `
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9238 12C11.9238 11.4477 12.3715 11 12.9238 11C13.4761 11 13.9238 11.4477 13.9238 12C13.9238 12.5523 13.4761 13 12.9238 13C12.3715 13 11.9238 12.5523 11.9238 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9238 19C11.9238 18.4477 12.3715 18 12.9238 18C13.4761 18 13.9238 18.4477 13.9238 19C13.9238 19.5523 13.4761 20 12.9238 20C12.3715 20 11.9238 19.5523 11.9238 19Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9238 5C11.9238 4.44772 12.3715 4 12.9238 4C13.4761 4 13.9238 4.44772 13.9238 5C13.9238 5.55228 13.4761 6 12.9238 6C12.3715 6 11.9238 5.55228 11.9238 5Z" stroke="#000022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);
