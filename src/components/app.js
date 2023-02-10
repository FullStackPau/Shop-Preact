import { h } from "preact";
import { Router } from "preact-router";

import { QueryClient, QueryClientProvider } from "react-query";

import Header from "./header";

// Code-splitting is automated for `routes` directory

import Layout from "./Layout";
import Home from "../routes/home";
import Details from "../routes/details";

const queryClient = new QueryClient();

function App() {
  return (
    <div id="app">
      <QueryClientProvider client={queryClient}>
        <Layout>
          <main>
            <Router>
              <Home path="/" />
              <Details path="/details/:id" />
            </Router>
          </main>
        </Layout>
      </QueryClientProvider>
    </div>
  );
}

export default App;
