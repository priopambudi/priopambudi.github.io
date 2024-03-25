import './description.css';
import Paragraph from '../../components/paragraph';

const Description = () => {
  return (
    <section className="description-section h-content">
      <div className="container mx-auto relative">
        <Paragraph>
          Enthusiastic and versatile Software Engineer with over 2+ years of hands-on experience in creating captivating
          web applications.
        </Paragraph>
        <div className="button-resume absolute text-white mr-6" data-scroll data-scroll-speed="0.1">
          My Resume
        </div>
      </div>
    </section>
  );
};

export default Description;
