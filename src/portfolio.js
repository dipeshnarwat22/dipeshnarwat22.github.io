/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
    isSplash: false,  // Change this to false if you don't want Splash screen.
};

document.title = "Dipesh's Portfolio";



//Home Page
const greeting = {
	title: "Dipesh Narwat",
	logo_name: "DipeshNarwat",
	nickname: "victor",
	subTitle:
		"I'm Dipesh Narwat, Game Designer & Developer by profession but also a Researcher in the field of Extended Reality (XR) which embraces Augmented Reality (AR), Virtual Reality (VR), Mixed Reality (MR), and everything in between. ",
	resumeLink:
		"https://drive.google.com/file/d/1-pj3Wv7PIHkImbKCc1a-Sq1V2-etoGeZ/view?usp=sharing",
    portfolio_repository: "https://www.instagram.com/dipeshnarwat22/",
};

const socialMediaLinks = {
	/* Your Social Media Link */
	//github: "https://github.com/ashutosh1919",
    linkedin: "https://www.linkedin.com/in/dipesh-narwat/",
	gmail: "dipeshnarwat21@outlook.com",
	gitlab: "https://gitlab.com/ashutoshhathidara98",
    facebook: "https://www.facebook.com/dipesh.narwat/",
    twitter: "https://twitter.com/DipeshNarwat",
	//instagram: "https://www.instagram.com/layman_brother/"
};

const skills = {
  data: [
    {
      title: "Game Design & Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable 2D & 3D games and optimising them for platform rich content",
        "⚡ Experience of working with Unity and Unreal Game Engine",
        "⚡ 3D Post Processing Effects and Cutscenes"
      ],
      softwareSkills: [
        /*{
          skillName: "Unity",
          fontAwesomeClassname: "logos-unity",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        }*/
      ]
    },
   {
      title: "VR/AR Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive Virtual and Augmented Reality applications and use cases",
        "⚡ Developing high defination and optimized VR/AR content to run on any platform using Unity",
        "⚡ Creating and editing 360' Videos or 3D Environment for Virtual Reality"
      ],
      softwareSkills: [
       /* {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837"
          }
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB"
          }
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399"
          }
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B"
          }
        }*/
      ]
    },
    /*{
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS"
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4"
          }
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900"
          }
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6"
          }
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28"
          }
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791"
          }
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248"
          }
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6"
          }
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5"
          }
        }
      ]
    }*/,
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience"
      ],
      softwareSkills: [
       /* {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2"
          }
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E"
          }
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00"
          }
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000"
          }
        }*/
      ]
    }
  ]
};


// Education Page
const competitiveSites = {
  competitiveSites: [
    /*{
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866"
      },
      profileLink: "https://www.hackerrank.com/layman_brother"
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638"
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919"
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB"
      },
      profileLink: "http://codeforces.com/profile/layman_brother"
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754"
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391"
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF"
      },
      profileLink: "https://www.kaggle.com/laymanbrother"
    }*/
  ]
}

const degrees = {
  degrees : [
    {
      title: "Manav Rachna International Institute of Research and Studies",
      subtitle: "B.Tech. in Computer Science",
          logo_path: "Peach and Gray Watercolor Background Instagram Post (3).png",
      alt_name: "MRIIRS",
      duration: "2017 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have studied Game Design and Deveopment also gained experience in VR/AR Development too.",
        "⚡ I have also received Manav Rachna Special Achiever Award from respected director for representing college at international levels and consistently working on Research and Development."
      ],
          website_link: "https://manavrachna.edu.in"
    }
  ]
}

