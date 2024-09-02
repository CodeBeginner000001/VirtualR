import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { Column } from "./Footer-components";
export default function Footer({ style }) {
  return (
    <div className={style}>
      <footer className="mt-20 border-t py-10 border-neutral-700 ">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Column Links={resourcesLinks} heading="Resources" />
            <Column Links={platformLinks} heading="Platform" />
            <Column Links={communityLinks} heading="Community" />
          </div>
      </footer>
    </div>
  );
}
