export default function createIteratorObject(report) {
  const departments = Object.keys(report);
  let currentDeptIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDeptIndex < departments.length) {
        const currentDept = departments[currentDeptIndex];
        const employees = report[currentDept];

        if (currentEmployeeIndex < employees.length) {
          const employee = employees[currentEmployeeIndex];
          currentEmployeeIndex++;
          return { value: employee, done: false };
        } else {
          currentDeptIndex++;
          currentEmployeeIndex = 0;
          return this.next(); // Move to the next department
        }
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
