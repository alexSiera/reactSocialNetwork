import styled from 'styled-components';

export const FormComponent = styled.div`
        input {
          border: ${props => props.isError ? '1px red solid' : 'none'};
        }
        textarea {
          border: ${props => props.isError ? '1px red solid' : 'none'};
        }
        span {
          color: red;
        }
`;
export const FormSummaryError = styled.div`
      margin-top: 10px;
      border: 1px red solid;
      padding: 5px;
      color: rosybrown;
`;