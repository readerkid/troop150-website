import React, { useEffect, useState } from 'react';

interface Item {
  fname: string,
  description: string,
}

const LostItemForm = () => {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/lost-n-found/items", {
      method: "POST",
      body: formData,
    });
    const message = await response.text();
    if (message) {
      setResponseMessage(message);
    }
  }

  return responseMessage ?
  <p>{responseMessage}</p> :
  <form onSubmit={submit}>
    <label htmlFor="fname">Object Name:</label><br/>
    <input type="text" id="fname" name="fname"/><br/>

    <label htmlFor="lname">Description:</label><br/>
    <input type="text" id="description" name="description"/><br/>

    <input type="submit" value="Submit" className="btn btn-primary"/>
  </form>;
}

export default LostItemForm;
