import React from 'react'
import {PdfExport , Resize , ColumnDirective,  Search ,ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort , Toolbar  } from "@syncfusion/ej2-react-grids"
import {employeesData , contextMenuItems , employeesGrid} from "../data/dummy"
import { Header } from '../component'
import { ContextMenu } from '@syncfusion/ej2/navigations'
const Employee = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="employees"/>
      <GridComponent id='gridcomp' allowSorting={true} sortSettings={{columns : [
        {field : "OrderID" , direction : "Ascending"}
      ]}} dataSource={employeesData} pageSettings={{pageSize: 6}} allowPaging width={"auto"} toolbar={["Search"]}>
        <ColumnsDirective>
          {employeesGrid.map((item,index)=>{
            return <ColumnDirective  key={index} {...item}/>
          })}
        </ColumnsDirective>
        <Inject services={[Toolbar,Resize ,Page, Sort, Filter, ContextMenu  , PdfExport]}/>
      </GridComponent>
    </div>
  )
}

export default Employee