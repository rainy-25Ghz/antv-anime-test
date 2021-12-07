// Import stylesheets
import './style.css';

import { Chart } from '@antv/g2';


const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500,
});
const data = [
  { month: '一月', temperature: [-5, 10] },
  { month: '二月', temperature: [3, 12] },
];
chart.line().position('month*temperature');
chart.data(data);


chart.render();
