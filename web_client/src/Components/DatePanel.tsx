import React, {useEffect, useState} from "react";
import Select from 'react-dropdown-select';
import styles from './dataPanel.module.css'
import {orderBy} from "lodash"
import Constants from "../Constants/Constants";

const moment = require('moment');
moment.locale('en');


enum ChangeType {
    year,
    month,
    day,

}

export interface IFetchDate {
    year: number,
    month: number,
    day: number,
}

const DatePanel = () => {

    const [year, setYear] = useState({year: 2020})
    const [month, setMonth] = useState({name: ''})
    const [day, setDay] = useState({day: 1})
    const [dayOfTheWeek, setDatOfTheWeek] = useState('unknown')
    const [isLoading, setLoading] = useState(false)

    const months = moment.months().map((name: string) => {
        return {name: name}
    });

    const GetYears = () => {
        const arr = [];
        for (let i = 1900; i < 2025; i++) {
            arr.push({year: i})
        }
        return orderBy(arr, ['year'], ['desc']);
        ;
    }

    const years = GetYears()
    const days = Array.from(Array(31), (_, i) => i + 1).map(value => {
        return {day: value}
    });

    const onChange = (values: any, type: ChangeType) => {
        switch (type) {
            case ChangeType.year:
                setYear(values[0])
                break;
            case ChangeType.month:
                setMonth(values[0])
                break;
            case ChangeType.day:
                setDay(values[0])
                break;
        }
    }

    useEffect(() => {
        const selectedData = new Date(year.year, months.findIndex((x: any) => x.name === month.name), day.day);
        setDatOfTheWeek(moment(selectedData).format('dddd'));
    }, [day, month, year])


    const onClick = async () => {
        try {
            setLoading(true)
            const data = await fetch(Constants.fetchUrl);
            if (data.ok) {
                const {day, month, year}: IFetchDate = await data.json();
                setYear({year})
                setDay({day})
                setMonth({name: months[month - 1].name})
            }
        } catch (e) {
            throw e
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Select
                className={styles.select}
                values={[year]}
                options={years}
                onChange={(values) => onChange(values, ChangeType.year)}
                labelField="year"
                valueField="year"
            />
            <Select
                className={styles.select}
                values={[month]}
                options={months}
                onChange={(values) => onChange(values, ChangeType.month)}
                labelField="name"
                valueField="name"
            />

            <Select
                className={styles.select}
                values={[day]}
                options={days}
                onChange={(values) => onChange(values, ChangeType.day)}
                labelField="day"
                valueField="day"
            />

            <h3>{dayOfTheWeek}</h3>

            <button onClick={onClick}>
                {isLoading ? 'loading...' : 'Get date from server'}
            </button>
        </>
    )
}
export default DatePanel