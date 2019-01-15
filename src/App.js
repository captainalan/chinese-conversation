import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: [
        {title: "Dumplings were made, differences were overcome", body: "CITY/DATE: Chinese-English Conversation Club members hosted a dumpling-making party last Saturday, inviting other local groups including the Plants Rights Advocacy League and The Church of The Supreme Lobster. Modifying traditional Chinese recipes to make vegetable and lobster free dumplings, club members took the inititiative to bridge ideological differences and cultivate community.", image: "NONE"},
        {title: "Students leverage Big Data to interpret Confucius", body: "CITY/DATE: Using Bayesian statistics, anything is possible. While it is more likely than not that Confucius never knew anything about modern approaches to statistical theory, millions of people worldwide continue to revere his teachings.", image: "NONE"},
        {title: "12 Reasons Why You Should Eat Ginseng Roots", body: "CITY/DATE: \"Ginseng can set you free,\" says alternative medicine expert Deepak Zhou, \"It's even better than Tumeric.\"", image: "NONE"},
      ],
      logistics: {
        location: "Generic Community Center",
        day: "Monday",
        start_time: "5 PM",
        end_time: "7 PM",
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Welcome 
          logistics={this.state.logistics}
        />
        <div className="MainContainer">
          <FAQ />
          <Events />
          <News 
            stories={this.state.news}
          />
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
    <p>Unless otherwise indicated, all events take place in CLASSROOM.</p>
    {/* Fetch, map, etc. some sample events */}
    <ul>
      <li><b>Weekly Meeting (1/14)</b></li>
      <li>Potluck</li>
      <li>"Will AI Destroy Us?" Debate</li>
      <li>Patience Testing (1/19)</li>
      <li>Weekly Meeting (1/21)</li>
    </ul>
  </div>

const FAQ = props =>
  <div className="FAQ">
    <h2>FAQ/常问问题</h2>
    <p>
      <b>Are beginners welcome?</b> <br/>
      Yes.
    </p>
    <p>
      <b>Is there a membership fee?</b> <br/>
      Contributions are welcome :)
    </p>
    <p>
      <b>Can I bring my significant other/pet/laptop/etc.?</b> <br/>
      As long as it's legal to do so.
    </p>
    <p>
      <b>Mandarin? Cantonese?</b> <br/>
      Whatever floats ur boat is ok.
    </p>
    <p>
      <b>Can you do XYZ?</b> <br/>
      Join up and help us organize!
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
      <p>Are you looking to improve your language skills? Find new friends?</p>
      <p>你在找机会联系说英语吗？你要找新朋友？</p>
      
      <p>We hold weekly meetings regularly on <b>{props.logistics.day}s </b>at <b>{props.logistics.location}</b> from <b>{props.logistics.start_time}</b> to <b>{props.logistics.end_time}</b>.</p>
    </div>
    <div className="VertTest">
      <p>欢迎光临</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  </div>

const News = props =>
  <div className="News">
    <h2>Recent News/最近的新闻</h2>
    <p>Basic panel example. Fetch some news items and display them nicely here.</p>
    <p>Maybe make the news stories stack like a pagoda? a tree? Use a physical, printed photo effect with images?</p>
    {props.stories.map(NewsStory)}
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
        <li><a href="https://captainalan.github.io">Alan L. Wong</a> (Webmaster)</li>
      </ul>
    </div>

    <div>
      <h3>Opportunities</h3>
      <ul>
        <li>Advertising</li>
        <li>Content Sponsorships</li>
        <li>Open positions</li>
      </ul>
    </div>
  </div>
const Footer = props =>
  <div className="Footer">
    <p>Copyright 2018 — Alan L. Wong</p>
  </div>

export default App;