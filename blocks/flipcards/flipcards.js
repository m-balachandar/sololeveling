import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const cardsDiv = document.createElement('div');
  cardsDiv.className= 'cards';
 
  [...block.children].forEach((row) => {
    
   
    [...row.children].forEach((div) => {
      const cardDiv = document.createElement('div');
      cardDiv.className= 'card';
      [...div.children].forEach((innerDiv,index) => {
        const cardinnerDiv = document.createElement('div');
        cardDiv.className= 'card-front';
   
        const cardOuterDiv = document.createElement('div');
        cardDiv.className= 'card-back';
   
        if(index%2==0){
          cardinnerDiv.append(innerDiv)
        }else{
          cardOuterDiv.append(innerDiv)
        }
        cardDiv.append(cardinnerDiv)
        cardDiv.append(cardOuterDiv)
    })
   
    cardsDiv.append(cardDiv);
  });
  
  block.textContent = '';
  block.append(cardsDiv);
});}
