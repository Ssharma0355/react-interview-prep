import React from 'react'

const Personal = ({ setData , data}) => {
    const {name, age, email} = data;
    const handleChange =(e, index)=>{
        setData((prevData) =>({
            ...prevData,
            [index]: e.target.name
        }))
    }
  return (
    <div>
      <h1>Personal details</h1>
      <div>
              <label>Name: </label>
              <input type="text" placeholder={name} name={name} onChange={(e) => handleChange(e, "name")} />
      </div>
          <div>
              <label>Age: </label>
              <input type="text" placeholder={age} name={age} onChange={(e) => handleChange(e, "age")} />
          </div>
          <div>
              <label>Email: </label>
              <input type="text" placeholder={email} name={email} onChange={(e) => handleChange(e, "email")} />
          </div>

          <button>Next</button>
      
    </div>
  )
}

export default Personal
