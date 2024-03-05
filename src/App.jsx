import React, { useState } from 'react';
import './App.css';

function App() {

  const [rating, setRating] = useState();
  const [submit, setSubmit] = useState(false);

  function handleSubmit() {
    if (rating > 0 && rating <= 5) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }

  return (
    <div className="outer_container">
      {!submit ? (
        <main className="card_container">
          <img src="/interactive-rating/icon-star.svg" alt="Star" className="star_icon_container"/>

          <h1 className="main_heading">How did we do?</h1>

          <p className="description">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

          <div className="button_container">
            {[1, 2, 3, 4, 5].map((number => (
              <button key={number} onClick={() => setRating(number)} className={`${rating === number ? 'active' : ''} rating_button`}>{number}</button>
            )))}
          </div>

          <button onClick={() => handleSubmit()} className="submit_button" disabled={rating ? false : true}>Submit</button>
        </main>
      ) : (
        <main className="card_container_result">
          <img src="/interactive-rating/illustration-thank-you.svg" alt="Thank you" className="thankyou_icon_container"/>

          <p className="rating_result">You selected {rating} out of 5</p>

          <h2 className="thankyou_heading">Thank you!</h2>

          <p className="thankyou_description">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </main>
      )}
    </div>
  )
}

export default App;
