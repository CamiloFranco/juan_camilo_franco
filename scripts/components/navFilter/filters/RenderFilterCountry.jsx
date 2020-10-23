export class RenderFilterCountry extends React.Component {
    render() {
      return (
        <li className="nav-item px-1 py-2">
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect03">
                <i className="fa fa-map-marker"></i>
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect03"
              name="selectedCountry"
              onChange={(event) => this.props.handlerFilterC(event.target)}
            >
              <option selected>Todos los países</option>
              <option value="Colombia">Colombia</option>
              <option value="Argentina">Argentina</option>
              <option value="Brasil">Brasil</option>
              <option value="Chile">Chile</option>
              <option value="Uruguay">Uruguay</option>
            </select>
          </div>
        </li>
      );
    }
  }

  export default RenderFilterCountry;