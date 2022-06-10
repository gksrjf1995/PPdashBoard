import React from 'react'
import { ChartComponent , SeriesCollectionDirective , SeriesDirective ,  DateTime , Legend , Tooltip , Inject, LineSeries } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries , LinePrimaryXAxis , LinePrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
const Line = () => {
  const {currentMode} = useStateContext()
  return (
    <ChartComponent background={currentMode === "Dark" ? "#33373E" : "#fff"} tooltip={{enable : true}} chartArea={{border: {width : 0}}} id='line-chart' height='420px' primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis}>
      <Inject services={[LineSeries , DateTime , Legend , Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item,index)=>{
          return <SeriesDirective key={index} {...item}/>
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Line