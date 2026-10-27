// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "A list of my publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research and engineering projects — click any title to open its full write-up.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching experience and student mentoring at Michigan State University.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-service",
          title: "Service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "Talks, Awards, and Outreach.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-graduated-from-southeast-university-b-eng-with-the-outstanding-graduate-honor",
          title: 'I graduated from Southeast University (B.Eng.) with the Outstanding Graduate honor.',
          description: "",
          section: "News",},{id: "news-i-joined-the-department-of-automation-at-southeast-university-as-a-research-assistant-mentored-by-dr-changyin-sun",
          title: 'I joined the Department of Automation at Southeast University as a Research Assistant,...',
          description: "",
          section: "News",},{id: "news-i-joined-the-smart-microsystems-lab-at-michigan-state-university-with-the-engineering-distinguished-scholar-fellowship",
          title: 'I joined the Smart Microsystems Lab at Michigan State University with the Engineering...',
          description: "",
          section: "News",},{id: "news-tada-one-paper-on-simultaneous-motion-and-stiffness-control-of-soft-robots-is-accepted-to-acc-2023",
          title: ':tada: One paper on simultaneous motion and stiffness control of soft robots is...',
          description: "",
          section: "News",},{id: "news-tada-one-paper-on-simultaneous-shape-reconstruction-and-force-estimation-of-soft-robots-is-accepted-to-ieee-asme-tmech",
          title: ':tada: One paper on simultaneous shape reconstruction and force estimation of soft robots...',
          description: "",
          section: "News",},{id: "news-trophy-our-paper-on-simultaneous-shape-reconstruction-and-force-estimation-of-soft-robots-received-the-best-student-paper-award-at-aim-2024-and-was-covered-by-msu-college-of-engineering-news",
          title: ':trophy: Our paper on simultaneous shape reconstruction and force estimation of soft robots...',
          description: "",
          section: "News",},{id: "news-tada-two-papers-paper-1-paper-2-on-adaptive-neural-mpc-via-meta-learning-and-learning-based-modeling-of-soft-actuators-are-accepted-to-mecc-2025",
          title: ':tada: Two papers(paper 1, paper 2) on adaptive neural MPC via meta-learning and...',
          description: "",
          section: "News",},{id: "news-trophy-our-paper-on-learning-based-modeling-of-soft-actuators-is-selected-as-a-best-student-paper-finalist-at-mecc-2025",
          title: ':trophy: Our paper on learning-based modeling of soft actuators is selected as a...',
          description: "",
          section: "News",},{id: "news-medal-military-i-am-honored-to-be-selected-as-asme-dynamic-systems-and-control-division-dscd-rising-star-and-give-an-invited-talk-at-mecc-2025",
          title: ':medal_military: I am honored to be selected as ASME Dynamic Systems and Control...',
          description: "",
          section: "News",},{id: "news-trophy-our-paper-on-simultaneous-shape-reconstruction-and-force-estimation-of-soft-bending-actuators-received-the-2025-dscd-best-mechatronics-paper-award",
          title: ':trophy: Our paper on simultaneous shape reconstruction and force estimation of soft bending...',
          description: "",
          section: "News",},{id: "news-tada-one-paper-bipneu-on-bipolar-pressure-pneumatic-system-for-soft-robots-is-accepted-to-ieee-asme-tmech",
          title: ':tada: One paper BiPneu on bipolar-pressure pneumatic system for soft robots is accepted...',
          description: "",
          section: "News",},{id: "news-tada-one-paper-on-data-driven-control-of-soft-robots-under-unknown-external-payloads-is-accepted-to-ieee-ra-l",
          title: ':tada: One paper on data-driven control of soft robots under unknown external payloads...',
          description: "",
          section: "News",},{id: "news-tada-one-paper-on-worm-robot-is-accepted-to-the-asme-journal-of-dynamic-systems-measurement-and-control",
          title: ':tada: One paper on worm robot is accepted to the ASME Journal of...',
          description: "",
          section: "News",},{id: "projects-5g-intelligent-mobile-robot",
          title: '5G Intelligent Mobile Robot',
          description: "Integrated A* global path planning with Timed Elastic Band local trajectory optimization, enabling efficient global route generation while reducing the computational burden of local navigation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5G_MobileRobot/";
            },},{id: "projects-driverless-container-truck",
          title: 'Driverless Container Truck',
          description: "Developed embedded perception algorithms for a driverless container truck, using machine learning to detect trucks and lane markings on the road in real time.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DrivelessTruck/";
            },},{id: "projects-micromouse-robot-competition",
          title: 'Micromouse Robot Competition',
          description: "A Micromouse robot project where maze-solving algorithms were first validated in Webots simulation and then deployed on a physical robot, integrating wall sensing, motion control, path planning, and real-world autonomous maze navigation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MicroMouse/";
            },},{id: "projects-nxp-cup-autonomous-vehicle",
          title: 'NXP Cup Autonomous Vehicle',
          description: "An NXP Cup autonomous vehicle project focused on vision-based line tracking and embedded motion control.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/NXP/";
            },},{id: "projects-upper-limb-rehabilitation-robots",
          title: 'Upper Limb Rehabilitation Robots',
          description: "Akso — a desktop upper-limb rehabilitation training robot for stroke patients.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Reha_robot/";
            },},{id: "projects-robocup-humanoid-robot",
          title: 'RoboCup Humanoid Robot',
          description: "A RoboCup humanoid robot project focused on vision-based line following and bipedal walking control.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RoboCup/";
            },},{id: "projects-soft-robotic-arm-using-isaac-sim",
          title: 'Soft Robotic Arm Using Isaac Sim',
          description: "A course project exploring Gaussian Process-based MPC for controlling an Isaac Sim soft-arm model in real time, using the FEM simulation capabilities of Isaac Sim.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SoftArm_IsaacSim/";
            },},{id: "projects-mujoco-based-mpc-for-soft-robotic-arms",
          title: 'MuJoCo-based MPC for Soft Robotic Arms',
          description: "A MuJoCo-based soft-arm simulation demo exploring sampling-based model-predictive control for tracking dynamically moving targets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SoftArm_MJPC/";
            },},{id: "projects-supermarket-shelf-stocking-robot",
          title: 'Supermarket Shelf-Stocking Robot',
          description: "A course project simulating an autonomous supermarket shelf-stocking robot in Webots, integrating product search, vision-based grasping, shelf-cell selection, GPS-based navigation, and pick-and-place manipulation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Webots/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Resume_YuMei_Academic_20261024.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%65%69%79%75%31@%6D%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yu-mei", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yu-mei-b80099180", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=vZW8lI8AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
