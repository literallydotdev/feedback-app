import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaEnvelope, FaComment, FaSmile } from 'react-icons/fa';

const Form = ({ handleSubmit }) => {
  const [comments, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTextArea = (e) => {
    setComment(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const data = { email: email.trim(), comments: comments.trim() };

    try {
      await handleSubmit(data);
    } finally {
      setIsSubmitting(false);
      setEmail('');
      setComment('');
    }
  };

  return (
    <form onSubmit={submitForm} className="feedback-form">
      <div className="formelement-container">
        <label className="formlabel">
          <FaSmile style={{ marginRight: 8 }} />
          How was your experience?
        </label>
      </div>

      <div className="formelement-container">
        <label htmlFor="email" className="formlabel">
          <FaEnvelope style={{ marginRight: 8 }} />
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          value={email}
          placeholder="your@email.com"
          required
          onChange={handleEmail}
          disabled={isSubmitting}
        />
      </div>

      <div className="formelement-container">
        <label htmlFor="msg" className="formlabel">
          <FaComment style={{ marginRight: 8 }} />
          Your Feedback
        </label>
        <textarea
          className="text-input"
          value={comments}
          id="msg"
          name="msg"
          rows="4"
          placeholder="Tell us what you think..."
          required
          onChange={handleTextArea}
          disabled={isSubmitting}
        />
      </div>

      <button className="form-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Feedback'}
      </button>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
