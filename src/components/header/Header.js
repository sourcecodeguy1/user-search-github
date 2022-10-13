import React, {useEffect, useState} from 'react';
import {HeaderStyled} from "./Header.styled";

import { MDBContainer} from 'mdb-react-ui-kit';

const Header = ({lightStateCallBack}) => {

    const [light, setLight] = useState(true);

    useEffect(() => {
        if(light === true){
            document.body.style.backgroundColor = "#F6F8FF";


        }else{
            document.body.style.backgroundColor = "#141D2F";

        }
        lightStateCallBack(light);
    },[light]);
    
    const handleToggle = (value) => {
        setLight(value);
        lightStateCallBack(value);
    }

    return (
        <>
            <MDBContainer id={`mdb-container`}>
                <HeaderStyled>
                            <div id={`devfinder`} className={light === false ? "text-light" : ""}>devfinder</div>
                    {
                        light === true ? <div onClick={() => handleToggle(false)} id={`dark`}>DARK &nbsp;&nbsp;&nbsp;<span><img src="/img/icon-moon.svg" alt=""/></span></div>
                            : <div onClick={() => handleToggle(true)} id={`light`} className={`text-light`}>LIGHT &nbsp;&nbsp;&nbsp;<span><img src="/img/icon-sun.svg" alt=""/></span></div>
                    }

                </HeaderStyled>
            </MDBContainer>
        </>
    );
};

export default Header;