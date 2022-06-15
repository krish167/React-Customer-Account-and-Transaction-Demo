//import React, { useEffect, useState } from 'react';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import transaction1 from './data/transactions-1.json';
import transaction2 from './data/transactions-2.json';
import transaction3 from './data/transactions-3.json';
import transaction4 from './data/transactions-4.json';

const AccTransaction = (params) => {
  const navigate = useNavigate();
  const backLabel = `<< Back`;
  let transactions;
  let getAccountNo = params && params.getAccountNo ? params.getAccountNo : '';

  // demo purpose code
  if (getAccountNo === '342423455344') {
    transactions = transaction1;
  } else if (getAccountNo === '156478245') {
    transactions = transaction2;
  } else if (getAccountNo === '945783554') {
    transactions = transaction3;
  } else if (getAccountNo === '1751355') {
    transactions = transaction4;
  }

  // API call to get the transaction response based on the account number input (getAccountNo)

  const renderListItem = transItem => {
    return Object.keys(transItem)
      .map((key,val) => {
        return (
          <div key={key} className="ms-12 me-auto">
            <div className="fw-bold">{key}</div>
            {transItem[key]}
          </div>
      );
      });
  };

  function renderListData(transactions) {
    return transactions.map((transItem, index) => {
      return (
        <ListGroup.Item
          variant="light"
          key={transItem.id}
          as="li"
          className="justify-content-left align-items-start"
        >
        {renderListItem(transItem)}
        </ListGroup.Item>
      );
    });
  }

  const backClick = () => {
    navigate("/");
  }

  return (
    <Container>
      <Row>    
        <Col sm={1}>
          <div className="backIcon" onClick={backClick}>{backLabel}</div> 
        </Col>
        <Col sm={11}>
          <div>
            <ListGroup as="ol" numbered>
              {transactions && (
                renderListData(transactions)
              )}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
    
  );
};


AccTransaction.propTypes = {
  transactions: PropTypes.array
};


export default AccTransaction;
