import * as React from 'react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { AtilaProgressProps } from '../interfaces';

const AtilaProgress: React.FC<AtilaProgressProps> = ({
  label,
  percentage,
  color,
}) => {
  return (
    <CircularProgress
      value={percentage}
      color={color}
      size={140}
      p={1.5}
      thickness='6px'
    >
      <CircularProgressLabel fontSize={14}>{label}</CircularProgressLabel>
    </CircularProgress>
  );
};

export default AtilaProgress;
