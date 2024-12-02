import { Redirect, Route } from 'react-router-dom';
import { IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { newspaper, search, person } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Welcome from './pages/Welcome';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Routes without tabs */}
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        {/* Routes with Tabs */}
        <Route path="/tabs">
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/tabs/welcome">
                <Welcome />
              </Route>
              <Route exact path="/tabs/tab1">
                <Tab1 />
              </Route>
              <Route exact path="/tabs/tab2">
                <Tab2 />
              </Route>
              <Route exact path="/tabs/tab3">
                <Tab3 />
              </Route>
              <Redirect exact from="/tabs" to="/tabs/welcome" />
            </IonRouterOutlet>
            <IonTabBar slot="bottom" color="primary">
              <IonTabButton tab="tab1" href="/tabs/tab1">
                <IonIcon aria-hidden="true" icon={newspaper} />
                <IonLabel>News Page</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tabs/tab2">
                <IonIcon aria-hidden="true" icon={search} />
                <IonLabel>Search</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tabs/tab3">
                <IonIcon aria-hidden="true" icon={person} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </Route>
        <Redirect exact from="/" to="/login" />
        <Redirect to="/login" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;