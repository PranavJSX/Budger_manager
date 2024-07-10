
import React from "react";
import { Chart } from "react-google-charts";


export const Piechart=()=>{
    const data=[
        ["Investment type" , "Percentage from total"],
        ["Stocks",40],
        ["MF-Equity",20],
        ["MF-Debt",15],
        ["FD",25],
    ]

    const options={
        title:"Investment distribution"
    }
    return(
        <>
        <br/>
        <Chart chartType="PieChart" data={data} options={options} width={"400px"} height={"400px"}></Chart>
        </>
    )
}