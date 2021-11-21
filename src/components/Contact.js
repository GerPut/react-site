import React from 'react'
import './Contact.css'

function Contact() {
    return (

        <div className="contact-us">

            <section>
                <h1>Contact Us</h1>
                <div className="contact-us-container">
                    <form className="form">
                        <label>Name</label>
                        <input

                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                        />

                        <label>Email</label>
                        <input

                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        />

                        <label>Message</label>
                        <textarea

                        // value={message}
                        // onChange={(e) => setMessage(e.target.value)}
                        ></textarea>

                        <button
                            type="submit"
                        // style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>

    )
}

export default Contact
