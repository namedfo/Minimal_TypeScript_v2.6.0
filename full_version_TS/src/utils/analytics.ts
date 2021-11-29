import { googleAnalyticsConfig } from '../config';

// ----------------------------------------------------------------------

const setup = (
  targetId: string,
  config?: Gtag.CustomParams | Gtag.ControlParams | Gtag.EventParams
) => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }
  if (!window.gtag) {
    return;
  }
  window.gtag('config', targetId, config);
};

const setupEvent = (
  targetId: string,
  config?: Gtag.CustomParams | Gtag.ControlParams | Gtag.EventParams
) => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }
  if (!window.gtag) {
    return;
  }
  window.gtag('event', targetId, config);
};

const track = {
  pageview: (props?: Gtag.CustomParams | Gtag.ControlParams | Gtag.EventParams) => {
    setup(googleAnalyticsConfig || '', props);
  },
  event: (type: string, props?: Gtag.CustomParams | Gtag.ControlParams | Gtag.EventParams) => {
    setupEvent(type, props);
  }
};

export default track;
