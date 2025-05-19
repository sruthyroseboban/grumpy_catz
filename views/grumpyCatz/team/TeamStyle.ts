
import styled from 'styled-components';

export const TeamStyle = styled.section`
h2 span {
    color:var(--teal);
}
h4:hover span {
    color:var(--teal);
    transition: .5s ;
}
h3 {
    text-align: center;
}
 img {
    border-radius: 7px;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
img:hover {
		opacity: 0.6;
		transform: scale(1.04) translateY(-5px);
}
`;