import React from 'react'
import {Tooltip , ChartComponent , SeriesCollectionDirective  , SeriesDirective , Inject , Legend , Category , StackingColumnSeries} from '@syncfusion/ej2-react-charts'
import { stackedChartData,
  stackedCustomSeries,
  stackedPrimaryXAxis, 
  stackedPrimaryYAxis} from "../../data/dummy"

const Stack = ({width , height}) => {
  return (
    <ChartComponent id="charts" 
    primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} 
    chartArea={{border : {width:0}}}
    tooltip={{enable : true}} 
    legendSettings={{background : "white"}}
    width={width} height={height}>
      <Inject services={[Tooltip , Legend, Category , StackingColumnSeries ]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index)=>{
          return <SeriesDirective key={index} {...item} />
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stack