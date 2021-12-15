import React, { useState } from "react";
import { Modal, Button } from "antd";
import styled from "@emotion/styled";

const ButtonModal = styled(Button)`
  border: 1px solid #6f00a3;
  color: #6f00a3;
  background: transparent !important;
  border-radius: 10px;
  &:hover {
    background: #6f00a3 !important;
    border: 1px solid #6f00a3;
    color: #fff;
  }
  &:focus {
    background: #6f00a3 !important;
    border: 1px solid #6f00a3;
    color: #fff;
  }
`;

function Modals() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <ButtonModal type="primary" onClick={showModal}>
        Members
      </ButtonModal>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h3>Members</h3>
        <p className="labels-p">
          name:<span className="user">Juan Camilo Zúñiga Pacheco</span>Cod:
          <span className="user">2019214011</span>
        </p>
        <p className="labels-p">
          name:<span className="user">Daniel Jose Lobo Ramos </span>Cod:
          <span className="user">2018114038</span>
        </p>
        <p className="labels-p">
          name:<span className="user">Carla Teresina Viggiano Arévalo</span>Cod:
          <span className="user">2017214086</span>
        </p>
      </Modal>
    </>
  );
}

export default Modals;
