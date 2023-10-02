import { family }  from "./adat.js";
import FamilyMegjelenit from "./Megjelenit.js";

$(function() {
    const familia = $(".tartalom"); 
    new FamilyMegjelenit(family,familia)
  });