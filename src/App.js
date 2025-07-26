import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';

function TODO() {
  const [initial, setInitial] = useState('');
  const [data, setData] = useState([]);
  const [Search, setSearch] = useState('');

  const getInput = (event) => {
    setInitial(event.target.value);
  };

  const takeData = () => {
    let Store = [...data, initial];
    setData(Store);
    setInitial('');
  };

  const deleteTask = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const filteredData = data.filter((task) =>
    task.toLowerCase().includes(Search.toLowerCase())
  );

  return (
    <div className='container'>
      <div className='SearchTask'>
  <div className='SearchInputWrapper'>
    <i className='fa fa-search searchIcon'></i>
    <input
      className='SearchInput'
      type='text'
      placeholder='Search task'
      value={Search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
</div>


      <div className='inputTask'>
        <input
          className='TaskInput'
          type='text'
          placeholder='My task'
          value={initial}
          onChange={getInput}
        />
        <button className='Added' onClick={takeData}>
          ADD MyTask
        </button>
      </div>

      {filteredData.map((currVal, index) => {
        return (
          <>
            <div className='TaskData'>
              <p>{currVal}</p>
              <i
                id='deleteIcon'
                style={{ color: 'black' }}
                onClick={() => deleteTask(data.indexOf(currVal))}
                className='fa-solid fa-trash'
              ></i>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default TODO;
