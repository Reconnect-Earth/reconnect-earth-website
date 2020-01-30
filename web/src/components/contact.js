import React from "react"

const Contact = () => (
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
  >
    <p>
      <label>
        Your Name: <input type="text" name="name" />
      </label>
    </p>
    <p>
      <label>
        Your Email: <input type="email" name="email" />
      </label>
    </p>
    <p>
      <label>
        I'm Interested In:{" "}
        <select name="role[]" multiple>
          <option value="trips">Trips</option>
          <option value="volunteering">Volunteering</option>
          <option value="something-else">Something Else</option>
        </select>
      </label>
    </p>
    <p>
      <label>
        Message: <textarea name="message"></textarea>
      </label>
    </p>
    <p>
      <input type="hidden" name="bot-field" />
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
)

export default Contact
