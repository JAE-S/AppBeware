// Import React + Reoters + PropTypes
// =========================================================
  import React, {Component, lazy, Suspense} from "react";
  import { Route, Switch } from 'react-router'
// Import CSS
// =========================================================
  // import "./assets/styling/reset.css"
  import "./assets/styling/appStyle.css"
// Import Components
// =========================================================  
  import Loading from './components/Loading'
// Import Pages
// =========================================================  
  const SplashPage = lazy(() => import('./pages/SplashPage'));
  const Homepage = lazy(() => import('./pages/Homepage'));
  const ProfilePage = lazy(() => import('./pages/ProfilePage'));
  const CategoryPage = lazy(() => import('./pages/CategoryPage'));
  const AppPage = lazy(() => import('./pages/AppPage'));
  const Disclaimer = lazy(() => import('./pages/Disclaimer'));

 // Render Loading placeholder
// =========================================================
  const renderLoader = () => <Loading/>;

// App Routes
// =========================================================
  class App extends Component {
    
    render(){
        return ( 
            <>
              <Switch>
                <Suspense fallback={renderLoader()}>
                  <Route exact path="/" component={SplashPage} />
                  <Route  path="/homepage" component={Homepage} />
                  <Route exact path="/categoryPage" component={CategoryPage} />
                  <Route exact path="/appPage" component={AppPage} />
                  <Route  path="/profilePage" component={ProfilePage} />
                  <Route exact path="/disclaimer" component={Disclaimer} />
                </Suspense>
              </Switch>
            </>
        )
    }
  }

  export default App; 
