import axios from 'axios';

class EmployeeService {

    getEmployees(){
        return fetch("http://dummy.restapiexample.com/api/v1/employees");
    }

    // createEmployee(employee){
    //     return axios.post(EMPLOYEE_API_BASE_URL, employee);
    // }

    getEmployeeById(employeeId){
        return fetch("http://dummy.restapiexample.com/api/v1/employee" + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put("http://dummy.restapiexample.com/api/v1/update/21" + '/' + employeeId, employee);
    }

    // deleteEmployee(employeeId){
    //     return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    // }
}

export default new EmployeeService()