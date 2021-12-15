import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import InputGramatical from "../../components/InputGramatical";
import { Row, Card, Col } from "antd";
import styled from "@emotion/styled";
import {
  EditOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Modals from "../../components/Modals";

const RowCalculator = styled(Row)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ColLeft = styled(Col)`
  width: 30%;
`;

const ColRight = styled(Col)`
  width: 70%;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Cards = styled(Card)`
  height: 240px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 2px #6f00a3;
`;

const Home = () => {
  const [forms, setForm] = useState({
    trigonometricFunction: "",
  });

  const [bollean, setBollean] = useState(true);

  const { trigonometricFunction } = forms;

  const onChangeGrammar = (e) => {
    setForm({
      ...forms,
      [e.target.name]: e.target.value,
    });
  };

  const onClickChangeGrammar = (e) => {
    e.preventDefault();
    if (trigonometricFunction.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Write a function",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Ok",
        text: "Wait a moment please...",
      });
    }
  };

  function Stack() {
    this.items = [];
    this.elements = 0;
    this.push = push;
    this.pop = pop;
    this.isEmpty = isEmpty;
    this.peek = peek;
    this.size = size;

    function push(item) {
      this.items.push(item);
      this.elements++;
    }

    function pop() {
      if (this.elements > 0) {
        this.elements--;
        return this.items.pop();
      }
    }

    function peek() {
      return this.items[this.elements - 1];
    }

    function isEmpty() {
      return this.elements === 0;
    }

    function size() {
      return this.elements;
    }
  }

  function balanced(sequence) {
    /*     Escribir una pila que lea un string lleno de parentesis, brackets, corchetes y determinar
         si está balanceado o no. Decimo que esta balanceado cuando para cada parentesisi, bracket,
         corchete existe su par que lo cierra.
         Ejemplo:
         {} -- true
         [[]] -- true
         [()]{}{[()()]()} -- true
         [(())] -- true
         [(] -- false
         ][] -- false
         [[[[)]]]] -- false */
    var open = "{[(",
      close = "}])";
    var balance = [0, 0, 0];
    let evals = new Stack();

    for (var i = 0; i < sequence.length; i++) {
      evals.push(sequence[i]);
    }

    for (var j = 0; j < evals.size(); j++) {
      if (open.indexOf(evals.items[j]) !== -1) {
        balance[open.indexOf(evals.items[j])]++;
      } else {
        balance[close.indexOf(evals.items[j])]--;
      }
      if (balance[0] < 0 || balance[1] < 0 || balance[2] < 0) {
        setBollean(false);
        return false;
      }
    }
    if (balance[0] === 0 && balance[1] === 0 && balance[2] === 0) {
      setBollean(true);
      return true;
    }
    setBollean(false);
    return false;
  }

  let numbres = forms.trigonometricFunction;

  useEffect(() => {
    balanced(numbres);
        // eslint-disable-next-line
  }, [numbres]);

  console.log(bollean);
  console.log(forms);

  return (
    <>
      <RowCalculator className="rowss">
        <ColLeft span={11}>
          <div className="image-calculator"></div>
        </ColLeft>

        <ColRight span={13}>
          <Cards>
            <h1 className="h1-title">Trigonometric Function</h1>
            <InputGramatical
              onChangeGrammar={onChangeGrammar}
              onClickChangeGrammar={onClickChangeGrammar}
              forms={forms}
            />

            <div>
              {numbres.length === 0 ? (
                <span className="text-default">
                  <EditOutlined /> Please write a text
                </span>
              ) : !bollean ? (
                <span className="error">
                  <CloseCircleOutlined /> Please write a valid trigonometric
                  function
                </span>
              ) : (
                <span className="ok">
                  <CheckCircleOutlined />
                  {numbres}
                </span>
              )}
            </div>

            <div className="modals-button">
              <Modals />
            </div>
          </Cards>
        </ColRight>
      </RowCalculator>
    </>
  );
};

export default Home;
