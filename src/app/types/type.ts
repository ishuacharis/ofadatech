export interface SubLinkInfo {
  title: string;
  link: string;
}
export interface NavInfo {
  name: string;
  heading: string;
  description: string;
  link: string;
  sublinks: SubLinkInfo[];
};

export type QuickLinkInfo = Omit<NavInfo, "heading" | "description" | "link">

export interface BenefitInfo {
  title: string;
  text: string;
};

export interface Todo {}