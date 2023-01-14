import './App.css';
import ListTask from './Components/ListTask/ListTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './Components/AddTask/AddTask';

function App({createStore}) {
  return (
    <div className="App" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", borderRadius:"20px", width:"700px", height:"auto", marginTop:"10px", margin:"auto"}}>
      <h2 className="title" style={{color:"#ce20e0", fontSize:"40px"}} >To_Do_List 📝</h2>
      
      <AddTask/>
      <ListTask/>
    </div>
  );
}

export default App;
