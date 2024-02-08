import React from 'react';
import Card from 'react-bootstrap/Card';


function SupervisorCards() {
  return (
    <div className="cards container d-flex gap-3">
        <div className="card1">
            <Card style={{ width: '18rem' }}>
                <Card.Body style={{borderTop:"5px solid #0DCAF0", borderRadius:"5px"}}>
                    <Card.Title>Orders</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
        <div className="card2">
            <Card style={{ width: '18rem' }}>
                <Card.Body style={{borderTop:"5px solid #0DCAF0", borderRadius:"5px"}}>
                    <Card.Title>Sales</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
        <div className="card3">
            <Card style={{ width: '18rem' }}>
                <Card.Body style={{borderTop:"5px solid #0DCAF0", borderRadius:"5px"}}>
                    <Card.Title>Sales</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
  </div>
  )
}

export default SupervisorCards
