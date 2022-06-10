import './style.css'
import { dashboard } from '../../services/dashboard'
import { useState, useEffect } from 'react'


type Response = {
  _id: string;
  thumbnail_url:string;
  techs: string[];
  company:string;
  price:string;
}

const Dashboard = () => {

  const [spots, setSpots] =useState<Response[]>([]);
  //const [count, setCount] = useState(0); --usado pra demonstrar contador
  
  useEffect(()=>{
    loadSpot();
  }, )
  

  const loadSpot = async ()=>{
    const user_id = localStorage.getItem('user')

    if(user_id){
      const response =  await dashboard.spotList(user_id);
      //console.log(response.data);
      setSpots(response.data);
    }
  }

  return (
    <>

    <ul className='spot-list'>

    {
      spots.map(spot =>(
        <li key={spot._id}>
            <header style={{backgroundImage:`url(${spot.thumbnail_url})`}}></header>
            <h2><strong> {spot.company} </strong></h2>
            <p>Techs: {spot.techs.map((tech,index)=>{
              if(index === spot.techs.length - 1){
                return `${tech}.`
              }
              return `${tech}, `
            })}</p>
            <p className='value'>{spot.price}</p>
        </li>
      ))  
    }  

    </ul>

    <button>Cadastrar novo spot</button>

    <div>
      <p></p>
      {/* <button onClick={()=> setCount(count+1)}>Incrementa</button> --- usado pra mostrar contador*/}
    </div>

    </>
  )
}

export default Dashboard