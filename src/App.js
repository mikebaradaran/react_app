import { Route, Routes } from 'react-router-dom';
import Blogs from './Blogs';
import MainNavigation from './MainNavigation';
import NewBlog from './NewBlog';
import NotFound from './NotFound';
import { AppContext } from './context';
import { useState } from 'react';
import QAPics from './QAPics';

function App() {
  const [ age, setAge ] = useState(42);
  return (
    <div>
      <AppContext.Provider value={{age}}>
        <MainNavigation />
        <Routes>
          <Route path='/' element={<Blogs />} />
          <Route path="/new-blog" element={<NewBlog />} />
          <Route path="/new" element={<NewBlog />} />
          <Route path="/qa/pics/:id" element={<QAPics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </div>
  )
}

export default App;
