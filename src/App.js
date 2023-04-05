import './App.css';
import Button from './components/Button';
import logo from './logo.svg';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Hello React! 👋</h1>
      <Button text='enviar' />
      <Button text='borrar' clase='solid-green'/>
      <Button text='llamar' clase='frame'/>
      <Button text='goodbye'/>
      <Button />
      <div className='container'>
        <img src={logo} alt="logotipo de React" className="logotipo"/>
        <Counter />
        <Counter text='👎' />
      </div>
    </div>
  );
}

export default App;

