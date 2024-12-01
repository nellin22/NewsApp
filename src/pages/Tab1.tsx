import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonList,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonImg,
  IonButton,
} from '@ionic/react';
import axios from 'axios';
import './Tab1.css';

// Tyypit API:n artikkelille
interface Article {
  source: {
    name: string;
  };
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
}

const API_KEY = '01d88bddeb73425fa6ef5a90e4a0b365';
const BASE_URL = 'https://newsapi.org/v2/';

const categories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

const Tab1: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('general');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${BASE_URL}top-headlines`, {
          params: {
            category: selectedCategory,
            apiKey: API_KEY,
          },
        });
        setArticles(response.data.articles);
        console.log(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [selectedCategory]);

  return (
    <IonPage>
      {/* Menu Section */}
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Categories</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {categories.map((category) => (
              <IonItem
                button
                key={category}
                onClick={() => setSelectedCategory(category)}
              >
                <IonLabel>{category.charAt(0).toUpperCase() + category.slice(1)}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Main Content Section */}
      <IonContent id="main-content">
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>News</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {articles.length === 0 ? (
            <p>Loading News...</p>
          ) : (
            <div className="news-grid">
              {articles.map((article, index) => (
                <IonCard key={index} className="news-card">
                  {article.urlToImage && <IonImg src={article.urlToImage} />}
                  <IonCardHeader>
                    <IonCardTitle>{article.title}</IonCardTitle>
                    <IonCardSubtitle>{article.source.name}</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>{article.description}</p>
                    <IonButton
                      fill="outline"
                      slot="end"
                      href={article.url}
                      target="_blank"
                    >
                      Read more
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              ))}
            </div>
          )}
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;