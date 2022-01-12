const Router  = require ("express");
const CardsController = require ('../controllers/card.controller');


const cardsRouter = Router();
const cardsController = new CardsController();
 
cardsRouter.get("/", cardsController.getCardList.bind(cardsController));
cardsRouter.get('/card/:id',cardsController.getCardById.bind(cardsController));
cardsRouter.delete('/card/:id', cardsController.removeCardById.bind(cardsController));  

module.exports = cardsRouter