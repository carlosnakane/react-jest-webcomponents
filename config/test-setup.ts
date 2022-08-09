import '@testing-library/jest-dom/extend-expect';
import resizeObserver from 'resize-observer-polyfill';

global.ResizeObserver = resizeObserver;