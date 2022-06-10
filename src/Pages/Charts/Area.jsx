import React from 'react'
import { ChartComponent, SplineAreaSeries , SeriesCollectionDirective , SeriesDirective ,  DateTime , Legend  , Inject, LineSeries } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries , areaPrimaryXAxis , areaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import { Header } from '../../component'

const Area = () => {
  const {currentMode} = useStateContext()
  return (
    <div className='dark:bg-secondary-dark-bg rounded-3xl m-4 md:m-10 mt-24 p-10 bg-white'>
      <Header title={"인플레이션 percentage"} category={"Chart"}/>
      <div className='w-full'>
          <ChartComponent background={currentMode === "Dark" ? "#33373E" : "#fff"}  chartArea={{border: {width : 0}}} id='line-chart' height='420px' primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis}>
            <Inject services={[SplineAreaSeries , LineSeries , DateTime , Legend ]}/>
            <SeriesCollectionDirective>
              {areaCustomSeries.map((item,index)=>{
                return <SeriesDirective key={index} {...item}/>
              })}
            </SeriesCollectionDirective>
          </ChartComponent>
      </div>
    </div>
    
  )
}

export default Area