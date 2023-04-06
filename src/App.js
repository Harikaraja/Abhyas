import './App.css';
import { useState } from 'react';
function App() {
  const[modal,setState] = useState(false)
  const[data,setData]=useState({
    name:" ",
    email: " ",
    feedback: " "
  })
  const handleChange = (e)=>{

    const { name, value} = e.target
    console.log(value)
    setData({...data,[name]:value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
  }
  return (
    <div className="App">
      <div className='middle'>
      <h1 className='h1'><center>Feedback Form</center></h1>
      {!modal && (
      <button onClick={() => setState((value) => !value)}>Toogle Feedback</button>
      )}
      <div className='feedback'>
        {modal && (
        <form onSubmit={handleSubmit}>
          <button onClick={()=> setState((value) => !value)}>X</button>
          <div>
            <input placeholder='Enter your name' name='name' onChange={(e)=>handleChange(e)}/>
          </div>
          <div>
            <input placeholder='Enter your EMail' name='email' onChange={(e)=>handleChange(e)}/>
          </div>
          <div>
            <input placeholder='Enter your Feedback' name='feedback' onChange={(e)=>handleChange(e)}/>
          </div>
          <button onClick={handleSubmit}>Submit Feedback</button>
        </form>
        )}
      </div>
      </div>
    </div>
  );
}

export default App;
