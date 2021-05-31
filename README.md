# React native navigation template using typescript
# Installation
## Install template
```
npm i -D react-native-navigation-typescript-template
```
## Install stack navigation
```
npm i --save @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
## Install drawer navigation
```
npm i --save @react-navigation/drawer
```
## Install bottom tab navigation
```
npm i --save @react-navigation/bottom-tabs
```
# Usage
Copy all files and folders in folder __template__ to your app's root folder.
# Example
## Navigator structure
    .
    ├── draw1                                      
    │   ├── stack1                   
    |   |   ├── FirstScreen    
    |   |   ├── SecondScreen
    |   ├── tab1
    |   |   ├── stack2
    |   |   |   ├── ThirdScreen
    |   |   |   ├── FourthScreen
    |   |   ├── tab2
    |   |   |   ├── FifthScreen
    |   |   |   ├── SixthScreen
## Folder structure
    .
    ├── components
    |   ├── draw1                                      
    |   │   ├── stack1                   
    |   |   |   ├── index.tsx
    |   |   ├── tab1
    |   |   |   ├── index.tsx
    |   |   |   ├── stack2.tsx
    |   |   |   ├── tab2.tsx
    |   |   ├── index.tsx
    ├── config
    |   ├── draw1                                      
    |   │   ├── stack1                   
    |   |   |   ├── index.ts
    |   |   ├── tab1
    |   |   |   ├── index.ts
    |   |   |   ├── stack2.ts
    |   |   |   ├── tab2.ts
    |   |   ├── index.ts
### Components
This folder defines all components we used for react-navigation, notice: folder structure same as Navigator structure for a clearer view (parent-children relationship)
### Config
This folder defines all route and navigation config we used for react-navigation, notice: folder structure same as Navigator structure for a clearer view (parent-children relationship)
