import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { comment } from 'postcss'

function App() {
 const [formData, setFormData] = useState({
    firstName: '',lastName:"",email:"" , country:"India",
    streetAddress:"",city:"",state:"",postalCode:"",comments:"",byEmail:false ,
     candidates:false,offers:false,pushNotifications:""
 })

 function changeHandler(event) {
    const { name, value,checked,type } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
    console.log(formData);
 }

 function submitHandler(event) {
  event.preventDefault();
  console.log("Form submitted with data:", formData);
 }
  return (
    <div className='flex flex-col items-center '>
      <form onSubmit={submitHandler}>

        <label htmlFor='firstName'>First Name</label>
        <br />
        <input type="text" 
        name='firstName'
        id='firstName'
        placeholder='Aryan'
        value={formData.firstName}
        onChange={changeHandler}
        className='"outline border-2 border-gray-300 rounded-md p-2 w-64'
        />
  <br />
        <label htmlFor='lastName'>Last Name</label>
        <br />
        <input type="text" 
        name='lastName'
        id='lastName'
        placeholder='Singhal'
        value={formData.lastName}
        onChange={changeHandler}
        className='"outline border-2 border-gray-300 rounded-md p-2 w-64'
        />
  <br />  
        <label htmlFor='email'>Email</label>
        <br />
        <input type="text" 
        name='email'
        id='email'
        placeholder='aryan@gmail.com'
        value={formData.email}
        onChange={changeHandler}
        className='"outline border-2 border-gray-300 rounded-md p-2 w-64'
        />

        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select 
        name="country" 
        id="country"
        onChange={changeHandler}
        value={formData.country}
        className='"outline border-2 border-gray-300 rounded-md p-2 w-64'>
          <option >India</option>
          <option >USA</option>
          <option >England</option>
          <option >Canada</option>
        </select>
        <br />

        <label htmlFor='streetAddress'>Street Address</label>
        <br />
        <input type="text" 
        name='streetAddress'
        id='streetAddress'
        placeholder='A-123'
        value={formData.streetAddress}
        onChange={changeHandler}
        className='"outline border-2 border-gray-300 rounded-md p-2 w-64'
        />

        <br />
        <label htmlFor='city'>City</label>
        <br />
        <input type="text" 
        name='city'
        id='city'
        placeholder='Delhi'
        value={formData.city}
        onChange={changeHandler}
        className='"outline border-2 border-gray-300 rounded-md p-2 w-64'
        />

        <br />

        <label htmlFor='state'>State</label>
        <br />
        <input type="text" 
        name='state'
        id='state'
        placeholder='uttar Pradesh'
        value={formData.state}
        onChange={changeHandler}
        className='"outline border-2 border-gray-300 rounded-md p-2 w-64'
        />

        <br />
        <label htmlFor='postalCode'>Postal Code</label>
        <br />
        <input type="text" 
        name='postalCode'
        id='postalCode'
        placeholder='110001'
        value={formData.postalCode}
        onChange={changeHandler}
        className='"outline border-2 border-gray-300 rounded-md p-2 w-64'
        />

        <br /><br />

        <fieldset>
          <legend>By Email</legend>
          <div className='flex '>

            <input type="checkbox" 
          name='comments'
          id='comments'
          checked={formData.comments}
          onChange={changeHandler}
          />
          <div>
          <label htmlFor='comments'>Comments</label>
          <p>Get notified when someone posts a comments on a posting.</p>
          </div>
          </div>
          
          <legend>candidates</legend>
          <div className='flex '>

            <input type="checkbox" 
          name='candidates'
          id='candidates'
          checked={formData.candidates}
          onChange={changeHandler}
          />
          <div>
          <label htmlFor='candidates'>candidates</label>
          <p>Get notified when someone posts a comments on a posting.</p>
          </div>
          </div>

          <legend>offers</legend>
          <div className='flex '>

            <input type="checkbox" 
          name='offers'
          id='offers'
          checked={formData.offers}
          onChange={changeHandler}
          />
          <div>
          <label htmlFor='offers'>offers</label>
          <p>Get notified when someone posts a comments on a posting.</p>
          </div>
          </div>
        </fieldset>
        <br /><br />
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS</p>

          <input type="radio" 
          id='pushEverything'
          name='pushNotifications'
          value='Everthing'
          onChange={changeHandler}
          />

          <label htmlFor='pushEverything'>Everything</label>
          <br />

          <input type="radio" 
          id='pushEmail'
          name='pushNotifications'
          value='same as email'
          onChange={changeHandler}
          />

          <label htmlFor='pushEmail'>Same as email</label>
          <br />

          <input type="radio" 
          id='pushNothing'
          name='pushNotification'
          value='No push Notifications'
          onChange={changeHandler}
          />

          <label htmlFor='pushNothing'>No push Notifications</label>
          <br />
        </fieldset>
        <br />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default App