const certifications = {
	certifications: [
		{
            title: "Unity Asset Creation And Management",
            subtitle: "- Jessica Lindl",
            logo_path: "Unity_Logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/records/3NEKKRW2F7BH",
            alt_name: "Coursera",
            color_code: "#010000"
		},
		{
            title: "Game Development",
            subtitle: "- Brian M. Winn",
            logo_path: "Unity_Logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/5C6PGSBQU98T",
            alt_name: "Coursera",
            color_code: "#010000"
		},
		{
			title: "Advance C#",
			subtitle: "- Venkatesh Muniyandi",
            logo_path: "C#_Logo.png",
			certificate_link:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-00aa75a4-bdd7-4e1c-8de8-d8fd695ba47e.jpg",
			alt_name: "Udemy",
			color_code: "#ffffff"
		},
		{
			title: "Adobe Photoshop CC",            
			subtitle: "- Phil Ebiner",
            logo_path: "Adobe_Logo.png",
			certificate_link:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-d9141b89-211e-4ddf-b681-b593e5a7d8dc.jpg",
			alt_name: "Udemy",
            color_code: "#010000"
		},
		{
			title: "Unity 2D Game Development",
			subtitle: "- Jamal Boutaib",
            logo_path: "Udemy_logo.png",
			certificate_link:
				"https://udemy-certificate.s3.amazonaws.com/image/UC-c7d0d67d-dfe2-411c-8b9a-8b6ac21f0f86.jpg",
			alt_name: "Unity",
			color_code: "#ffffff"
		},
		/*{
			title: "Advanced Data Science",
			subtitle: "- Romeo Kienzler",
			logo_path: "ibm_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
			alt_name: "IBM",
			color_code: "#1F70C199"
		},
		{
			title: "Advanced ML on GCP",
			subtitle: "- GCP Training",
			logo_path: "google_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
			alt_name: "Google",
			color_code: "#0C9D5899"
		},
		{
			title: "DL on Tensorflow",
			subtitle: "- Laurence Moroney",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
			alt_name: "deeplearning.ai",
			color_code: "#00000099"
		},
		{
			title: "Fullstack Development",
			subtitle: "- Jogesh Muppala",
			logo_path: "coursera_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
			alt_name: "Coursera",
			color_code: "#2A73CC"
		},
		{
			title: "Kuberenetes on GCP",
			subtitle: "- Qwiklabs",
			logo_path: "gcp_logo.png",
			certificate_link:
				"https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
			alt_name: "GCP",
			color_code: "#4285F499"
		},
		{
			title: "Cryptography",
			subtitle: "- Saurabh Mukhopadhyay",
			logo_path: "nptel_logo.png",
			certificate_link:
				"https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
			alt_name: "NPTEL",
			color_code: "#FFBB0099"
		},
		{
			title: "Cloud Architecture",
			subtitle: "- Qwiklabs",
			logo_path: "gcp_logo.png",
			certificate_link:
				"https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
			alt_name: "GCP",
			color_code: "#4285F499"
		}*/
	]
};


