"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useHubspotForm } from "next-hubspot";
import s from "./index.module.scss";
import Skeleton from "@/components/Skeleton";
/**
 * Props for `HubspotForm`.
 */
export type HubspotFormProps = SliceComponentProps<Content.HubspotFormSlice>;

/**
 * Component for "HubspotForm" Slices.
 */
const HubspotForm = ({ slice }: HubspotFormProps): JSX.Element => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "",
    formId: slice.primary.fromId || "",
    target: "#hubspot-form-wrapper",
  });

  if (error) {
    console.log(error);
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={s.section}
    >
      <div className={s.content}>
        {formCreated && loaded ? (
          <div id="hubspot-form-wrapper" />
        ) : (
          <Skeleton type={slice.primary.loaderType} />
        )}
      </div>
    </section>
  );
};

export default HubspotForm;
