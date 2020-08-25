import React, { useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import RecipesContext from '../Context';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const ExplorarReceita = () => {
  const { requestRandom, idDetail, setPageName,
    setIdDetail, setStopFetching, setVisibleSearch,
  } = useContext(RecipesContext);
  useEffect(() => () => { setIdDetail(''); }, []);
  console.log(window.location.href)
  return (
    <div><Header /><div className="containExplore">
      <Link className="exploreLinks" to={`${window.location.href.includes('comidas')?'comidas':'bebidas'}/ingredientes`}>
        <button className="exploreButtons" onClick={() => setPageName('Explorar Ingredientes')} data-testid="explore-by-ingredient" type="button">Por Ingredientes</button></Link>
      {window.location.href.includes('comidas') && <Link className="exploreLinks" to="/explorar/comidas/area">
        <button
          className="exploreButtons"
          onClick={() => {
            setStopFetching(false);
            setPageName('Explorar Origem');
            setVisibleSearch(false);
          }}
          data-testid="explore-by-area"
          type="button"
        >Por Local de Origem</button></Link>}
      <div className="exploreLinks">
        <button
          className="exploreButtons"
          data-testid="explore-surprise"
          onClick={requestRandom}
          type="button"
        >Me surpreenda!</button></div></div>
      {(idDetail !== '') && <Redirect to={`/receitas/${window.location.href.includes('comidas')?'comidas':'bebidas'}/${idDetail}`} />}
      <Footer /></div>
  );
};

export default ExplorarReceita;
