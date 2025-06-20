import ReactDOM from 'react-dom/client';
import logo from './assets/images/logo.svg'; //  correct path if image is here (NOTE : images should imported direct URL won't work like normal HTML tag)


function Title() { // should be Pascal Case
  return (
    <h2 className='title'>FUN FACTS ABOUT REACT</h2>
  )
}

function Bgimage() {
  return (
    <img src={logo} s alt="React Logo" width="200" />

  )
}

function Main() {
  return <ul>
    <li> React Was Created at Facebook</li>
    <li> React is Just the View Layer</li>
    <li> JSX is Not Required (But It's Awesome)</li>
    <li> Virtual DOM ≠ Real DOM</li>
    <li>
      React Powers Big Tech
      <ol>
        <li>Facebook (obviously!)</li>
        <li>Instagram</li>
        <li>Netflix</li>
        <li>Airbnb</li>
        <li>WhatsApp Web</li>
      </ol>
    </li>
  </ul>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Title />
    <Main />
  </>

);

