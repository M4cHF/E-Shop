# 🛒 E-Shop - Plateforme E-commerce

E-Shop est une plateforme e-commerce conçue pour offrir une expérience utilisateur fluide et intuitive. Grâce à une interface moderne et des fonctionnalités avancées, les utilisateurs peuvent parcourir un catalogue varié, gérer leur panier et effectuer des paiements sécurisés.

## 📌 Fonctionnalités

### 🎯 Fonctionnalités principales

- **🛍 Catalogue de produits** : Parcourir les produits classés par catégories avec filtres et recherche.
- **🛒 Panier d'achat** : Ajouter, modifier, supprimer des produits et appliquer des codes promo.
- **💳 Paiement sécurisé** : Intégration de plusieurs options de paiement (Carte, PayPal, etc.).
- **📦 Gestion des commandes** : Suivi des commandes en temps réel.
- **🛠 Gestion des produits et utilisateurs (Admin)** : Ajout, modification, suppression de produits et gestion des utilisateurs.
- **🤖 Recommandations intelligentes** : Suggestions personnalisées basées sur l'historique d'achat et les tendances.

## 📌 Exigences Non Fonctionnelles

### 🚀 Performance

- Temps de chargement optimisé (moins de 3 secondes).
- Capacité à gérer jusqu'à **10 000 utilisateurs simultanés** sans perte de performance.

### 🔒 Sécurité

- Chiffrement des données utilisateurs et conformité PCI DSS pour la protection des paiements.

### 🎨 Utilisabilité

E-Shop propose une interface utilisateur conviviale, conçue pour être intuitive et facile à naviguer.
L’expérience utilisateur est optimisée afin que les clients puissent parcourir le catalogue, gérer leur panier et finaliser leurs achats sans difficulté. L’ergonomie de la plateforme garantit une prise en main rapide et efficace pour tous les utilisateurs.

### 🔧 Maintenabilité

Pour assurer une évolution fluide et durable du projet, E-Shop repose sur un code propre, modulaire et bien documenté.
Chaque composant est structuré de manière à faciliter la maintenance et l'ajout de nouvelles fonctionnalités. De plus, une gestion efficace des erreurs a été mise en place, offrant des messages clairs et compréhensibles afin d’améliorer l’expérience utilisateur en cas de problème.

## 🗃 Modèle de Base de Données

| Table             | Colonnes                                                               |
| ----------------- | ---------------------------------------------------------------------- |
| **user**          | id_user, firstName, lastName, username, email, password, adresse, role |
| **category**      | id_category, name_category                                             |
| **product**       | id_product, name_product, description, price, url_image, id_category   |
| **order**         | id_order, id_user, date_order                                          |
| **order_details** | id_order, id_product, quantity, price                                  |

## 🛠 Technologies Utilisées

- **Backend** : Spring Boot
- **Frontend** : Angular
- **Base de données** : MySQL
- **Authentification & Sécurité** : Spring Security, JWT
- **Autres** : Docker, Git, CI/CD

## 🚀 Installation & Déploiement

### 📥 Prérequis

- **Node.js** & **Angular CLI**
- **Java 17** & **Spring Boot**
- **MySQL**

### 🛠 Étapes d’installation

1. **Clonez le projet**
   ```sh
   git clone https://github.com/votre-repo/e-shop.git
   cd e-shop
   ```
