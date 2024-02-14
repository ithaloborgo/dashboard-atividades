import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Clientes = ({ clientes }) => {
    const clientesData = [
        // Your client data here, e.g.
        { name: 'Loja', status: 'active' },
      ];
  const clientesStatusColors = {
    active: 'success',
    inactive: 'danger',
    expired: 'warning',
  };

  

  return (
    <Container>
      <Row>
        {clientes.map((clientes, index) => (
          <Col key={clientes.name + index} sm={4} md={3} lg={2} className="mb-4">
            <ClientesItem clientes={clientes} statusColor={clientesStatusColors[clientes.status]} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const ClientesItem = ({ clientesData, statusColor }) => {
  return (
    <div className="d-flex align-items-center">
      <span
        className={`circle-indicator bg-${statusColor} me-3`}
      ></span>
      <span>{client.name}</span>
    </div>
  );
};



export default Clientes;