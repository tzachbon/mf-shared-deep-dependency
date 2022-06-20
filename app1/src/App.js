import React, { useState } from 'react';
import { getUUID } from 'lib';
import { v4 } from 'uuid';

const App = () => {
  const [uuid, setUuid] = useState(() => v4());

  return (
    <>
      <h1>{uuid}</h1>
      <button onClick={() => setUuid(getUUID())}>new uuid</button>
    </>
  );
};

export default App;
