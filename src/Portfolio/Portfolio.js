import React, { Component } from 'react';
import './Portfolio.css';
import BarChart from './BarChart';

import { Doughnut } from 'react-chartjs-2';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
        backgroundColor: [
            '#CCC',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
});

class Portfolio extends Component {


    getInitialState() {
        return getState();
    }

    componentWillMount() {
        setInterval(() => {
            this.setState(getState());
        }, 5000);
    }

    render() {
        return (
            <>

                <div className="container">
                    <nav className="navbar">
                        <h1>NAV</h1>
                    </nav>

                    <div>
                        <h2>Dynamicly refreshed Doughnut Example</h2>
                        <Doughnut data={ this.state } />
                    </div>

                    <main className="content">
                        <div className="item1">
                            picture
                        </div>
                        <div className="item2">
                            <div className="WA">
                                $10,000
                            </div>
                            <div className="NumCoins">
                                4
                            </div>
                        </div>
                        <div className="item3">
                            Space
                        </div>
                        <div className="item4">
                            <div className="CurrentValue">
                                $12,000
                            </div>
                            <div className="DailyPercent">
                                5.0%
                            </div>
                        </div>
                        <div className="item5">
                            <div className="Profit">$2,000
                            </div>
                            <div className="ProfitPercent">
                                20%
                            </div>
                        </div>
                    </main>
                    <footer className="footer">
                        <h1>FOOTER</h1>
                    </footer>
                </div>
            </>
        );
    }
}

export default Portfolio;