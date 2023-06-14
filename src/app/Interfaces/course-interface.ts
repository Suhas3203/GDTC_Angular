import { BranchesInterface } from './branchesInterface';

export interface CourseInterface {
  id: number;
  // imageUrl: string;
  title: string;
  description: string;
  registrationValidity: Date;
  branchesList: BranchesInterface[];
}
