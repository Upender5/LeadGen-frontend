import React from 'react';

function LeadTable({ leads }) {
  return (
    <div>
      <h2>Leads</h2>
      {leads.length === 0 ? (
        <p>No leads available. Add some leads using the form above!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Source</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index}>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.source}</td>
                <td>{lead.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LeadTable;
