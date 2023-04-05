import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants/routes';
import { useAppDispatch } from './hooks/hooks';
import { fetchNews } from './store/news/newsSlice';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import NewsPosts from './components/News/News';
import Cell from './components/Cell/Cell';
import Footer from './components/Footer/Footer';

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchNews())

  }, [dispatch])
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />}></Route>
        <Route path={ROUTES.NEWS} element={<NewsPosts />}></Route>
        <Route path={ROUTES.CELL} element={<Cell />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
