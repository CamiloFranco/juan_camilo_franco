export class RenderCheckin extends React.Component {
    render() {
      return (
        <li className="nav-item px-1 py-2">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa fa-sign-in"></i>
              </span>
            </div>
            <input
              type="date"
              class="form-control"
              min="2020-01-01"
              max="2021-12-31"
              name="selectedCheckIn"
              onChange={(event) => this.props.handlerFilterCI(event.target)}
            />
          </div>
        </li>
      );
    }
  }

  export default RenderCheckin;