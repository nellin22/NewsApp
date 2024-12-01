import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Welcome.css';

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="custom-tab-bar">
            <IonTitle size="large">Welcome page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Welcome page" />
      </IonContent>
    </IonPage>
  );
};
export default Welcome;