import { faker } from "@faker-js/faker";

export const LISTDATA: DataItem[] = [
  { value: "applied", label: "Applied", count: 197 },
  { value: "shortlisted", label: "Shortlisted", count: 153 },
  { value: "technicalInterview", label: "Technical Interview", count: 90 },
  { value: "opportunityBrowsing", label: "Opportunity Browsing", count: 182 },
  { value: "videoInterviewI", label: "Video Interview I", count: 25 },
  { value: "videoInterviewII", label: "Video Interview II", count: 25 },
  { value: "videoInterviewIII", label: "Video Interview III", count: 25 },
  { value: "offer", label: "Offer", count: 25 },
  { value: "withdrawn", label: "Withdrawn", count: 25 },
];

export interface DataItem {
  value: string;
  label: string;
  count: number;
}

export interface MockData {
  avatar: string;
  id: string;
  name: string;
  location: string;
  education: string;
  tags: string[];
  hints: string[];
}

export const mockData: (len: number) => MockData[] = (len: number) => {
  return Array.from({ length: len }, () => {
    const firstName = faker.person.firstName(),
      lastName = faker.person.lastName();
    return {
      avatar: [firstName[0], lastName[0]].join(""),
      id: faker.string.uuid(),
      name: [firstName, lastName].join(" "),
      location: `${faker.location.city()}, ${faker.location.country()}`,
      education: `Bachelor - ${faker.company.name()} (${faker.date
        .recent()
        .getFullYear()} - ${faker.date.future().getFullYear()})`,
      tags: [faker.word.noun(), faker.word.noun(), faker.word.noun()],
      hints: [faker.word.noun(), faker.word.noun(), faker.word.noun()],
    };
  });
};
