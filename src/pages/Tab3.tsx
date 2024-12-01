import { IonContent,
  IonPage,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem, } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="flex-center">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>My Profile</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            <div className="profile-item">
              <span className="label">Name:</span> <span className="value">Jane Doe</span>
            </div>
            <div className="profile-item">
              <span className="label">Email:</span> <span className="value">jane.doe@example.com</span>
            </div>
            <div className="profile-item">
  <           span className="label">Joined:</span> <span className="value">1.12.2024</span>
            </div>
              <IonButton fill="solid" expand="full">
                Edit Profile
              </IonButton>
              <IonButton fill="solid" expand="full">
                Notifications
              </IonButton>
              <IonButton fill="solid" expand="full">
                Settings
              </IonButton>
              <IonButton fill="solid" expand="full">
                It support
              </IonButton>
              <IonButton fill="outline" expand="full">
                Logout
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
