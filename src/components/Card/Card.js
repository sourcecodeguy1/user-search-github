import React from 'react';
import dateFormat from "dateformat";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBContainer, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";

import {CardStyled} from './Card.styled';

const Card = ({details, lightBackground}) => {
    let data_username = "";
    let data_created_at = "";
    let data_bio = "";
    let data_repos = "";
    let data_followers = "";
    let data_following = "";
    let data_location = "";
    let data_twitter_username = "";
    let data_html_url = "";
    let data_avatar_url = "";

    let new_array = details.map(data => (
        //console.log(data),
        data_username =         data.length !== 0 ? data.login : "The Octocat",
        data_created_at =       data.length !== 0 ? "Joined " + dateFormat(data.created_at, "mmm d, yyyy") : "Joined Jan 25, 2011",
        data_bio =              (data.length !== 0) ? data.bio : "This profile has no bio",
        data_repos =            data.length !== 0 ? data.public_repos : "8",
        data_followers =        data.length !== 0 ? data.followers : "3938",
        data_following =        data.length !== 0 ? data.following : "9",
        data_location =         data.length !== 0 ? data.location  : "San Francisco",
        data_twitter_username = data.length !== 0 ? data.twitter_username  : "Not Available",
        data_html_url =         data.length !== 0 ? data.html_url  : "@octocat",
        data_avatar_url =       data.length !== 0 ? data.avatar_url  : "/img/Bitmap.png"

    ));

    return (
        <>
            <MDBContainer id={`card-container`}>
                <CardStyled>
                    <MDBCard data-testid="user-card" id={`card`} className={lightBackground === false ? "dark-background text-light": "light-background"}>
                        <MDBCardBody>
                            <MDBCardText>
                                <MDBRow>
                                    <MDBCol id={`profile-image`} md={`12`} lg={`3`} className={`d-flex justify-content-center`}>
                                        <img src={data_avatar_url} alt="Profile image"/>
                                    </MDBCol>
                                    <MDBCol id={`top-content`} md={`12`} lg={`9`}>
                                        <MDBRow>
                                            <MDBCol md={`12`} lg={`6`} className={`col-md-auto`}>
                                                <div style={{fontSize: `26px`}}><strong>{data_username}</strong></div>
                                                <div><a href={data_html_url} target={`_blank`}><small>@{data_username}</small></a></div>
                                            </MDBCol>
                                            <MDBCol md={`12`} lg={`6`} className={`text-right`}>
                                                <div id={`joined`} style={{color: lightBackground === false ? "#FFFFFF": "#697C9A"}}>{data_created_at}</div>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow id={`bio-row`}>
                                            <MDBCol md={`12`}>
                                                <div>
                                                    <p>{data_bio !== null ? data_bio : "This profile has no bio"}</p>
                                                </div>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow id={`repos`} style={{backgroundColor: lightBackground === false ? "#141D2F": "#FEFEFE"}}>
                                            <MDBCol md={`4`}>
                                                <div>Repos</div>
                                                <div className={`col-sm-3 text-sm-center`}><strong>{data_repos}</strong></div>
                                            </MDBCol>

                                            <MDBCol md={`5`}>
                                                <div>Followers</div>
                                                <div className={`col-sm-3 text-sm-center`}><strong>{data_followers}</strong></div>
                                            </MDBCol>

                                            <MDBCol md={`3`}>
                                                <div>Following</div>
                                                <div className={`col-sm-3 text-sm-center`}><strong>{data_following}</strong></div>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow id={`location-github-blog`} className={`mt-5`}>

                                    <MDBCol md={`6`}>
                                        <span><img src="/img/icon-location.svg" alt=""/></span>&nbsp;{data_location !== null ? data_location : "Not Available"}
                                    </MDBCol>

                                    <MDBCol md={`6`}>
                                        <div><span><img src="/img/icon-website.svg" alt=""/></span>&nbsp;https://github.blog</div>
                                    </MDBCol>

                                    {/*<MDBCol lg={`1`}></MDBCol>
                                    <MDBCol lg={`6`}>
                                        <div><span><img src="/img/icon-location.svg" alt=""/></span>&nbsp;{data_location !== null ? data_location : "Not Available"}</div>
                                    </MDBCol>
                                    <MDBCol lg={`1`}></MDBCol>
                                    <MDBCol lg={`4`}>
                                        <div><span><img src="/img/icon-website.svg" alt=""/></span>&nbsp;https://github.blog</div>
                                    </MDBCol>
                                    <MDBRow id={`twitter-company-row`}>
                                        <MDBCol lg={`1`}></MDBCol>
                                        <MDBCol lg={`6`}>
                                            <div><span><img src="/img/icon-twitter.svg" alt=""/></span>&nbsp;Not Available</div>
                                        </MDBCol>
                                        <MDBCol lg={`1`}></MDBCol>
                                        <MDBCol lg={`4`}>
                                            <div><span><img src="/img/icon-company.svg" alt=""/></span>&nbsp;@github</div>
                                        </MDBCol>
                                    </MDBRow>*/}
                                </MDBRow>
                                <MDBRow id={`twitter-github-company`} className={`mt-3`}>
                                    <MDBCol md={`6`}>
                                        <span><img src="/img/icon-twitter.svg" alt=""/></span>&nbsp;Not Available
                                    </MDBCol>

                                    <MDBCol md={`4`}>
                                        <span><img src="/img/icon-company.svg" alt=""/></span>&nbsp;@github
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </CardStyled>

            </MDBContainer>
        </>
    );
};

export default Card;