import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';
import React, { FC, useCallback } from 'react';

import { UsersListProps } from './interfaces';
import { AvatarWrapperStyled, UsersListWrapperStyled } from './styles';

const UsersList: FC<UsersListProps> = ({
  className,
  elementId,
  data,
  avatarSize = 20,
  onSelect,
}) => {
  const handleSelectUser = useCallback(
    (payload: any) => () => {
      if (onSelect) {
        onSelect(payload);
      }
    },
    [onSelect]
  );

  return (
    <UsersListWrapperStyled
      elementId={elementId}
      className={className}
      direction={'row'}
      flexType={'inline-flex'}
    >
      {data.map((userInfo, idx) => (
        <AvatarWrapperStyled
          key={idx}
          style={{
            zIndex: data.length - idx,
            left: idx * (avatarSize / 2),
          }}
          type={'small'}
          src={userInfo.image}
          placeholder={userInfo.placeholder}
          onClick={handleSelectUser(userInfo.payload)}
        />
      ))}
    </UsersListWrapperStyled>
  );
};

export default automationEnchancement<UsersListProps>(UsersList, 'users-list');
