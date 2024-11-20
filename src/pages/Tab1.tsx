import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>News Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="custom-tab-bar">
            <IonTitle size="large">News Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="News Page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
