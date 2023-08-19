import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate()
  let initData = {
    _id:"",
    name:"",
    city_id:0,
    location_id:0,
    city:"",
    country_name:"",
  }
  let [locations, setLocations] = useState([]);
  let [hideLocation, setHideLocation] = useState(true);
  let [selectLocation, setSelectLocation] = useState({...initData});
  let [meals, setMeals] = useState([]);
  let [restaurant_list,setRestaurantList] = useState({
    list:[],
  message:'0 restaurant found'})

  let setASelectedLocation = (id) => {
   
    setSelectLocation(locations[id]);
    setHideLocation(true);
  };
  let getMealTypeList = async ()=>{
    try{
      let url = 'http://localhost:3040/api/get-Meal-Type-List';
    let response = await axios.get(url);
    let data = response.data;
    setMeals(data.result);
    } catch {
      alert('server error hain');
      //console.log(error);
    }
    
  };
  let getLocationList = async()=>{
    try{
    let url= 'http://localhost:3040/api/get-location-list';
    let response = await axios.get(url);
    let data = response.data;
    setLocations(data.result);
    } catch {
      alert('server error');
      //console.log(error);
    }
  };
  let getRestaurantListByLocId =async()=>{
    let url ='http://localhost:3040/api/get-restaurant-list-by-loc-id/'+selectLocation.location_id;
   let {data}= await axios.get(url);
   setRestaurantList({
    list:data.result,
  message: data.result.length + ' restaurant found'});
  };
  //only on page load
  useEffect(()=>{
    getMealTypeList();
    getLocationList();
  },[]); //on mount

  useEffect(()=>{
    if(selectLocation.location_id !== 0){
      getRestaurantListByLocId();
    }
  },[selectLocation])
    return <>
        <section className="row bg">
          <section className="col-12  px-0 px-lg-3">
            <header className="container d-flex justify-content-end py-3">
              
              <div>
                <button className="btn text-white">Login</button>
                <button className="btn btn-outline-light">Create an account</button>
              </div>
              
            </header>
            <div className="container brand-bg">
                
                    <p className="logo">e!</p>
                
            </div>
            <div className="container">
                <p className="d-flex w-100 justify-content-center header-flex text-white mt-3 fw-bold display-6">Find the best restaurants, cafés, and bars</p>
            </div>
            <div className="d-flex align-items-center justify-content-center my-4 gap-1">
              <div className="position-relative">
               {/* //input section */}
                <input type="text" className="p-3 me-3 h6 dropdown-toggle bg-white rounded" placeholder="select a location"
                 readOnly 
                 value={selectLocation.name === "" ? "" : `${selectLocation.name},${selectLocation.city}`}  onClick={()=>setHideLocation(false)}/>
                { hideLocation ? null:(
                <ul className="list-group position-absolute top-100 w-100">
   { locations.map((location, index)=>{
      return (<li key={location._id} className="list-group-item" onClick={()=>setASelectedLocation(index)}>{location.name}, {location.city}</li>
   );
    })}
 </ul>
)}
                </div>
                
                <div className="position-relative w-100">
                  <div>
                <input type="text" 
                className="p-3 w-50 align-content-center col-3 h6 bg-white rounded"
                readOnly
                placeholder={restaurant_list.message}
                onChange={()=>{}} /></div>
                
                <ul className="list-group position-absolute top-100">
                { restaurant_list.list.map((restaurant, index)=>{
      return (<li key={restaurant._id} 
        className="list-group-item" 
        onClick={()=>navigate("/restaurant-details/" + restaurant._id)}
        >
          <img style={{width:'45px', height:'45px', borderRadius:'50px'}} src={'images/'+restaurant.image} alt="" className="me-1" />
          <span>{restaurant.name}, {restaurant.city}</span>
          </li>
   );
    })}
      </ul>

                </div>
                </div>
          </section>
        </section>
        
        <section className="row">
      <section className="col-10 m-auto">
        <p className="h2 fw-bold text-color mt-5">Quick Searches</p>
        <p className="h5  text-secondary mt-3">Discover restaurants by type of meal</p>
      </section>
      <section className="row m-auto ms-5">
     
      {
        meals.map((meal)=>{
          return(
          <div key={meal._id} className="card m-5 col-3 my-shadow p-3" style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={"/images/" + meal.image} className="img-fluid meal-img" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-color fw-bold">{meal.name}</h5>
                <p className="card-text text-secondary">{meal.content}</p>
                
              </div>
            </div>
          </div>
        </div>
        );
        })}

      
      </section>
    </section>  
    
    </>
}

export default Home;


