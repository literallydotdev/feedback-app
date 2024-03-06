const slackCall = async(url, data) => {
	const response = await  fetch(`${url}`,{
			method:"POST",
			body:JSON.stringify({"text":`${data.comments}  by ${data.email}`})
		})
		return response
	}

export default slackCall