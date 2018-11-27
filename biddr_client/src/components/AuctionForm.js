import React from "react";

import FormErrors from "../FormErrors/FormErrors";

const AuctionForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    props.onSubmit({
      title: formData.get("title"),
      details: formData.get("details"),
      ends_on: formData.get("ends_on"),
      reserve_price: formData.get("reserve_price")
    });
  };

  return (
    <form className="AuctionForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title"/>
        <FormErrors forField="title" errors={props.errors} />
      </div>
      <div>
        <label htmlFor="details">Details: </label>
        <textarea name="details" id="details" cols="30" rows="10"></textarea>
        <FormErrors forField="details" errors={props.errors} />
      </div>
      <div>
        <label htmlFor="ends_on">Ends On: </label>
        <input type="date" name="ends_on" id="ends_on"/>
        <FormErrors forField="ends_on" errors={props.errors} />
      </div>
      <div>
        <label htmlFor="reserve_price">Reserve Price: </label>
        <input type="number" name="reserve_price" id="reserve_price"/>
        <FormErrors forField="reserve_price" errors={props.errors} />
      </div>
      <input type="submit" value="Create Auction"/>
    </form>
  );
}

export default AuctionForm;