import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonImg,
  IonButton,
} from '@ionic/react';
import axios from 'axios';
import './Tab2.css';

interface Article {
  source: {
    name: string;
  };
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
}

const API_KEY = '01d88bddeb73425fa6ef5a90e4a0b365';
const BASE_URL = 'https://newsapi.org/v2/';

const Tab2: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);

  const handleSearch = async () => {
    console.log('Searching for:', searchText);
    if (searchText.trim() === '') return;
    try {
      const response = await axios.get(`${BASE_URL}everything`, {
        params: {
          q: searchText,
          sortBy: 'relevancy',
          apiKey: API_KEY,
        },
      });
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value || '')}
        />
        <IonButton onClick={handleSearch} className="ion-button">Search</IonButton>
        {articles.length === 0 ? (
          <div className="placeholder-container">
            <IonImg
              src="/Welcome-image.png"
              className="placeholder-image"
              alt="Welcome"
            />
          </div>
        ) : (
          <div className="news-grid">
            {articles.map((article, index) => (
              <IonCard key={index} className="news-card">
                <IonImg
                  src={article.urlToImage || '/Welcome-image.png'}
                  className={!article.urlToImage ? 'placeholder-image' : ''}
                  alt={article.title}
                />
                <IonCardHeader>
                  <IonCardTitle>{article.title}</IonCardTitle>
                  <IonCardSubtitle>{article.source.name}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>{article.description}</p>
                  <IonButton fill="outline" href={article.url} target="_blank">
                    Read more
                  </IonButton>
                </IonCardContent>
              </IonCard>
            ))}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;



