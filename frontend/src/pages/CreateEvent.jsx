import { useState } from "react";
import API from "../api/axios";

export default function CreateEvent() {
  const [form, setForm] = useState({});

 const submit = async () => {
  try {
    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    data.append("dateTime", form.dateTime);
    data.append("location", form.location);
    data.append("capacity", form.capacity);

    if (form.image) {
      data.append("image", form.image);
    }

    await API.post("/events", data);
    alert("Event created successfully");
  } catch (err) {
    alert(err.response?.data?.message || "Create event failed");
  }
};


  return (
    <div className="p-10 max-w-md mx-auto space-y-3">
      <input className="input" placeholder="Title"
        onChange={e => setForm({ ...form, title: e.target.value })} />
      <input className="input" placeholder="Description"
        onChange={e => setForm({ ...form, description: e.target.value })} />
      <input className="input" type="datetime-local"
        onChange={e => setForm({ ...form, dateTime: e.target.value })} />
      <input className="input" placeholder="Location"
        onChange={e => setForm({ ...form, location: e.target.value })} />
      <input className="input" type="number" placeholder="Capacity"
        onChange={e => setForm({ ...form, capacity: e.target.value })} />
      <input type="file"
        onChange={e => setForm({ ...form, image: e.target.files[0] })} />
      <button className="btn" onClick={submit}>Create Event</button>
    </div>
  );
}
