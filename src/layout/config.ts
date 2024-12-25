import React from "react";
import icons from "./navIcons";

interface INavChild {
  name: string;
  path: string;
  icon: React.ReactNode;
  children?: INavChild[];
}
export interface ISidebarNav {
  section: string;
  children: INavChild[];
}

//Admin navigation
export const HOME_NAV_DATA = [
  // MENU
  {
    children: [
      {
        name: "Workspace",
        path: "/app/workspace", //use for nested rendering
        icon: icons.Dashboard,
        fillIcon: icons.DashboardFill,
      },
      {
        name: "Saved Profiles",
        path: "/app/saved-profiles", //use for nested rendering
        icon: icons.Users,
        fillIcon: icons.UsersFill,
      },
      {
        name: "Persona Management",
        path: "/app/persona", //use for nested rendering
        icon: icons.User,
        fillIcon: icons.UserFill,
      },
      {
        name: "Template Management",
        path: "/app/templates", //use for nested rendering
        icon: icons.Template,
        fillIcon: icons.TemplateFill,
      },
    ],
  },
];

//Candidate navigation
export const CANDIDATE_NAV_DATA = [
  // MENU
  {
    children: [
      {
        name: "Live Resume",
        path: "/app/candidate/live-resume", //use for nested rendering
        icon: icons.Resume,
        fillIcon: icons.ResumeFill,
      },
      {
        name: "Application",
        path: "/app/candidate/resume-builder", //use for nested rendering
        icon: icons.Resume,
        fillIcon: icons.ResumeFill,
      },
    ],
  },
];

//Recruiter navigation
export const RECRUITER_NAV_DATA = [
  // MENU
  {
    children: [
      {
        name: "Talent Hub",
        path: "/app/recruiter",
        icon: icons.Home,
        fillIcon: icons.HomeFill,
      },
      {
        name: "Application Builder",
        path: "/app/application-builder", //use for nested rendering
        icon: icons.Dashboard,
        fillIcon: icons.DashboardFill,
      },
    ],
  },
];

//SocialPal Pages
export const SOCIAL_NAV_DATA = [
  // MENU
  {
    children: [
      {
        name: "Linkedin Optimization",
        path: "/app/profile-optimization", //use for nested rendering
        icon: icons.Optimize,
        fillIcon: icons.OptimizeFill,
      },
      {
        name: "Banner Maker",
        path: "/app/organization/dashboard", //use for nested rendering
        icon: icons.Banner,
        fillIcon: icons.Banner,
      },
    ],
  },
];
