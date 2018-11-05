import React from "react";
import NewsItem from "./NewsItem";

  const masterNewsFeed = [
    {
      color: 'lightgreen',
      name: 'Gary',
      status: 'I want Pizza'
    },
    {
      color: 'lightblue',
      name: 'Joan',
      status: 'I want Sushi'
    },
    {
      color: 'lightcoral',
      name: 'Huckleberry',
      status: 'FML'
    }
  ];

function NewsFeed(){
  return (
    <div className="bordery">
      <h4>tweet</h4>
        {masterNewsFeed.map((item, index) =>
          <NewsItem color={item.color}
          name={item.name}
          status={item.status}
          key={index}/>
        )}
    </div>
  );
}

export default NewsFeed;
