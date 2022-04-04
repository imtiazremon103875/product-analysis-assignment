import React from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='dashboard-container'>
            <div>
                <h2>Investment and Revenue chart </h2>
                <LineChart width={500} height={500} data={data}>
                    <Line dataKey="investment" />
                    <Line dataKey="revenue" />
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>

                </LineChart></div>

            <div>
                <h2>Monthly sell chart </h2>
                <BarChart width={500} height={500} data={data}>
                    <Bar dataKey="sell" fill='#8884D8' />
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>

                </BarChart></div>
        </div>
    );
};

export default Dashboard;