Katomaran Todo Task Management Mobile Application
A cross-platform Todo Task Management Mobile App built for the Katomaran Hackathon. This app enables users to log in with Google and manage personal tasks with full CRUD operations on the go.

Features
✅ Google authentication for login
✅ Add, view, update, complete, and delete tasks
✅ Task fields: title, description, due date, status (open/complete)
✅ Local state management for session data
✅ Intuitive UI with:

FAB (Floating Action Button) for adding tasks

Smooth list animations

Tabs, filters, search bar
✅ Pull-to-refresh and swipe-to-delete
✅ Cross-platform (Android and iOS)

Tech Stack
Mobile App: React Native (Expo)

Authentication: Google (via Firebase)

Crash Reporting: Firebase Crashlytics (optional for future)

State Management: React Hooks and Context API

Project Structure
/assets                # Icons, splash images
/components            # TaskItem, TaskInputModal
/firebase              # Firebase configuration
/navigation            # App navigation structure
/screens               # HomeScreen, LoginScreen
/services              # Authentication and local storage helpers
App.js                 # Entry point
package.json           # Dependencies and scripts

Setup Instructions
1️ Clone the Repository

git clone https://github.com/yourusername/katomaran_todo_hackathon.git
cd katomaran_todo_hackathon

2️ Install Dependencies

npm install
# or
yarn install

3️ Set Up Firebase

Create a Firebase project.

Enable Google Sign-In authentication.

Enable Firestore database if needed in future.

Copy your Firebase config into:

/firebase/firebaseConfig.js


4️ Run the App
npx expo start

This project is a part of a hackathon run by https://www.katomaran.com
