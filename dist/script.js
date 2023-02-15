const colors = ['51,204,102', '0,153,153', '204,0,51', '204,255,51', '255,51,204', '204,102,0', '255,255,51', '204,153,255', "204,0,0", "51,153,102", "0,255,255", "0,102,255"];
const quoteByAuthor = [
{ quote: "The most effective way to do it, is to do it.", author: "Amelia Earhart" },
{ quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
{ quote: "There is only one corner of the universe you can be certain of improving, and that's your own self.", author: "Aldous Huxley" },
{ quote: "You must do the things you think you cannot do.", author: "Eleanor Roosevelt" },
{ quote: "But man is not made for defeat. A man can be destroyed but not defeated.", author: "Ernest Hemingway" },
{ quote: "Cut your own firewood. It will heat you twice.", author: "Henry Ford" },
{ quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
{ quote: "The harder I work, the luckier I get.", author: "Gary Player" },
{ quote: "The scariest moment is always just before you start.", author: "Stephen King" },
{ quote: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" }];

const red = "red";
const reciveColor = function (text) {
  return `rgb(${text})`;
};
const getRandomNum = function (thing) {
  if (thing == "color") {
    return Math.floor(Math.random() * colors.length);
  }
  if (thing == "quote") {
    return Math.floor(Math.random() * quoteByAuthor.length);
  }

};
const animateColorful = function (precolor) {
  var color = reciveColor(colors[precolor]);
  $("html body").animate(
  {
    backgroundColor: color,
    color: color },

  250);


  $(".btn").animate(
  {
    backgroundColor: color },

  100);

};
const changeColor = function (color) {

  $(document).ready(function () {
    animateColorful(color);


    $(".btn").click(function () {
      $(".animate").addClass("animated fadeIn");
      setTimeout(function () {

        $(".animate").removeClass("animated");
        $(".animate").removeClass("fadeIn");


      }, 400);


    });
  });
};
const checkEquals = function (prev, now) {
  now = getRandomNum("quote");
  if (prev == now) {
    checkEquals(prev, now);
  } else
  return now;
};


class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNum: getRandomNum("quote") };


  }
  componentWillMount() {
    changeColor(getRandomNum("color"));
  }

  setRandomQuote() {
    changeColor(getRandomNum("color"));
    this.setState({
      randomNum: getRandomNum("quote") });

    this.setState(prevState => {
      if (prevState.randomNum === this.state.randomNum) {
        return { randomNum: checkEquals(prevState.randomNum, this.state.randomNum) };
      };
    });
  }


  render() {


    return /*#__PURE__*/(
      React.createElement("div", { id: "container", className: "animate" }, /*#__PURE__*/

      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("div", { id: "quote" }, /*#__PURE__*/

      React.createElement("i", { className: "fa fa-quote-left" }), "   ", /*#__PURE__*/React.createElement("header", { id: "text", className: "animate" }, quoteByAuthor[this.state.randomNum].quote), /*#__PURE__*/
      React.createElement("article", { id: "author", className: "animate" }, "- ", quoteByAuthor[this.state.randomNum].author)), /*#__PURE__*/


      React.createElement("div", { id: "interact" }, /*#__PURE__*/

      React.createElement("div", { id: "button-rand" }, /*#__PURE__*/
      React.createElement("button", { id: "new-quote", className: "btn btn-default borderfix animate", onClick:
        this.setRandomQuote.bind(this), title: "New Quote!" }, /*#__PURE__*/React.createElement("span", { className: "fas fa-random fa-lg" }))), /*#__PURE__*/



      React.createElement("div", { id: "social-issue" }, /*#__PURE__*/
      React.createElement("button", { className: "btn btn-default" }, /*#__PURE__*/
      React.createElement("span", { className: "fab fa-tumblr fa-lg" })), /*#__PURE__*/

      React.createElement("a", { id: "tweet-quote", href: "twitter.com/intent/tweet", className: "animate" }, /*#__PURE__*/
      React.createElement("button", { className: "btn btn-default borderfix", title: "Tweet this!" }, /*#__PURE__*/React.createElement("span", { className: "fab fa-twitter fa-lg" }))))))));








  }}


React.render( /*#__PURE__*/React.createElement(QuoteBox, null), document.getElementById('FCC'));