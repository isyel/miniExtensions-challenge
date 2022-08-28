import Airtable from "airtable";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "key2PIivXIC3VDSnQ",
});
export const base = Airtable.base("app8ZbcPx7dkpOnP0");

// In a real app, would likely call an error logging service.
export function handleError(error: any) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}
