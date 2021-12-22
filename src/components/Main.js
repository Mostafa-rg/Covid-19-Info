import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


// Components
import Total from './Total';
import Countries from './Countries';
import Loader from './Loader';

// Styles
import styles from './Main.module.css'

const Main = () => {

    const [total, setTotal] = useState({})
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect( () => {

        const api = () => {
            axios.get('https://api.quarantine.country/api/v1/summary/latest')
            .then(response => {
                setTotal(response.data.data.summary)
                setData(response.data.data.regions)
                setLoading(false)
            })
        }
        api()
        
    }, [])

    return (
        <div>
            {
                !loading ?
                <div className={styles.mainContainer}>
                        <Total 
                            total={total}/>
                        <Countries data={data}/>
                </div>:
                <Loader/>
            }
            
            
        </div>
    );
};

export default Main;