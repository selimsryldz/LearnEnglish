import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MyWordsList from './components/MyWordsList';
import WordCreate from './components/WordCreate';
import WordUpdate from './components/WordUpdate';
import Menu from './components/Menu';
import WordsStudy from './components/WordsStudy';
import MyWordsStudy from './components/MyWordsStudy';
import SignupForm from './components/SignupForm';
import MyWordsShow from './components/MyWordsShow';


const RouterComponent = () => {
    
    return (
        
    <Router>           
        <Scene key="kimlik">   
           
            <Scene key="loginScreen" component={LoginForm} initial />
           
            <Scene 
            onRight={() => Actions.wordCreate()}
            rightTitle="Yeni"
            key="myWordsList" 
            component={MyWordsList} 
            title="Kelime Liste"
            />    
            <Scene
            key="signupForm"
            component={SignupForm}
            />
            <Scene
            key="menu"
            title="sdaf"
            component={Menu}
            />            
            <Scene
            key="wordsStudy"
            component={WordsStudy}
            />
             <Scene
            key="myWordsStudy"
            component={MyWordsStudy}
            />
            <Scene
            key="myWordsShow"
            component={MyWordsShow}
            />
            <Scene
            key="wordCreate"
            component={WordCreate}
            title="Kelime Kaydet" 
            />
            <Scene 
             key="wordUpdate"
             component={WordUpdate}
             title="Kelime Güncelle"
            />

            </Scene> 
                          

    </Router>
    );
        
};

export default RouterComponent;
