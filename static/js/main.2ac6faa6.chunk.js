(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/banner.87e9c677.png"},function(e,t,n){e.exports=n.p+"static/media/group_pic.efafd370.png"},,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2),i=n.n(r),o=(n(16),n(3)),s=n(4),c=n(8),u=n(5),m=n(9),E=n(6),d=n.n(E),h=n(7),p=n.n(h),g=(n(18),[{title:"Dumplings were made, differences were overcome",body:"CITY/DATE: Chinese-English Conversation Club members hosted a dumpling-making party last Saturday, inviting other local groups including the Plants Rights Advocacy League and The Church of The Supreme Lobster. Modifying traditional Chinese recipes to make vegetable and lobster free dumplings, club members took the inititiative to bridge ideological differences and cultivate community.",image:"NONE"},{title:"Students leverage Big Data to interpret Confucius",body:"CITY/DATE: Using Bayesian statistics, anything is possible. While it is more likely than not that Confucius never knew anything about modern approaches to statistical theory, millions of people worldwide continue to revere his teachings.",image:"NONE"},{title:"12 Reasons Why You Should Eat Ginseng Roots",body:'CITY/DATE: "Ginseng can set you free," says alternative medicine expert Deepak Zhou, "It\'s even better than Tumeric."',image:"NONE"}]),v=[{question:"Are beginners welcome?",answer:"Yes."},{question:"Is there a membership fee?",answer:"Contributions are welcome :)"},{question:"Can I bring my significant other/pet/laptop/etc.?",answer:"As long as it's legal to do so."},{question:"Mandarin? Cantonese?",answer:"Whatever floats ur boat is ok."},{question:"Can you do XYZ?",answer:"Join up and help us organize!"}],f=[{name:"Weekly Meeting",date:"1/14/2019 5-7 PM",location:"TBD"},{name:"Potluck",date:"1/16/2019 8-11 PM",location:"TBD"},{name:'"Will AI Destroy Us?" Debate',date:"1/17/2019 3-5 PM",location:"TBD"},{name:"Patience Testing",date:"1/19/2019 5-11 AM",location:"TBD"}],b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={news:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({news:g}),this.setState({faq:v}),this.setState({events:f})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(N,null),l.a.createElement(A,null),l.a.createElement("div",{className:"MainContainer"},l.a.createElement(w,{faq:this.state.faq}),l.a.createElement(C,{events:this.state.events}),l.a.createElement(T,{stories:this.state.news})),l.a.createElement(M,null),l.a.createElement(D,null))}}]),t}(a.Component),C=function(e){return l.a.createElement("div",{className:"Events",id:"Events"},l.a.createElement("h2",null,"Events/\u6d3b\u52a8"),l.a.createElement("p",null,"Unless otherwise indicated, all events take place at Generic Community Center."),l.a.createElement("ul",null,e.events?e.events.map(function(e){return l.a.createElement("li",null,e.name," (",e.date,")")}):"No events found!"))},w=function(e){return l.a.createElement("div",{className:"FAQ",id:"FAQ"},l.a.createElement("h2",null,"FAQ/\u5e38\u95ee\u95ee\u9898"),e.faq?e.faq.map(y):l.a.createElement("p",null,"No Q&As found."))},y=function(e){return l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("b",null,e.question)," ",l.a.createElement("br",null),e.answer))},N=function(e){return l.a.createElement("div",{className:"Header"},l.a.createElement("h1",null,l.a.createElement("img",{src:d.a,alt:"Chinese-English Conversation Club"}),"Chinese-English Conversation Club"),l.a.createElement("a",{href:"#FAQ"},"FAQ"),l.a.createElement("a",{href:"#Events"},"Events"),l.a.createElement("a",{href:"#Contact"},"Contact"))},A=function(e){return l.a.createElement("div",{className:"Welcome",id:"About"},l.a.createElement("div",null,l.a.createElement("h2",null,"Welcome/\u6b22\u8fce"),l.a.createElement("div",{className:"Photo"},l.a.createElement("img",{src:p.a,alt:"Happy People"}),l.a.createElement("p",null,"Conversation!"),l.a.createElement("p",null,"\u4f1a\u8bdd\uff01")),l.a.createElement("p",null,"Are you looking to improve your language skills? Find new friends? Chinese-English Conversation Club holds weekly meetings regularly on ",l.a.createElement("b",null,"Mondays")," at ",l.a.createElement("b",null,"Generic Community Center")," from ",l.a.createElement("b",null,"5 PM to 7 PM"),"."),l.a.createElement("p",null,"\u4f60\u5728\u627e\u673a\u4f1a\u8054\u7cfb\u8bf4\u82f1\u8bed\u5417\uff1f\u4f60\u8981\u627e\u65b0\u670b\u53cb\uff1f\u4e2d\u82f1\u4f1a\u8bdd\u65f6\u95f4",l.a.createElement("b",null,"\u6bcf\u5468\u4e00\u4e0b\u53485\u70b9\u81f37\u70b9\u5728\u901a\u7528\u793e\u533a\u4e2d\u5fc3"),"\u5b9a\u671f\u4e3e\u884c\u4f1a\u8bae\u3002"),l.a.createElement("p",null)))},T=function(e){return l.a.createElement("div",{className:"News"},l.a.createElement("h2",null,"Recent News/\u6700\u8fd1\u7684\u65b0\u95fb"),l.a.createElement("p",null,"Like what you see here? Subscribe to our Newsletter (TO IMPLEMENT LATER)."),e.stories?e.stories.map(k):l.a.createElement("p",null,"No stories found."))},k=function(e){return l.a.createElement("div",{className:"NewsStory"},l.a.createElement("h3",null,e.title),"NONE"===e.image?"":"TODO: LOAD IMAGE...",l.a.createElement("p",null,e.body))},M=function(e){return l.a.createElement("div",{className:"SiteMap",id:"Contact"},l.a.createElement("div",null,l.a.createElement("h2",null,"Contact/\u8054\u7edc"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("b",null,"Email:")," emperor@greatwall.biz"),l.a.createElement("li",null,l.a.createElement("b",null,"Phone:")," (888) 888-8888"),l.a.createElement("br",null),l.a.createElement("p",null,"8888 Dynasty Drive",l.a.createElement("br",null),"Middle Kingdom, CA 88888"))),l.a.createElement("div",null,l.a.createElement("h3",null,"Social media"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5fae\u4fe1 (WeChat)"),l.a.createElement("li",null,"Facebook"),l.a.createElement("li",null,"Instagram"),l.a.createElement("li",null,"Twitter"))),l.a.createElement("div",null,l.a.createElement("h3",null,"Contributors"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://captainalan.github.io"},"Alan L. Wong")))),l.a.createElement("div",null,l.a.createElement("h3",null,"Opportunities"),l.a.createElement("ul",null,l.a.createElement("li",null,"Advertising"),l.a.createElement("li",null,"Content Sponsorships"),l.a.createElement("li",null,"Open positions")),l.a.createElement("p",null,"(TO IMPLEMENT LATER)")))},D=function(e){return l.a.createElement("div",{className:"Footer"},l.a.createElement("p",null,"Copyright 2019 \u2014 Alan L. Wong ",l.a.createElement("span",{className:"NavButton"},l.a.createElement("a",{href:"#top"},"Top"))))},O=b;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.2ac6faa6.chunk.js.map