import React from "react";
import { Input } from "antd";
import styled from "@emotion/styled";
import { EditOutlined } from '@ant-design/icons';

const Inputs = styled(Input)`
  border-radius: 5px;
  width: 100%;
  margin-top:10px;
  
`;

function InputGramatical({ onChangeGrammar,  forms }) {
  const { trigonometricFunction } = forms;

  let number = forms.trigonometricFunction.length;
  console.log(number);

  return (
    <>
      <div className="divs-inputs">
        <Inputs
          maxLength={30}
          onChange={onChangeGrammar}
          name="trigonometricFunction"
          value={trigonometricFunction}
          placeholder="Write a trigonometric function"
          suffix={<EditOutlined />}
        />
      </div>

      <div className="div-sum">
        <span className="span-container">{number}/30</span>
      </div>
    </>
  );
}

export default InputGramatical;
