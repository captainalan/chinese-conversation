import React, { Component } from 'react';
import group_pic from './group_pic.png'
import './App.css';

// Dummy data to replace with fetch calls to API
let news_to_fetch = [
  {title: "Dumplings were made, differences were overcome", body: "CITY/DATE: Chinese-English Conversation Club members hosted a dumpling-making party last Saturday, inviting other local groups including the Plants Rights Advocacy League and The Church of The Supreme Lobster. Modifying traditional Chinese recipes to make vegetable and lobster free dumplings, club members took the inititiative to bridge ideological differences and cultivate community.", image: "NONE"},
  {title: "Students leverage Big Data to interpret Confucius", body: "CITY/DATE: Using Bayesian statistics, anything is possible. While it is more likely than not that Confucius never knew anything about modern approaches to statistical theory, millions of people worldwide continue to revere his teachings.", image: "NONE"},
  {title: "12 Reasons Why You Should Eat Ginseng Roots", body: "CITY/DATE: \"Ginseng can set you free,\" says alternative medicine expert Deepak Zhou, \"It's even better than Tumeric.\"", image: "NONE"},
];
let faq_to_fetch = [
  {question: "Are beginners welcome?", answer: "Yes."},
  {question: "Is there a membership fee?", answer: "Contributions are welcome :)"},
  {question: "Can I bring my significant other/pet/laptop/etc.?", answer: "As long as it's legal to do so."},
  {question: "Mandarin? Cantonese?", answer: "Whatever floats ur boat is ok."},
  {question: "Can you do XYZ?", answer: "Join up and help us organize!"},
];
let events_to_fetch = [
  {name: "Weekly Meeting", date: "1/14/2019 5-7 PM", location: "TBD"},
  {name: "Potluck", date: "1/16/2019 8-11 PM", location: "TBD"},
  {name: "\"Will AI Destroy Us?\" Debate", date: "1/17/2019 3-5 PM", location: "TBD"},
  {name: "Patience Testing", date: "1/19/2019 5-11 AM", location: "TBD"},
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: [],
    } 
  }

  componentDidMount() {
    // Fetch data here
    this.setState({ news: news_to_fetch });
    this.setState({ faq: faq_to_fetch });
    this.setState({ events: events_to_fetch });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Welcome />
        <div className="MainContainer">
          <FAQ faq={this.state.faq} />
          <Events events={this.state.events} />
          <News stories={this.state.news} />
        </div>
        <SiteMap />
        <Footer />
      </div>
    );
  }
}

const Events = props =>
  <div className="Events" id="Events">
    <h2>Events/活动</h2>
    <p>Unless otherwise indicated, all events take place at Generic Community Center.</p>
    <ul>
      {props.events ? 
        props.events.map( (event) => <li>{event.name} ({event.date})</li> ) 
        : "No events found!"}
    </ul>
  </div>

const FAQ = props =>
  <div className="FAQ" id="FAQ">
    <h2>FAQ/常问问题</h2>
    {props.faq ? props.faq.map(FAQitem) : <p>No Q&As found.</p>}
  </div>

const FAQitem = item =>
  <div>
    <p>
      <b>{item.question}</b> <br />
      {item.answer}
    </p>
  </div>


const Header = props =>
  <div className="Header">
    <h1>Chinese-English Conversation Club/中英会话时间</h1>
    <a href="#FAQ">FAQ</a>
    <a href="#Events">Events</a>
    <a href="#Contact">Contact</a>
  </div>

const Welcome = props =>
  <div className="Welcome" id="About"> 
    <div>
      <h2>Welcome/欢迎</h2>
      <div className="Photo">
        <img src={group_pic} alt="Happy People" />
        <p>Conversation!</p>
        <p>会话！</p>
      </div>

      <p>Are you looking to improve your language skills? Find new friends? Chinese-English Conversation Club holds weekly meetings regularly on <b>Mondays</b> at <b>Generic Community Center</b> from <b>5 PM to 7 PM</b>.</p>
      <p>你在找机会联系说英语吗？你要找新朋友？中英会话时间<b>每周一下午5点至7点在通用社区中心</b>定期举行会议。</p>
      <p></p>
    </div>
  </div>

const News = props =>
  <div className="News">
    <h2>Recent News/最近的新闻</h2>
    <p>Like what you see here? Subscribe to our Newsletter (TO IMPLEMENT LATER).</p>
    {props.stories ? props.stories.map(NewsStory) : <p>No stories found.</p>}
  </div>

const NewsStory = story =>
  <div className="NewsStory">
    <h3>{story.title}</h3>
    {story.image === "NONE" ? "" : "TODO: LOAD IMAGE..." }
    <p>{story.body}</p>
  </div>

const SiteMap = props =>
  <div className="SiteMap" id="Contact">

    <div>
      <h2>Contact/联络</h2>
      <ul>
        <li><b>Email:</b> emperor@greatwall.biz</li>
        <li><b>Phone:</b> (888) 888-8888</li>
        <br />
        <p>
          8888 Dynasty Drive<br />
          Middle Kingdom, CA 88888
        </p>
      </ul>
    </div>

    <div>
      <h3>Social media</h3>
      <ul>
        <li>微信 (WeChat)</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </ul>
    </div>

    <div>
      <h3>Contributors</h3>
      <ul>
        <li><a href="https://captainalan.github.io">Alan L. Wong</a></li>
      </ul>
    </div>

    <div>
      <h3>Opportunities</h3>
      <ul>
        <li>Advertising</li>
        <li>Content Sponsorships</li>
        <li>Open positions</li>
      </ul>
      <p>(TO IMPLEMENT LATER)</p>
    </div>
  </div>
const Footer = props =>
  <div className="Footer">
    <p>Copyright 2019 — Alan L. Wong <span className="NavButton"><a href="#top">Top</a></span></p>
    
  </div>

export default App;