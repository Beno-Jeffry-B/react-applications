import ReactDOM from 'react-dom/client';
import logo from './assets/images/react-logo.png'; // correct path if image is here (NOTE : images should be imported, direct URL won't work like normal HTML tag)
import Main from './components/Main';
import Title from './components/Title';

const bgStyle = {
  backgroundImage: `url(${logo})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '97vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={bgStyle}>
    <Title />
    <Main />
  </div>

);

