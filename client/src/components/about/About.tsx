import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { AiFillHtml5 } from "react-icons/ai";
import { DiGit, DiJsBadge } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";

const cardStyle = {
  border: "1px dashed gray",
  borderRadius: "10px",
  padding: "0.5rem",
  margin: "0.5rem",
  marginTop: "1rem",
};

const contactStyle = {
  color: "gray",
  fontSize: "3rem",
  fontWeight: "bold",
  display: "block",
};

export default function About() {
  const params = useParams();
  const expRef: any = useRef(null);
  const achieveRef: any = useRef(null);
  const skillsRef: any = useRef(null);
  const educationRef: any = useRef(null);
  const contactRef: any = useRef(null);
  const aboutRef: any = useRef(null);

  useEffect(() => {
    const childPath = params["*"];
    switch (childPath) {
      case "contact":
        return contactRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      case "experience":
        return expRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      case "skills":
        return skillsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      case "achievements":
        return achieveRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      case "education":
        return educationRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      default:
        return aboutRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }
  }, [params]);

  const skillsList = [
    {
      name: "HTML5",
      icon: <AiFillHtml5 style={{ fontSize: "30px", color: "#009688" }} />,
    },
    {
      name: "CSS3",
      icon: <CssIcon style={{ fontSize: "30px", color: "#64b5f6" }} />,
    },
    {
      name: "SASS",
      icon: <DiSass style={{ fontSize: "30px", color: "#ec407a" }} />,
    },
    {
      name: "Bootstrap",
      icon: <DiBootstrap style={{ fontSize: "30px", color: "blue" }} />,
    },
    {
      name: "Material UI",
      icon: "",
    },
    {
      name: "Javascript",
      icon: <JavascriptIcon style={{ fontSize: "30px", color: "#e65100" }} />,
    },
    {
      name: "React.js",
      icon: <DiReact />,
    },
    {
      name: "Redux",
      icon: "",
    },
    {
      name: "Jest",
      icon: "",
    },
    {
      name: "Webpack",
      icon: "",
    },
    {
      name: "Node.js",
      icon: <DiNodejsSmall style={{ fontSize: "30px", color: "green" }} />,
    },
    {
      name: "Express.js",
      icon: "",
    },
    {
      name: "MongoDB",
      icon: <DiMongodb style={{ fontSize: "30px", color: "green" }} />,
    },
    {
      name: "MySQL",
      icon: <DiMysql style={{ fontSize: "30px", color: "blue" }} />,
    },
    {
      name: "Git",
      icon: <DiGit style={{ fontSize: "30px", color: "gray" }} />,
    },
  ];

  return (
    <div>
      <div style={cardStyle}>
        <Typography
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "#1976d2",
          }}
          variant="h3"
          gutterBottom
          ref={aboutRef}
        >
          About
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={10}>
            <Typography
              variant="body1"
              gutterBottom
              style={{ letterSpacing: "1px", padding: "1rem" }}
            >
              My name is Ajay Kiran Reddy, I am a Full Stack Web Developer and
              Web Designer. An Open Source enthusiast and a Computer Science
              student from India. I love working on new and exciting
              technologies emerging nowadays. I have good work experience as a
              MERN Stack Developer in startup(s) and UI/UX Designer where I was
              core member of the development team and done quite some
              contribution to open source as well.
            </Typography>
          </Grid>
          <Grid item xs={2} style={{ padding: 0 }}>
            <img
              height="250"
              width="300"
              src="https://scontent.fvtz3-1.fna.fbcdn.net/v/t39.30808-6/284531416_2210805772410062_464832407000864203_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=A2gAa4faSAkAX-7wcpw&tn=ayXVM-sPRWG_KSWf&_nc_ht=scontent.fvtz3-1.fna&oh=00_AfDCYtexNJGBdwROEJe6wUH4v-iRylLNSVbeYLwOr5eAHw&oe=63BAF9DB"
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{ alignContent: "left", textAlign: "left" }}
          >
            <Stack spacing={1} alignItems="center">
              <Stack direction="row" spacing={1}>
                <Chip
                  style={{ padding: "1rem", fontWeight: "bold" }}
                  label="SKILLS"
                  color="primary"
                  onClick={() =>
                    skillsRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                />
                <Chip
                  style={{ padding: "1rem", fontWeight: "bold" }}
                  label="RESUME"
                  color="success"
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </div>

      {/* SKILLS */}
      <div style={cardStyle}>
        <Typography
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "#1976d2",
          }}
          variant="h3"
          gutterBottom
          ref={skillsRef}
        >
          Skills
        </Typography>

        <Grid container spacing={3}>
          <Grid item md={6} xs={12} lg={4}>
            <Card
              sx={{
                minWidth: 275,
                minHeight: "150px",
                borderRadius: "1rem",
                backgroundColor: "#e3f2fd",
              }}
            >
              <CardContent>
                <Typography
                  style={{ color: "#0b2593" }}
                  variant="h5"
                  component="div"
                >
                  Web Development
                </Typography>

                <Typography
                  variant="body2"
                  style={{
                    textAlign: "center",
                    paddingTop: "1rem",
                    letterSpacing: "1px",
                  }}
                >
                  I am a Full Stack Web Developer (MERN) and have quite some
                  experience in it as well.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={6} xs={12} lg={4}>
            <Card
              sx={{
                minWidth: 275,
                minHeight: "150px",
                borderRadius: "1rem",
                backgroundColor: "#ede7f6",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ color: "#0b2593" }}
                >
                  Problem Solving
                </Typography>

                <Typography
                  variant="body2"
                  style={{
                    textAlign: "center",
                    paddingTop: "1rem",
                    letterSpacing: "1px",
                  }}
                >
                  I love solving problems whether programming problems or real
                  life problems.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={6} xs={12} lg={4}>
            <Card
              sx={{
                minWidth: 275,
                minHeight: "150px",
                borderRadius: "1rem",
                backgroundColor: "#e0f2f1",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ color: "#0b2593" }}
                >
                  Web Designing
                </Typography>

                <Typography
                  variant="body2"
                  style={{
                    textAlign: "center",
                    paddingTop: "1rem",
                    letterSpacing: "1px",
                  }}
                >
                  I love designs and it's the first step before creating any
                  website as I can give layout to my imagination.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ textAlign: "center", marginTop: "1rem" }}>
          <Typography variant="h6" gutterBottom style={{ color: "#646464" }}>
            TECH I'M FAMILIAR WITH
          </Typography>
        </Grid>

        <Grid container spacing={3}>
          {skillsList.map((skill) => {
            return (
              <Grid item xs={3}>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{
                    borderRadius: "1rem",
                    backgroundColor: "#e8eaf6",
                    padding: "0.2rem",
                  }}
                >
                  {skill.name} {skill.icon}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </div>

      {/* EXPERIENCE */}

      <div style={cardStyle}>
        <Typography
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "#1976d2",
            paddingTop: "1rem",
          }}
          variant="h3"
          gutterBottom
          ref={expRef}
        >
          Experience
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={7}>
            <Typography variant="h4" gutterBottom style={{ color: "#616161" }}>
              Full Stack MERN Developer (3+ Years)
            </Typography>
            <a
              href="https://copernicus.blueyonder.com/"
              style={{ color: "#ff5722" }}
              target="_blank"
              rel="noreferrer"
            >
              Copernicus,
            </a>

            <a
              href="https://blueyonder.com/"
              rel="noreferrer"
              target="_blank"
              style={{ paddingLeft: "1rem", color: "#607d8b " }}
            >
              BlueYonder
            </a>

            <Typography
              variant="body2"
              gutterBottom
              style={{ padding: "1rem", letterSpacing: "1px" }}
            >
              A Portal developed to bring scale to Sales. Primarily enabling
              Customer Executives, Business Development, Pre-sales and partners
              forallgotoMarketopportunities.Itenables tocombine
              valuebasedselling,democratizingAI/MLbaseddataAnalytical and
              insights, industry based workflows and automated RFP responses
              which solves the problems of bringing scale to Sales process , all
              front lines in BY having quick access to value, opportunity, and
              their Peer analysis, convert raw data to meaningful insights ,
              quick access to industry use-cases
            </Typography>
          </Grid>

          <Grid item xs={7}>
            <Typography variant="h4" gutterBottom style={{ color: "#616161" }}>
              Senior System Engineer (3 Years)
            </Typography>
            <a
              href="https://www.allstate.com/"
              style={{ color: "#ff5722" }}
              target="_blank"
              rel="noreferrer"
            >
              AllState Insurance Company,
            </a>

            <a
              href="https://www.infosys.com/"
              rel="noreferrer"
              target="_blank"
              style={{ paddingLeft: "1rem", color: "#607d8b" }}
            >
              Infosys
            </a>

            <Typography
              variant="body2"
              gutterBottom
              style={{ padding: "1rem", letterSpacing: "1px" }}
            >
              Relationship Platform project is a stand alone application where
              it will deals with lots of functionalities that includes
              everything which is possibly done on an Insurance policy. This
              application can be used by customers through agents where they can
              get insurance for various products. It was a front end Application
              developed by using React Js and Redux which was migrated from
              java. As part of this project, I have worked as Senior System
              Engineer which contains team of 7.
            </Typography>
          </Grid>
        </Grid>
      </div>

      {/* Achievements Section */}

      <div style={cardStyle}>
        <Typography
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "#1976d2",
          }}
          variant="h3"
          gutterBottom
          ref={achieveRef}
        >
          Achievements
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={7}>
            <Typography variant="h6" gutterBottom style={{ color: "#616161" }}>
              First Position - Innovate to elevate
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              style={{ padding: "0.5rem", letterSpacing: "1px" }}
            >
              I along with my team have represented our Medical Diagnosis
              application in Innovate to elevate competition which was held at
              Hindu College of Engineering, Sonipat. We secured the first
              position in that competition and received price money as well.
            </Typography>

            <Typography variant="h6" gutterBottom style={{ color: "#616161" }}>
              Student Excellence and Learning Program (SELP)
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              style={{ padding: "0.5rem", letterSpacing: "1px" }}
            >
              This camp held at my university and implementation of knowledge
              and practice of the techniques taught in this program builds
              learning capacity, enhances creativity and communication that
              helps in developoing our leadership skills.
            </Typography>

            <Typography variant="h6" gutterBottom style={{ color: "#616161" }}>
              Nominated for GEM Award and Team Pillar Awards
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              style={{ padding: "0.5rem", letterSpacing: "1px" }}
            >
              I have been nominated for GEM awards for outstanding performance
              in the quarter for 3 year times. Also nominated for Team pillar
              award for successful delivering of client's requirements within
              short time.
            </Typography>

            <Typography variant="h6" gutterBottom style={{ color: "#616161" }}>
              Crystal Ball Award Winner
            </Typography>

            <Typography
              variant="body2"
              gutterBottom
              style={{ padding: "0.5rem", letterSpacing: "1px" }}
            >
              We have won the Crystall ball event which conducted across our
              teams in our company(Blueyonder) for showcasing best prototype
              model and application which increases their sales and their
              innovation.
            </Typography>
          </Grid>
        </Grid>
      </div>

      {/* Education Section */}

      <div style={cardStyle}>
        <Typography
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "#1976d2",
          }}
          variant="h3"
          gutterBottom
          ref={educationRef}
        >
          Education
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Bachelor's Degree in Electrical & Electronics Engineering
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              KL University, Vijayawada.
            </Typography>

            <Typography variant="button" display="block" gutterBottom>
              2012-2016
            </Typography>

            <Typography variant="h5" gutterBottom>
              BIE. Board of Intermediate Education, AP.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Sri Chaitanya, Guntur
            </Typography>

            <Typography variant="button" display="block" gutterBottom>
              2010-2012
            </Typography>

            <Typography variant="h5" gutterBottom>
              The Board of Secondary Education Of Andhra Pradesh (BSEAP)
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Bhashyam , Guntur
            </Typography>

            <Typography variant="button" display="block" gutterBottom>
              2010
            </Typography>
          </Grid>
        </Grid>
      </div>

      {/* Contact Section */}
      <div style={cardStyle}>
        <Typography
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "#1976d2",
          }}
          variant="h3"
          gutterBottom
          ref={contactRef}
        >
          Contact
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={6} style={{ textAlign: "center", marginTop: "5rem" }}>
            <Typography variant="h5" gutterBottom>
              Let's Connect
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              style={{ fontWeight: "bold", color: "gray" }}
            >
              Digitally
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <a
              style={contactStyle}
              href="mailto:ajaykiranreddy999@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              EMAIL
            </a>
            <a
              style={contactStyle}
              href="https://github.com/BYCorporate/sales-copernicus-web"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
            <a
              style={contactStyle}
              href="https://www.linkedin.com/in/ajaykiran-reddy-73985393/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>

            <a
              style={contactStyle}
              href="https://medium.com/@ajaykiranreddy999"
              target="_blank"
              rel="noreferrer"
            >
              MEDIUM
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
