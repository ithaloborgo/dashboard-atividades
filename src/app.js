
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ContentTeste from './Components/Content_teste';
import Clientes from './Components/Clientes';

function App() {
  const [currentComponent, setCurrentComponent] = useState('content_teste');

  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };

  const renderCurrentComponent = () => {
    switch (currentComponent) {
      case 'content_teste':
        return <ContentTeste />;
      case 'clientes':
        return <Clientes />;
      default:
        return <ContentTeste />;
    }
  };

  return (
    <div>
      <Sidebar onComponentChange={handleComponentChange} />
      {renderCurrentComponent()}
    </div>
  );
};

export default App;