import React, {useState, useEffect} from 'react';

// Styles
import styles from './Countries.module.css'

const Countries = ({data}) => {

    const [value, setValue] = useState("")
    const [searched, setSearched] = useState([])

    const countries = Object.values(data)

    useEffect(() =>{
        setSearched(countries.filter(country => country.name.toLowerCase().includes(value.toLowerCase())))
    }, [value])

    const changeHandler = event => {
        setValue(event.target.value) 
    }
    return (
        <div className={styles.container}>
            <div>
                <input type="text" placeholder="Search countries for data" value={value} onChange={changeHandler}/>
            </div>
            <div className={styles.keys}>
                <p>Name</p>
                <p>Total case</p>
                <p>Deaths</p>
                <p>Recovered</p>
            </div>
            {searched.map(country => <div className={styles.countryInfo}>
                <p className={styles.name}>{country.name.toLocaleString()}</p>
                <p className={styles.name}>{country.total_cases.toLocaleString()}</p>
                <p className={styles.deaths}>{country.deaths.toLocaleString()}</p>
                <p className={styles.recovered}>{country.recovered.toLocaleString()}</p>
                </div>)}
        </div>
    );
};

export default Countries;