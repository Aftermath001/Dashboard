import React, { useState } from 'react';
import '../styles/identity.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import {Link } from 'react-router-dom';
const Identity = () => {
    const [code, setCode] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus the next input field
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Entered Code: ${code.join("")}`);
    };

    return (
        <div className="verification-container">
            <form onSubmit={handleSubmit}>
                <h2>It's Really You?</h2>
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
                    
                </div>
                <div className="verification-info">
                <span>I didn't receive a code? <a href="#">Resend code</a></span>
                    <Link to='/dashboard'>
                    <button type="submit">
                        Verify & Login <FaLongArrowAltRight />
                    </button>
                    </Link>
                    <span>By Signing In, you agree to our <a href="#">terms and conditions</a>.</span>
                </div>
            </form>
        </div>
    );
};

export default Identity;
