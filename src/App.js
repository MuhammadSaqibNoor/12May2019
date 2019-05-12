import React,{Component} from 'react';
import { Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from "./reducers";
import firebase from 'firebase';
import LoginForm from './components/LoginForm';



class App extends Component{
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyA1STosHY1lqSUhSv_-9eAmXFdfb1RdisY",
            authDomain: "classwork-d19be.firebaseapp.com",
            databaseURL: "https://classwork-d19be.firebaseio.com",
            projectId: "classwork-d19be",
            storageBucket: "classwork-d19be.appspot.com",
            messagingSenderId: "738596208209"
        });
    }



    render(){
        return(
            <Provider store={createStore(reducers)}>          
            <View>
            
            <LoginForm />
        </View>      
            </Provider>

        );

    }
}



export default App;