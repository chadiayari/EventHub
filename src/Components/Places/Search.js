import React, {useState} from 'react';
import './Search.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";

function Search(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    } 

    const setDate = ( ) => {
        props.setShowSearch(false)
        const formattedStartDate = formatDate(startDate)
        const formattedEndDate = formatDate(endDate)
        props.setStartDate(formattedStartDate)
        props.setEndDate(formattedEndDate)
        

    }

    const formatDate = ( date ) =>{
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const month = monthNames[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const output = month  + '\n'+ day  + ',' + year;

    return output
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <Button onClick={setDate}>Validate</Button>
        </div>
    )
}

export default Search
