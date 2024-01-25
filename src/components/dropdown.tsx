export default function Dropdown() {
  return (
    <>
      <label htmlFor="something-select">choose a thing</label>
      <select name="thing" id="thing-select">
        <option value="">Select a thing</option>
        <option value="option 1">option 1</option>
        <option value="option 2">option 2</option>
        <option value="option 3">option 3</option>
        <option value="option 4">option 4</option>
        <option value="option 5">option 5</option>
      </select>
    </>
  );
}
