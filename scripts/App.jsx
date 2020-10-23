import { hotelsData } from "./data.js";
import Header from "./components/header/Header";
import HotelList from "./components/hotelList/HotelList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelsData,
      selectedCheckIn: "aaaa/mm/dd",
      selectedCheckOut: "aaaa/mm/dd",
      selectedPriceType: "Cualquier precio",
      selectedSizeType: "Cualquier tamaño",
      selectedCountry: "Todos los países",
    };
    this.handlerEventFilterSelected = this.handlerEventFilterSelected.bind(
      this
    );
    this.filterHotels = this.filterHotels.bind(this);
  }

  handlerEventFilterSelected({ name, value }) {
    this.setState(() => {
      return { [name]: value };
    }, this.filterHotels);
  }

  /*
  This function executes the comparison between the options chosen by the user
  in the Nav Filter and the initial state. The options chosen by the user are stored in 
  the state of this component, after being sent from the child components: "filters", 
  through the event object, when the function of the OnChange attribute is executed in
  the input label of the respective filter. 
  */
  filterHotels() {
    let tempHotels = hotelsData;

    /* Availability comparison */
    if (
      this.state.selectedCheckIn !== "aaaa/mm/dd" &&
      this.state.selectedCheckOut !== "aaaa/mm/dd"
    ) {
      const availabilityCompare = (hotel) => {
        let selectedCheckInms = Date.parse(this.state.selectedCheckIn);
        let selectedCheckOutms = Date.parse(this.state.selectedCheckOut);
        return (
          selectedCheckInms >= hotel.availabilityFrom &&
          selectedCheckOutms <= hotel.availabilityTo
        );
      };

      tempHotels = tempHotels.filter(availabilityCompare);
    }

    /* Country comparison */
    if (this.state.selectedCountry !== "Todos los países") {
      const countryCompare = (hotel) => {
        let country = String(hotel.country);
        return this.state.selectedCountry === country;
      };

      tempHotels = tempHotels.filter(countryCompare);
    }

    /* Price comparison */
    if (this.state.selectedPriceType !== "Cualquier precio") {
      const priceCompare = (hotel) => {
        let price = String(hotel.price);
        return this.state.selectedPriceType === price;
      };

      tempHotels = tempHotels.filter(priceCompare);
    }

    /* Size comparison */
    if (this.state.selectedSizeType !== "Cualquier tamaño") {
      const sizeCompare = (hotel) => {
        switch (this.state.selectedSizeType) {
          case "Pequeño":
            return hotel.rooms <= 10;
          case "Mediano":
            return hotel.rooms > 10 && hotel.rooms <= 20;
          case "Grande":
            return hotel.rooms > 20;
          default:
            return;
        }
      };

      tempHotels = tempHotels.filter(sizeCompare);
    }

    return this.setState({
      hotelsData: tempHotels,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Header
            hotels={this.state.hotelsData}
            handlerState={this.handlerEventFilterSelected}
            selectedAvailabilityIn={this.state.selectedCheckIn}
            selectedAvailabilityOut={this.state.selectedCheckOut}
            selectedCountryFilter={this.state.selectedCountry}
            selectedPriceFilter={this.state.selectedPriceType}
            selectedSizeFilter={this.state.selectedSizeType}
          />
          <HotelList hotels={this.state.hotelsData} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
