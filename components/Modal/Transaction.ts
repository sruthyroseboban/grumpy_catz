import styled from "styled-components";

export const Transaction = styled.div`
  padding: 50px 30px 30px;

  text-align: center;
  i,
  .spinner-grow {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    font-size: 5rem;
    color: var(--teal);
  }

  .spinner-grow {
    --bs-spinner-width: 4rem;
    --bs-spinner-height: 4rem;
  }
`;
