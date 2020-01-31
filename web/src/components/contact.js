import React from "react"

const Contact = () => (
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
    className="bg-accent flex flex-col items-center"
  >
    <h1>Contact Us</h1>
    <p>
      <label>
        Your Name: <input className="block" type="text" name="name" />
      </label>
    </p>
    <p>
      <label>
        Your Email: <input className="block" type="email" name="email" />
      </label>
    </p>
    <p>
      <label>
        I'm Interested In:{" "}
        <select className="block" name="role[]" multiple>
          <option value="trips">Trips</option>
          <option value="volunteering">Volunteering</option>
          <option value="something-else">Something Else</option>
        </select>
      </label>
    </p>
    <p>
      <label>
        Message: <textarea className="block" name="message"></textarea>
      </label>
    </p>
    <p>
      <input type="hidden" name="bot-field" />
    </p>
    <p>
      <button className="bg-primary text-lg px-4 py-2 rounded shadow-2xl m-4 text-accent hover:text-accent-hover hover:bg-primary-hover" type="submit">Submit</button>
    </p>
  </form>
)

export default Contact
