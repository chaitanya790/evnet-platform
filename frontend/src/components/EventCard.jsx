import API from "../api/axios";

export default function EventCard({ event, refresh }) {
  const rsvp = async () => {
    await API.post(`/rsvp/${event._id}/join`);
    refresh();
  };

  return (
    <div className="border rounded shadow p-4">
      <img
        src={event.image}
        alt="event"
        className="h-40 w-full object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{event.title}</h2>
      <p className="text-sm">{event.description}</p>
      <p className="text-sm text-gray-600">
        {event.currentAttendees}/{event.capacity} attending
      </p>
      <button onClick={rsvp} className="btn mt-3 w-full">
        RSVP
      </button>
    </div>
  );
}

