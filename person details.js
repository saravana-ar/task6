class Person {
    constructor(name, age, gender, qualification, experience, role, marital, kids) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.qualification = qualification;
      this.experience = experience;
      this.role = role;
      this.marital = marital;
      this.kids = kids;
    }
  
  
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  
    getGender() {
      return this.gender;
    }
  
    getQualification() {
      return this.qualification;
    }
  
    getExperience() {
      return this.experience;
    }
  
    getRole() {
      return this.role;
    }
    
    getmarital() {
        return this.marital;
    }
    getkids() {
        return this.kids;
    }
    
    setName(name) {
      this.name = name;
    }
  
    setAge(age) {
      this.age = age;
    }
  
    setGender(gender) {
      this.gender = gender;
    }
  
    setQualification(qualification) {
      this.qualification = qualification;
    }
  
    setExperience(experience) {
      this.experience = experience;
    }
  
    setRole(role) {
      this.role = role;
    }
    setmarital(marital) {
        this.marital = marital;
    }
    setkids(kids) {
        this.kids = kids;
    }
  }
  
  const person1 = new Person("THIRUPATHI", 30, "Male", "BE csc", "8 years", "FULL stack developer", "Yes", "2Kids");
  
  console.log("Name:", person1.getName());
  console.log("Age:", person1.getAge());
  console.log("Gender:", person1.getGender());
  console.log("Qualification:", person1.getQualification());
  console.log("Experience:", person1.getExperience());
  console.log("Role:", person1.getRole());
  console.log("marital:", person1.getmarital());
  console.log("kids:", person1.getkids());
  
  
  