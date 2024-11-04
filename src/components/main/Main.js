import React from "react";
import Response from "./response/Response.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getSwapiDataAsync } from "../../redux/slice/swapiDataSlice.js";
import { clear } from "../../redux/slice/clearSlice.js";
import "./main.styles.css";

export default () => {
  const linkAnchor = "https://swapi.dev/api/";
  const MIN_LINK_LENGTH = 3;

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const swapiData = useSelector((state) => state.swapiData);
  const isClear = useSelector((state) => state.clear);

  const onSubmit = ({ link }, formikBag) => {
    dispatch(getSwapiDataAsync(linkAnchor + link));
    dispatch(clear(false));
  };

  const validate = ({ link }) => {
    const errors = {};
    if (!link.trim()) {
      errors.link = "Link can't be empty";
      return errors;
    }

    if (link.trim().length < MIN_LINK_LENGTH) {
      errors.link = `Link length can't be less than ${MIN_LINK_LENGTH} characters`;
      return errors;
    }

    return errors;
  };

  const onClick = () => {
    dispatch(clear(true));
  };

  return (
    <React.Fragment>
      <h3>SWAPI</h3>
      <div className="container">
        <div className="input-group-text" id="basic-addon3">
          {linkAnchor}
        </div>
        <Formik
          initialValues={{ link: "" }}
          onSubmit={onSubmit}
          validate={validate}
        >
          <Form>
            <Field
              type="text"
              name="link"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
            <ErrorMessage
              name="link"
              component="div"
              className="new_text_error"
            />
            <button type="submit" className="btn btn-light">
              Get info
            </button>
          </Form>
        </Formik>
      </div>
      {isClear ? (
        <Response data={""} />
      ) : isLoading ? (
        <Response data={"Loading data..."} />
      ) : (
        <Response data={swapiData} />
      )}
      <button className="btn btn-light" onClick={onClick}>Clear data</button>
    </React.Fragment>
  );
};
