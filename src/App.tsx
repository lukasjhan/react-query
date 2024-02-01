import React from 'react';
import { QueryClient, useQuery } from '@tanstack/react-query';

const queryClient = new QueryClient();

function fetchData() {
  return fetch('http://localhost:3000').then((res) => res.text());
}

function TestComponent() {
  const { data, isFetching } = useQuery(
    {
      queryKey: ['number'],
      queryFn: fetchData,
      //refetchInterval: 1000,
      staleTime: 3000, // 5 seconds stale time
      gcTime: 10000, // 30 seconds cache time
    },
    queryClient
  );

  if (isFetching) return <div>Loading...</div>;

  return <div>Data: {data}</div>;
}

function App() {
  const [showComponent, setShowComponent] = React.useState(true);

  return (
    <div>
      <button onClick={() => setShowComponent(!showComponent)}>
        Toggle Component
      </button>
      {showComponent && <TestComponent />}
    </div>
  );
}

export default App;
