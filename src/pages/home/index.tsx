import Cursor from '../../components/cursor';
import Description from '../../sections/description';
import Header from '../../sections/header';
import Projects from '../../sections/projects';
import LocomotiveScroll from 'locomotive-scroll';

export interface Props {
  active: boolean;
  index: number;
}

const Home = () => {
  // @ts-ignore: Unreachable code error
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      {/* <Modal modal={modal} projects={projects} /> */}
      <Cursor />
      <div id="homePage">
        <Header />
        <Description />
        <Projects />
      </div>
    </>
  );
};

export default Home;
