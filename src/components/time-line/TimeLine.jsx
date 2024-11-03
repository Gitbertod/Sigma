"use client";

import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import styles from "./TimeLine.module.css";
import MiniDataInfo from "../mini-data-info/MiniDataInfo";
import TimeLineItem from "../time-line-item/TimeLineItem";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export function TimeLine() {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(180, 180, 180)", color: "white" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date="2005 August"
          iconStyle={{ background: "rgb(204, 204, 204)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            Sigma achieves a significant milestone by obtaining operating
            authorization from the SMV, laying the foundation for its future
            endeavors in the financial realm.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(180, 180, 180)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Embarking on its operational journey, Sigma introduces the LeasOp I
            fund, capturing attention with a substantial $16 million in
            subscribed equity.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 July"
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">2008 July</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>Demonstrating strategic collaboration, Sigma launches the LeasOp III fund, boasting an impressive authorized capital of $100 million.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Demonstrating strategic collaboration, Sigma launches the LeasOp III
            fund, boasting an impressive authorized capital of $100 million.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        />
      </VerticalTimeline>

      {/* <TimeLineItem
      title={<>2005 August</>}
      icon={<FaCalendarAlt className={styles.icon} />}
      text={
        <>
          Sigma achieves a significant milestone by obtaining operating
          authorization from the SMV, laying the foundation for its future
          endeavors in the financial realm.
        </>
      }
    /> */}
      {/* <Timeline className="m-7">

<Timeline.Item>
<FaCalendarAlt className={styles.icon} />
<Timeline.Content>
  <Timeline.Time>2005 August</Timeline.Time>
  <Timeline.Title className="text-base">2005 August</Timeline.Title>
  <Timeline.Body>
    Sigma achieves a significant milestone by obtaining operating
    authorization from the SMV, laying the foundation for its future
    endeavors in the financial realm.
  </Timeline.Body>
</Timeline.Content>
</Timeline.Item>
<Timeline.Item>
<Timeline.Point icon={HiCalendar} />
<Timeline.Content>
  <Timeline.Time>2006 June</Timeline.Time>
  <Timeline.Title>2006 June</Timeline.Title>
  <Timeline.Body>
    Embarking on its operational journey, Sigma introduces the LeasOp I
    fund, capturing attention with a substantial $16 million in
    subscribed equity.
  </Timeline.Body>
</Timeline.Content>
</Timeline.Item>
<Timeline.Item>
<Timeline.Point icon={HiCalendar} />
<Timeline.Content>
  <Timeline.Time>2008 July</Timeline.Time>
  <Timeline.Title>2008 July</Timeline.Title>
  <Timeline.Body>
    Demonstrating strategic collaboration, Sigma launches the LeasOp III
    fund, boasting an impressive authorized capital of $100 million.
  </Timeline.Body>
</Timeline.Content>
</Timeline.Item>
<Timeline.Item>
<Timeline.Point icon={HiCalendar} />
<Timeline.Content>
  <Timeline.Time>2009 March</Timeline.Time>
  <Timeline.Title>2009 March</Timeline.Title>
  <Timeline.Body>
    Sigma diversifies its investment portfolio with the initiation of
    the LeasOp II fund with an outstanding authorized capital of $100
    million.
  </Timeline.Body>
</Timeline.Content>
</Timeline.Item>
<Timeline.Item>
<Timeline.Point icon={HiCalendar} />
<Timeline.Content>
  <Timeline.Time>2010 October</Timeline.Time>
  <Timeline.Title>2010 October</Timeline.Title>
  <Timeline.Body>
    Responding to dynamic market needs, the SMV approves a capital
    increase in the LeasOp I fund, allowing for expansion up to $200
    million, while extending the term until December 31, 2020.
  </Timeline.Body>
</Timeline.Content>
</Timeline.Item>
<Timeline.Item>
<Timeline.Point icon={HiCalendar} />
<Timeline.Content>
  <Timeline.Time>2012 April</Timeline.Time>
  <Timeline.Title>2012 April</Timeline.Title>
  <Timeline.Body>
    Sigma expands its footprint with the introduction of the Sigma FI
    Private Equity fund for Infrastructure Projects. This fund sets an
    ambitious fundraising target of up to $500 million, with an initial
    commitment of $86 million.
  </Timeline.Body>
</Timeline.Content>
</Timeline.Item>
<Timeline.Item>
<Timeline.Point icon={HiCalendar} />
<Timeline.Content>
  <Timeline.Time>2013 December</Timeline.Time>
  <Timeline.Title>2013 December</Timeline.Title>
  <Timeline.Body>
    Continuing its trend of financial success, Sigma achieves a
    milestone with the successful repayment of the LeasOp III fund its
    investors.
  </Timeline.Body>
</Timeline.Content>
</Timeline.Item>
<Timeline.Item>
<Timeline.Point icon={HiCalendar} />
<Timeline.Content>
  <Timeline.Time>2014 November</Timeline.Time>
  <Timeline.Title>2014 November</Timeline.Title>
  <Timeline.Body>
    The Sigma FI fund experiences substantial growth, increasing its
    committed capital to an impressive $249 million.
  </Timeline.Body>
</Timeline.Content>
</Timeline.Item>
<Timeline.Item>
<Timeline.Point icon={HiCalendar} />
<Timeline.Content>
  <Timeline.Time>2017 March</Timeline.Time>
  <Timeline.Title>2017 March</Timeline.Title>
  <Timeline.Body>
    Sigma upholds its commitment to investor satisfaction with the
    triumphant repayment of the LeasOp II fund to its investors.
  </Timeline.Body>
</Timeline.Content>
</Timeline.Item>
<Timeline.Item>
<Timeline.Point icon={HiCalendar} />
<Timeline.Content>
  <Timeline.Time>2017 April</Timeline.Time>
  <Timeline.Title>2017 April</Timeline.Title>
  <Timeline.Body>
    Expanding its operational portfolio, Sigma launches the LeasOp VI
    fund with an authorized capital of $100 million.
  </Timeline.Body>
</Timeline.Content>
</Timeline.Item>
<Timeline.Item>
<Timeline.Point icon={HiCalendar} />
<Timeline.Content>
  <Timeline.Time>2019 July</Timeline.Time>
  <Timeline.Title>2019 July</Timeline.Title>
  <Timeline.Body>
    Sigma's commitment to innovation and strategic partnerships
    continues with the introduction of the LeasOp V fund. Investors
    express confidence with an authorized capital of $200 million.
  </Timeline.Body>
</Timeline.Content>
</Timeline.Item>
</Timeline> */}
    </>
  );
}
