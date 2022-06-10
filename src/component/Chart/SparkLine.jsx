import React from 'react'
import {SparklineComponent , Inject , SparklineTooltip} from "@syncfusion/ej2-react-charts"

const SparkLine = ({currentColor,
  id,
  type,
  height,
  width,
  data,
  color, }) => {
   
  return (
    <SparklineComponent type={type} id={id} valueType={"Numeric"} border={{color : currentColor , width : 2}} height={height} width={width} dataSource={data} 
  // Assign the dataSource values to series of sparkline 'xName and yName'
  xName='x' yName='yval' tooltipSettings={{
    visible : true ,
    format : '${x} : data ${y}',
    trackLineSettings : {
      visible : true ,

    }
  }}>
    <Inject services={[SparklineTooltip]}/>
</SparklineComponent>);
}

export default SparkLine