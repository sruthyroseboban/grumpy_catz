import styled from "styled-components";

export const TimeStyle = styled.div`
    .countdown_time {
        font-size: 2em;
        padding: 0 5px;
        color: black !important;
    }
    .colon {
        padding-top: 0px;
        color: black !important;
        font-size: 2em;
    }
    @media (max-width :992px){
 
        .colon,  .countdown_time{
        font-size:1.2em;
    }
    }
`;
