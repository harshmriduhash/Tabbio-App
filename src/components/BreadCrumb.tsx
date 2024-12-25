import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import {FaGreaterThan} from 'react-icons/fa';

interface BreadcrumbProps {
  children?: React.ReactNode;
  routes?: any[];
  pageName?: string;
  homeRoute?: string;
  homeRouteName?: string;
}

export default function Breadcrumb(props: BreadcrumbProps) {
  const navigate = useNavigate();
  const defaultRoute = props.homeRoute || "/app/dashboard";

  return (
    <div className="mb-6 gap-3">
      {/* <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {props.pageName}
      </h2> */}

      <nav>
        <div className="flex items-center gap-2">
          {props?.routes ? (
            props?.routes?.map((p: any, routeIndex: number) =>
              routeIndex + 1 === props?.routes?.length ? (
                <li className="hover:text-primary text-underline">{p?.name}</li>
              ) : (
                <li className="cursor-pointer " onClick={() => navigate(-1)}>
                  {p?.name} /
                </li>
              )
            )
          ) : (
            <div className="flex items-center gap-2">
              <div>
                <Link to={defaultRoute} className="hover:text-primary text-slate-900 font-medium underline underline-offset-[3px]">
                  {props.homeRouteName}
                </Link>
              </div>
              <span><MdOutlineArrowForwardIos /></span>
              <p className="text-black font-medium">{props.pageName}</p>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
