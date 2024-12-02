import { IonContent,
    IonPage,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonInput,
    IonRouterLink } from '@ionic/react';
  import { useHistory } from 'react-router-dom';
  import './Signup.css';
  
  const Login: React.FC = () => {
    const history = useHistory();
  
    const handleLogin = () => {
      history.push('/tabs/welcome');
    };
    return (
      <IonPage>
        <IonContent fullscreen>
        <div className="flex-center">
              <IonCard>
                  <IonCardHeader>
                      <IonCardTitle>Login</IonCardTitle>
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
                    <IonCardSubtitle>
                      <IonRouterLink routerLink="/signup">Don't have an account? Sign up!</IonRouterLink>
                    </IonCardSubtitle>
                  </IonCardContent>
              </IonCard>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  export default Login;