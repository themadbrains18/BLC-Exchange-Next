// TradingViewWidget.jsx

import React, { useContext, useEffect, useRef } from 'react';
import Context from '../contexts/context';

let tvScriptLoadingPromise;

export default function Graph() {
  const onLoadScriptRef = useRef();
const {mode}=useContext(Context)
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

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_19574') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "NASDAQ:AAPL",
            interval: "D",
            timezone: "Etc/UTC",
            theme: (mode === "dark") ? "dark": "light",
            style: "1",
            locale: "in",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_19574"
          });
        }
      }
    },
    [mode]
  );

  return (
    <div className='tradingview-widget-container '>
      <div id='tradingview_19574' className='h-[700px]' />
      <div className="tradingview-widget-copyright">
        
      </div>
    </div>
  );
}

