import React, { useState} from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();

        //Reset form fields
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="contact-page">
        <h1 className="page-title">Contact Us</h1>
        <p>
            Have any questions or feedback? We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                />
            </div>
            <button type="submit">Send Message</button>
        </form>
        </div>
    )
}

export default Contact;