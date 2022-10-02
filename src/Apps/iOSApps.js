import React from "react";
import Card from '../Components/Card';
import { appList } from './BaseApp.js';
import { DetailStyle } from "../Components/TextStyles.js";
import { Link } from "react-router-dom";

function iOSApps() {
  return (
    <div className="relative">

        <DetailStyle mainText="iOS Apps" detailText="Here are some of the iOS, iPadOS, Mac, and Apple Watch apps I've worked on:" isItalic={false}></DetailStyle>
        <div className="relative grid top-800 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
        
        {Object.entries(appList).map(([slug]) => (
        <Link to={`/${slug}`}>
        <Card app={appList[slug]} useSVG={false}></Card>
        </Link>
      ))}
        </div>
    </div>
  );
}

export default iOSApps;