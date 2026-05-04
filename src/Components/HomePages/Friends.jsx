import { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      console.log(data);
      setFriends(data);
      setLoading(false);
    };
    fetchFriends();
  }, []);

  console.log("friends", friends);
  console.log(loading);
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Your friends</h2>
      {loading ? (
        <span className="loading loading-dots loading-xl"></span>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-4 lg:gap-6">
          {friends.map((friend) => (
            <Friend key={friend.id} friend={friend}></Friend>
          ))}
        </div>
      )}
    </div>
  );
};

export default Friends;
