import React from 'react'
import Heatmap from './Heatmap'
import BarChart from './BarChart'
import LineChart from './LineChart'
import LifeCycleChart from './LifeCycleChart'
import AttritionLineChart from './AttritionLineChart'
import PieChart from './PieChart'

const Graphs = () => {
  return (
    <div >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10'>
            <Heatmap/>
            <PieChart/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10'>
            <BarChart/>
            <LineChart/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10'>
            <LifeCycleChart/>
            <AttritionLineChart/>
        </div>
    </div>
  )
}

export default Graphs


