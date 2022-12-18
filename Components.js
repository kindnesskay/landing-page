import React from "react";

const Topbar = (props) => {
  return (
    <div className="top_bar">
      <ImageBox source={props.log} class={props.image_class} />
      <Menu menu_class={props.menu_class} contents={props.contents} />
    </div>
  );
};

const ImageBox = (props) => {
  return (
    <div className={props.class}>
      <img src={props.source} alt={props.alternative}></img>
    </div>
  );
};

const Menu = (props) => {
  return (
    <div className={props.menu_class}>
      <div className="menu_contents">
        <ul>
          {props.contents?.map((item) => (
            <li key={item.index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="product">
        <button className="sign_in">Sign in</button>
        <button className="free_trial"> Try for free </button>
      </div>
    </div>
  );
};

const Texthead = () => {
  return (
    <div id="head">
      <h1>
        On deck is your remote <span>conference callling tool</span>
      </h1>
    </div>
  );
};

const TextPara = () => {
  return (
    <div id="paragraph">
      <p>
        Ondeck is a service that allows you to create beautiful,online,and
        encrypted video calls for you and your remote team
      </p>
    </div>
  );
};

const TryButton = () => {
  return (
    <div id="try_it">
      <button id="try_it_btn">Try For Free</button>
    </div>
  );
};
const Ratings = (props) => {
  return (
    <div id="rating">
      <p>{props.ratingCount} Rating based on reviews from:</p>
      {props.reviews?.map((review) => (
        <ImageBox key={review.name}
          class={props.class}
          source={review.source}
          alternative={review.name}
        />
      ))}
    </div>
  );
};

const Footer = (props) => {
  return (
    <footer>
      <p>{props.trustText}</p>
      <div>
        {props.trustedCompanies?.map((company) => (
          <ImageBox
            key={company.name}
            class={"company_logo"}
            source={company.source}
            alternative={company.name}
          />
        ))}
      </div>
    </footer>
  );
};
export { Topbar, Texthead,ImageBox, TextPara, TryButton, Ratings, Footer };
