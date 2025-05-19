
import styled from 'styled-components';

export const CollectionStyle = styled.section`
padding:24px 0 !important;
justify-content: flex-start !important;
.card2 {
        transform: translateX(-3000px);
    }
img{
    max-width: 220%;
}
@media (max-width:1800px) {
    img{
    max-width: 250%;
}
    }

    @media (max-width:1400px) {
        img{
    max-width: 300%;
}
    }
    @media (max-width:1200px) {
        img{
    max-width: 350%;
}
    }
    @media (max-width:992px) {
        img{
    max-width: 400%;
}
    }
    @media (max-width:768px) {
        img{
    max-width: 500%;
}
    }
    @media (max-width:576px) {
        img{
    max-width: 550%;
}
    }
`;