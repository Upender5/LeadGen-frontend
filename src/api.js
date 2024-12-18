import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; 

// Fetch analytics data (visits and visitor behavior)
export async function fetchAnalyticsData() {
  const response = await axios.get(`${API_BASE_URL}/analytics-data`);
  return response.data;
}

// Add a new lead
export async function addLead(lead) {
  const response = await axios.post(`${API_BASE_URL}/add-lead`, lead);
  return response.data;
}
