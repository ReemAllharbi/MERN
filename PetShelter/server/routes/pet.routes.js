const PetController = require("../controllers/pet.controllers");

module.exports = (app) => {
  app.get("/api/pets", PetController.allPets);
  app.get("/api/pets/:id", PetController.getPet);
  app.post("/api/pets/new", PetController.createPet);
  app.delete("/api/pets/delete/:id", PetController.deletePet);
  app.put("/api/pets/:id", PetController.updatePet);

};
