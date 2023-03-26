import {PrimaryBg} from './config/colors';
import Container1 from "./components/container1";
import Container2 from "./components/container2";
import Container3 from "./components/container3";
import Container4 from './components/container4';

function App() {
  const year = new Date().getFullYear();
  return (
    <div className="App" style={{backgroundColor:'#fff', display: 'flex', flexDirection: 'column'}}>
      <header style={{borderBottom: '1px solid #fff', textAlign: 'left', backgroundColor: PrimaryBg, padding: '0px'}}>
        {/* <img src="/images/images.png" width={90} alt="Logo da guia do iniciante em copywright"/> */}
        <p style={{textTransform: 'uppercase', padding: '10px'}}>Sua logo</p>
      </header>
     <Container1 />
     <Container2 />
     <Container3 />
     <Container4 />
     <footer style={{backgroundColor: "#141414"}}><p >Copyright &copy; {year} Joab. Todos os direitos
            reservados.</p></footer>
    </div>
  )
}

export default App
