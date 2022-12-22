import styled from 'styled-components';
import { motion } from 'framer-motion';
// import axios from 'axios';
import { ReactComponent as PlusIcon } from '@/assets/plus-circle.svg';
import {
  SMALL_BORDER_IMG,
  LARGE_BORDER_IMG,
} from '@/utils/constants/addCollectionButtonUrl';
// import { useState, useLayoutEffect } from 'react';
// import { useParams } from 'react-router-dom';

export interface AddCollectionButtonProps {
  size: 'small' | 'large';
  color: string;
  backgroundColor: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface DashButtonProps {
  size: 'small' | 'large';
  $color: string;
  backgroundColor: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const buttonStyle = {
  small: {
    width: '432px',
    height: '48px',
    gap: 'var(--space-sm)',
    fontSize: 'var(--text-bs)',
    iconSize: 16,
  },
  large: {
    width: '520px',
    height: '130px',
    gap: 'var(--space-bs)',
    fontSize: 'var(--text-lg)',
    iconSize: 28,
  },
};

const DashButton = styled(motion.button)<DashButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ size }) => buttonStyle[size].gap};

  color: ${({ $color }) => $color};
  font-size: ${({ size }) => buttonStyle[size].fontSize};
  font-weight: ${({ size }) => (size === 'small' ? '400' : '700')};

  background-image: ${({ size }) =>
    size === 'small' ? SMALL_BORDER_IMG : LARGE_BORDER_IMG};
  border-radius: ${({ size }) => (size === 'small' ? '4px' : '8px')};

  circle {
    fill: ${({ $color }) => $color};
  }

  path {
    fill: ${({ backgroundColor }) => backgroundColor};
    stroke: ${({ backgroundColor }) => backgroundColor};
  }

  span {
    transform: translateY(2px);
  }

  :hover {
    color: ${({ backgroundColor }) => backgroundColor};
    circle {
      fill: ${({ backgroundColor }) => backgroundColor};
    }
    path {
      fill: ${({ $color }) => $color};
      stroke: ${({ $color }) => $color};
    }
  }
`;

const AddCollectionButton = ({
  size,
  color,
  backgroundColor,
  onClick,
  ...args
}: AddCollectionButtonProps) => {
  // const [isUserCollections, setIsUserCollections] = useState<boolean>(false);
  // const { userid } = useParams();
  const { width, height } = buttonStyle[size];

  // useLayoutEffect(() => {
  //   async function checkAuth() {
  //     try {
  //       const res = await axios.get('http://localhost:3313/auth', {
  //         withCredentials: true,
  //       });
  //       const {
  //         data: { isLogin, userId },
  //       } = res;

  //       if (isLogin && userId === userid) {
  //         setIsUserCollections(true);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   checkAuth();
  // }, [isUserCollections]);

  return (
    <DashButton
      type="button"
      style={{ width, height }}
      size={size}
      $color={color}
      backgroundColor={backgroundColor}
      onClick={onClick}
      whileHover={{ backgroundColor: 'var(--purple-900)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...args}
    >
      <PlusIcon
        width={buttonStyle[size].iconSize}
        height={buttonStyle[size].iconSize}
      />
      <span>New Collection</span>
    </DashButton>
  );
};

AddCollectionButton.defaultProps = {
  color: 'var(--purple-900)',
  backgroundColor: 'var(--white)',
};

export default AddCollectionButton;
