import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

function Restaurant(){
    let {id} = useParams();
    let [rDetails, setDetails] = useState(null);
    let [rMenuList, setRMenuList] = useState([]);

    let getRestaurantDetails = async()=>{
        let url = "http://localhost:3040/api/get-restaurant-details/" + id;
      let {data} = await axios.get(url);
      setDetails(data.result);
    };
    let getMenuItemList =async ()=>{
        let url = "http://localhost:3040/api/get-menu-item-list/" + id;
      let {data} = await axios.get(url);
      console.log(data.result);
    //   setRMenuList(data.result);
    };
    useEffect(()=>{
        getRestaurantDetails();
    },[]);
    return (<>
    {
        rDetails === null ? null:
        <>
        <section className="row">
        <section className="col-12 bg-danger px-0 px-lg-3">
          <header className="container d-flex justify-content-between py-3">
            <p className="m-0 brand bg-white fw-bold fs-3 text-danger">e!</p>
            {/* react carousel */}
            {/* <div>
            <Carousel showThumbs={false} infiniteLoop={true}>
                {rDetails.thumb.map((value,index)=>{
                    return(
                        <div key={index} className="w-100">
                            <img src={"/images/"+value} alt=""/>
                        </div>
                    )
                })}
                
            </Carousel>
            </div> */}
            <div>
              <button className="btn text-white">Login</button>
              <button className="btn btn-outline-light">Create an account</button>
            </div>
          </header>
        </section>
      </section>

      <section className="contents m-5 p-2">
       {/* img section  */}
        <div className="d-flex
        justify-content-center
        align-items-center img-div">
             <img className="img" src={"/images/"+rDetails.image} alt=""/>
             <button className="btn">Click to see Image Gallery</button>
        </div>
        {/* content div  */}
        <div>
            {/* div-heading  */}
            <div className="header-text m-4 fw-bold fs-3"><p>{rDetails.name}</p></div>
            {/* button + header  */}
            <div className="col-12 fs-4 m-3">
                <div className="header d-flex justify-content-between fw-semibold pt-2">
                    <ul className="list-unstyled d-flex gap-3">
                        <li>Overview & Contact</li>
                        
                    </ul>
                
                {/* <div>
                    <button className="bg-danger rounded-3 text-white p-2 fs-5">Place Online Order</button>
                </div> */}
                <a className="btn btn-danger align-self-start" data-bs-toggle="model" href="#exampleModelToggle" role="button"
                onClick={getMenuItemList}>Place Online Order</a>
                </div>
                {/* model-body-for-order */}
                
            </div>
            <hr className="border border-secondary border-2"/>
            {/* text-content  */}
            <div className="content-text fw-bold p-3">
                <div className="mb-5"><h3 className="fw-bold">About this place</h3></div>
                <div>
                    <h4 className="fw-bold">Cuisine</h4>
                    <p>{rDetails.cuisine.map((value)=>value.name).join(',')}</p>
                </div>
                <div>
                    <h4 className="fw-bold">Average Cost</h4>
                    <p>₹{rDetails.min_price} for two people (approx.)</p>
                </div>
                <div>
                    <h4 className="fw-bold">Contect Number</h4>
                    <p>+{rDetails.contact_number}</p>
                </div>
                <div>
                    <h4 className="fw-bold">Address</h4>
                    <p>{rDetails.locality},{rDetails.city}</p>
                </div>
            </div>
        </div>
      </section>
      </>
       }
    </>)
}

export default Restaurant;