// Experience Page
const experience = {
	title: "Experience",
	subtitle: "Work, Internship and Volunteership",
	description:
		"",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			experiences: [
				{
                    title: "Co-Founder & Immersive Technology Head",
					company: "Albatros Co.",
                    company_url: "https://caeli.in/",
                    logo_path: "Albatros_logo.png",
					duration: "Aug 2018 - PRESENT",
					location: "Faridabad, Haryana",
					description:
						"",
					color: "#0879bf",
				},
				/*{
					title: "Android and ML Developer",
					company: "Muffito Incorporation",
					company_url: "https://www.linkedin.com/company/muffito-inc/about/",
					logo_path: "muffito_logo.png",
					duration: "May 2018 - Oct 2018",
					location: "Pune, Maharashtra",
					description:
						"I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
					color: "#9b1578",
				},
				{
					title: "Android Developer",
					company: "FreeCopy Pvt. Ltd.",
					company_url: "https://www.linkedin.com/company/freecopy/about/",
					logo_path: "freecopy_logo.png",
					duration: "Nov 2017 - Dec 2017",
					location: "Ahmedabad, Gujarat",
					description:
						"FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
					color: "#fc1f20",
				}*/,
			],
		},
		{
			title: "Internships",
			experiences: [
				{
                    title: "Software Engineering Intern",
                    company: "KCIS INFO SOLUTIONS PVT LTD",
                    company_url: "http://www.kcisindia.com/",
                    logo_path: "KCIS_Logo.png",
					duration: "May 2019 - July 2019",
					location: "New Delhi, India",
					description:
						"Worked on various different ongoing realtime projects for the company and gained some quality experience and knowledge with involvement in the software engineering tools.",
					color: "#ee3c26",
				},
				{
                    title: "Software Development Intern",
                    company: "Shortek PVT LTD",
					company_url:
						"",
                    logo_path: "Peach and Gray Watercolor Background Instagram Post (11).png",
					duration: "Sept 2017 - Nov 2017",
                    location: "Faridabad, India",
					description:
						"Developed UI modules and a working client-server web as well as android application for third party organization.",
					color: "#0071C5",
				},
			],
		},
		{
			title: "Volunteerships",
			experiences: [
				/*{
					title: "Google Explore ML Facilitator",
					company: "Google",
					company_url: "https://about.google/",
					logo_path: "google_logo.png",
					duration: "June 2019 - April 2020",
					location: "Hyderabad, Telangana",
					description:
						"Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
					color: "#4285F4",
				}*/,
				{
					title: "Microsoft Student Partner",
					company: "Microsoft",
					company_url: "https://www.microsoft.com/",
					logo_path: "microsoft_logo.png",
					duration: "Jun 2019 - Present",
					location: "New Delhi, India",
					description:
						"Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
					color: "#D83B01",
				},
				{
                    title: "Student Researcher",
                    company: "Manav Rachna International Institute of Research & Studies",
                    company_url: "https://manavrachna.edu.in",
                    logo_path: "Peach and Gray Watercolor Background Instagram Post (3).png",
					duration: "Sept 2017 - Present",
					location: "Faridabad, Haryana",
					description:
						"Working on various projects with the team at the university's Manav Rachna Innovation and Incubation Center.",
					color: "#000000",
				},
				/*{
					title: "Developer Students Club Member",
					company: "DSC IIITDM Kurnool",
					company_url:
						"https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
					logo_path: "dsc_logo.png",
					duration: "Jan 2018 - May 2020",
					location: "Kurnool, Andhra Pradesh",
					description:
						"We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
					color: "#0C9D58",
				},
				{
					title: "Developer Program Member",
					company: "Github",
					company_url: "https://github.com/",
					logo_path: "github_logo.png",
					duration: "July 2019 - PRESENT",
					location: "Work From Home",
					description:
						"I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
					color: "#181717",
				}*/,
			],
		},
	],
};

// Projects Page
const projectsHeader = {
	title: "Projects",
	description:
		"asfsfar",
    avatar_image_path: "projects_image.svg",
    
    
};


// Contact Page
const contactPageData = {
	contactSection: {
		title: "Contact Me",
        profile_image_path: "Dipesh.png",
		description:
			"",
	},
	blogSection: {
		title: "Blogs",
		subtitle:
			"Blogs for different trends in VR/AR",
        link: "https://vrknown.blogspot.com/",
		avatar_image_path: "blogs_image.svg",
	},
	addressSection: {
		title: "Address",
		subtitle:
			"1548, New Baselwa Colony, Faridabad, Haryana",
		avatar_image_path: "address_image.svg",
        location_map_link: "https://www.google.co.in/maps/place/Old+Chungi,+Old+Faridabad,+Faridabad,+Haryana+121002/@28.4213132,77.323501,16z/data=!4m5!3m4!1s0x390cdda136096e0f:0x5ae9e198f5b0b3dc!8m2!3d28.4219218!4d77.3282324",
	},
	phoneSection: {
		title: "Phone Number",
		subtitle: "+919818557605",
	},
};

export { settings, greeting, socialMediaLinks, skills, competitiveSites, degrees, certifications, experience, projectsHeader, contactPageData, };
