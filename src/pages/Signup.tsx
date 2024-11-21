import { IonContent, IonPage, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonInput } from '@ionic/react';
import './Signup.css';

const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <div className="flex-center">
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Sign Up</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonInput label="Email" labelPlacement="stacked" type="email" placeholder="email@domain.com"></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput label="Password" labelPlacement="stacked" type="password" value="password"></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput label="Password Confirmation"
                    labelPlacement="stacked" type="password" value="password"></IonInput>
                  </IonItem>
                  <IonButton fill="solid" expand="full">Sign Up</IonButton>
                  <IonCardSubtitle>Already have an account? Login!</IonCardSubtitle>
                </IonCardContent>
            </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Signup;