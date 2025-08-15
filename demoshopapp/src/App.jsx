import './App.css'
import Items from './components/Items'
import ItemDate  from './components/ItemDate'

function App() {
 const response = [
  {
    itemsName: "Aryan",
    itemsDate:"20",
    itemsMonth: "June",
    itemsYear: "1998"
  },
  {
    itemsName: "Mahak",
    itemsDate:"21",
    itemsMonth: "July",
    itemsYear: "1999"
  },
  {
    itemsName: "Rohan",
    itemsDate:"23",
    itemsMonth: "Jan",
    itemsYear: "2000"
  }

 ];
  return (
    <>
    <Items name = {response[0].itemsName} ></Items>
    <ItemDate day = {response[0].itemsDate}  month = {response[0].itemsMonth}  year ={response[0].itemsYear} ></ItemDate>

<Items name = {response[1].itemsName} ></Items>
    <ItemDate day = {response[1].itemsDate}  month = {response[1].itemsMonth}  year ={response[1].itemsYear} ></ItemDate>

<Items name = {response[2].itemsName} ></Items>
    <ItemDate day = {response[2].itemsDate}  month = {response[2].itemsMonth}  year ={response[2].itemsYear} ></ItemDate>

    <div className="App"> Hello ji</div>
    </>
  )
}

export default App
