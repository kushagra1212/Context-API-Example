

import Showmovies from'./components/Showmovies';
import Navbar from './components/Navbar';
import {Provider} from './Provider';

function App() {
  return (
    <div>
<Provider>
  <Navbar/>
  <Showmovies/>
</Provider>

    </div>
  );
}

export default App;
