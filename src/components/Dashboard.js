import React, { useState } from 'react';

const Dashboard = () => {
  const [activities, setActivities] = useState({
    walking: null,
    running: null,
    swimming: null,
    meditation: null,
  });

  const handleWalking = (e) => {
    e.preventDefault();
    const distance = parseFloat(e.target.distance.value);
    const calories = distance * 50; // Example: 50 calories per km
    setActivities((prev) => ({ ...prev, walking: { distance, calories, quote: 'Amazing job today' } }));
  };

  const handleRunning = (e) => {
    e.preventDefault();
    const distance = parseFloat(e.target.distance.value);
    const calories = distance * 100; // Example: 100 calories per km
    setActivities((prev) => ({ ...prev, running: { distance, calories, quote: 'Amazing job today' } }));
  };

  const handleSwimming = (e) => {
    e.preventDefault();
    const duration = parseFloat(e.target.duration.value);
    const calories = duration * 7; // Example: 7 calories per minute
    setActivities((prev) => ({ ...prev, swimming: { duration, calories, quote: 'Amazing job today' } }));
  };

  const handleMeditation = (e) => {
    e.preventDefault();
    const duration = parseFloat(e.target.duration.value);
    const calories = duration * 1; // Example: 1 calorie per minute
    setActivities((prev) => ({ ...prev, meditation: { duration, calories, quote: 'Amazing job today' } }));
  };

  const renderSummary = () => {
    const rows = [];
    if (activities.walking) {
      rows.push(
        <tr key="walking">
          <td>Walking</td>
          <td>{activities.walking.distance} km</td>
          <td>{activities.walking.calories} kcal</td>
          <td>{activities.walking.quote}</td>
        </tr>
      );
    }
    if (activities.running) {
      rows.push(
        <tr key="running">
          <td>Running</td>
          <td>{activities.running.distance} km</td>
          <td>{activities.running.calories} kcal</td>
          <td>{activities.running.quote}</td>
        </tr>
      );
    }
    if (activities.swimming) {
      rows.push(
        <tr key="swimming">
          <td>Swimming</td>
          <td>{activities.swimming.duration} min</td>
          <td>{activities.swimming.calories} kcal</td>
          <td>{activities.swimming.quote}</td>
        </tr>
      );
    }
    if (activities.meditation) {
      rows.push(
        <tr key="meditation">
          <td>Meditation</td>
          <td>{activities.meditation.duration} min</td>
          <td>{activities.meditation.calories} kcal</td>
          <td>{activities.meditation.quote}</td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.dashboardTitle}>Welcome to Your Dashboard</h1>
      <p style={styles.dashboardText}>This is where you can track your fitness progress.</p>

      <div style={styles.formContainer}>
        <form style={styles.form} onSubmit={handleWalking}>
          <h3>Walking</h3>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="walkingDistance">Distance (km)</label>
            <input style={styles.input} type="number" id="walkingDistance" name="distance" step="0.01" required />
          </div>
          <button style={styles.button} type="submit">Submit</button>
        </form>

        <form style={styles.form} onSubmit={handleRunning}>
          <h3>Running</h3>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="runningDistance">Distance (km)</label>
            <input style={styles.input} type="number" id="runningDistance" name="distance" step="0.01" required />
          </div>
          <button style={styles.button} type="submit">Submit</button>
        </form>

        <form style={styles.form} onSubmit={handleSwimming}>
          <h3>Swimming</h3>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="swimmingDuration">Duration (min)</label>
            <input style={styles.input} type="number" id="swimmingDuration" name="duration" step="1" required />
          </div>
          <button style={styles.button} type="submit">Submit</button>
        </form>

        <form style={styles.form} onSubmit={handleMeditation}>
          <h3>Meditation</h3>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="meditationDuration">Duration (min)</label>
            <input style={styles.input} type="number" id="meditationDuration" name="duration" step="1" required />
          </div>
          <button style={styles.button} type="submit">Submit</button>
        </form>
      </div>

      <h3>Activity Summary</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Detail</th>
            <th>Calories Burned</th>
            <th>Quote</th>
          </tr>
        </thead>
        <tbody>
          {renderSummary()}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    padding: '20px',
    textAlign: 'center',
  },
  dashboardTitle: {
    fontSize: '32px',
    color: '#142d4c',
  },
  dashboardText: {
    fontSize: '18px',
    color: '#666',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  form: {
    marginBottom: '20px',
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#142d4c',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#142d4c',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  table: {
    marginTop: '20px',
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    borderBottom: '2px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  },
  td: {
    borderBottom: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  },
};

export default Dashboard;
