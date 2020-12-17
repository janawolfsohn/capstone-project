export default function saveLocally(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
