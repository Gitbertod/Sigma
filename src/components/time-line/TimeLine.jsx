"use client";
import { FaCalendarAlt } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";

export function TimeLine() {
  const { t } = useTranslation();

  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(255, 255, 255)",
            color: "rgb(140, 140, 140)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date={t("Timeline.2005AugustDate")}
          iconStyle={{ background: "rgb(204, 204, 204)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("Timeline.2005AugustTitle")}
          </h3>
          <p>{t("Timeline.2005AugustDescription")}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={t("Timeline.2006JuneDate")}
          iconStyle={{ background: "rgb(180, 180, 180)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("Timeline.2006JuneTitle")}
          </h3>
          <p>{t("Timeline.2006JuneDescription")}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={t("Timeline.2008JulyDate")}
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("Timeline.2008JulyTitle")}
          </h3>
          <p>{t("Timeline.2008JulyDescription")}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={t("Timeline.2009MarchDate")}
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("Timeline.2009MarchTitle")}
          </h3>
          <p>{t("Timeline.2009MarchDescription")}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={t("Timeline.2010OctoberDate")}
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("Timeline.2010OctoberTitle")}
          </h3>
          <p>{t("Timeline.2010OctoberDescription")}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={t("Timeline.2012AprilDate")}
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("Timeline.2012AprilTitle")}
          </h3>
          <p>{t("Timeline.2012AprilDescription")}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={t("Timeline.2013DecemberDate")}
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("Timeline.2013DecemberTitle")}
          </h3>
          <p>{t("Timeline.2013DecemberDescription")}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={t("Timeline.2014NovemberDate")}
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("Timeline.2014NovemberTitle")}
          </h3>
          <p>{t("Timeline.2014NovemberDescription")}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={t("Timeline.2017MarchDate")}
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("Timeline.2017MarchTitle")}
          </h3>
          <p>{t("Timeline.2017MarchDescription")}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={t("Timeline.2019JulyDate")}
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">
            {t("Timeline.2019JulyTitle")}
          </h3>
          <p>{t("Timeline.2019JulyDescription")}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}
