import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faLeaf,
  faTint,
  faFeather,
  faFire,
  faBurst,
  faVolcano,
} from "@fortawesome/free-solid-svg-icons";

const AttackIcon = ({ attackType }) => {
  switch (attackType) {
    case "Électrique":
      return <FontAwesomeIcon icon={faBolt} />;
    case "Plante":
      return <FontAwesomeIcon icon={faLeaf} />;
    case "Eau":
      return <FontAwesomeIcon icon={faTint} />;
    case "Vol":
      return <FontAwesomeIcon icon={faFeather} />;
    case "Feu":
      return <FontAwesomeIcon icon={faFire} />;
    case "Sol":
      return <FontAwesomeIcon icon={faVolcano} />;
    default:
      return <FontAwesomeIcon icon={faBurst} />;
  }
};

export default AttackIcon;
