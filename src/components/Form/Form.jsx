import React, { useRef } from "react";

import { Button, Text } from "../Atoms/Atoms";
import {
  addServiceList,
  changeFieldValue,
  resetForm,
  editItemList,
} from "../../actions/actionCreators";
import { useDispatch, useSelector } from "react-redux";

const USID = require("usid");
const usid = new USID();

const Form = (data) => {
  const tooltipeRef = useRef();
  const dispatch = useDispatch();

  const { id, name, price } = useSelector((state) => state.item);
  const { type } = data;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !price) {
      tooltipeRef.current.style["visibility"] = "visible";
      return null;
    }
    tooltipeRef.current.style["visibility"] = "hidden";

    id
      ? dispatch(editItemList({ id, name, price }))
      : dispatch(addServiceList(name, price));
    dispatch(resetForm());
  };

  const handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    dispatch(changeFieldValue(name, value));
  };

  const onClickCancel = (event) => {
    event.preventDefault();

    dispatch(resetForm());
  };

  return (
    <React.Fragment>
      <div className="form-field-wrapper">
        <form onSubmit={handleSubmit} className={type + "-forms"}>
          <input
            value={name}
            onChange={handleInput}
            name="name"
            type="text"
            className="field-name__input"
          />
          <input
            value={price}
            onChange={handleInput}
            name="price"
            type="number"
            className="field-price__input"
          />
          <div className={type + "-form__btns-block"}>
            <Button
              key={usid.rand()}
              id={usid.rand()}
              type={type + "-form-add__btn"}
              text={"Save"}
            />

            {id && (
              <Button
                key={usid.rand()}
                type={"button"}
                text={"Cancel"}
                onClick={onClickCancel}
              />
            )}
          </div>
        </form>

        <Text
          ref={tooltipeRef}
          key={usid.rand()}
          className={data.type + "-form-tooltipe tooltipe"}
          text={"*Заполните поле!"}
        />
      </div>
    </React.Fragment>
  );
};

export default Form;

/*{name &&
            (price && (
              <Button
                key={usid.rand()}
                id={usid.rand()}
                type={type + "-form-cancel__btn"}
                text={"Cancel"}
              />
            ))}*/
