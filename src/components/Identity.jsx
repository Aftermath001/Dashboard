import React, { useState } from 'react';
import '../styles/identity.css';
import { FaLongArrowAltRight } from "react-icons/fa";



const Identity = () => {
    const [code, setCode] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus the next input field
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
    
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Entered Code: ${code.join("")}`);
    };
  return (
    <div className="verification-container">
      <form onSubmit={handleSubmit}>
      <h2>Verify Your Identity</h2>
        <div className="verification-box">
        
        {code.map((data, index) => (
          <input
            key={index}
            type="text"
            name="code"
            maxLength="1"
            value={data}
            onChange={e => handleChange(e.target, index)}
            onFocus={e => e.target.select()}
          />
        ))}
        <span>I didn't receive code? Resend code</span>
        <button>Next <FaLongArrowAltRight /> </button>


        <span> By Signing In,you agree to our terms and conditions</span>
        </div>
        
      </form>
    </div>
  )
}

export default Identity