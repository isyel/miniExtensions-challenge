import { FieldSet, Records } from "airtable";
import { handleError, base } from "./apiUtils";

export function getClasses(): Promise<Records<FieldSet>> {
  return base("Classes")
    .select({
      view: "Grid view",
      filterByFormula: "FIND('Jenny',{Students})",
    })
    .all();
}

export async function getSingleClass(classId: string) {
  base("Classes").find(classId, function (err, record) {
    if (err) {
      handleError(err);
      return;
    }
    console.log("Retrieved", record);
  });
}

// filterByFormula: "FIND('Jenny',{Students})",   // get classes by entered name
