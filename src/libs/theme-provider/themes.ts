import { Themes } from './types';

// eslint-disable-next-line import/prefer-default-export
export const themes: Themes = {
  default: {
    headerBg: { hex: '#4D4AEC', rgb: [32, 32, 46] },
    headerDarkBg: { hex: '#4845D7', rgb: [72, 69, 215] },
    mainBg: { hex: '#1C1C1C', rgb: [43, 45, 60] }, // main background
    primary: { hex: '#b6509e', rgb: [182, 80, 158] },
    secondary: { hex: '#2ebac6', rgb: [46, 186, 198] },
    darkBlue: { hex: '#383d51', rgb: [56, 61, 81] },
    textDarkBlue: { hex: '#f1f1f3', rgb: [241, 241, 243] },
    lightBlue: { hex: '#8d8f99', rgb: [141, 143, 153] },
    red: { hex: '#de5959', rgb: [222, 89, 89] },
    statusError: { hex: '#FE3366', rgb: [222, 89, 89] },
    orange: { hex: '#ffac4d', rgb: [255, 172, 77] },
    nereusYellow: { hex: '#E7FC6E', rgb: [231, 252, 110] },
    green: { hex: '#05D864', rgb: [121, 201, 130] },
    statusDarkGreen: { hex: '#349660', rgb: [121, 201, 130] },
    white: { hex: '#f1f1f3', rgb: [241, 241, 243] },
    whiteElement: { hex: '#262626', rgb: [56, 61, 81] }, // market buttons
    whiteItem: { hex: '#2b2d3c', rgb: [43, 45, 60] },
    darkOrange: { hex: '#f0650a', rgb: [94, 40, 4] }, // for deposit APY
    gray: { hex: '#606060', rgb: [38, 38, 38] },
    lightGray: { hex: '#8A8A8A', rgb: [162, 162, 162] },
    disabledGray: { hex: '#20202e', rgb: [32, 32, 46] },
    maxWhite: { hex: '#ffffff', rgb: [255, 255, 255] },
    maxBlack: { hex: '#000000', rgb: [0, 0, 0] },
    backgroundBackBtn: { hex: '#3b3b3b', rgb: [59, 59, 59] },
    textDescr: { hex: '#8a8a8a', rgb: [138, 138, 138] },
  },
  light: {
    headerBg: { hex: '#2b2d3c', rgb: [43, 45, 60] },
    headerDarkBg: { hex: '#4845D7', rgb: [72, 69, 215] },
    mainBg: { hex: '#f1f1f3', rgb: [241, 241, 243] },
    primary: { hex: '#b6509e', rgb: [182, 80, 158] },
    secondary: { hex: '#2ebac6', rgb: [46, 186, 198] },
    darkBlue: { hex: '#383d51', rgb: [56, 61, 81] },
    textDarkBlue: { hex: '#383d51', rgb: [56, 61, 81] },
    lightBlue: { hex: '#8d8f99', rgb: [141, 143, 153] },
    red: { hex: '#de5959', rgb: [222, 89, 89] },
    statusError: { hex: '#FE3366', rgb: [222, 89, 89] },
    orange: { hex: '#ffac4d', rgb: [255, 172, 77] },
    green: { hex: '#05D864', rgb: [121, 201, 130] },
    statusDarkGreen: { hex: '#349660', rgb: [121, 201, 130] },
    nereusYellow: { hex: '#E7FC6E', rgb: [231, 252, 110] },
    white: { hex: '#ffffff', rgb: [255, 255, 255] },
    whiteElement: { hex: '#ffffff', rgb: [255, 255, 255] },
    whiteItem: { hex: '#ffffff', rgb: [255, 255, 255] },
    darkOrange: { hex: '#f0650a', rgb: [240, 101, 10] }, // for deposit APY
    gray: { hex: '#707070', rgb: [112, 112, 112] },
    lightGray: { hex: '#a2a2a2', rgb: [162, 162, 162] },
    disabledGray: { hex: '#e0e0e2', rgb: [224, 224, 226] },
    maxWhite: { hex: '#ffffff', rgb: [255, 255, 255] },
    maxBlack: { hex: '#000000', rgb: [0, 0, 0] },
    backgroundBackBtn: { hex: '#3b3b3b', rgb: [59, 59, 59] },
    textDescr: { hex: '#8a8a8a', rgb: [138, 138, 138] },
  },
};
