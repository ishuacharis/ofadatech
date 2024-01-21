export interface SubLinkInfo {
  title: string;
  link: string;
}
export interface NavInfo {
  name: string;
  heading: string;
  description: string;
  sublinks: SubLinkInfo[];
};

export interface BenefitInfo {
  title: string;
  text: string;
};