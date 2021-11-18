import React from 'react'

export default function Card({ card }) {
    
  return (
   
    <div class="col-lg-4">
        <div class="card shadow mb-1 bg-white rounded" >
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-6">
                        <p><span className={`badge rounded-pill ${card.bg_color} ${card.status_color}`} >.</span><b>{card.cardtitle}</b></p>
                    </div>
                    <div class="col-lg-6">
                        <p class="float_right"><b>status:</b> <span class={card.status_color}>{card.status}</span></p>
                    </div>
                    <div class="col-lg-12">
                        <p class="faded">{card.kindofnode}</p>
                    </div>
                    <br></br>
                </div>
                <hr></hr>
                <div class="row">
                    <div class="col-lg-6">
                        <p><b><i class="fas fa-box"></i>{card.height}</b></p>
                    </div>
                    <div class="col-lg-6">
                        <p class="float_right faded">{card.hash_1}...{card.hash_2}</p>
                    </div>
                    <div class="col-lg-12">
                        <p class="faded">{card.howfarbehind}</p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  )
}
