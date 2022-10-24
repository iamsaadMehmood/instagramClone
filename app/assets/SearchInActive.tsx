import React from 'react';
import {SvgXml} from 'react-native-svg';
import {widthToDp} from '../helpers/responsive';

const xml: string = `
<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21C19.3137 21 22 18.3137 22 15C22 11.6863 19.3137 9 16 9C12.6863 9 10 11.6863 10 15C10 18.3137 12.6863 21 16 21Z" stroke="#23004C" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.5 22.4998L20.2375 19.2373" stroke="#23004C" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


`;

export default (props: {width: number; height: number}) => (
  <SvgXml
    xml={xml}
    width={widthToDp(props.width)}
    height={widthToDp(props.height)}
  />
);
