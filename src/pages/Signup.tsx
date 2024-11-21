import { IonContent, IonPage, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Signup.css';

const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <div className="flex-center">
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle color="custom-tab-bar">Sign Up</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Sign up elements here</IonCardContent>
                <IonButton fill="clear">Sign Up</IonButton>
                <IonCardContent>Already have an account? Login!</IonCardContent>
            </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Signup;