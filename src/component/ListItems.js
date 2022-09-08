import React from "react";
import { ListItemStyled } from "../component/styles/List.Styled";

function ListItems({ title, url }) {
  return (
    <ListItemStyled>
      <a href={url}>{title}</a>
    </ListItemStyled>
  );
}

export default ListItems;
