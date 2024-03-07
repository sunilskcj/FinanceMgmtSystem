import { Chart } from "chart.js/auto";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
export default function PieChart({data}){
   
    const chartRef =useRef(null)
    const chartInstance = useRef(null)
useEffect(()=>{

   
    if(chartInstance.current){
        chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext('2d')
    chartInstance.current = new Chart(myChartRef, {
        type: "pie",
        data:{
            labels:data['lable'],
            datasets: [{
                label: 'My First Dataset',
                data: data['data'],
                backgroundColor: [
                  'rgb(255, 0, 0)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)',
                  'rgb(255, 99, 71)',
                  'rgb(255, 131, 147)',
                  'rgb(60, 179, 113)',
                  'rgb(255, 205, 86)',
                  'rgb(255, 205, 86)',
                  'rgb(255, 205, 86)',
                  'rgb(255, 205, 86)',
                  'rgb(255, 205, 86)',
                  'rgb(255, 205, 86)',
                  'rgb(255, 205, 86)',
                  'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
              }]
        }
    })
    return ()=>{
        if(chartInstance.current){
            chartInstance.current.destroy()
        }
    }
},[])
    return(
        <div>
        <canvas ref={chartRef}  />
        </div>
    )
}