import { useEffect, useState } from "react";
import API from "../api/axios";
import EventCard from "../components/EventCard";

export default function Dashboard() {
  const [events, setEvents] = useState([]);

  const loadEvents = async () => {
    const res = await API.get("/events");
    setEvents(res.data);
  };

  useEffect(() => {
    loadEvents();
  }, []);
 


  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {events.map(event => (
        <EventCard key={event._id} event={event} refresh={loadEvents} />
      ))}
    </div>
  );
}
