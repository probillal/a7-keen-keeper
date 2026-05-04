import { useEffect } from "react";

const Friends = () => {
  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      console.log(data);
    };
    fetchFriends();
  }, []);
  return (
    <div>
      <h2>This is friends</h2>
    </div>
  );
};

export default Friends;
