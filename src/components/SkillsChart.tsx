
import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';

interface SkillsChartProps {
  data: {
    skill: string;
    value: number;
    color: string;
  }[];
}

const SkillsChart = ({ data }: SkillsChartProps) => {
  const chartData = [
    {
      ...data.reduce((acc, { skill, value }) => {
        acc[skill] = value;
        return acc;
      }, {} as Record<string, number>),
    },
  ];

  const keys = data.map(d => d.skill);

  return (
    <div className="h-80 w-full">
      <ResponsiveRadar
        data={chartData}
        keys={keys}
        indexBy={() => ''}
        maxValue={100}
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderWidth={2}
        borderColor={{ theme: 'background' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'category10' }}
        blendMode="multiply"
        motionConfig="gentle"
        gridShape="linear"
        gridLevels={5}
        theme={{
          text: {
            fill: '#e2e8f0',
          },
          tooltip: {
            container: {
              background: '#1e293b',
              color: '#e2e8f0',
              fontSize: '12px',
              borderRadius: '4px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              padding: '8px 12px',
            },
          },
          grid: {
            line: {
              stroke: '#2d3748',
            },
          },
        }}
      />
    </div>
  );
};

export default SkillsChart;
