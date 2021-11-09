function checkSocial({contacts}){
  return contacts.map((el)=>{
     const socialClass = socialMediaMap.get(new URL(`${el}`).hostname)
     if(socialClass){
       return {attributes:{href:el, target:'_blank'} ,classNames:['fab',`${socialClass}`]}
     }
   })
 }
 