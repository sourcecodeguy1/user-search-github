import React, {useState, useEffect} from 'react';
import Header from "./components/header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Card from './components/Card/Card';
import axios from "axios";
import './App.css';

function App() {

    const [light, setLight] = useState(true);

    const [userDetails, setUserDetails] = useState([]);

    const [hidden, setHidden] = useState(true);

    const [searchedUser, setSearchedUser] = useState("");

    const getUsername = (gitHubUsername) => {
        setSearchedUser(gitHubUsername);
        axios.get(`https://api.github.com/users/${gitHubUsername}`)
            .then(response => {
                if(hidden === false){
                    setUserDetails(response.data);
                    setHidden(true);
                }else {
                    setUserDetails(response.data);
                }

            })
            .catch((error) => {
                if(error.response.status){
                    setHidden(false);
                }
        });
    }

    const getBackgroundStatus = (status) => {
        setLight(status);
    }

    const closeAlertBox = () => {
        setHidden(true);
    }

    useEffect(() =>{

    },[userDetails]);


  return (
    <div className="App">
      <Header lightStateCallBack={getBackgroundStatus} />
      <SearchBar parentCallBack={getUsername} lightBackground={light} />
        {
            hidden === false ? <div id={`alert-message`} className={`mt-3`}>{searchedUser} was not found! <span onClick={closeAlertBox} id={`close-alert-box`}>x</span></div>
            :
            ""
        }

      <Card details={[userDetails]} lightBackground={light} />
    </div>
  );
}

export default App;
