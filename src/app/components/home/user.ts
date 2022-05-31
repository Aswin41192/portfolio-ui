export interface Users{
  id: number,
  imagePath: string,
  email: string,
  linkedinProfile: string,
  userDescriptions : [{
    id: number,
    description: string
  }]
}
