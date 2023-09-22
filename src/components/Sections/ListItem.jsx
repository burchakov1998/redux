import React from "react";

import { nanoid } from "nanoid";
import { Li, CardTitle, Button } from "../Atoms/Atoms";

const ListItem = ({ element, className, onClickEdit, onClickRemove }) => {
  if (!element) {
    return null;
  }

  return (
    <React.Fragment>
      <Li key={nanoid()} element={element} className={className}>
        <CardTitle key={nanoid()} title={element.name}></CardTitle>
        <CardTitle key={nanoid()} title={element.price}></CardTitle>
        <div className="buttons__block">
          <Button
            key={nanoid()}
            id={element.id}
            type={"card-btn__edit"}
            clickHandler={onClickEdit}
          ></Button>
          <Button
            key={nanoid()}
            id={element.id}
            type={"card-btn__del"}
            clickHandler={onClickRemove}
          ></Button>
        </div>
      </Li>
    </React.Fragment>
  );
};

export default ListItem;
