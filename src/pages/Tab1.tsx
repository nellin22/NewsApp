import React, { useState, useEffect, useRef } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonList,
  IonItem,
  IonIcon,
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
import { businessOutline, videocamOutline, newspaperOutline, medkitOutline, rocketOutline, basketballOutline, desktopOutline } from 'ionicons/icons';
import axios from 'axios';
import './Tab1.css';

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
  'general',
  'business',
  'entertainment',
  'technology',
  'sports',
  'health',
  'science',
];

const categoryIcons: { [key in 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology']: string } = {
  business: businessOutline,
  entertainment: videocamOutline,
  general: newspaperOutline,
  health: medkitOutline,
  science: rocketOutline,
  sports: basketballOutline,
  technology: desktopOutline,
};

const Tab1: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const menuRef = useRef<HTMLIonMenuElement>(null);

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

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    menuRef.current?.close();
  };

  return (
    <IonPage>
      <IonMenu contentId="main-content" ref={menuRef}>
        <IonHeader>
          <IonToolbar color="primary">
          <IonButtons slot="start">
              <IonMenuButton/>
            </IonButtons>
            <IonTitle>Categories</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {categories.map((category) => (
              <IonItem
                button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={category === selectedCategory ? 'selected-category' : ''}
              >
                <IonIcon icon={categoryIcons[category as keyof typeof categoryIcons]} slot="start" />
                <IonLabel>{category.charAt(0).toUpperCase() + category.slice(1)}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton/>
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
      </IonPage>
    </IonPage>
  );
};

export default Tab1;