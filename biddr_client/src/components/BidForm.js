import React from "react";
import FormErrors from "../FormErrors/FormErrors";

const BidForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    props.onSubmit({
      bid_value: parseInt(formData.get("bid_value"))
    });
  };

  return (
    <form className="BidForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="bid_value">Bid Amount: </label>
        <input type="number" name="bid_value" id="bid_value" placeholder="$..." />
        <FormErrors forField="bid_value" errors={props.errors} />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default BidForm;