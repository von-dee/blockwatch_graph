import React from 'react'
import Card from './Card'

export default function CardList({ cards }) {
  
  return (
    cards.map(card => {

      return(
        <>
          <div class="row">
            <h6 class="subtitle">{card.title}</h6>
          </div>
          <div class="row justify-content-md-left" id="tzstatstezosnodes">
            
            {card.cards.map((card, i) =>
              <Card key={i}  card={card} />
            )}
            
          </div>
        </>
      )
      
    })
  )
}
