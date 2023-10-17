import { reportWebVitals as onPerfEntry } from 'web-vitals';

export const reportWebVitals = onPerfEntry ? (onPerfEntry) => {
  if (onPerfEntry.name === 'FCP') {
    console.log('First Contentful Paint', onPerfEntry);
  } else if (onPerfEntry.name === 'LCP') {
    console.log('Largest Contentful Paint', onPerfEntry);
  } else if (onPerfEntry.name === 'CLS') {
    console.log('Cumulative Layout Shift', onPerfEntry);
  } else if (onPerfEntry.name === 'FID') {
    console.log('First Input Delay', onPerfEntry);
  }
} : () => {};

export default reportWebVitals;
