import React from "react";
import styles from "./index.less";
import { Col, Row } from "antd";
import CardMeta from '../CardMeta';

const rooms = (rooms: [Room]) => {
  console.log(rooms, 'LLLLLLLLLLLLLLLLLLLLLLLLLLLL')
  return rooms.map((room:Room) => <Col span={8}><CardMeta room={room} /></Col>)
}
interface Room {
  number: Int16Array,
  price: Float32Array,
}
export default (props:{rooms:[Room]}) => (
  <div className={styles.container}>
    <div id="components-card-demo-in-column">
      <div className="site-card-wrapper">
      <Row gutter={16}>
        {rooms(props.rooms)}
        </Row>
        {/* <Row gutter={16}>
          <Col span={8}>
            <CardMeta data="test"/>
          </Col>
          <Col span={8}><CardMeta />
          </Col>
          <Col span={8}><CardMeta />
          </Col>
        </Row> */}
      </div>
    </div>
  </div>
);
