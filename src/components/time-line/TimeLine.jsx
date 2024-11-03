"use client";
import { FaCalendarAlt } from "react-icons/fa";

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
          contentStyle={{
            background: "rgb(255, 255, 255)",
            color: "rgb(140, 140, 140)",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
          date="2005 August"
          iconStyle={{ background: "rgb(204, 204, 204)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">2005 August</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            Sigma achieves a significant milestone by obtaining operating
            authorization from the SMV, laying the foundation for its future
            endeavors in the financial realm.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 June"
          iconStyle={{ background: "rgb(180, 180, 180)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">2006 June</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
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
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            Demonstrating strategic collaboration, Sigma launches the LeasOp III
            fund, boasting an impressive authorized capital of $100 million.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2009 March"
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">2009 March</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            Sigma diversifies its investment portfolio with the initiation of
            the LeasOp II fund with an outstanding authorized capital of $100
            million.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 October"
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">2010 October</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            Responding to dynamic market needs, the SMV approves a capital
            increase in the LeasOp I fund, allowing for expansion up to $200
            million, while extending the term until December 31, 2020.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 April"
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">2012 April</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            Sigma expands its footprint with the introduction of the Sigma FI
            Private Equity fund for Infrastructure Projects. This fund sets an
            ambitious fundraising target of up to $500 million, with an initial
            commitment of $86 million.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 December"
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">2013 December</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            Continuing its trend of financial success, Sigma achieves a
            milestone with the successful repayment of the LeasOp III fund its
            investors.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 November"
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">2014 November</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            The Sigma FI fund experiences substantial growth, increasing its
            committed capital to an impressive $249 million.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 March"
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">2017 March</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            Expanding its operational portfolio, Sigma launches the LeasOp VI
            fund with an authorized capital of $100 million.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 July"
          iconStyle={{ background: "rgb(150, 150, 150)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        >
          <h3 className="vertical-timeline-element-title">2019 July</h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            Expanding its operational portfolio, Sigma launches the LeasOp VI
            fund with an authorized capital of $100 million.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(161, 11, 71)", color: "#fff" }}
          icon={<FaCalendarAlt />}
        />
      </VerticalTimeline>
    </>
  );
}
