import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/actions";
import MenuItem from '../MenuItem/MenuItem';
import './styles.scss';

const menuItems = [
  {
    title: 'Profile',
    icon: 'person',
    color: 'red-text'
  },
  {
    title: 'Experience',
    icon: 'history',
    color: 'purple-text'
  },
  {
    title: 'Projects',
    icon: 'collections',
    color: 'green-text'
  },
  {
    title: 'Skills',
    icon: 'web',
    color: 'blue-text'
  }
];

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
    this.state = {
      selectedMenuItem: 'Profile'
    }
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onClickItem = (title) => () => {
    this.scrollRef.current.scroll({ top: 200, behavior: 'smooth' });
    this.setState({ selectedMenuItem: title });
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div className="row dashboard">
        <div className="left-menu col s4 m3 l2">
          <div className="user-details red">
            <img
              className="avatar-image circle responsive-img"
              alt=""
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            />
            <span className="user-name center-align"><b>{user.name}</b></span>
            <div className="user-skills black-text">
              <b>Full Stack Developer</b>
              <b>Computer Engineer</b>
            </div>
          </div>
          <ul className="collection menu-items">
            {menuItems.map(item =>
              <MenuItem
                key={item.title}
                icon={item.icon}
                color={item.color}
                title={item.title}
                onClickItem={this.onClickItem}
              />)}
          </ul>
        </div>
        <div ref={this.scrollRef} className="content col s8 m9 l10">

          Kiara Advani
          From Wikipedia, the free encyclopedia
          Jump to navigation
          Jump to search
          Kiara Advani
          Kiara Advani walks for Shyamal-Bhumika at India Couture Week 2018 Day 4 (03) (cropped).jpg
          Advani at the 2018 India Couture Week
          Born	Alia Advani[1]

          31 July 1992 (age 26)[2]
          Mumbai, Maharashtra, India
          Occupation	Actress
          Years active	2014–present
          Relatives	Ashok Kumar (step-great-grandfather)
          Saeed Jaffrey (great-uncle)
          Juhi Chawla (aunt)[2]

          Kiara Advani[3] (born Alia Advani on 31 July 1992) is an Indian actress who appears in Hindi and Telugu films. She made her acting debut with Kabir Sadanand's comedy film Fugly (2014), a critical and commercial failure, and then starred in the biographical sports drama M.S. Dhoni: The Untold Story (2016), which proved to be her first commercial success.

          In 2018, Advani appeared in the Netflix anthology film Lust Stories, and made her Telugu debut with the political drama Bharat Ane Nenu, which ranks among the highest-grossing Telugu films. Her highest-grossing Bollywood release came with the romantic drama Kabir Singh (2019), which ranks among the highest-grossing Indian films of all time.
          Contents

              1 Early life and background
              2 Career
                  2.1 Early work (2014—2017)
                  2.2 Breakthrough (2018—present)
              3 Filmography
                  3.1 Film
                  3.2 Music video
              4 Awards
              5 References
              6 External links

          Early life and background

          Kiara Advani was born to Jagdeep Advani, a Businessman and Genevieve Jaffrey, a teacher of Sindhi, Scottish, Irish, Portuguese, and Spanish ancestry.[4][5][6][7] Born as Alia Advani, Advani changed her first name to Kiara prior to the release of her first film, Fugly.[1] The elder of two children, Advani has a younger brother, Mishaal. She is also related to several celebrities via her maternal family. Actors Ashok Kumar and Saeed Jaffrey are her step-great-grandfather and great-uncle, respectively, whereas model Shaheen Jaffrey and actress Juhi Chawla are her aunts.[2]
          Career

          This article needs additional citations for verification. Please help improve this article by adding citations to reliable sources. Unsourced material may be challenged and removed.
          Find sources: "Kiara Advani" – news · newspapers · books · scholar · JSTOR (June 2019) (Learn how and when to remove this template message)
          Early work (2014—2017)
          Advani at an event for M.S. Dhoni: The Untold Story in 2016

          Advani made her acting debut with Kabir Sadanand's comedy-drama Fugly (2014), in which she featured alongside an ensemble cast including Mohit Marwah, Arfi Lamba, Vijender Singh, and Jimmy Sheirgill. Her performance met with positive comments; Taran Adarsh of Bollywood Hungama said: "Kiara Advani catches you completely unaware" and has the "combination of looks and talent".[8], whereas Mehul S Thakkar of Deccan Chronicle noted her performance as being "very striking" and said she "shows a lot of promise," along with praising her versatility and range as an actor.[9] However, the film received mixed reviews, and despite the hype, it emerged as a commercial disappointment grossing ₹148 million (US$2.1 million) on a budget of ₹180 million (US$2.6 million).

          Advani's next film role was in the Neeraj Pandey-directed biographical sports drama M.S. Dhoni: The Untold Story (2016), about the life of MS Dhoni, an Indian cricketer who was the former captain of the Indian cricket team. Cast opposite Sushant Singh Rajput (who essayed Dhoni's character in the film), Advani played the real-life character of Sakshi Rawat (a hotel manager who and Dhoni fall in love and later get married). Her performance and chemistry with Rajput was well appreciated by critics and the film was highly anticipated. With gross earnings of over ₹2.16 billion (US$31 million) in worldwide ticket sales, M.S. Dhoni: The Untold Story proved to be a major economic success, and was one of the highest-grossing Indian films of that year.

          The following year, Advani appeared opposite newcomer Mustafa Burmawalla in Machine (2017), an action romantic thriller from the director duo Abbas–Mustan, narrating about two racing enthusiasts, Sarah & Ransh (played by Advani and Burmawalla respectively), who fall in love and get married after the death of Sarah's friend. Machine met with mixed to negative reactions, and Advani's performance was also largely criticised. Due to these reactions, Machine failed to recoup its ₹300 million (US$4.3 million) investment.
          Breakthrough (2018—present)
          Advani and her co-star Shahid Kapoor at an event for Kabir Singh in 2019. The film ranks as her highest-grossing Bollywood release.

          2018 was a critically and commercially period in Advani's career, as she was cast in two successful films, the first of which was the anthology film Lust Stories, a Netflix film consisting of four segments dealing with woman sexuality. She featured in Karan Johar's segment, playing Megha, a newly married wife whose husband (played by Vicky Kaushal) fails to recognize her sexual dissatisfaction. The film was a financial success, and Advani's role earned her positive reviews from critics. Later that year, she made her debut in Telugu cinema with Koratala Siva's political thriller Bharat Ane Nenu, about the story of a student (played by Mahesh Babu) who unexpectedly becomes the chief minister of Andhra Pradesh. The film had worldwide earnings of ₹225 crore (US$33 million), becoming one of Telugu cinema's highest grossers, but Advani's portrayal of Vasumati, the love interest of Babu's character, met with mixed reviews.[10] Her chemistry with him was also well received by critics.[11][12] Also that year, Advani appeared in a music album titled Urvashi, sung by Yo Yo Honey Singh, opposite Shahid Kapoor.

          Boyapati Srinu's Telugu action drama Vinaya Vidheya Rama was Advani's first release of 2019. She played the role of Ram Charan's fiancée. The film met with a negative response and flopped at the box office both Indian and abroad.[13] Advani then returned to Bollywood by appearing as Lajjo, a courtesan, in a song "First Class" of Abhishek Varman's period drama Kalank, which also fared poorly at the box office. Her next appearance was in Sandeep Vanga's romantic drama Kabir Singh alongside Shahid Kapoor. An adaptation of Vanga's 2017 Telugu movie Arjun Reddy, it was about the titular medical student (played by Kapoor) who goes on a self-destructive path and becomes an alcoholic surgeon after his lover (played by Advani) marries someone else. Despite receiving mixed reviews for glamorizing misogyny and toxic masculinity, Kabir Singh emerged as an economic success and Advani's highest-grossing Bollywood release, with a domestic gross of over ₹2 billion (US$29 million).

          As of June 2019, Advani has four upcoming projects. She will star in Raj Mehta's directorial debut Good News[14]—a comedy about surrogacy co-starring Akshay Kumar, Kareena Kapoor Khan, and Diljit Dosanjh—and team with Kumar in Raghava Lawrence's horror comedy Laxmmi Bomb—a remake of the 2011 Tamil film Muni 2: Kanchana. She will also portray the real-life character of Dimple Cheema opposite Sidharth Malhotra in Shershaah—a biopic based on Vikram Batra—and star as the titular protagonist in Bengali filmmaker Abir Sengupta's directorial debut—the coming-of-age dramedy Indoo Ki Jawani.
          Filmography
          Film
          Key Films that have not yet been released 	Denotes films that have not yet been released
          Year 	Film 	Role 	Notes
          2014 	Fugly 	Devi
          2016 	M.S. Dhoni: The Untold Story 	Sakshi Singh Rawat
          2017 	Machine 	Sarah Thapar
          2018 	Lust Stories 	Megha 	Karan Johar's segment; Netflix film
          Bharat Ane Nenu 	Vasumathi 	Telugu film
          2019 	Vinaya Vidheya Rama 	Seetha
          Kalank 	Lajjo 	Special appearance in song "First Class"
          Kabir Singh 	Preeti
          Good News dagger 	Monika 	Post-production[15]
          Saaho dagger 		Post-production; Special appearance in song
          2020 	Laxmmi Bomb dagger 	TBA 	Filming[16]
          Shershaah dagger 	Dimple Cheema 	Filming[17]
          Indoo Ki Jawani dagger 	Indoo Gupta 	Filming
          Music video
          Title 	Year 	Performer(s) 	Co-Star 	Ref(s)
          "Urvashi" 	2018 	Yo Yo Honey Singh 	Shahid Kapoor 	[18]
          Awards
          Year 	Award 	Category 	Film 	Reference
          2019 	Zee Cine Awards Telugu 	Best Find Of The Year 	Bharat Ane Nenu 	[19]
          Asiavision Awards 	Emerging Star Of The Year 	N/A 	[20]
          References

          "Salman Khan renamed Fugly actress as Kiara Advani". India Today. 3 June 2014. Retrieved 7 August 2018.
          Gupta, Priya (5 May 2014). "My father saw '3 Idiots' and decided to let me do what I wanted to: Kiara Advani". Times of India. Retrieved 11 May 2014.
          "KIARA (@kiaraaliaadvani) • Instagram photos and videos".
          "Kiara Advani's Unknown Facts Photos". indiatimes.com. 27 September 2016. Retrieved 16 June 2019.
          Agrawal, Stuti (26 May 2014). "Having a film background can only get you to meet the right people: Kiara Advani". Times of India. Retrieved 1 June 2014.
          "Yeh Fugly Fugly kya hai? | The Lucknow Observer". lucknowobserver.com. Retrieved 22 September 2015.
          "Gene Junction: Kiara Alia Advani". Verve Magazine. 2 February 2016. Retrieved 2 February 2016.
          Taran Adarsh (13 June 2014). "Movie Review: 'Fugly' (2014)". Bollywood Hungama. Retrieved 15 June 2014.
          Mehul S Thakkar (13 June 2014). "Movie Review 'Fugly': Raises disturbing and thought provoking questions". Deccan Chronicle. Retrieved 15 June 2014.
          "Kiara Advani stars work on 'Bharat Ane Nenu'"
          "Lust Stories: Men? Who needs them when in Bollywood".
          "How Veere Di Wedding and Lust Stories spearhead the sexual revolution of Bollywood's women". 19 June 2018.
          "Ram Charan-Boyapati Srinu's upcoming film is slated for a Pongal release". The Times of India. 16 June 2018. Retrieved 7 August 2018.
          "Here's so!e 'Good News' for Akshay Kumar and Kareena Kapoor Khan fans". Mumbai Mirror. 2 August 2018. Retrieved 2 August 2018.
          "Dharma Productions on Twitter". Twitter. 30 November 2018. Retrieved 30 November 2018.
          "Akshay Kumar and Raghava Lawrence begin shooting of Kanchana Hindi remake Lakshmi". India Today. 30 November 2018. Retrieved 26 April 2019.
          "Sidharth Malhotra and Kiara Advani... #Shershaah goes on floors, filming begins... Directed by Vishnu Varadhan". Retrieved 7 May 2019.
          "Watch: The teaser of Yo Yo Honey Singh's music video 'Urvashi' starring Shahid Kapoor and Kiara Advani out". The Times of India. 26 September 2018. Retrieved 26 September 2018.
          "Kiara Advani bags 'Best Find of Year Award'". Gulf News.

              "Ranveer Singh, Ayushmann Khurrana and Kiara Advani win at the Asiavision Movie Awards 2018 in Dubai". Times Now.

          External links
            Wikimedia Commons has media related to Kiara Advani.

              Kiara Advani on Twitter
              Kiara Advani on IMDb

          Categories:

              Indian film actressesLiving peopleSindhi people1992 birthsActresses in Hindi cinemaActresses in Telugu cinemaIndian people of Spanish descentIndian people of Portuguese descentIndian people of Irish descentIndian people of Scottish descent

          Navigation menu

              Not logged in
              Talk
              Contributions
              Create account
              Log in

              Article
              Talk

              Read
              Edit
              View history

          Search

              Main page
              Contents
              Featured content
              Current events
              Random article
              Donate to Wikipedia
              Wikipedia store

          Interaction

              Help
              About Wikipedia
              Community portal
              Recent changes
              Contact page

          Tools

              What links here
              Related changes
              Upload file
              Special pages
              Permanent link
              Page information
              Wikidata item
              Cite this page

          In other projects

              Wikimedia Commons

          Print/export

              Create a book
              Download as PDF
              Printable version

          Languages

              বাংলা
              हिन्दी
              मैथिली
              मराठी
              नेपाली
              ଓଡ଼ିଆ
              ਪੰਜਾਬੀ
              தமிழ்
              తెలుగు

          Edit links

              This page was last edited on 5 July 2019, at 16:56 (UTC).
              Text is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply. By using this site, you agree to the Terms of Use and Privacy Policy. Wikipedia® is a registered trademark of the Wikimedia Foundation, Inc., a non-profit organization.

              Privacy policy
              About Wikipedia
              Disclaimers
              Contact Wikipedia
              Developers
              Cookie statement
              Mobile view

              Wikimedia Foundation
              Powered by MediaWiki


          <div
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            onClick={this.onLogoutClick}
          >
            Logout
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);