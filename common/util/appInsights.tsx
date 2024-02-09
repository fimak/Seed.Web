import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { AppInsightsContext, ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js';
import { BrowserHistory, Listener, To, createBrowserHistory, Action, Blocker} from 'history';

const defaultBrowserHistory : BrowserHistory = {
    location: { 
        pathname: '',
        state : '',
        search: '',
        key: '',
        hash: ''
        
    },
    action: Action.Replace,
    createHref: (to: To) => to.toString(),
    push: (to: To, state?: any) => {},
    replace: (to: To, state?: any) => {},
    go: (delta: number) => {},
    back: () => {},
    forward: () => {},
    listen: (listener: Listener) => () => {},
    block: (blocker: Blocker) => () => {}
}
let bHistory : BrowserHistory = defaultBrowserHistory;
if (typeof window !== 'undefined') {
    bHistory = { ...bHistory, ...window.history};
    bHistory.location.pathname = bHistory?.location?.state as string;
}
var reactPlugin = new ReactPlugin();
var appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: process.env.NEXT_PUBLIC_APPLICATION_INSIGHTS_KEY || 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxx',
        enableAutoRouteTracking: true,
        enableCorsCorrelation: true,
        enableRequestHeaderTracking: true,
        enableResponseHeaderTracking: true,
        enableAjaxPerfTracking: true,
        isBrowserLinkTrackingEnabled: true,
        extensions: [reactPlugin]
    }
});
appInsights.loadAppInsights();

export const AzureAppInsights = ({ children } : { children: React.ReactNode}) => {
    return (
      <AppInsightsContext.Provider value={reactPlugin}>
        {children}
      </AppInsightsContext.Provider>
    );
  };
  
export default withAITracking(reactPlugin, AzureAppInsights);