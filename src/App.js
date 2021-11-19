import React, { useState, useEffect } from 'react';
import BarChart, {initCall} from "./D3/BarChart";
import LineGraph from "./D3/LineGraph";

function App() {
  const [objdata, setObjdata] = useState({data:"Requests", graph:"Bar", time:"M1"})

  function UpdateData (data) {
    setObjdata({data:data, graph:objdata.graph, time:objdata.time});
  }

  function UpdateGraph (graph) {
    setObjdata({data:objdata.data, graph:graph, time:objdata.time});
  }

  function UpdateTime (time) {
    setObjdata({data:objdata.data, graph:objdata.graph, time:time});
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
                  <button type="button" class="btn btn-outline-dark bt-mr" onClick={() => UpdateData('Requests')}>Requests</button>
                  <button type="button" class="btn btn-outline-dark bt-mrl" onClick={() => UpdateData('Latency')}>Latency</button>
                  <button type="button" class="btn btn-outline-dark bt-mrl" onClick={() => UpdateData('Trafic')}>Trafic</button>
                  <button type="button" class="btn btn-outline-dark bt-ml" onClick={() => UpdateData('Users')}>Users</button>
                </div>
                <div class="col-sm-2">
                  <button type="button" class="btn btn-link bt-mrl" onClick={() => UpdateGraph('Line')}>Line</button>
                  <button type="button" class="btn btn-link bt-mrl" onClick={() => UpdateGraph('Bar')}>Bar</button>
                </div>
                <div class="col-sm-3">
                  <button type="button" class="btn btn-link bt-mrl" onClick={() => UpdateTime('M1')}>M1</button>
                  <button type="button" class="btn btn-link bt-mrl" onClick={() => UpdateTime('H1')}>H1</button>
                  <button type="button" class="btn btn-link bt-ml" onClick={() => UpdateTime('D')}>D</button>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 col-lg-12">
                  {objdata.graph == 'Bar' && <BarChart objdata={objdata} /> }
                  {objdata.graph == 'Line' && <LineGraph objdata={objdata} /> }
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
