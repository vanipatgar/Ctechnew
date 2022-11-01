import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css"
import Ctechheader from './Ctechnew/Ctechheader';
import Ctechbody from './Ctechnew/Ctechbody';
import Ctechfooter from './Ctechnew/Ctechfooter';

function App() {
  return (
    <div className="App">
     <Ctechheader/>
     <Ctechbody/>
     <Ctechfooter/>
    </div>
  );
}

export default App;
