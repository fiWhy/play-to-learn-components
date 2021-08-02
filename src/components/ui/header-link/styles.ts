import { styled } from '@play-to-learn/components.theme.palette';
import { NavLink } from 'react-router-dom';
import Icon from '@play-to-learn/components.ui.icon';

export const IconStyled = styled(Icon)`
  padding-right: 12px;
`;

export const HeaderLinkWrapperStyled = styled(NavLink)`
  display: inline-flex;
  text-transform: uppercase;
  text-decoration: none;
  height: 23px;
  p {
    font-weight: 500;
  }

  & > * {
    align-self: center;
  }

  color: ${({ theme }) => theme.color.secondary.grey05};

  &:hover,
  &.active {
    color: ${({ theme }) => theme.color.secondary.dark01};
  }
`;
