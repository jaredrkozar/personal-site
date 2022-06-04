import React from "react";
import Card from '../Components/Card';
import SwiftIcon from  "../Images/SwiftIcon.jpg";
import JavaIcon from  "../Images/JavaIcon.jpg";
import ClojureIcon from  "../Images/clojureIcon.png";

function OtherApps() {
  return (
    <div className="relative mr-5">
        <h2 className="text-4xl font-bold"> Other Apps</h2>

        <h3 className="text-2xl font-semibold py-2"> Here are some of the other projects I've worked on:</h3>
        <div class="relative grid top-800 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-2">
        <Card mainTitle="SwiftyMathParser" mainDescription="A CocoaPod that lets you parse simple math expressions." appIcon={SwiftIcon} firstColor="from-orange-400" secondColor="to-orange-700"></Card>
        <Card mainTitle="NYTBot" mainDescription="Search for articles uing the New York Times API by date, topic, and section." appIcon={ClojureIcon} firstColor="from-gray-500" secondColor="to-gray-700"></Card>
        <Card mainTitle="HashTablesCalc" mainDescription="Calculate hash tables using double or quadratic hashing." appIcon={JavaIcon} firstColor="from-blue-700" secondColor="to-blue-900"></Card>
        <Card mainTitle="CalcGraphCost" mainDescription="Calculate the total graoh cost for a weighted and unweighted graph." appIcon={JavaIcon} firstColor="from-blue-700" secondColor="to-blue-900"></Card>
        </div>
    </div>
  );
}

export default OtherApps;