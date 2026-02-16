# PasteleryApp 🍰

A modern, high-performance Angular application for managing a bakery shop. Built with latest Angular features and a sleek Neobrutalist design.

## 🚀 Technologies

- **Framework**: Angular 21
- **State Management**: Angular Signals
- **Styling**: Vanilla CSS (Neobrutalist Aesthetic)
- **Icons & UI**: SweetAlert2
- **Language**: TypeScript

## 🏗️ Architecture

The project follows a modular and scalable directory structure:

### `/core`
The backbone of the application.
- **Services**: Business logic and data management (Inventory, Cakes, Cart, Auth).
- **Interfaces**: TypeScript definitions for consistent data models.
- **Guards**: Route protection and navigation logic.
- **Data**: Static mock data and configuration.

### `/pages`
Feature-based page components.
- **Home**: Product catalog and featured cakes.
- **Inventory**: Management of ingredients and stock.
- **Recipes**: Detailed recipes for production.
- **Profile & Auth**: User management and authentication.

### `/shared`
Reusable UI components across the app.
- **Card**: Standardized presentation for cakes.
- **Modal**: Flexible popup system.
- **Layout**: Main structure including sidebar and header.

## ✨ Future Roadmap

- **Backend Integration**: Replace mock services with a real RESTful API.
- **Authentication**: JWT-based login and role-based access control.
- **Dashboard**: Advanced analytics for sales and inventory optimization.
- **PWA Support**: Offline capabilities for warehouse management.

---
Developed with ❤️ by the Bakery Team.
