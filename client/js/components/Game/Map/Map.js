// @flow
import React from 'react';
const PIXI = require('pixi.js');
import styles from './Map.scss';
import grass from './img/grass_3.jpg';
import brick from './img/brick.jpg';

type Props = {
  coordinates: Array
};
class Map extends React.Component<Props> {

  componentDidMount() {
    this.renderer = PIXI.autoDetectRenderer();
    this.refs.gameCanvas.appendChild(this.renderer.view);
    this.stage = new PIXI.Container();
    let arr = this.props.coordinates;
    PIXI.loader
      .add(grass)
      .add(brick)
      .load(()=> {
        for(let i=0; i< arr.length ; i++) {
          for(let j=0; j< arr[i].length ; j++) {
            let type = arr[i][j];
            let tmp;
            switch(type) {
              case 'grass':
                tmp = new PIXI.Sprite(PIXI.loader.resources[grass].texture);
                break;
              case 'brick':
                tmp = new PIXI.Sprite(PIXI.loader.resources[brick].texture);
                break;
              default:
                console.log("texture not found");
            }
            tmp.x = i  * 64;
            tmp.y = j * 64;
            this.stage.addChild(tmp);
          }
        }
        this.renderer.render(this.stage);
      });
  }

  componentWillUnmount() {
    this.refs.gameCanvas.removeChild(this.renderer.view);
  }

  render() {
    return (
      <div className={styles.map} ref="gameCanvas">
      </div>
    );
  }
}

export default Map;