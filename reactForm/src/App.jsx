import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "scorpio"
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit ={submitHandler}>
        <input
          className='border-2'
          type="text"
          placeholder='First Name'
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br /><br />

        <input
          className='border-2'
          type="text"
          placeholder='Last Name'
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br /><br />

        <input
          className='border-2'
          type="email"
          placeholder='Email'
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br /><br />

        <textarea
          className='border-2'
          placeholder='Enter your comments'
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />
        <br /><br />

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I visible?</label>
        <br /><br />

        <input
          type="radio"
          onChange={changeHandler}
          name='mode'
          value="Online-Mode"
          id="Online-Mode"
          checked={formData.mode === "Online-Mode"}
        />
        <label htmlFor="Online-Mode">Online Mode</label>
        <br /><br />

        <input
          type="radio"
          onChange={changeHandler}
          name='mode'
          value="Offline-Mode"
          id="Offline-Mode"
          checked={formData.mode === "Offline-Mode"}
        />
        <label htmlFor="Offline-Mode">Offline Mode</label>
        <br /><br />

        <label htmlFor="favCar">Tell me your fav car</label>
        <select
          onChange={changeHandler}
          name="favCar"
          id="favCar"
          value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="Thar">Thar</option>
          <option value="Defender">Defender</option>
          <option value="Alto">Alto</option>
        </select>

        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
