import logo from './logo.svg';
import './App.css';
import FormTab from './tabFormComponent/FormTab';
import Posts from './GraphQL/Posts';
import TabsForms from './3Forms/TabsForms';


function App() {
  return (
    <div className="App">
     <h1>Tab Form</h1>
     
     {/* <FormTab /> */}


     {/* <h1>GraphQL Integration</h1>
     <Posts /> */}
     <TabsForms />




    </div>
  );
}

export default App;
