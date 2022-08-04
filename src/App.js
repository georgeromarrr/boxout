import './App.css';
import GetClientToken from './api/getClientToken';
import GetAdminToken from './api/getAdminToken';

function App() {

  console.log(GetClientToken());
  console.log(GetAdminToken());
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
