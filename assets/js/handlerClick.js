function handlerClick(){
  if(idFofFavoriet.has(this.id)){
    return;
  }
  idFofFavoriet.add(this.id);
  const elem = createElement('li',{}, document.createTextNode(`${this.firstName} ${this.lastName}`));
  elem.dataset.actorId =`${this.id}`
  divFavoritActors.append(elem)
 }