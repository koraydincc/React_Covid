
import { useState,useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const[veri,setVeri]=useState()
  const[tarih,setTarih]=useState()

  useEffect(()=>{
       
    const URL = 'https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json';

    axios(URL).then(res=>setVeri(res.data[tarih])).catch(err=>console.log(err))
    
    

  },[veri, tarih])


  return <div className="App">
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto mt-4">
          <h2 className="text-center display-3">Türkiye Covid-19 Arama Motoru</h2>
          <input type="text" placeholder="GG/AA/YY" className="form-control" onChange={(e)=>setTarih(e.target.value)} />
          <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Test Sayısı</th>
      <th scope="col">Hasta Sayısı</th>
      <th scope="col">Vefat Sayısı</th>
    </tr>
  </thead>
  <tbody>
    <tr className="">
      <th scope="row"></th>
      <td>{veri === undefined ? "Veri Bekleniyor" : veri.totalTests}</td>

      <td>{veri === undefined ? "Veri Bekleniyor" : veri.totalPatients}</td>
      <td>{veri === undefined ? "Veri Bekleniyor" : veri.totalDeaths}</td>
    </tr>
 
  </tbody>
</table>
        </div>
      </div>
    </div>
  </div>;
}

export default App;
