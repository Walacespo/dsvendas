import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type CharData = {
    labels: string[];
    series: number[];
}

function DonutChart() {

    const [charData, setCharData] = useState<CharData>({ labels: [], series: [] });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(response => {
                const data = response.data as SaleSum[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => x.sum);

                setCharData({ labels: myLabels, series: mySeries });
            });
    }, [])

    const options = {
        legend: {
            show: true
        }

    };

    return (
        <Chart
            options={{ ...options, labels: charData.labels }}
            series={charData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;