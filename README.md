# 🎬 Demo React Native Movie Application

This is a demo React Native application designed to showcase various features and libraries in React Native. The application uses the MovieDB API to fetch popular, upcoming, top-rated, and now-playing movies, with the ability to search the movie database and store users' favorite movies.

## ✨ Features

- [x] 📽️ Fetch movies with common filters (popular, upcoming, top-rated, now playing)
- [x] ⭐ Store and list favorite movies
- [ ] 🔍 Search for movies in the MovieDB database
- [ ] 🔑 User authentication (login, register, reset password)
- [ ] ✏️ Change user information
- [ ] 🌗 Change application theme (dark, light)
- [ ] 🌍 Localize the application


## 🛠️ Technologies and Libraries

This application uses the following technologies and libraries:

- [React Native](https://reactnative.dev/)
- [React Native Navigation](https://reactnavigation.org/)
- [Realm SDK for React Native](https://realm.io/docs/javascript/latest/)
- [Redux](https://redux.js.org/)
- [Context API](https://reactjs.org/docs/context.html)
- [Axios](https://axios-http.com/)


## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.


### 📋 Prerequisites

- [Node.js](https://nodejs.org/en/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [MovieDB API Key](https://developer.themoviedb.org/docs/authentication)


### 🛠️ Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/mahmoudmagdi/popMoviesReactnativeApplicaiton.git
    ```

2. Navigate to the project directory:

    ```sh
    cd popMoviesReactnativeApplicaiton
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Create a `.env` file in the root directory and add your MovieDB API key:

    ```env
    MOVIEDB_API_KEY=your_api_key_here
    ```

5. Run the application:

    ```sh
    npx react-native run-android
    # or for iOS
    npx react-native run-ios
    ```


## 📂 Project Structure

```
/components # Reusable UI components
/constants # Global styles and colors
/data # All constants data such as movies filters
/model # Application data classes and Realm database schemas
/screens # Application screens
└── /bottomTabs # Application bottom tabs screens
/services # API services (Axios)
/store
├── /redux # Redux store, actions, and reducers
├── /realm # Realm database and configuration
└── /context # Context API store, actions, and reducers
/utils # Utility functions and helpers
/App.js # Main application file
```


## 📚 Usage

### 🎥 Fetch Movies

The application fetches movies using Axios to make requests to the MovieDB API. The movies are categorized into popular, upcoming, top-rated, and now playing.

### 🔍 Search Movies

Users can search for movies using the search functionality. The search query is sent to the MovieDB API, and the results are displayed in the application.

### ⭐ Favorite Movies

Users can add movies to their list of favorites. The favorite movies are stored locally using Realm, allowing for offline access.

### 🔑 User Authentication

The application includes user authentication features such as login, registration, and password reset. User information can be updated from within the app.

### 🌗 Theme and Localization

Users can switch between dark and light themes. The application also supports localization for multiple languages.


## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 📧 Contact

Mahmoud ElKhlafawi - [mahmoudmagdi@ymail.com](mailto:mahmoudmagdi@ymail.com)

Project Link: [https://github.com/mahmoudmagdi/popMoviesReactnativeApplicaiton](https://github.com/mahmoudmagdi/popMoviesReactnativeApplicaiton)
