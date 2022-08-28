import { FieldSet, Records } from "airtable";
import { handleError, base } from "./apiUtils";

export async function getStudents(
  filterFormulaString: string
): Promise<Records<FieldSet>> {
  return base("Students")
    .select({
      view: "Grid view",
      filterByFormula: `OR(${filterFormulaString})`,
    })
    .all();
}

export async function getSingleStudent(studentId: string) {
  base("Students").find(studentId, function (err, record) {
    if (err) {
      handleError(err);
      return;
    }
    console.log("Retrieved", record);
  });
}

//  filterByFormula: "OR(FIND('CS 101',{Classes}), FIND('CS 102',{Classes}), FIND('CS 103',{Classes}))",
