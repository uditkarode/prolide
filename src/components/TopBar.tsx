import { css } from "@emotion/css";
import { shadowMd } from "../css-utils";

function TopBar() {
  const root = css`
    width: 100%;
    display: flex;
    background-color: #202020;
    ${shadowMd}
  `;

  const title = css`
    color: #fbfbfb;
    font-size: 1.65rem;
    font-weight: 500;
    margin: 0.9rem;
    margin-top: 1rem;
    margin-left: 0.8rem;
  `;

  const logo = css`
    height: 48px;
    width: 48px;
    align-self: center;
    margin-left: 0.6rem;
  `;

  return (
    <div className={root}>
      <img src="/assets/logo.png" className={logo} />
      <p className={title}>Prolide</p>
    </div>
  );
}

export default TopBar;
