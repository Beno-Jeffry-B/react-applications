import ReactDOM from 'react-dom/client';
import Bgimage from './components/Bgimage';
import Main from './components/Main';
import Title from './components/Title';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Bgimage></Bgimage>
    <Title />
    <Main />
  </>

);

