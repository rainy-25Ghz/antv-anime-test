// Import stylesheets
import './style.css';
import { Chart } from '@antv/g2';
import { animate } from 'popmotion/lib/animations';
const colors=
const data = [
  { year: '1951 年', sales: 38 },
  { year: '1952 年', sales: 52 },
  { year: '1956 年', sales: 61 },
  { year: '1957 年', sales: 145 },
  { year: '1958 年', sales: 48 },
  { year: '1959 年', sales: 38 },
  { year: '1960 年', sales: 38 },
  { year: '1962 年', sales: 38 },
];
const chart = new Chart({
  container: 'chart1',
  autoFit: true,
  height: 500,
  width: 500,
});

chart.data(data);

chart.tooltip({
  showMarkers: false,
});
chart.interaction('active-region');

chart.interval().position('year*sales');

chart.render();
