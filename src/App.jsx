import './App.css'
import {Layout} from "./Layout/Layout";
import {useFetchData} from "./fetchData/useFetchData.js";

function App() {


  // API handling layer
  const {fetchData} = useFetchData();
  fetchData();


  // pure presentation layer
  return (
    <Layout/>
  )
}

export default App
