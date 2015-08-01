var React = require("react");
var objectAssign = require("object-assign");
var useTouches = require("./useTouches");

var Handle = React.createClass({

  getInitialState: function () {
    return {
      hover: false
    };
  },

  hoverIn: function () {
    this.setState({
      hover: true
    });
  },

  hoverOut: function () {
    this.setState({
      hover: false
    });
  },

  render: function () {
    var state = this.state;
    var hover = state.hover;
    var props = this.props;
    var active = props.active;
    var x = props.x;
    var y = props.y;
    var size = props.size;
    var strokeWidth = props.strokeWidth;
    var innerRadius = props.innerRadius;
    var bg = props.bg;
    var color = props.color;
    var events = objectAssign(useTouches() ? {} : {
      onMouseEnter: this.hoverIn,
      onMouseLeave: this.hoverOut
    }, props.events);
    var style = {
      cursor: "ew-resize",
      WebkitTapHighlightColor: "rgba(0,0,0,0)"
    };

    var height = 30;
    var width = 7;
    var stroke='white';

    return <g style={style} {...events}>
      <rect
        fill={color}
        x={x-width/2}
        y={y-height/2}
        width={width}
        height={height}
        stroke={stroke}
        key={1}
      />
      <circle
        fill={color}
        cx={x}
        cy={y}
        r={height/2}
        opacity={0}
        stroke={stroke}
        key={2}
      />
      <text
        dx={x}
        dy={y + height / 2 + 17}>
        {Math.round(this.props.value)}
      </text>
    </g>;
  }
});

module.exports = Handle;
