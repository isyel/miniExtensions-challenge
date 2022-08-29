import { FieldSet, Records } from "airtable";
import { handleError, base } from "./apiUtils";

export function getClassesByIds(
  filterFormulaString: string
): Promise<Records<FieldSet>> {
  return base("Classes")
    .select({
      view: "Grid view",
      filterByFormula: `OR(${filterFormulaString})`,
      fields: ["Name"],
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
