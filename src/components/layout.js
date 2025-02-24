import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  render() {
    const { location, children } = this.props;

    return (
      <div>
        <Header type="main" title="Marcus Ericsson" path={location.pathname} />
        <div className="page-content">
          <div className="page-content">
            <div className="wrapper">{children}</div>
          </div>
        </div>
        <Footer />
        <link
          href="https://fonts.googleapis.com/css?family=Athiti|Source+Code+Pro"
          rel="stylesheet"
        />
            <script>
  !function(){var i="analytics",analytics=window[i]=window[i]||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window[i].initialized)return window[i][e].apply(window[i],arguments);var n=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");n.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}n.unshift(e);analytics.push(n);return analytics}};for(var n=0;n<analytics.methods.length;n++){var key=analytics.methods[n];analytics[key]=analytics.factory(key)}analytics.load=function(key,n){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.setAttribute("data-global-segment-analytics-key",i);t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r);analytics._loadOptions=n};analytics._writeKey="uLh97n8wRfKbqtUyXQuuLu06xQIc5WY9";;analytics.SNIPPET_VERSION="5.2.0";
  analytics.load("uLh97n8wRfKbqtUyXQuuLu06xQIc5WY9");
  analytics.page();
  }}();
</script>
      </div>
    );
  }
}

export default Layout;
