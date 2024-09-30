import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [data, setData] = useState(null);
  const navigate=useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.sunkissyogi.com/api/v1/events"); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setData(data.data.events);
      console.log(data.data);
      //   setLoading(false);
    } catch (error) {
      //   setError(error.message);
      //   setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
//   https://api.sunkissyogi.com/storage/events/card-image/t7sczJQDv7PNK5aDJGPRmiOI66NPdhghaTB4D3g4.webp
  return (
    <div className="container event-list my-3">
      {data &&
        data?.length > 0 &&
        data.map((list, index) => (
          <div className="card mb-2" key={index}
          onClick={()=>{navigate(`/${list?.id}`)}}>
            <div className="row">
              <div className="col-3">
                <img src={`https://api.sunkissyogi.com/${list?.card_image.path}/${list?.card_image.name}`} alt="" className="img-fluid"/>
              </div>
              <div className="col-9">
                {/* Header */}
                <div className="event-header">
                  <p>{list?.category.name}</p>
                  <p>No. of Person: {list?.total_group_members}/group</p>
                </div>
                {/* Title */}
                <h3>{list?.title}</h3>

                {/* Duration */}
                <p>Duration :{list?.duration} Days, Description: {list?.description}</p>

                {/* Events Duration */}
                <div className="d-flex justify-content-between">
                  <p>
                    <i className="fa-solid fa-calendar-days"></i> {list?.date_at}
                  </p>
                  <h3>{list?.price}$</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default List;
