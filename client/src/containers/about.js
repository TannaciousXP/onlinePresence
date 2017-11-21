import React, {Component} from 'react';
import {
  Grid,
  Header,
  Segment,
  Divider,
  Reveal,
  Button,
  Image
} from 'semantic-ui-react';

import { connect } from 'react-redux';
import { showModal, viewModal } from '../actions';

import VelvetyModal from '../components/modals/about_velvety';

import links from '../../../public/links';
import helper from '../../../server/helperFuncs';

class About extends Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
  }

  show(str) {
    this.props.viewModal(str);
    this.props.showModal();
  }

  render() {
    return (
      <Grid container verticalAlign='middle' centered padded>
        <Grid.Row>
          <Segment raised textAlign='left'>
            <Grid columns={2} verticalAlign='middle'>
              <Grid.Column width={5}>
                <Reveal animated='rotate left'>
                  <Reveal.Content visible>
                    <Image size='medium' shape='circular' src='/assets/logos/code.png'/>

                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image size='medium' shape='circular' src='/assets/logos/areYou.png'/>

                  </Reveal.Content>
                </Reveal>
              </Grid.Column>

              <Grid.Column width={11}>
                <Header className='head intro' as='h1'>SOFTWARE ENGINEER</Header>
                <Divider fitted/>
                <br/>
                <p className='text'>I became a Software Engineer because since I was a child
                I enjoyed watching my older brother assemble a computer from the parts he brought
                from newegg, which spark my curiosity for computer science. Since then,
                I dabble with Xcode and Python to get a feel for programming. It wasn’t
                until I immersed myself with JavaScript that I really enjoyed programming.
                Once I leveled up enough to build a full stack application, and built Evently to
                solve a novel problem that persisted in Hong Kong for hosting events. I realized
                my passion for making a positive impact aligned perfectly with programing.</p>
                <Divider hidden/>
                <p className='text'>I am currently looking for a full-time position
                where I can be happy, fully engaged, and passionate about the role I'm
                in and contribute to the shared goal.</p>
                <Divider hidden/>
                <p className='text'>I'm looking for a company whose culture is transparent,
                harmonious, and well-organized; a company that invests in their employees
                and that fosters professional and personal growth. This is the kind of
                company that I would love to contribute to, where I can utilize the
                transferrable skills I have acquired over the years, such as creative
                problem-solving, communication, organization, leadership and autonomy. </p>
                <Divider hidden/>
                <p className='text'>
                  <strong className='subLinks'>Hover over the icon</strong> for a surprise =] <br/>
                Is your company that type of company?</p>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Segment raised textAlign='right'>
            <Grid columns={2} verticalAlign='middle'>

              <Grid.Column width={11}>
                <Header className='head intro' as='h1'>CUTS & GLORY CO</Header>
                <Divider fitted/>
                <br/>
                <p className='text'>I started my second company,
                Cuts & Glory Co., because there was a huge demand from the expat
                community to get a fresh haircut. I applied what I learned from Velvety
                and the techniques launched Cuts & Glory Co to the forefront with the
                other establish Barbershops. I further refined my skills and developed
                new ones.</p>
                <Divider hidden/>
                <p className='text'>
                  <strong className='text3'>Self-motivation: <br/></strong>
                Starting Cuts & Glory Co. was a difficult time for me because I didn’t
                have my pillars of support (my business partners) anymore, and I had to
                dig deep because I was the foundation that Cuts & Glory Co. would be built
                upon. After some soul searching and deep reflection, I came up with my “why”
                which became the driving force for Cuts & Glory Co.’s success.
                </p>
                <Divider hidden/>
                <p className='text'>
                  <strong className='text3'>Communication: <br/></strong>
                For Cuts & Glory Co., communication was the key to customer retention. In
                order for me to give the customer the best experience, I needed to know
                what the customer wanted, then explicitly let the customer know my intentions.
                If my intentions aligned with the customer's needs, the customer would give
                me the green light and then receive a fresh cut.
                </p>
                <Divider hidden/>
                <p className='text'>
                  <strong className='text3'>Leadership: <br/></strong>
                  With my increasing brand recognition in the industry, I was invited by
                  Toni & Guy to become Hong Kong’s first barber instructor. I devised a
                  course consisting of three parts, and trained over 100 stylists.
                </p>
                <Divider hidden/>
                <p className='text'>
                  <strong className='subLinks'>Hover over the icon </strong> to see my design for Cuts & Glory Co.<br/>
                </p>
                <Divider hidden/>
                <p className='text'>
                  <strong>Online Presence: <br/></strong>
                  <li><a className='subLinks' onClick={() => helper.openNewTab(links.about.cg.dapper)}><strong>Most dapper barbers</strong></a></li>
                  <li><a className='subLinks' onClick={() => helper.openNewTab(links.about.cg.laneCrawFord)}><strong>Lanecrawford Modern grooming</strong></a></li>
                  <li><a className='subLinks' onClick={() => helper.openNewTab(links.about.cg.coconut)}><strong>Versace design</strong></a></li>
                  <li><a className='subLinks' onClick={() => helper.openNewTab(links.about.cg.menClub)}><strong>Menclub style video</strong></a></li>
                  <li><a className='subLinks' onClick={() => helper.openNewTab(links.about.cg.elle)}><strong>Elle magazine</strong></a></li>

                </p>
              </Grid.Column>
              <Grid.Column width={5}>
                <Reveal animated='rotate'>
                  <Reveal.Content visible>
                    <Image size='medium' shape='circular' src='/assets/logos/shears.png'/>

                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image size='medium' shape='circular' src='/assets/logos/c&g.png'/>

                  </Reveal.Content>
                </Reveal>

              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Segment raised textAlign='left'>
            <Grid columns={2} verticalAlign='middle'>
              <Grid.Column width={5}>
                <Reveal animated='rotate left'>
                  <Reveal.Content visible>
                    <Image size='medium' shape='circular' src='/assets/logos/wine.png'/>

                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image size='medium' shape='circular' src='/assets/logos/velvety.png'/>

                  </Reveal.Content>
                </Reveal>
              </Grid.Column>

              <Grid.Column width={11}>
                <Header className='head intro' as='h1'>VELVETY & BLACK BEAR</Header>
                <Divider fitted/>
                <br/>
                <p className='text'>
                Velvety came to be because of the urge to move back to Hong Kong after
                my year abroad there, and my term projects about exporting red wine to
                Asia for my degree in International Business. We started with just
                providing the market with our own personal brand of wines, Velvety.
                The company grew to include logistical services, personal branding of
                wines, distribution of boutique brands of wine and spirits, marketing
                services and events planning with the usage of our wines. After
                experiencing the growth of the business, here are some skills I picked
                up along the way.
                </p>
                <Divider hidden/>
                <p className='text'>
                  <strong className='text3'>Being Autonomous: <br/></strong>
                  Starting a business in a different country seemed pretty wild for
                  my friends and family. They all pointed out all the possibilities
                  of the company going under and everyone had valid points. However,
                  Stephen Covey’s first habit “Being proactive” was the determining
                  factor of my performance. For example, if I needed to make sales,
                  I would go knocking on doors, send out cold emails, make cold
                  calls, and follow up. Therefore, if I needed or wanted something,
                  I made small measurable goals, and proceeded to pursue them.
                </p>
                <Divider hidden/>
                <p className='text'>
                  <strong className='text3'>Organization: <br/></strong>
                  With the role as co-founder, I needed to set up meetings and deliveries,
                  create marketing material, host events, make sales, devise business
                  plans and execute them. At first this was extremely difficult to
                   balance, but after reading "The 7 Habits of Highly Effective People”
                   by Stephen Covey, it became easier to manage by applying the key
                   habits of “Begin with the end in mind”, “Put first things first”,
                   “Seek first to understand”, and “Think win-win”.
                </p>
                <Divider hidden/>
                <p className='text'>
                  <strong className='text3'>Problem-Solving: <br/></strong>
                  Problem solving is a skill like any other, and the more you practice
                  it, the better you’ll get. With the variety of the problems I
                  encounter, I began to notice a pattern and came up with a system of
                  M4 (Macro, Micro, Micro, Macro). M4 starts with the first macro,
                  where I would understand the problem at a high level overview.
                  The first micro is the process of breaking down the problem into
                  smaller problems and then solving them. The second micro is taking
                  the small solutions and refactoring/optimizing them. By the time I
                  get to the second macro, I would have the solution.
                </p>
                <Divider hidden/>
                <p className='text'>
                  <strong className='subLinks'>Hover over the icon </strong> to see my design for Velvety.<br/>
                Checkout my <a className='subLinks' onClick={() => this.show('Velvety')}><strong> flashback</strong></a> for Velvety.
                </p>
                <VelvetyModal/>
                <Divider hidden/>
                <p className='text'>
                  <strong>Online Presence:<br/></strong>
                  <li>Hong Kong's biggest wine blog: <a className='subLinks' onClick={() => helper.openNewTab(links.about.velvety.wineTimes)}>
                    <strong> WinetimesHK</strong></a></li>
                </p>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

export default connect (mapStateToProps, {showModal, viewModal})(About);
