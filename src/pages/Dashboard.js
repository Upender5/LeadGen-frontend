import React, { useEffect, useState } from 'react';
import { fetchAnalyticsData, addLead } from '../api';
import Charts from '../components/Charts';
import LeadTable from '../components/LeadTable';

function Dashboard() {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', source: '' });
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    async function loadAnalyticsData() {
      const analytics = await fetchAnalyticsData();
      setAnalyticsData(analytics);
    }
    loadAnalyticsData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeadForm({ ...leadForm, [name]: value });
  };

  const handleAddLead = async (e) => {
    e.preventDefault();
    try {
      const newLead = await addLead(leadForm);
      setLeads([...leads, newLead]);
      setLeadForm({ name: '', email: '', source: '' }); // Clear the form
      alert('Lead added successfully!');
    } catch (error) {
      console.error('Error adding lead:', error);
      alert('Failed to add lead.');
    }
  };

  if (!analyticsData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Analytics Dashboard</h1>

      {/* Display Charts */}
      <Charts analyticsData={analyticsData} />

      {/* Display Lead Table */}
      <LeadTable leads={leads} />

      {/* Lead Form */}
      <div>
        <h2>Add a Lead</h2>
        <form onSubmit={handleAddLead}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={leadForm.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={leadForm.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Source: </label>
            <select
              name="source"
              value={leadForm.source}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Source</option>
              <option value="Organic">Organic</option>
              <option value="Paid">Paid</option>
              <option value="Referral">Referral</option>
            </select>
          </div>
          <button type="submit">Add Lead</button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
