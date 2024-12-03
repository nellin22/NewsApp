import { IonContent, IonHeader, IonPage } from '@ionic/react';
import './Welcome.css';

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
      <div className="welcome-container">
      <h1 className="welcome-text">Welcome to the News App</h1>
      <p>Get familiar with the latest news!</p>
          <img
            src="/Welcome-image.png"
            alt="Welcome"
            className="welcome-image"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Welcome;