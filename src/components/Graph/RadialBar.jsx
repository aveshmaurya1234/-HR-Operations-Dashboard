import React from 'react'
import Chart from 'react-apexcharts'

const RadialBar = () => {
    const options = {
    chart : {
        toolbar : {
            show : false
        },
        animations : {
            enabled : true,
            easing : 'easeinout',
            speed : 800,
            animateGradually : {
                enabled : true,
                delay : 150
            },
            dynamicAnimation : {
                enabled : true,
                speed : 350
            }
        }
    },
    plotOptions : {
      radialBar : {
        hollow : {
          size : '70%'
        },
        dataLabels : {
          name : {
            show : false
          },
          value : {
            fontSize : '22px',
            fontWeight : 'bold',
            color : '#111827',
            offsetY : 6,
            formatter : function (val) {
              return val + '%'
            }
          }
        }
      }
    }
  }
  return (
    <div className='bg-white rounded-md'>
        <h1 className='mx-5 mt-2 text-xl font-semibold'>Attrition Trend</h1>
        <Chart options={options} series={[70]} type="radialBar" />
    </div>
  )
}

export default RadialBar
