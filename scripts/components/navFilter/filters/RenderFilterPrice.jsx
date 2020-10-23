export class RenderFilterPrice extends React.Component {
    render() {
      return (
        <li className="nav-item px-1 py-2">
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect02">
                <i class="fa fa-usd"></i>
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect02"
              name="selectedPriceType"
              onChange={(event) => this.props.handlerFilterP(event.target)}
            >
              <option selected>Cualquier precio</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
            </select>
          </div>
        </li>
      );
    }
  }

  export default RenderFilterPrice;