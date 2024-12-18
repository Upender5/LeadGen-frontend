import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

function Charts({ analyticsData }) {
  const pageViewsData = {
    labels: analyticsData.pages.map((page) => page.path),
    datasets: [
      {
        label: 'Page Views',
        data: analyticsData.pages.map((page) => page.pageviews),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const trafficSourceData = {
    labels: analyticsData.trafficSources.map((source) => source.medium),
    datasets: [
      {
        label: 'Traffic Sources',
        data: analyticsData.trafficSources.map((source) => source.sessions),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>Analytics Charts</h2>
      <div>
        <h3>Page Views</h3>
        <Bar data={pageViewsData} />
      </div>
      <div>
        <h3>Traffic Sources</h3>
        <Pie data={trafficSourceData} />
      </div>
    </div>
  );
}

export default Charts;
