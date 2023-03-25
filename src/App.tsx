import Container1 from "./components/container1";
import {PrimaryBg} from './config/colors';

function App() {

  return (
    <div className="App" style={{backgroundColor: PrimaryBg, padding: '20px'}}>
      <header style={{borderBottom: '1px solid #fff', textAlign: 'left'}}>
        <img src="/images/images.png" width={90} alt="Logo da guia do iniciante em copywright"/>
      </header>
     <Container1 />
    </div>
  )
}

export default App
