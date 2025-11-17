import React, { useState } from 'react';
import styles from './Contact.module.css';
import SuccessDialog from './SuccessDialog';

const Contact = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    attachment: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);

    setIsSubmitting(true);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwnfWt1xFnGBDMe8FYforVjkluQNfjJX69LwXujtigcIE_nNqpykt10TkshMNWTaipRkA/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        }),
      });

      // Since mode: 'no-cors' doesn't allow reading response status/body,
      // we'll assume success if no error was thrown
      console.log('Request sent successfully');
      setShowSuccess(true);
      resetForm();
    } catch (error) {
      console.log('FAILED...', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = (e) => {
    setForm({ ...form, attachment: e.target.files[0] });
  };

  const resetForm = () => {
    setForm({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      attachment: null
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const contactJSX = (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.contactContainer}>
          <div className={styles.contactCard}>
            <div className={styles.contactWrapper}>
              <div className={styles.contactLeft}>
                <div className={styles.introBadge}>Want to Hire Me?</div>

                <h4 className={styles.contactTitle}>
                  Let's Work
                  Together On
                  Project<span style={{ fontSize: '1.75rem' }}>🤝</span>
                </h4>

                <div className={styles.contactInfo}>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Contact Me At:</p>
                    <a href="mailto:neha.desai.2411@gmail.com" className={styles.contactEmail}>
                      neha.desai.2411@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.contactRight}>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name *"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      className={`${styles.formInput} ${styles.fullWidth}`}
                    />
                  </div>

                  <div className={`${styles.formRow} ${styles.twoCols}`}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone (optional)"
                      value={form.phone}
                      onChange={handleChange}
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formRow}>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject *"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className={`${styles.formInput} ${styles.fullWidth}`}
                    />
                  </div>

                  <div className={styles.formRow}>
                    <textarea
                      name="message"
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      className={styles.formTextarea}
                      rows="6"
                    ></textarea>
                  </div>

                  <div className={styles.formRow}>
                    <label className={styles.fileUpload}>
                      <i className="fas fa-cloud-upload-alt"></i>
                      <span>add an attachment</span>
                      <input type="file" onChange={handleFileUpload} hidden />
                    </label>
                  </div>

                  <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>&nbsp;
                        SENDING...
                      </>
                    ) : (
                      'CONTACT ME'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return showSuccess ? <SuccessDialog onClose={() => setShowSuccess(false)} /> : contactJSX;
};

export default Contact;