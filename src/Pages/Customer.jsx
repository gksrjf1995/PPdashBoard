import React from 'react'
import { Edit ,PdfExport , Resize , ColumnDirective,  Search ,ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort , Toolbar  } from "@syncfusion/ej2-react-grids"
import {customersData , contextMenuItems , customersGrid} from "../data/dummy"
import { Header } from '../component'
import { ContextMenu } from '@syncfusion/ej2/navigations'
const Customer = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customer"/>
      <GridComponent  editSettings={{allowAdding: true , allowDeleting : true , allowEditing : true}} id='gridcomp' allowSorting={true} sortSettings={{columns : [
        {field : "OrderID" , direction : "Ascending"}
      ]}} dataSource={customersData} pageSettings={{pageSize: 12}} allowPaging width={"auto"} toolbar={ ['Add', 'Edit', 'Delete', 'Update', 'Cancel',"Search"]}>
        <ColumnsDirective>
          {customersGrid.map((item,index)=>{
            return <ColumnDirective  key={index} {...item}/>
          })}
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar,Resize ,Page, Sort, Filter, ContextMenu  , PdfExport]}/>
      </GridComponent>
    </div>
  )
}

export default Customer