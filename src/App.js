import React, { useEffect, useState } from "react";
import Inscription from "./view/inscription/Inscription";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./view/home/Home";
import MarketPlace from "./view/marketplace/MarketPlace";
import Connexion from "./common/components/Connexion";
import UserContext from "./context/user";
import axios from "axios";
import AddFlat from "./view/addflat/AddFlat";
import Contact from "./view/Contact";
import Profil from "./view/profil/components/Profil";
import UnicFlatCard from "./view/UnicFlatCard/UnicFlatCard";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { CssBaseline } from "@material-ui/core";

function App() {
  const [connectedUser, setConnectedUser] = useState({});

  useEffect(() => {
    const connectUser = async () => {
      const accessToken = localStorage.getItem('userToken');
      if (accessToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };

        const userProfile = await axios.get(
          'http://toctoc-api.herokuapp.com/users/profile',
          config
        );

        setConnectedUser(userProfile.data);
      }
    };

    connectUser();
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <UserContext.Provider value={{ connectedUser, setConnectedUser }}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main>
                <Home />
              </Main>
            )}
          />
          <Route
            exact
            path="/marketplace"
            render={() => (
              <Main>
                <MarketPlace />
              </Main>
            )}
          />
          <Route
            exact
            path="/connexion"
            render={() => (
              <Main>
                <Connexion />
              </Main>
            )}
          />
          <Route
            exact
            path="/inscription"
            render={() => (
              <Main>
                <Inscription />
              </Main>
            )}
          />
          <Route
            exact
            path="/flat"
            render={(matchProps) => (
              <Main>
                <AddFlat {...matchProps} />
              </Main>
            )}
          />
          <Route
            exact
            path="/flat/:id"
            render={(matchProps) => (
              <Main>
                <AddFlat {...matchProps} />
              </Main>
            )}
          />
          <Route
            exact
            path="/contact"
            render={() => (
              <Main>
                <Contact />
              </Main>
            )}
          />
          <Route
            exact
            path="/profil"
            render={() => (
              <Main>
                <Profil />
              </Main>
            )}
          />
          <Route
            exact
            path="/contact"
            render={() => (
              <Main>
                <Contact />
              </Main>
            )}
          />
          <Route
            exact
            path="/unic/:id"
            render={(matchProps) => (
              <Main>
                <UnicFlatCard  {...matchProps}/>
              </Main>
            )}
          />
        </Switch>
      </Router>
    </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
