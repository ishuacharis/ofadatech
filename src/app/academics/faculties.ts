interface FacultyInfo {
  name: string;
  depts: string[];
};

export const faculties: Record<string, FacultyInfo> = {
  "engineering": {
    name: "engineering",
    depts: [
      "Mechanical",
      "Electrical",
      "Radio & Electronics",
      "Air Conditioner & Refridgeration",
      "Plumbing",
      "CCTV / TV"
    ]
  },
  "agriculture": {
    name: "agriculture",
    depts: [
      "Agriculture",
      "Agriculture Implements",
    ]
  },
  "hospitality": {
    name: "hospitality",
    depts: ["Catering", "Craft Pratice", "Home Economics", "Entertainment"]
  },
  "computer": {
    name: "computer",
    depts: ["Fintech", "Software Development"]
  },
  "finance": {
    name: "finance",
    depts: ["Business", "Finance", "Marketing", "SEO", "Accounting",  "Analytics", "Advertisement"]
  },
  "art": {
    name: "creative art",
    depts: ["Pottery"]
  },
};