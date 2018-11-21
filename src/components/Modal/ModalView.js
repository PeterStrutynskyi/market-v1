import React from 'react';

import PT from 'prop-types';
import styled from "styled-components";

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  font-size: 40px;
  background: transparent;
  border: sienna;
  color: #afacac;
  height: 30px;
  line-height: 0;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 22px;
  color: rgb(0, 0, 0);
  line-height: 1.308;
  margin: 0;
`;


const ModalView = ({
  back,
  title,
  children,
}) => (

    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        onClick = {(e) => e.stopPropagation()}
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <CloseButton type="button" onClick={ back }>
          &times;
        </CloseButton>
        <Title>{ title }</Title>
        { children }
      </div>
    </div>
);

ModalView.propTypes = {
  back: PT.func.isRequired,
  title: PT.string.isRequired,
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ]).isRequired
};

export default ModalView;