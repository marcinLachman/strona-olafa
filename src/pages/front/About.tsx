import { Link } from "react-router-dom";
import Carousel from "nuka-carousel";

import herb1 from "../../assets/herb1.jpg";
import herb2 from "../../assets/herb2.jpg";

export const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-6 mx-2">
        <section className="space-y-3 mt-4">
          <h1 className="text-4xl font-bold text-center">ABOUT ME</h1>
          <p className="text-sm">
            Hello! I am a coat of arms, family crest and business emblems fine
            artist from Poland.
          </p>
        </section>
        <section className="text-xl space-y-6 mt-6">
          <p>
            Hello! I am a highly skilled and experienced heraldry artist based
            in Poland. I specialize in creating custom coat of arms, personal
            coat of arms&#185;, family crests, business emblems, and church
            seals (Ecclesiastical heraldry) that reflect the unique heritage and
            traditions of my clients. With over a decade of experience in
            digital art and over 18 years in traditional art, I am a true
            professional in the field of custom heraldry.
          </p>
          <p>
            I take pride in my ability to create handcrafted and handmade custom
            coats of arms based on European and non-European traditions and
            include symbols and animals typical to any region. Each element in
            my custom family crests and heraldry logos has its own meaning and
            significance, ensuring that your coat of arms truly represents who
            you are and what you stand for.
          </p>
          <p>
            If you are interested in creating your own custom coat of arms,
            please visit the{" "}
            <Link to="#" className="text-amber-600">
              “Order”
            </Link>{" "}
            section of my website. You can use the contact form there to
            describe what you would like me to design for you, and I will work
            with you to bring your vision to life. If you would like to learn
            more about the symbolic elements used in heraldry, be sure to check
            out the “How Does It Work” section of my website.
          </p>
          <p>
            So, whether you&#8217;re looking to create a custom crest for
            yourself, your family, or your business, I am here to help you
            create a truly unique and meaningful work of art.{" "}
            <Link to="#" className="text-amber-600">
              Contact me
            </Link>{" "}
            today to get started!
          </p>
        </section>
        <section className="flex space-x-6 ml-8">
          <div>
            <div className="h-full w-4 bg-amber-500"></div>
          </div>
          <div>
            <p className="text-sm">
              &#185; Yes, there is something called a personal coat of arms. A
              coat of arms is a design or emblem that is traditionally used to
              represent a person, family, or organisation. It typically consists
              of a shield with various symbols and colours that are associated
              with the individual or group being represented. While coat of arms
              historically represented noble families, they have evolved to be
              used by individuals to represent their own personal identity or
              family history. Personal coats of arms may include symbols or
              colours that represent aspects of the individual’s personality,
              occupation, or family history. Creating a personal coat of arms
              can be a fun and creative way to express your identity and family
              history. While there are no set rules for designing a personal
              coat of arms, it’s important to do some research to ensure that
              the symbols and colours you choose for your personal coat of arms
              have meaning and significance to you. If you are unsure about
              which symbols or colours to use, don’t worry – as a professional
              heraldry artist, I can offer guidance and expertise to help you
              create a design that truly represents you and your family history.
              So, feel free to ask me any questions you may have throughout the
              design process.
            </p>
          </div>
        </section>
        <section>
          <Carousel
            className="max-w-2xl m-4"
            defaultControlsConfig={{
              pagingDotsStyle: {
                fill: "#f59e0b",
              },
            }}
          >
            <Link to="#">
              <img src={herb1} className="bg-cover" />
            </Link>
            <Link to="#">
              <img src={herb2} className="bg-cover" />
            </Link>
            <Link to="#">
              <img src={herb1} className="bg-cover" />
            </Link>
            <Link to="#">
              <img src={herb2} className="bg-cover" />
            </Link>
            <Link to="#">
              <img src={herb1} className="bg-cover" />
            </Link>
          </Carousel>
        </section>
      </div>
    </>
  );
};
