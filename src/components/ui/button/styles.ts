import { styled } from '@play-to-learn/components.theme.palette';

export const ButtonWrapper = styled.button`
  padding: 10px 30px;
  min-height: 37px;
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.button};
  color: ${({ theme }) => theme.color.secondary.white};
  background: ${({ theme }) => theme.color.primary.main};

  &:hover {
    background: ${({ theme }) => theme.color.primary.focus};
  }

  &:active {
    background: ${({ theme }) => theme.color.primary.active};
  }
`;
