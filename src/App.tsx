import {PrimaryBg} from './config/colors';
import Container1 from "./components/container1";
import Container2 from "./components/container2";
import Container3 from "./components/container3";
function App() {

  return (
    <div className="App" style={{backgroundColor:'#fff', display: 'flex', flexDirection: 'column'}}>
      <header style={{borderBottom: '1px solid #fff', textAlign: 'left', backgroundColor: PrimaryBg, padding: '0px'}}>
        <img src="/images/images.png" width={90} alt="Logo da guia do iniciante em copywright"/>
      </header>
     <Container1 />
     <Container2 />
     <Container3 />
    </div>
  )
}

export default App
