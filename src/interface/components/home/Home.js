import './Home.css';
import Clock from './clock';
import Hola from './hola';

function Home() {
    return(
        <div className="appContent">
          <Hola firstname="Facundo" secondname="Müller" />
          <Clock />
        </div>
    );
}

export default Home;