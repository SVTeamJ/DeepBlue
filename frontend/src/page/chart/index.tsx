import React, { useState, useEffect } from 'react';
import './index.scss';
import ApexChart from 'react-apexcharts';
import Nav from '@/components/nav';
import line from '@/assets/line.png';
import circle from '@/assets/circle.png';
import inline from '@/assets/inline.png';
import bar from '@/assets/var.png';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';
type chartType = 'line' | 'area' | 'bar' | 'radar' | undefined;

const ChartPage = () => {
  const [chartType, setChartType] = useState<chartType>('line');
  const [statistics, setStatistics] = useState<number[]>([]);
  const [windowSize, setWindow] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const { data } = useQuery<any>(['CHAT'], async () => {
    return restFetcher({
      method: 'GET',
      path: 'http://www.deepblue3.shop:8000/api/charts/',
    });
  });

  const changeButton = (e: any) => {
    setChartType(() => e.target.className);
  };

  useEffect(() => {
    const summing: number[] = [];
    if (data) {
      summing[0] = data['넙치'] ?? 0;
      summing[1] = data['고등어'] ?? 0;
      summing[2] = data['노랑 가오리'] ?? 0;
      summing[3] = data['적색퉁돔'] ?? 0;
      summing[4] = data['갈치'] ?? 0;
    } else {
      summing[0] = 0;
      summing[1] = 0;
      summing[2] = 0;
      summing[3] = 0;
      summing[4] = 0;
    }
    setStatistics(summing);
  }, [data]);

  const handleResize = () => {
    setWindow({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  return (
    <div className="chart_background">
      <Nav />
      <div className="chart_main">
        <div className="chart_text">
          <h1>This is the fish statistics page</h1>
          <div>
            <div>
              <div>You can visually see the fish</div>
              <div>that many users have been curious about!</div>
            </div>
          </div>
        </div>
        <div>
          <div className="buttons" onClick={changeButton}>
            <img src={line} className="line"></img>
            <img src={inline} className="area"></img>
            <img src={circle} className="radar"></img>
            <img src={bar} className="bar"></img>
          </div>
          <div className="chart">
            <ApexChart
              type={chartType}
              width={
                windowSize.width < 500
                  ? windowSize.width - 45
                  : windowSize.width / 2.5
              }
              height={windowSize.height / 3}
              series={[
                {
                  name: '어류들',

                  data: [
                    statistics[0] ? statistics[0] : 0,
                    statistics[1] ? statistics[1] : 0,
                    statistics[2] ? statistics[2] : 0,
                    statistics[3] ? statistics[3] : 0,
                    statistics[4] ? statistics[4] : 0,
                  ],
                },
              ]}
              options={{
                theme: {
                  mode: 'dark',
                },
                chart: {
                  toolbar: {
                    show: false,
                  },
                  zoom: {
                    enabled: false,
                  },
                  background: 'transparent',
                },
                colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
                grid: { show: false },
                stroke: {
                  curve: 'smooth',
                  width: 1,
                },
                yaxis: {},
                xaxis: {
                  axisBorder: { show: false },
                  axisTicks: { show: false },
                  labels: {},
                  categories: [
                    '넙치',
                    '고등어',
                    '노랑가오리',
                    '적색퉁돔',
                    '갈치',
                  ],
                },

                fill: {
                  type: 'gradient',
                  gradient: { gradientToColors: ['#0be881'], stops: [0, 100] },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
