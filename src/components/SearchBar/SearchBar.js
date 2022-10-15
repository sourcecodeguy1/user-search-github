import React, {useState, useEffect} from 'react';
import {MDBCol, MDBContainer, MDBBtn, MDBRow, MDBNavbar, MDBInputGroup, MDBInput} from "mdb-react-ui-kit";
import {SearchBarStyled} from "./SearchBar.styled";
import axios from "axios";

const SearchBar = ({parentCallBack, lightBackground}) => {
    const [username, setUsername] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    const handleSubmit = () => {
        
        if(username !== "") {
            parentCallBack(username);
        } else {
            alert("Enter a github username.");
        }
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            e.preventDefault();
            handleSubmit();
        }
    }

    return (
        <MDBContainer id={`search-container`}>
            <MDBRow>
                <MDBCol md={`7`} className={`m-auto`}>
                    <MDBNavbar id={`search-navbar`} className={`rounded-6`} style={{ backgroundColor: lightBackground === false ? '#1E2A47' : '#FEFEFE' }}>
                        <MDBContainer>
                            <MDBInputGroup tag="form" className='d-flex mt-3 mb-3'>
                                <SearchBarStyled>
                                    <div id={`search-icon`}><img src="/img/icon-search.svg" alt=""/></div>
                                    <input onKeyPress={handleKeyPress} style={{fontSize: `18px`}} onChange={handleChange} id={`search-input`} className={lightBackground === false ? "dark-background form-control text-light": "light-background form-control"} placeholder="Search GitHub username..." aria-label="Search" type='Search' />
                                    <MDBBtn type={`button`} onClick={handleSubmit} id={`search-btn`} className={`col-md-2 col-sm-12`}>Search</MDBBtn>
                                </SearchBarStyled>
                            </MDBInputGroup>
                        </MDBContainer>
                    </MDBNavbar>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        
    );
};

export default SearchBar;