import './App.css';
import SetupForm from './Form/SetupForm';
import LoadingScreen from './Loading/LoadingScreen';
import Modal from './Modal/Modal';

function App() {
  return (
    <div className='App'>
      <main>
        <section className='quiz'>
          <p className='correct-answers'>correct answers: 3</p>
          <article className='container'>
            <h2>text</h2>
            <div className='btn-container'></div>
          </article>
          <button className='next-question'>next question</button>
        </section>
      </main>
    </div>
  );
}

export default App;
