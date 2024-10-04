import React from 'react'
import{motion} from 'framer-motion';
import Chart from "react-apexcharts";

const SalesChart = () => {
    const data={
        Expenses:125000,
        Sales:25000,

    };
    const options={
        labels : Object.keys(data),
        colors :["#FF4560","#008FFB"],
        legend:{
               position:"bottom",

        },
    };

    const series = Object.values(data);
  return (
    <motion.div className='chart sales-chart'
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{duration:2}}
    
    >
       <h3 className="chart-title">Expenses & Sales</h3>
       <Chart 
       options={options} 
       series={series} 
       type="pie" 
       width={380}/>
        </motion.div>
  )
}

export default SalesChart