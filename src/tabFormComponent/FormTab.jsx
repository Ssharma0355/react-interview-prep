import React, { useState } from "react";

const FormTab = () => {
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(false);
    const [tab3, setTab3] = useState(false);
    const [info,setInfo] = useState({name:"",age:"", email:"", job:""})
    const handleForm1 =()=>{
        setTab1(true);
        setTab2(false)
        setTab3(false)

    }
    const handleForm2 = () => {
        setTab1(false);
        setTab2(true)
        setTab3(false)
    }
    const handleForm3 = () => {
        setTab1(false);
        setTab2(false)
        setTab3(true)
    }
  return (
    <div>
      <div className="tab-btn">
        <button onClick={handleForm1}>Personal Info</button>
              <button onClick={handleForm2}>Hobbies</button>
              <button onClick={handleForm3}>settings</button>
      </div>
          {tab1 === true && (
        <div>
            <input type="text" value={info.name} onChange={(e)=>setInfo(e.target.value)} />
                  <input type="text" value={info.age} onChange={(e) => setInfo(e.target.value)} />
                  <input type="text" value={info.email} onChange={(e) => setInfo(e.target.value)} />
                  <input type="text" value={info.job} onChange={(e) => setInfo(e.target.value)} />
                  <button>Next</button>
        </div>
      )}
          {tab2 === true && (
              <div>

<button>Previos</button>
<button>Next</button>
              </div>
              
          )}
          {tab3 === true && (
              <div>
                  <button>Previos</button>
                  <button>Submit</button>

              </div>
          )}
    </div>
  );
};

export default FormTab;
