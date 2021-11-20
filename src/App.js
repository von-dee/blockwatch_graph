import React, { useState } from 'react';
import BarChart from "./D3/BarChart";
import LineGraph from "./D3/LineGraph";

function App() {

  // Holds values of the user's selected button option
  const [objdata, setObjdata] = useState({data:"Requests", graph:"Bar", time:"M1"})

  // Updates data => Data Type, Graph type, Time Frame
  function updateData ({ data, graph, time }) {
    setObjdata((lab) => {
      let newLabels = {};
      if (data) newLabels.data = data;
      if (graph) newLabels.graph = graph;
      if (time) newLabels.time = time;
      return { ...lab, ...newLabels};
    })
  }
  

  return (
    <>
      
      <section>
        <h4 class="title">Block Watch Graph</h4> <br></br>
        <div class="container">
          <div class="card shadow mb-1 bg-white rounded" >
            <div class="card-body">
              <div class="row">
                <div class="col-sm-7">
                  <button type="button" class="btn btn-outline-dark bt-mr" onClick={() => updateData({data: 'Requests'})}>Requests</button>
                  <button type="button" class="btn btn-outline-dark bt-mrl" onClick={() => updateData({data: 'Latency'})}>Latency</button>
                  <button type="button" class="btn btn-outline-dark bt-mrl" onClick={() => updateData({data: 'Trafic'})}>Trafic</button>
                  <button type="button" class="btn btn-outline-dark bt-ml" onClick={() => updateData({data: 'Users'})}>Users</button>
                </div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-link bt-mrl" onClick={() => updateData({data: 'Line'})}>Line</button>
                  <button type="button" class="btn btn-link bt-mrl" onClick={() => updateData({data: 'Bar'})}>Bar</button>
                </div>
                <div class="col-sm-3">
                  <button type="button" class="btn btn-link bt-mrl" onClick={() => UpdateData({data: 'M1'})}>M1</button>
                  <button type="button" class="btn btn-link bt-mrl" onClick={() => UpdateData({data: 'H1'})}>H1</button>
                  <button type="button" class="btn btn-link bt-ml" onClick={() => UpdateData({data: 'D'})}>D</button>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 col-lg-12">
                  {objdata.graph === 'Bar' && <BarChart objdata={objdata} /> }
                  {objdata.graph === 'Line' && <LineGraph objdata={objdata} /> }
                </div>
              </div>
              

            </div>
          </div>
        </div>
        
      </section>

    </>
  )
}

export default App;
