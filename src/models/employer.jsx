// models/Employee.js
class Employee {
    constructor({
      fullName = '',
      matricule = '',
      postTitle = '',
      hireDate = '',
      department = '',
      legalEntity = '',
      site = '',
      bu = '',
      direction = '',
      service = '',
      manager = '',
      workLocation = '',
      teamProjects = '',
      contractType = '',
      employmentStatus = '',
      jobFamily = '',
      subJobFamily = '',
      referencePost = '',
      grade = '',
      responsibilityLevel = '',
      contractEndDate = null,
      probationEndDate = null,
      careerHistory = [],
      seniorityDate = null,
      monthlyHours = 0,
      fullTime = true,
      externalPerson = false,
      nonCompeteClause = null,
    }) {
      this.fullName = fullName;
      this.matricule = matricule;
      this.postTitle = postTitle;
      this.hireDate = hireDate;
      this.department = department;
      this.legalEntity = legalEntity;
      this.site = site;
      this.bu = bu;
      this.direction = direction;
      this.service = service;
      this.manager = manager;
      this.workLocation = workLocation;
      this.teamProjects = teamProjects;
      this.contractType = contractType;
      this.employmentStatus = employmentStatus;
      this.jobFamily = jobFamily;
      this.subJobFamily = subJobFamily;
      this.referencePost = referencePost;
      this.grade = grade;
      this.responsibilityLevel = responsibilityLevel;
      this.contractEndDate = contractEndDate;
      this.probationEndDate = probationEndDate;
      this.careerHistory = careerHistory;
      this.seniorityDate = seniorityDate;
      this.monthlyHours = monthlyHours;
      this.fullTime = fullTime;
      this.externalPerson = externalPerson;
      this.nonCompeteClause = nonCompeteClause;
    }
  }
  
  export default Employee;
  