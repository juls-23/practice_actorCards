 'use strict'

const sectionContainer = document.querySelector('#sectionContainer')
const listActors = document.querySelector('#cardsContainer');
const divFavoritActors = document.querySelector('#favActors');

const socialMediaMap = new Map();
socialMediaMap.set('www.facebook.com','fa-facebook')
socialMediaMap.set('twitter.com','fa-twitter');
socialMediaMap.set('www.instagram.com','fa-instagram');

const idFofFavoriet = new Set();

fetch('./data.json')
  .then(response => {
    return response.json()})
  .then((data)=>{
    data.map((actor)=>{
      if(actor.firstName && actor.lastName && actor.profilePicture){
        const elem = createActorCards(actor)
        listActors.append(elem)
      }
    })
  })
    .catch((err)=>{
      createErrorMessage()
      console.log(err)})
    .finally(()=>{hideLoader()})


divFavoritActors.addEventListener('click', deleteActorFromFav);






