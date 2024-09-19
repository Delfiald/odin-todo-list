import storageAvailable from "./storageAvailable";

export default () => {
  if (!storageAvailable("localStorage")) {
    throw new Error("Local storage is not supported by your browser.");
  }
}