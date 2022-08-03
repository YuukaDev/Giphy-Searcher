import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Content />
    </QueryClientProvider>
  );
}

export default App;