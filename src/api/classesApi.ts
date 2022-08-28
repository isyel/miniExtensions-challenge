import { FieldSet, Records } from "airtable";
import { handleError, base } from "./apiUtils";

export function getClasses(studentName: string): Promise<Records<FieldSet>> {
  return base("Classes")
    .select({
      view: "Grid view",
      filterByFormula: `FIND('${studentName}',{Students})`,
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
