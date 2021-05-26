import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav( {listState, setListState}) {
  return (
    <nav onClick={()=> setListState(!listState)}>
      <h1>Waves</h1>
      <button>List
          <FontAwesomeIcon icon={faMusic}/>
      </button>
    </nav>
  );
}

export default Nav;
