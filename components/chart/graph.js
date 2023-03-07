// TradingViewWidget.jsx

import React, { useContext, useEffect, useRef,useState } from 'react';
import Context from '../contexts/context';

let tvScriptLoadingPromise;

export default function Graph({symbol}) {
  const onLoadScriptRef = useRef();
  const { mode } = useContext(Context);
  const [width, setWidth] = useState(1024)

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      let innerWidth = window.innerWidth;

      setWidth(innerWidth);

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_19574') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: symbol,
            interval: "D",
            timezone: "Etc/UTC",
            theme: (mode === "dark") ? "dark" : "light",
            style: "1",
            locale: "in",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            hide_side_toolbar: innerWidth < 768 ? true : false,
            container_id: "tradingview_19574"
          });
        }
      }
    },
    [symbol,mode]
  );

  return (
    <div className='tradingview-widget-container '>
      <div id='tradingview_19574' className={width < 768 ? 'h-[320px]' : 'h-[500px]' } />
      <div className="tradingview-widget-copyright">
      </div>
    </div>
  );
}

