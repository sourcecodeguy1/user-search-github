import styeld from 'styled-components'

export const HeaderStyled = styeld.div`
    
        padding-top: 150px;
        display: flex;
        justify-content: space-between;
        width: 55%;
        margin: auto;
        padding-bottom: 25px;
        color: #697C9A;
        
    .mdb-container{
        background-color: #141D2F !important;
    }
    
    #mdb-container{
        position: absolute;
        width: 730px;
        height: 38px;
        left: 355px;
        top: 144px;
    }
    
    #devfinder{
        
        font-family: 'Space Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
    }
    
    #light:hover{
        cursor: pointer;
    }
    
    #dark:hover{
        cursor: pointer;
    }
    
    @media screen and (max-width: 767px) {
        width: unset;
    }
    
`;