import styeld from 'styled-components'

export const SearchBarStyled = styeld.div`
    
    #search-navbar{
        border-radius: 15px;
    }
    
    .form-control:focus {
        border-color: inherit;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    
    #search-btn{
        width: 25%;
   }
   
    #search-input{
        border: none;
    }
    
    #search-icon{
        padding-top: 5px;
    }
        width: 100%;
        display: flex;
        
   .light-background{
        background-color: #FEFEFE;
    }
    .dark-background{
        background-color: #1E2A47;
    }
   
   @media screen and (min-width: 576px) and (max-width: 768px){
        #search-btn{
            width: 40%;
        }
   }
   
   @media screen and (max-width: 767px){
        /*padding-top: 10px;
        display: unset;*/
    
    #search-btn{
        /*margin-top: 10px;
        width: 100%;*/
   }
   
   @media screen and (max-width: 500px){
        #search-btn{
            width: 35%;
        }
   }
   
   #search-input{
        width: 100%;
   }
   
   #search-icon{
        padding-top: unset;
        text-align: center;
   }
    
   }
    
`;