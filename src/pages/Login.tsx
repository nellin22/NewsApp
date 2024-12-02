import { IonContent,
    IonPage,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonInput } from '@ionic/react';
  import { useHistory } from 'react-router-dom';
  import './Signup.css';
  
  const Login: React.FC = () => {
    const history = useHistory();
  
    const handleLogin = () => {
      history.push('/welcome');
    };
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
                      <IonInput label="Email"
                      labelPlacement="stacked"
                      type="email"
                      placeholder="email@domain.com"></IonInput>
                    </IonItem>
                    <IonItem>
                      <IonInput label="Password"
                      labelPlacement="stacked"
                      type="password"
                      value="password"></IonInput>
                    </IonItem>
                    <IonButton fill="solid" expand="full" onClick={handleLogin}>Login</IonButton>
                    <IonCardSubtitle>Forgot Password?</IonCardSubtitle>
                    <IonCardSubtitle>Already have an account? Sign up!</IonCardSubtitle>
                  </IonCardContent>
              </IonCard>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  export default Login;