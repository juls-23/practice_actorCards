
function createInitials(str){
  return str.trim().toUpperCase().split(' ').map(el=>el[0]).join('');
  }
  
  const hideLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    loaderHTML.setAttribute('hidden', '');
  };