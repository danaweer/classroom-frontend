export const DEPARTMENTS = [
  'CS',
  'MATH',
  'AI'
]; // this will be used in the select component to filter subjects by department

export const DEPARTMENTS_OPTIONS = DEPARTMENTS.map((dept)=>({
    value: dept,
    label: dept
})) // this will be used in the select component to filter subjects by department