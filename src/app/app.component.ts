import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Uttam';
  inputValue=''
  editValue=''
  editIndex= null
  tableData= [
    {index : 1, name: "Uttam"},
    {index : 2, name: "Shardul"},
    {index : 3, name: "Himanshu"},
    {index : 4, name: "Arham"},
  ]
  addPerson= ()=>{
    this.tableData.push({index: this.tableData.length +1 ,name: this.inputValue})
    this.inputValue = ''
  }
  removePerson= (event: any) => {
    console.log(this.tableData)
    const updatedTableData = this.tableData.filter((item)=> (
      item.index!==event
    ))
    console.log(updatedTableData)
    this.tableData = updatedTableData
  }
  editPerson=(event :any )=>{
    console.log(event)
    this.editIndex=event
    this.editValue=this.tableData[event-1].name
  }
  savePerson = (event : any) => {
    this.tableData[event-1].name = this.editValue
    this.editIndex=null
  }
}
