import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ExtraImages = () => {
  const [data, setData] = useState(null);
  const [plans, setPlans] = useState(null);
  const [showAllGallery,setShowAllGallery]=useState(false);

  const [loading, setLoading] = useState(false);
  // const param=useParams();
  useEffect(() => {
    const param = window.location.pathname.slice(1);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.sunkissyogi.com/api/v1/event/${param}`
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setData(data?.data?.extra_images);
        setPlans(data?.data?.plan);

        // console.log("Data :", data?.data?.extra_images);
        setLoading(true);
      } catch (error) {
        console.log("Error :", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
   return (
    <div className="container my-5">
      {!showAllGallery ? <>    
      {!loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row gx-1">
          <div className="col-7">
            <img
              src={`https://api.sunkissyogi.com//${data[0]?.path}/${data[0]?.name}`}
              alt=""
              className="img-fluid mt-1"
              style={{borderRadius:"5px 0px 0px 5px"}}
            />
          </div>
          <div className="col-5">
            <div className="row">
              <img
                src={`https://api.sunkissyogi.com//${data[1]?.path}/${data[1]?.name}`}
                alt=""
                className="img-fluid"
                style={{borderRadius:"0px 5px 0px 0px"}}

              />
            </div>
            <div className="row gx-1">
              <div className="col-6 mb-1">
                <img
                  src={`https://api.sunkissyogi.com//${data[2]?.path}/${data[2]?.name}`}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-6"
                  style={{position:"relative"}}
                  >
                <img
                  src={`https://api.sunkissyogi.com//${data[3]?.path}/${data[3]?.name}`}
                  alt=""
                  className="img-fluid"
                />
                <button
                  style={{position:"absolute", bottom:"5px", right:"12px", border:"none", borderRadius:"5px"}}
                onClick={()=>setShowAllGallery(true)}
                >View all</button>
              </div>
            </div>
          </div>
          <h3 className="text-center">Itinerary</h3>
          {/* { */}
            {/* // plans && plans.map((plan,index)=>( */}
                <h4>Day1:{plans[0]?.day_date}</h4>
                <h6>Morning</h6>
                <p>{plans[0]?.morning}</p>
                <h6>Lunch Break</h6>
                <p>{plans[0]?.lunch_break}</p>
                <h6>Afternoon</h6>
                <p>{plans[0]?.afternoon}</p>
                <h6>Evening</h6>
                <p>{plans[0]?.evening}</p>
                <h6>Dinner</h6>
                <p>{plans[0]?.dinner}</p>
                <h6>Night Time</h6>
                <p>{plans[0]?.night_time}</p>
        </div>
      )}
        </>:
        <>
        <h1 className="text-center">Gallery</h1>
         {data?.map((allImages, index)=>(
            <div key={index}>
            <img src={`https://api.sunkissyogi.com//${allImages?.path}/${allImages?.name}`} alt="" className="img-fluid" />
            </div>
        )) }
        </>
       }

        {/* // )) */}
      {/* } */}

    </div>
  );
};

export default ExtraImages;
