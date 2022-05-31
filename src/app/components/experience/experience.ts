export interface Experience{
  id: number,
  companyName: string,
  duration: string,
  orderNumber: number,
  projects: [{
    id: number,
    projectName: string,
    projectDescription: string,
    roles: [{
      id: number,
      description: string
    }]
  }]
}
