import "@babel/polyfill";
import './index.html';
import './index.scss';
import audi from './img/audi.png';
import { mult, sum } from './modules/calc';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = audi;
img.width = 300;
imgWrap.append(img);

console.log(sum(2, 3));
console.log(mult(3, 5));