import HotelCard from "../hotelCard/HotelCard";

const HotelList = (props) => {
  if (props.hotels.length === 0) {
    return (
      <div className="empty-search jumbotron jumbotron-fluid">
        <div className="container">
          <h2 className="display-8" style={{ color: "#cc99cc" }}>
            ¡NO HAY COINCIDENCIAS!
          </h2>
          <p class="lead">
            Infortunamente ningun hotel coincide con tus parametros de
            busqueda...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="row py-4">

          {/* In the prop "hotels" of the "HotelList" component is stored the array of 
          objects "hotelsData", which is iterated by the .map method; For each element or 
          object ("hotel" parameter) of that array, the "HotelCard" component is returned
          in each iteration. The props of the "HotelCard" component are the attributes
          (or properties key: value) of the object or element ("hotel" parameter) of the
          "hotelData" object array.*/}
          {props.hotels.map((hotel) => {
            return (
              <HotelCard
                key={hotel.id}
                slug={hotel.slug}
                nameHotel={hotel.name}
                photo={hotel.photo}
                description={hotel.description}
                availabilityFrom={hotel.availabilityFrom}
                availabilityTo={hotel.availabilityTo}
                city={hotel.city}
                country={hotel.country}
                price={hotel.price}
                rooms={hotel.rooms}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HotelList;
