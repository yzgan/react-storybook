// data-set 可以按需引入，除此之外不要引入别的包
import React from 'react';
import PropTypes from 'prop-types';
import {
  Chart, Axis, Coord, Geom, Guide, Shape
} from 'bizcharts';

const { Html, Arc } = Guide;

// 下面的代码会被作为 cdn script 注入 注释勿删
// CDN START
// function creatData() {
//   const data = [];
//   let val = Math.random() * 10;
//   val = val.toFixed(1);
//   data.push({ value: val * 1 });
//   return data;
// }

// let data = [{ value: 0 }];

Shape.registerShape('point', 'pointer', {
  drawShape(cfg, group) {
    let point = cfg.points[0]; // 获取第一个标记点
    point = this.parsePoint(point);
    const center = this.parsePoint({
      // 获取极坐标系下画布中心点
      x: 0,
      y: 0
    });
    // 绘制指针
    group.addShape('line', {
      attrs: {
        x1: center.x,
        y1: center.y,
        x2: point.x,
        y2: point.y,
        stroke: cfg.color,
        lineWidth: 5,
        lineCap: 'round'
      }
    });
    return group.addShape('circle', {
      attrs: {
        x: center.x,
        y: center.y,
        r: 12,
        stroke: cfg.color,
        lineWidth: 4.5,
        fill: '#fff'
      }
    });
  }
});

const color = ['#0086FA', '#FFBF00', '#F5222D'];

class GaugeMeter extends React.Component {
  constructor() {
    super();
    this.state = {
      // data,
      lineWidth: 25
    };
  }

  componentDidMount() {
    // const self = this;
    // setInterval(() => {
    //   data = creatData();
    //   self.setState({
    //     data
    //   });
    // }, 1000);
  }

  render() {
    const { lineWidth } = this.state;
    // const val = this.state.data[0].value;
    const {
      val, min, max, breakpoints, name, height
    } = this.props;
    const cols = {
      value: {
        min,
        max,
        tickInterval: 1,
        nice: false
      }
    };

    return (
      <Chart
        height={height}
        data={[{ value: val }]}
        scale={cols}
        padding={[0, 0, 200, 0]}
        forceFit
      >
        <Coord
          type="polar"
          startAngle={(-9 / 8) * Math.PI}
          endAngle={(1 / 8) * Math.PI}
          radius={0.75}
        />
        <Axis
          name="value"
          zIndex={2}
          line={null}
          label={{
            offset: -20,
            textStyle: {
              fontSize: 18,
              fill: '#CBCBCB',
              textAlign: 'center',
              textBaseline: 'middle'
            }
          }}
          tickLine={{
            length: -24,
            stroke: '#fff',
            strokeOpacity: 1
          }}
        />
        <Axis name="1" visible={false} />
        <Guide>
          <Arc
            zIndex={0}
            start={[min, 0.965]}
            end={[max, 0.965]}
            style={{
              stroke: 'rgba(0, 0, 0, 0.09)',
              lineWidth
            }}
          />
          {val >= breakpoints[0] && ( // blue region
            <Arc
              zIndex={1}
              start={[min, 0.965]}
              end={[val, 0.965]}
              style={{
                stroke: color[0],
                lineWidth
              }}
            />
          )}
          {val >= breakpoints[1] && ( // yellow region fix
            <Arc
              zIndex={1}
              start={[breakpoints[0], 0.965]}
              end={[breakpoints[1], 0.965]}
              style={{
                stroke: color[1],
                lineWidth
              }}
            />
          )}
          {val >= breakpoints[1]
          && val <= max && ( // red region
            <Arc
              zIndex={1}
              start={[breakpoints[1], 0.965]}
              end={[val, 0.965]}
              style={{
                stroke: color[2],
                lineWidth
              }}
            />
          )}
          {val >= breakpoints[0]
          && val < breakpoints[1] && ( // yellow region
            <Arc
              zIndex={1}
              start={[breakpoints[0], 0.965]}
              end={[val, 0.965]}
              style={{
                stroke: color[1],
                lineWidth
              }}
            />
          )}
          {val < breakpoints[0] && ( // blue region
            <Arc
              zIndex={1}
              start={[min, 0.965]}
              end={[val, 0.965]}
              style={{
                stroke: color[0],
                lineWidth
              }}
            />
          )}
          <Html
            position={['50%', '100%']}
            html={() => `<div style="width: 300px;text-align: center;font-size: 12px!important;"><p style="font-size: 1.75em; color: rgba(0,0,0,0.43);margin: 0;">${name}</p><p style="font-size: 3em;color: rgba(0,0,0,0.85);margin: 0;">${val || '-'}</p></div>`
            }
          />
        </Guide>
        <Geom
          type="point"
          position="value*1"
          shape="pointer"
          color="#1890FF"
          active={false}
          style={{ stroke: '#fff', lineWidth: 1 }}
        />
      </Chart>
    );
  }
}

GaugeMeter.propTypes = {
  val: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  height: PropTypes.number,
  breakpoints: PropTypes.array,
  name: PropTypes.string
};

GaugeMeter.defaultProps = {
  val: 0,
  min: 0,
  max: 5,
  height: 500,
  breakpoints: [2, 4],
  name: 'Meter'
};

// CDN END
export default GaugeMeter;
