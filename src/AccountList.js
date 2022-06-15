//import React, { useEffect, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import './App.css';
import Table from 'react-bootstrap/Table'
import accounts from './data/accounts.json';

const AccountList = (params) => {  
  const navigate = useNavigate();
  //const [setAccountData, accountData] = useState(accounts);
  const rowHeader = {
    "id": '',
    "account_name": "",
    "account_type": "",
    "balance": '',
    "currency": "",
    "account_number": "",
    "is_active": ""
  }

  // API call to get the accounts response 
  // useEffect(() => {
  //   // let url = '';
  //   // let payloadData = {};
  //   // API.post(url, payloadData)
  //   //   .then(res => {
  //   //     console.log('response ', res);
  //   //   })
  //   //   .catch(error => {
  //   //     if (error) {
  //   //       console.log('error ', error);
  //   //     }
  //   //   });
  //   setAccountData(accountData);
  // },[accounts])

  const renderTableRow = row => {
    return Object.keys(row)
      .sort((a, b) => sortBy.indexOf(a) - sortBy.indexOf(b))
      .map((key,val) => {
        return (
          <td key={key}>
            {key === 'is_active' && (
              <div>
                {key === 'is_active' && row[key] === true ? 'Active' : 'Inactive'}
              </div>
            )}
            {key !== 'is_active' && (
            <div>
              {row[key]}
            </div>
            )}
          </td>
        );
      });
  };

  const handleRowClick = (rowItem) => {
    let selectedAcNo = rowItem && rowItem.account_number ? rowItem.account_number : null;
    params.setAccountNo(selectedAcNo);
    navigate("/transaction");
  };

  function renderTableData(accounts) {
    return accounts.map((row, index) => {
      return (
        <tr
          className={'row-style01'}
          key={row.id}
          onClick={() => handleRowClick(row)}
        >
          {renderTableRow(row)}
        </tr>
      );
    });
  }

  function renderTablePlaceholder() {
    return (
      <tr className="table-placeholder">
        <td>No data available in table</td>
      </tr>
    );
  }

  const sortBy = [
    'id',
    'account_name',
    'account_type',
    'account_number',
    'currency',
    'balance',
    'is_active'
  ];
  
  const renderTableHeader = headerInfo => {
    return Object.keys(headerInfo)
      .sort((a, b) => sortBy.indexOf(a) - sortBy.indexOf(b))
      .map(key => {
        return (
          <th key={key}>
            <div className="table__title">{key}</div>
          </th>
        );
      });
  };

  return (
    <div>
    <Container>
      <Row>    
        <Col sm={12}>
          <div className="AccountList">
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  {renderTableHeader(rowHeader)}
                </tr>
              </thead>
              <tbody>
                {accounts ? (
                  renderTableData(accounts)
                ) : (
                  renderTablePlaceholder()
                )}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};


AccountList.propTypes = {
  accounts: PropTypes.array
};


export default AccountList;
