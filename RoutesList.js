exports.RouteList = [
  {
    Endpoint: "/notes/",
    method: "GET",
    body: null,
    description: "Returns an array of notes",
  },
  {
    Endpoint: "/notes/id",
    method: "GET",
    body: null,
    description: "Returns a single note object",
  },
  {
    Endpoint: "/notes/create/",
    method: "POST",
    body: { body: "" },
    description: "Creates new note with data sent in post request",
  },
  {
    Endpoint: "/notes/id/update/",
    method: "PUT",
    body: { body: "" },
    description: "Creates an existing note with data sent in post request",
  },
  {
    Endpoint: "/notes/id/delete/",
    method: "DELETE",
    body: null,
    description: "Deletes and exiting note",
  },
];
