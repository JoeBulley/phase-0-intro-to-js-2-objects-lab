const employee = {
    name: 'Joe',
    streetAddress: '3 Allworth'
};

function updateEmployeeWithKeyAndValue(employee, streetAddress, value) {
   const updated = {...employee};
   updated[streetAddress] = '11 Broadway'
   return updated;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee[streetAddress] = '12 Broadway';
    return employee;

}

function deleteFromEmployeeByKey(employee, name) {
    let newEmployee = {...employee};
    delete newEmployee[name]
    return newEmployee; 

}

function destructivelyDeleteFromEmployeeByKey(employee, key,) {
    employee[key] = undefined;
    return employee;
}
