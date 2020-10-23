import RenderCheckin from "./filters/RenderCheckin";
import RenderCheckout from "./filters/RenderCheckout";
import RenderFilterSize from "./filters/RenderFilterSize";
import RenderFilterCountry from "./filters/RenderFilterCountry";
import RenderFilterPrice from "./filters/RenderFilterPrice";

class NavFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const handlerEventFilter = this.props.handlerStateHeader;
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#0058B7", borderRadius: "9px" }}
        >
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto mr-auto">
              <RenderCheckin handlerFilterCI={handlerEventFilter} />
              <RenderCheckout handlerFilterCO={handlerEventFilter} />
              <RenderFilterCountry handlerFilterC={handlerEventFilter} />
              <RenderFilterPrice handlerFilterP={handlerEventFilter} />
              <RenderFilterSize handlerFilterS={handlerEventFilter} />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavFilter;
