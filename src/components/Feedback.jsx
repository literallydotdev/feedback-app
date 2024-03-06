import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import Form from './Form';
import slackCall from '../scripts/slack';


const api_url = import.meta.env.VITE_HOOK_URL;

 const Feedback = ( )=> {
    const [ showForm, setShowForm ] = useState(false);
	const [success,setSuccess] = useState(false);
	const [error,setError] = useState(false);

	const openPopUp = ()=> {
		setShowForm(true);

	}

	const closePopUp = ( )=> {
		setShowForm(false);
	}
    const handleSubmit= async (data)=> {
      const response = await slackCall(api_url,data);
      if(response.status == 200){
		setSuccess(true)
	  }
	  else{
		setError(true)
	  }

	}
	return(
		<div >
			<button className="feedback-button element-border" onClick={openPopUp}>Feedback </button>
                {showForm &&
				<div  className="feedback-modal ">
					<FaWindowClose onClick={closePopUp} className="feedback-closewindow "/>
					{success && <p>Your feedback has been submited successfully</p>}
					{error && <p>An error occurred</p>}
						<Form handleSubmit={handleSubmit} />
				</div>

				}
		</div>
	)
 }
 export default Feedback;
