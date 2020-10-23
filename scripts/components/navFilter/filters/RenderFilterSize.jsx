export class RenderFilterSize extends React.Component {
    render() {
      return (
        <li className="nav-item px-1 py-2">
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01">
                <i className="fa fa-bed"></i>
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              name="selectedSizeType"
              onChange={(event) => this.props.handlerFilterS(event.target)}
            >
              <option selected>Cualquier tamaño</option>
              <option value="Grande">Grande</option>
              <option value="Mediano">Mediano</option>
              <option value="Pequeño">Pequeño</option>
            </select>
          </div>
        </li>
      );
    }
  }

  export default RenderFilterSize;