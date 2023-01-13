function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Test";
}

function FactoryPattern() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
    }
  };
}

function output01() {
  console.log("hello " + this.name + " you are " + this.type);
}

const employeeFactory = new FactoryPattern();
const employees = [];

employees.push(employeeFactory.create("Luigi", 1));

output01();
