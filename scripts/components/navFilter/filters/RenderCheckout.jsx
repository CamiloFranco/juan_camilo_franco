export class RenderCheckout extends React.Component {
    render() {
      return (
        <li className="nav-item px-1 py-2">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa fa-sign-out"></i>
              </span>
            </div>
            <input
              type="date"
              className="form-control"
              min="2020-01-01"
              max="2021-12-31"
              name="selectedCheckOut"
              onChange={(event) => this.props.handlerFilterCO(event.target)}
            />
          </div>
        </li>
      );
    }
  }

  export default RenderCheckout;