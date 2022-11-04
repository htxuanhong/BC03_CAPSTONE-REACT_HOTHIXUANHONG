import React from "react";
import HeaderResponsive from "../components/HeaderTheme/HeaderResponsive";

export function LayoutTheme(props) {
  const { Component } = props;
  return (
    <div>
      <HeaderResponsive />
      <div>
        <Component />
      </div>
    </div>
  );
}
