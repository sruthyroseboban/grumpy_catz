import styled from 'styled-components';
 
export const FaqStyle = styled.section`

.accordion {
        margin-bottom: 20px;
        --bs-accordion-color: #fff;
        --bs-accordion-bg: transparent;
        --bs-accordion-border-color: var(--teal);
        --bs-accordion-border-width: 2px;
        --bs-accordion-border-radius: 0.59rem;
        --bs-accordion-inner-border-radius: calc(0.59rem - 1px);
        --bs-accordion-btn-color: #fff;
        --bs-accordion-btn-focus-border-color: #fff;
        --bs-accordion-active-color: #fff !important;
        --bs-accordion-active-bg: transparent;
    }
    
    .accordion-button::after,
    .accordion-button:not(.collapsed)::after {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-plus-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/> </svg>');
    }
    
    .accordion-item:last-of-type .accordion-collapse,
    .accordion,
     :focus-visible {
        outline: none;
    }
h2{
    line-height: initial !important;
}
`;