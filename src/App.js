import React from 'react';
import Sidebar from './Sidebar';
import Articles from './Articles';
import ArticleDetail from './ArticleDetail';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import articlesData from './articlesData.json';
import { useParams } from 'react-router-dom';

function ArticleDetailWrapper() {
  const { id } = useParams();
  const article = articlesData.find((a) => String(a.id) === id);
  return <ArticleDetail article={article} />;
}
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutWithSidebar />}>
            <Route index element={<Articles articlesData={articlesData} />} />
          </Route>
          <Route path="/article/:id" element={<ArticleDetailWrapper />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

const LayoutWithSidebar = () => (
  <div className="App">
    <Sidebar />
  </div>
);

export default App;
