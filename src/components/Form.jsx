import React, { useState } from 'react';
import { FaEnvelope, FaComment, FaSmile } from "react-icons/fa";

const Form =({handleSubmit} )=>{

  const [comments, setComment] = useState(" ");
  const [email, setEmail] = useState(" ");

  const handleTextArea = (e)=>{
	setComment(e.target.value);

  }
  const handleEmail=(e)=>{
	setEmail(e.target.value);
  }
  const submitForm=(e)=>{
		e.preventDefault();
		const data ={email:email,comments:comments}
        handleSubmit(data)
		setEmail("");
		setComment(" ")
  }

  return(

	<form onSubmit={submitForm} className='feedback-form' >
		<div className='formelement-container'>
			<label className='formlabel'>
				<FaSmile  style={{marginRight:3}}/>
				Is this page useful?
			</label>
		</div>
		<div className=" formelement-container">
			<label htmlFor="email" className="formlabel "><FaEnvelope  style={{marginRight:3,padding:3}} />
			Email Address</label>
			<input type="email" name="email" className="form-input element-border"  value={email} required  onChange={handleEmail}/>
		</div>
		<div className="formelement-container">
			<label htmlFor="msg" className='formlabel'>
				<FaComment  style={{marginRight:3}} />
            Your Feedback:
			</label>
			<textarea className="text-input element-border" value={comments} id="msg" name="msg" rows="4" cols="20" required onChange={handleTextArea}>
			</textarea>
		</div>
		<button className="form-button element-border" type="submit">Submit </button>
	</form>

  )

}

export default Form;
