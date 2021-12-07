// Import stylesheets
import './style.css';

import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'chart1',
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

const chart2 = new Chart({
  container: 'chart2',
  autoFit: true,
  height: 500,
});
const data2 = [{ month: '一月', temperature: [-5, 10] }];
chart2.point().position('month*temperature');
chart2.data(data2);
chart2.render();
