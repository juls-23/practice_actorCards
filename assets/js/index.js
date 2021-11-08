 
const listActors = document.querySelector('#cardsContainer');
const divFavoritActors = document.querySelector('#favActors');

const socialMediaMap = new Map();
socialMediaMap.set('www.facebook.com','fa-facebook')
socialMediaMap.set('twitter.com','fa-twitter');
socialMediaMap.set('www.instagram.com','fa-instagram');

const idFofFavoriet = new Set();

fetch('./data.json')
  .then(response => {
    if(!response.ok){
      throw new Error('data not found')
    }
    return response.json()})
  .then((data)=>{
    data.map((actor)=>{
      if(actor.firstName && actor.lastName && actor.profilePicture){
        const elem = createActorCards(actor)
        listActors.append(elem)
      }
    })
  })
    .catch((err)=>{console.log(err)})
    .finally(()=>{hideLoader()})


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

divFavoritActors.addEventListener('click', deleteActorFromFav);


function checkSocial({contacts}){
  return contacts.map((el)=>{
     const socialClass = socialMediaMap.get(new URL(`${el}`).hostname)
     if(socialClass){
       return {attributes:{href:el, target:'_blank'} ,classNames:['fab',`${socialClass}`]}
     }
   })
 }
 

function handleImageError({target}){
  target.remove();
}

function handlerClick(){
  if(idFofFavoriet.has(this.id)){
    return;
  }
  idFofFavoriet.add(this.id);
  const elem = createElement('li',{}, document.createTextNode(`${this.firstName} ${this.lastName}`));
  elem.dataset.actorId =`${this.id}`
  divFavoritActors.append(elem)
 }



 function deleteActorFromFav({target, target:{dataset:{actorId}}}){
  idFofFavoriet.delete(Number(actorId))
  target.remove()  
 }

function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

function createInitials(str){
return str.trim().toUpperCase().split(' ').map(el=>el[0]).join('');
}

const hideLoader = () => {
  const loaderHTML = document.querySelector('#loader');
  loaderHTML.setAttribute('hidden', '');
};