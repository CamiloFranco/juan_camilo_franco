import NavFilter from "../navFilter/NavFilter";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="empty-search jumbotron jumbotron-fluid">
        <div className="container">
          <h1
            className="text-center font-weight-bold"
            style={{ color: "#408080" }}
          >
            {" "}
            RESERVA DE HOTELES{" "}
          </h1>

          <p className="lead text-center" style={{ color: "#E1B622" }}>
            desde el{" "}
            <span className="font-weight-bold">
              {this.props.selectedAvailabilityIn}
            </span>
            , hasta el{" "}
            <span className="font-weight-bold">
              {this.props.selectedAvailabilityOut}
            </span>
            , en{" "}
            <span className="font-weight-bold">
              {this.props.selectedCountryFilter}
            </span>
            , de precio:{" "}
            <span className="font-weight-bold">
              {this.props.selectedPriceFilter}
            </span>
            , y tamaño:{" "}
            <span className="font-weight-bold">
              {this.props.selectedSizeFilter}
            </span>
          </p>
          <NavFilter
            hotels={this.props.hotels}
            handlerStateHeader={this.props.handlerState}
          />
        </div>
      </div>
    );
  }
}

export default Header;
