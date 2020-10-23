class HotelCard extends React.Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 py-3">
        <div className="card">
          {console.log(this.props.nameHotel)}
          <img src={this.props.photo} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{this.props.nameHotel}</h5>
            <p className="card-text">{this.props.description}</p>
            <div className="labels">
              <div
                className="input-group"
                style={{ BackgroundColor: "#E1B622" }}
              >
                <div
                  className="input-group-prepend"
                  style={{ BackgroundColor: "#E1B622" }}
                >
                  <label
                    className="input-group-text"
                    for="inputGroupSelect03"
                    style={{ BackgroundColor: "#E1B622" }}
                  >
                    <i className="fa fa-map-marker"></i>
                  </label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={this.props.country}
                  disabled
                />
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <label
                    className="input-group-text icon-label"
                    for="inputGroupSelect03"
                  >
                    <i className="fa fa-bed"></i>
                  </label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={this.props.rooms}
                  disabled
                />
                <div className="input-group-prepend">
                  <label className="input-group-text" for="inputGroupSelect03">
                    <i className="fa fa-usd"></i>
                  </label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={this.props.price}
                  disabled
                />
              </div>
            </div>
            <br />
            <a href="#" className="btn btn-primary btn-block">
              Reservar
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HotelCard;
