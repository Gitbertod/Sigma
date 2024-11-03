import React from "react";
import SectionComponent from "../../components/section-component/SectionComponent";
import NavBar from "../../components/navbar/NavBar";
import SectionComponent2 from "../../components/section-component2/SectionComponent2";

const WhoWeAre = () => {
  return (
    <div>
      <NavBar></NavBar>
      <SectionComponent
        title="Who we are"
        text={
          <>
            Sigma is a dedicated investment fund management company specializing
            in both public and private Investment Funds. Our focus extends to
            financial products such as operating lease and private equity
            investments, particularly in companies dedicated to infrastructure
            development. With a robust track record, Sigma Safi S.A. has firmly
            established itself as a leading Investment Fund Manager in Peru,
            earning the trust of institutional investors and key companies
            alike. <br></br>
            <br></br>
            Since our inception in 2006, Sigma has successfully garnered US$950
            million in investment commitments across six managed investment
            funds over the past 18 years. Notably, five of these funds have been
            allocated to operating lease, with a cumulative investment exceeding
            US$1,400 million in fixed assets. Among them, LeasOp I, the
            inaugural Operating Lease fund, stands out as a public fund with the
            participation of the country's three main Pension Funds.
          </>
        }
      />
      <SectionComponent2
        text={
          <>
            In subsequent years, we expanded our portfolio with the launch of
            LeasOp VI in April 2017. Additionally, in July 2019, LeasOp V was
            introduced, drawing investment from prominent entities in the
            banking and insurance sector.<br></br>
            <br></br>
            Sigma takes pride in successfully concluding the management of two
            private operating lease funds, LeasOp II (2016) and LeasOp III
            (2013), both of which saw the full repayment of invested capital and
            respective yields.<br></br><br></br>
            In the realm of Private Equity, our Infrastructure Private Equity
            Fund strategically invests in companies and projects associated with
            infrastructure development, spanning transportation, treatment
            plants, energy generation and transmission, and alternative energy
            sources.
          </>
        }
      />
    </div>
  );
};

export default WhoWeAre;
