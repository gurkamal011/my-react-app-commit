import { Container, Row, Col } from 'react-bootstrap';

const UserDashboard = () => {
    return (
        <Container>
          <h1>Welcome to Your Dashboard</h1>
          <Row>
            <Col md={4}>
              {/* Total Expenses Card */}
              <div className="summary-card">Total Expenses: $0</div>
            </Col>
            <Col md={4}>
              {/* Total Income Card */}
              <div className="summary-card">Total Income: $0</div>
            </Col>
            <Col md={4}>
              {/* Savings Card */}
              <div className="summary-card">Total Savings: $0</div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              {/* Chart Component */}
              <div className="chart-container">Chart goes here</div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              {/* Recent Transactions */}
              <div className="recent-transactions">Recent Transactions</div>
            </Col>
          </Row>
        </Container>
      );
}
export default UserDashboard;