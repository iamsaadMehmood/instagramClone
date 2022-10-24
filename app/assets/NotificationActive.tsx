import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../helpers/responsive';

const xml: string = `
<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.17157 2.1765C0.609476 3.74516 0.609476 6.28846 2.17157 7.85712L9.00005 14.7143L15.8284 7.85712C17.3905 6.28846 17.3905 3.74516 15.8284 2.1765C14.2663 0.607835 11.7337 0.607835 10.1716 2.1765L9.00005 3.35304L7.82843 2.1765C6.26633 0.607835 3.73367 0.607835 2.17157 2.1765Z" stroke="#23004C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);
