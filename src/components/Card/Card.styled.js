import styeld from 'styled-components'

export const CardStyled = styeld.div`
    width: 58%;
    margin: auto;
    padding-top: 33px;
    
    .card{
        height: auto;
    }
    
    #repos{
        background-color: #F6F8FF;
        width: 510px;
        height: auto;
        border-radius: 10px;
        margin: auto;
        padding: 15px;
    }
    
    #top-content{
        padding: 0 30px;
        margin: auto;
    }
    
    #joined{
        text-align: right;
    }
    
    #bio-row{
        padding-top: 25px;
        padding-bottom: 25px;
    }
    
    #profile-image{
        width: 117px;
        height: 117px;
        top: 359px;
        left: 403px;
    }
    
    #profile-image img{
        border-radius: 50px;
    }
    .light-background{
        background-color: #FEFEFE;
    }
    .dark-background{
        background-color: #1E2A47;
    }
    
    #twitter-company-row{
        padding-top: 25px;
    }
    
    #location-github-blog{
        margin-left: 23%;
    }
    
    #twitter-github-company{
        margin-left: 22%;
    }
    
    @media screen and (min-width: 992px) and (max-width: 1399px) {
        width: 80%;
    }
    
    @media screen and (min-width: 768px) and (max-width: 991px) {
        width: 86%;
        
        #repos{
            width: unset;
        }
        
        #profile-image{
            width: 100%;
        }
        
        #location-github-blog{
            margin-left: unset;
        }
        
        #twitter-github-company{
            margin-left: unset;
        }
    }
  
    @media screen and (max-width: 767px){
        width: unset;
        
        #repos{
            width: unset;
        }
        
        #profile-image{
            width: 100%;
        }
        
        .row>*{
            width: unset;
        }
        
        #location-github-blog{
        margin-left: unset;
    }
    
    #twitter-github-company{
        margin-left: unset;
    }
        
    }
`;