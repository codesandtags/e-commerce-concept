import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 10px;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  & > div {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    grid-gap: 15px;
  }
`;