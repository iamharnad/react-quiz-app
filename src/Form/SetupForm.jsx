import { useGlobalContext } from '../Context/Context';
const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>Trivi Quiz</h2>
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={quiz.amount}
              onChange={handleChange}
              className='form-input'
              min={1}
              max={50}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='category'>category</label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.category}
              onChange={handleChange}
            >
              <option value='sports'>Sports</option>
              <option value='history'>History</option>
              <option value='politics'>Politics</option>
              <option value='films'>Films</option>
            </select>
          </div>
          <div className='form-control'>
            <label htmlFor='difficulty'>difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              onChange={handleChange}
              value={quiz.difficulty}
            >
              <option value='ease'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Difficult</option>
            </select>
          </div>
          {error && (
            <p className='error'>can't generates questions , pls try again</p>
          )}
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            start
          </button>
          <br></br>
          <p className='setup-nav'>
            <a href='#'>Home</a> | <a href='#'>Profile</a> |{' '}
            <a href='#'>Trivia</a> | <a href='#'>About Us</a>
          </p>
        </form>
      </section>
    </main>
  );
};
export default SetupForm;
