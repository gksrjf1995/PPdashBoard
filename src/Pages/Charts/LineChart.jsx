import React from 'react'
import {ChartHeader} from "../../component/ChartHeader"
import { Line ,Header } from '../../component'

const LineChart = () => {
  return (
    <div className='dark:bg-secondary-dark-bg rounded-3xl m-4 md:m-10 mt-24 p-10 bg-white'>
      <Header title={"인플레이션 Rate"} category={"Chart"}/>
      <div className='w-full'>
        <Line />
      </div>
    </div>
  )
}

export default LineChart