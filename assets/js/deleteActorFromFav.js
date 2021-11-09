function deleteActorFromFav({target, target:{dataset:{actorId}}}){
  idFofFavoriet.delete(Number(actorId))
  target.remove()  
 }