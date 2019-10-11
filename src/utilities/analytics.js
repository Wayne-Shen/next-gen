import * as ReactGA from "react-ga";


export const InitAnalytics = () => {
    ReactGA.initialize('UA-141749606-1')
};

export const LogPageView = () => {
    ReactGA.set({page: window.location.pathname})
    ReactGA.pageview(window.location.pathname)
};

