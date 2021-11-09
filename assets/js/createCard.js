function createActorCards(actor){
  const elementHTML =  createElement('li',{classNames:['card-wrapper'], events:{click: handlerClick.bind(actor)} },)
  const elemArticle = createElement('article',{classNames:['card-container']},
    createElement('div',{attributes:{id:`wrapper${actor.id}`}, styles:{backgroundColor:stringToColour(`${actor.firstName}`)},classNames:['img-wrapper'],}, 
      createElement('div', {classNames:['initials']}, document.createTextNode(createInitials(`${actor.firstName} ${actor.lastName}`)) ),
      createElement('img',{attributes:{src:actor.profilePicture},events:{error:handleImageError}, classNames:['img']},)),
    createElement('h2',{classNames:['card-name']}, document.createTextNode(`${actor.firstName} ${actor.lastName}`)),  
  )
  const socialContainer = createElement('div',{classNames:['social-media-container']},)  

  checkSocial(actor).forEach((el)=>{
    socialContainer.append(createElement('a',el,)) 
  })

  elemArticle.append(socialContainer)
  elementHTML.append(elemArticle)

return elementHTML
}