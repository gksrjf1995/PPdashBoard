import React from 'react'
import {PdfExport , Resize , ColumnDirective,  ExcelExport ,ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort  } from "@syncfusion/ej2-react-grids"
import {ordersData , contextMenuItems , ordersGrid} from "../data/dummy"
import { Header } from '../component'
import { ContextMenu } from '@syncfusion/ej2/navigations'
const Order = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders"/>
      <GridComponent id='gridcomp' allowSorting={true} sortSettings={{columns : [
        {field : "OrderID" , direction : "Ascending"}
      ]}} dataSource={ordersData} pageSettings={{pageSize: 6}} allowPaging>
        <ColumnsDirective>
          {ordersGrid.map((item,index)=>{
            return <ColumnDirective  key={index} {...item}/>
          })}
        </ColumnsDirective>
        <Inject services={[Resize ,Page, Sort, Filter, ContextMenu , ExcelExport , PdfExport]}/>
      </GridComponent>
    </div>
  )
}

export default Order