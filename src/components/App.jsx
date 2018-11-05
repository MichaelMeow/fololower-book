import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import AddFriends from "./AddFriends";
import ProfileBox from "./ProfileBox";
import NewsFeed from "./NewsFeed";

function App(){
  return (
    <div>
      <style jsx global>{`
        .bordery {
          border: solid black 1px;
          margin: 10px;
        }

        * {
          margin: 0 auto;
          padding: 0;
        }
        `}</style>
      <Header/>
      <ProfileBox name="Profile Name"/>
      <NewsFeed/>
      <AddFriends/>
      <TicketList/>
    </div>
  );
}

export default App;
