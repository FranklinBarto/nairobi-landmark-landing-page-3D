import React, { useEffect } from "react";
import styled from "styled-components";
import { a } from "@react-spring/web";

export default function Overlay({ fill }) {
  const OverlayDiv = styled.div`
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100vh;
    padding: 72px;
    pointer-events: none;

    .logo {
      margin: 0 0 50px 50px;
      width: 100px;
      height: auto;
    }

    h2 {
      font-size: 5rem;
      margin: 0;
      color: #52c9ed;
      font-weight: 900;
    }

    p {
      font-size: 2rem;
      margin: 0;
      font-weight: 900;
      width: 45%;

      &:nth-of-type(1) {
        font-size: 3rem;
        font-weight: 200;
        margin-left: 20px;
      }
    }

    @media screen and (max-width: 1200px) {
      h2 {
        font-size: 3rem;
      }
      p {
        width: 60%;
        font-size: large;
        &:nth-of-type(1) {
          font-size: x-large;
          font-weight: 200;
          margin-left: 20px;
        }
      }
    }

    .buttons {
      position: relative;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      margin: 32px;

      button {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: max-content;
        white-space: nowrap;
        border: 1px solid #132431;
        border-radius: 8px;
        background: none;
        padding: 12px;
        margin: 12px;
        font-size: large;
        pointer-events: all;
        svg {
          margin-left: 8px;
          height: 100%;
          width: auto;
        }
        &:nth-of-type(2) {
          background: #52c9ed;
        }
      }
    }

    .footer {
      position: absolute;
      bottom: 32px;
      right: 32px;
      color: #0f1b38;
    }
  `;

  return (
    <OverlayDiv>
      <svg
        className="logo"
        width="17.262985mm"
        height="3.1770706mm"
        viewBox="0 0 17.262985 3.1770706"
        version="1.1"
        id="svg5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs2" />
        <g id="layer1" transform="translate(-79.650476,-86.421079)">
          <path
            id="rect531"
            style={{ fill: "#52C9ED", strokeWidth: "0.388716" }}
            d="m 89.496346,86.421082 v 3.177067 h 7.417118 v -3.177067 z m 2.077393,0.409277 c 0.247127,0 0.448206,0.07304 0.602547,0.219108 0.09187,0.08636 0.160771,0.21038 0.206706,0.37207 l -0.40411,0.09664 c -0.02389,-0.104731 -0.07361,-0.187413 -0.149862,-0.248047 -0.07533,-0.06063 -0.167546,-0.09095 -0.275952,-0.09095 -0.149747,0 -0.271129,0.05374 -0.364836,0.16123 -0.09279,0.107488 -0.139526,0.281235 -0.139526,0.521932 0,0.255397 0.04611,0.437297 0.137976,0.545703 0.09187,0.108405 0.211127,0.162781 0.358118,0.162781 0.108406,0 0.201997,-0.03445 0.280086,-0.103353 0.07809,-0.0689 0.133958,-0.177136 0.167948,-0.325044 l 0.395325,0.125056 c -0.06063,0.220486 -0.161345,0.384473 -0.302824,0.49196 -0.14056,0.106569 -0.319589,0.160197 -0.536401,0.160197 -0.268258,0 -0.488745,-0.09158 -0.661458,-0.274402 -0.172715,-0.183738 -0.258899,-0.43454 -0.258899,-0.752409 0,-0.33624 0.08682,-0.597322 0.260449,-0.782898 0.173633,-0.186494 0.401755,-0.279569 0.684713,-0.279569 z m 1.161686,0.03462 h 0.387573 V 87.2231 h -0.387573 z m 1.190625,0.03979 v 0.516764 h 0.264583 v 0.308509 H 93.92605 v 0.590144 c 0,0.11943 0.0026,0.189079 0.0072,0.20929 0.0055,0.01929 0.01667,0.0352 0.03411,0.04806 0.01837,0.01286 0.04042,0.01964 0.06615,0.01964 0.03583,0 0.08808,-0.0124 0.156063,-0.03721 l 0.03307,0.30024 c -0.09003,0.03859 -0.192007,0.05788 -0.305925,0.05788 -0.06982,0 -0.133095,-0.01166 -0.189136,-0.03462 -0.05604,-0.02389 -0.09738,-0.0542 -0.124023,-0.09095 -0.02573,-0.03767 -0.04364,-0.08802 -0.05374,-0.151412 -0.0083,-0.04501 -0.0124,-0.135964 -0.0124,-0.272851 V 87.730049 H 93.359652 V 87.42154 h 0.177767 v -0.290938 z m -1.190625,0.516764 h 0.387573 v 1.463477 h -0.387573 z m 1.540991,0 h 0.411861 l 0.34985,1.039213 0.342098,-1.039213 h 0.401009 l -0.516765,1.408183 -0.0925,0.255282 c -0.03399,0.08544 -0.06644,0.15032 -0.09767,0.195337 -0.03032,0.04501 -0.06603,0.08147 -0.106453,0.109037 -0.03951,0.02848 -0.08849,0.05053 -0.147278,0.06615 -0.05788,0.01562 -0.123394,0.02325 -0.196887,0.02325 -0.07442,0 -0.147452,-0.0076 -0.219108,-0.02325 l -0.03462,-0.303341 c 0.06063,0.01194 0.115123,0.01809 0.163815,0.01809 0.09003,0 0.156809,-0.02681 0.199987,-0.0801 0.04318,-0.05237 0.07625,-0.119258 0.09922,-0.201021 z"
          />
          <text
            style={{
              fontWeight: "bold",
              fontSize: "2.82223px",
              fontFamily: "Arial",
              fontWeight: "bold",
              fill: "#52C9ED",
              strokeWidth: "0.457999",
            }}
            x="79.441017"
            y="88.955872"
            id="text240"
          >
            <tspan
              id="tspan238"
              style={{ fill: "#52C9ED", strokeWidth: "0.458" }}
              x="79.441017"
              y="88.955872"
            >
              Nairobi
            </tspan>
          </text>
        </g>
      </svg>

      <a.p style={{ color: fill }}>Welcome to</a.p>
      <h2>Nairobi City</h2>
      <a.p style={{ color: fill }}>
        Gain exclusive access to be among the first to witness this remarkable
        project come to life.
        <br /> As a valued member of our community, you'll receive exciting
        updates, special offers, and early insights into the landmark's
        creation.
      </a.p>
      <div className="buttons">
        <a.button style={{ color: fill, borderColor: fill }}>
          Join Our Mailing List{" "}
          <a.svg
            style={{ fill }}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M64 208.1L256 65.9 448 208.1v47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5V208.1zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V208.1c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z" />
          </a.svg>
        </a.button>
        <button>
          Register for the Beta{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 640 512"
          >
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
        </button>
      </div>
      <a.span style={{ color: fill }} className="footer">
        Nairobi City landing page concept by: Franklin Barto
      </a.span>
    </OverlayDiv>
  );
}
