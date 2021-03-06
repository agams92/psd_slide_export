const addReactLayer = require("./elementTemplate/reactElement");
const addVeevaLayer = require("./elementTemplate/veevaElement");
const addAbbottLayer = require("./elementTemplate/abbottElement");
const addStadaLayer = require("./elementTemplate/stadaElement");
const addMITouchLayer = require("./elementTemplate/miTouchElement");
const addBayerReactLayer = require("./elementTemplate/bayerReactElement");

const addLayerDataToFile = (layer, defaults, slide) => {
  switch (defaults.projectType) {
    case "Veeva":
      addVeevaLayer(layer, defaults, slide);
      break;
    case "React(STADA)":
      addStadaLayer(layer, defaults, slide);
      break;
    case "React(Bayer)":
      addBayerReactLayer(layer, defaults, slide);
      break;
    case "React(Abbott Multipage)":
      addAbbottLayer(layer, defaults, slide);
      break;
    case "MITouch(Danon)":
      addMITouchLayer(layer, defaults, slide);
      break;
  }
};

module.exports = addLayerDataToFile;
