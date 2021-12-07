// Import stylesheets
import './style.css';
import { Chart } from '@antv/g2';
import { animate } from 'popmotion/lib/animations';
const colors = ['#F8B195', '#F67280', '#C06C84', '#6C5B7B', '#355C7D'];
const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
let data = [
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

chart.interval().position('year*sales').color('year');

for (let i = 0; i < data.length; i++)
  animate({
    from: Math.ceil(Math.random() * 100) + 10,
    to: -Math.ceil(Math.random() * 100) + 110,
    onUpdate: (latest) => {
      data[i] = { year: data[i].year, sales: latest };
      chart.data(data);
      chart.tooltip({
        showMarkers: false,
      });
      chart.interaction('active-region');
      chart.interval().position('year*sales').color('year');
      chart.render();
    },
  });
