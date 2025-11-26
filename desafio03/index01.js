// 1. A Entidade (Dados)
// Motivo para mudar: Apenas se os atributos do funcionário mudarem.
class Employee {
    constructor(name, hoursWorked, hourlyRate) {
      this.name = name;
      this.hoursWorked = hoursWorked;
      this.hourlyRate = hourlyRate;
    }
  }
  
  // 2. A Lógica de Pagamento
  // Motivo para mudar: Apenas se a regra de cálculo de salário mudar (ex: horas extras).
  class PayrollCalculator {
    calculate(employee) {
      return employee.hoursWorked * employee.hourlyRate;
    }
  }
  
  // 3. A Persistência (Repositório)
  // Motivo para mudar: Apenas se trocarmos o banco de dados (ex: de SQL para Mongo).
  class EmployeeRepository {
    save(employee) {
      console.log(`Salvando ${employee.name} no banco de dados...`);
    }
  }
  
  // 4. A Apresentação (Report)
  // Motivo para mudar: Apenas se o RH pedir um formato diferente de relatório (ex: PDF, HTML).
  class EmployeeReport {
    print(employee) {
      console.log(`--- RELATÓRIO ---`);
      console.log(`Funcionário: ${employee.name}`);
      console.log(`Horas: ${employee.hoursWorked}`);
    }
  }
  
  // --- Uso ---
  
  const emp = new Employee("Carlos", 160, 50);
  
  const calculator = new PayrollCalculator();
  const repo = new EmployeeRepository();
  const report = new EmployeeReport();
  
  console.log(`Salário: R$${calculator.calculate(emp)}`);
  repo.save(emp);
  report.print(emp);