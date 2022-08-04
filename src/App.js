import './App.css';
import GetClientToken from './api/getClientToken';
import GetAdminToken from './api/getAdminToken';

function App() {
  let token = GetClientToken();

  console.log(token);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
