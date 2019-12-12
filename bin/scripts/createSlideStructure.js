const { createFolder } = require("./helpers");
const { createAZVeevaSlide } = require("./templates/astrazenecaVeevaTemplate");
const { createStadaReactSlide } = require("./templates/stadaReactTemplate");
const { createBayerReactSlide } = require("./templates/bayerReactTemplate");
const {
  createAbbottMultipageReactSlide
} = require("./templates/abbottMultipageTemplate");

const createSlideStructure = (defaults, slide) => {
  const pathToSave = `${defaults.pathToPutSlides}/${slide.name}`;
  const path = `${pathToSave}/${slide.name}`;
  createFolder(pathToSave);
  createFolder(`${pathToSave}/img`);
  switch (defaults.projectType) {
    case "Veeva":
      createAZVeevaSlide(path, slide);
      break;
    case "React(STADA)":
      createStadaReactSlide(path, slide);
      break;
    case "React(Bayer)":
      createBayerReactSlide(path, slide);
      break;
    case "React(Abbott Multipage)":
      createAbbottMultipageReactSlide(path, slide);
      break;
  }
};

module.exports = createSlideStructure;