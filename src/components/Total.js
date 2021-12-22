import React from 'react';


// Styles
import styles from './Total.module.css'



const Total = ({total}) => {
    const {deaths, recovered, total_cases} = total
    return (
        <div className={styles.container}>
            <h1>Covid-19 Info</h1>
            <div className={styles.totalContainer}>
                <div className={styles.totalInfo}>
                    <div>
                        <h3>Deaths</h3>
                        <h2>{deaths.toLocaleString()}</h2>
                    </div>
                    <div>
                        <h3>Recovered</h3>
                        <h2>{recovered.toLocaleString()}</h2>
                    </div>
                    <div>
                        <h3>Total Cases</h3>
                        <h2>{total_cases.toLocaleString()}</h2>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Total;
// 'https://api.quarantine.country/api/v1/summary/latest'