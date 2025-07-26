import { useState } from 'react';

function Contact() {
  // Step 1: Define state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Step 2: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form processing
    alert(`Thanks ${formData.name}! We'll reach out via ${formData.email}.`);
    console.log(formData);

    // Optional: Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ color: '#004080' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: '#004080',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
