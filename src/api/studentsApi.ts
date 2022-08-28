import { FieldSet, Records } from "airtable";
import { base } from "./apiUtils";

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

export async function getSingleStudent(
  studentName: string = "Jenny"
): Promise<Records<FieldSet>> {
  return base("Students")
    .select({
      view: "Grid view",
      filterByFormula: `{Name}='${studentName}'`,
    })
    .all();
}

//  filterByFormula: "OR(FIND('CS 101',{Classes}), FIND('CS 102',{Classes}), FIND('CS 103',{Classes}))",
//  FIND('${singleClass.id}',{Classes})
