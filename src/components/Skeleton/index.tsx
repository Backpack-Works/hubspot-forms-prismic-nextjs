import { FC } from "react";
import s from "./index.module.scss";
import { HubspotFormSliceDefaultPrimary } from "../../../prismicio-types";

type TSkeleton = {
  type: HubspotFormSliceDefaultPrimary["loaderType"];
};

const Skeleton: FC<TSkeleton> = ({ type }) => {
  switch (!!type) {
    case type === "1":
      return (
        <div className={s.skeleton}>
          <div className={s.row}>
            <div className={s.item}></div>
            <div className={s.item}></div>
          </div>
          <div className={s.row}>
            <div className={s.item}></div>
            <div className={s.item}></div>
          </div>
          <div className={s.row}>
            <div className={s.item}></div>
            <div className={s.item}></div>
          </div>
          <div className={s.item}></div>
          <div className={s.row}>
            <div className={s.item}></div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Skeleton;
