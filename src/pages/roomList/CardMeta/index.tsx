import React from "react";
import styles from "./index.less";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";

interface Room {
  number: Int16Array,
  price: Float32Array,
}
const { Meta } = Card;
export default (props:{room: Room}) => (
  
  <div className={styles.container}>
    <div id="components-card-demo-meta">
      <Card
        style={{ width: 300 }}
        cover={
          <div>
            <p>Room Number: {props.room.price}</p>
          </div>
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />
        ]}
      >
        <Meta
          title={props.room.number}
          description="This is the description"
        />
      </Card>
    </div>
  </div>
);
