import { ErrorCorrectionLevel } from '../types/index.ts';

interface ErrorCorrectionLevels {
  [key: string]: ErrorCorrectionLevel;
}

export default {
  L: 'L',
  M: 'M',
  Q: 'Q',
  H: 'H'
} as ErrorCorrectionLevels;
