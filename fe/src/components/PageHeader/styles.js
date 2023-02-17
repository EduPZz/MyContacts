import styled from 'styled-components';

export const Container = styled.header`
  a {
    text-decoration: none;
    span {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }
  }
`;
