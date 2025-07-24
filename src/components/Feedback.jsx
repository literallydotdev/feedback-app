import { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import Form from './Form';
import slackCall from '../scripts/slack';

const api_url = import.meta.env.VITE_HOOK_URL;

const Feedback = () => {
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const openPopUp = () => {
    setShowForm(true);
    setSuccess(false);
    setError(false);
  };

  const closePopUp = () => {
    setShowForm(false);
    setSuccess(false);
    setError(false);
  };

  const handleSubmit = async (data) => {
    try {
      const response = await slackCall(api_url, data);
      if (response.status === 200) {
        setSuccess(true);
        setError(false);
        // Auto-close after 3 seconds
        setTimeout(() => {
          closePopUp();
        }, 3000);
      } else {
        setError(true);
        setSuccess(false);
      }
    } catch (err) {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <>
      <button className="feedback-button" onClick={openPopUp}>
        💬 Feedback
      </button>

      {showForm && (
        <div className="feedback-modal" onClick={closePopUp}>
          <div
            className="feedback-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopUp}
              className="feedback-closewindow"
              aria-label="Close feedback form"
            >
              <FaWindowClose />
            </button>

            <div className="feedback-title">We&apos;d love your feedback!</div>
            <div className="feedback-subtitle">
              Help us improve by sharing your thoughts and suggestions.
            </div>

            {success && (
              <div className="success-message">
                ✅ Thank you! Your feedback has been submitted successfully.
              </div>
            )}

            {error && (
              <div className="error-message">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            {!success && <Form handleSubmit={handleSubmit} />}
          </div>
        </div>
      )}
    </>
  );
};

export default Feedback;
