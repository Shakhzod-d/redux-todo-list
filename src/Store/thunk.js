export const saveNotes = () => async (dispatch, getState) => {
  const notes = getState().notes;
  await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    header: {
      Accept: "application/json",
      "Contect-type": "application/json",
    },
    body: JSON.stringify(notes),
  });
  alert("success");
};
