import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './MemberDetails.css';

const MemberDetails = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/members/${id}`);
        setMember(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch member details');
        setLoading(false);
        console.error(err);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading member details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <Link to="/members" className="back-btn">
          Back to Members
        </Link>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="not-found-container">
        <h2>Member Not Found</h2>
        <Link to="/members" className="back-btn">
          Back to Members
        </Link>
      </div>
    );
  }

  return (
    <div className="member-details-container">
      <div className="member-details-card">
        <div className="member-header">
          <div className="member-image">
            <img
              src={`http://localhost:5000/uploads/${member.image}`}
              alt={member.name}
            />
          </div>
          <div className="member-title">
            <h1>{member.name}</h1>
            <p className="role">{member.role}</p>
          </div>
        </div>

        <div className="member-info">
          <div className="info-section">
            <h3>Contact Information</h3>
            <p className="email">
              <span className="label">Email:</span>
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </p>
          </div>

          <div className="action-buttons">
            <Link to="/members" className="back-btn">
              Back to Members
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
