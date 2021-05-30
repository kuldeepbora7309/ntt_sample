import React from "react";
import { Link } from "react-router-dom";
import { ButtonField } from "../../utils";
const Error = (props) => {
  let { errorMessage, errorCode } = props.error;
  return (
    <main id="main">
      <section>
        <div className="container">
          <div className="section-title">
            <h2>
              {errorCode} {errorMessage}
            </h2>
            <p>Some Error, Please Contact Your Application Support Team!</p>
            <p>
              <b>Kuldeep.Singh@gmail.com</b>
              <br />
              <Link to={"/"}>
                <ButtonField>Back to dashboard</ButtonField>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Error;
