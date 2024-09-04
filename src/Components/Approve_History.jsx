

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';

function ApproveHistory() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRecentApproval();
  }, []);

  const fetchRecentApproval = () => {
    setLoading(true);
    axios.get('http://localhost:8081/getRecentApproval')
      .then(response => {
        if (response.data.Status) {
          setData(response.data.Result);
        } else {
          setError(response.data.Error);
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value.trim();
    if (searchValue) {
      setLoading(true);
      axios.get('http://localhost:8081/getLeaveDetails', {
        params: { search: searchValue }
      })
        .then(response => {
          if (response.data.Status) {
            setData(response.data.Result);
          } else {
            setError(response.data.Error);
          }
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setError('Please enter a valid ID or Name');
    }
  };

  return (
    <div className='approve-history-container'>
      <div className='header'>
        <h3>Approval History</h3>
      </div>

      <p className='intro-text'>
        Track the approval status of your leave requests with ease. This dashboard provides a comprehensive view of your approval history, enabling you to search and review past decisions quickly.
      </p>

      <form onSubmit={handleSearch} className='search-form'>
        <input
          type='text'
          name='search'
          placeholder='Search by ID or Name'
          className='search-input'
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>

      {error && <p className='error-message'>{error}</p>}

      {loading ? (
        <div className='loading'>
          <div className='spinner'></div>
          <p className='loading-message'>Loading approval data...</p>
        </div>
      ) : (
        <div className='data-box'>
          {data ? (
            Array.isArray(data) ? (
              data.map((item, index) => (
                <div key={index} className='data-card'>
                  <div className='card-header'>
                    <h4>{item.Name}</h4>
                    <p><strong>Status:</strong> {item.Status}</p>
                  </div>
                  <div className='card-body'>
                    <p><strong>Type:</strong> {item.Type}</p>
                    <p><strong>Start Date:</strong> {item.Sdate}</p>
                    <p><strong>End Date:</strong> {item.Edate}</p>
                    <p><strong>Reason:</strong> {item.Reason}</p>
                    <p><strong>Email:</strong> {item.Mail}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className='data-card'>
                <div className='card-header'>
                  <h4>{data.Name}</h4>
                  <p><strong>Status:</strong> {data.Status}</p>
                </div>
                <div className='card-body'>
                  <p><strong>Type:</strong> {data.Type}</p>
                  <p><strong>Start Date:</strong> {data.Sdate}</p>
                  <p><strong>End Date:</strong> {data.Edate}</p>
                  <p><strong>Reason:</strong> {data.Reason}</p>
                  <p><strong>Email:</strong> {data.Mail}</p>
                </div>
              </div>
            )
          ) : (
            <p className='no-data-message'>No approval history found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ApproveHistory;
