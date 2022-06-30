
# CONSULTANCY REPORT
## June 29, 2022.
## CONTENT
Executive Summary
Pharmacy Inventory Mobile Application
Pharmacy Inventory Database Management
Basic Computer Skill Course for CSI Trainees
EHSSG Online Classroom
Presentation Video for JLU

## Executive Summary

##### Objectives
* To facilitate data collecting and reporting through digitization.
* To link data reports with a visualization tool.
* To enhance the IT capabilities of partner organizations.
* To provide online access to training courses through the EHSSG online classroom.
* To aid in the development of alternate reporting tools, such as photos and videos.

##### Outcomes
* EHSSG has developed a pharmacy inventory application for Android smartphones and tablets.
* EHSSG has begun utilizing a backend database management interface that can readily integrate to a visualization tool.
* A computer basics course has begun as part of the clinical supervisor internship programme.
* EHSSG online classroom started operating with students from clinical supervisor internship training.
* A video report for the Japanese Labour Organization (JLU) is produced and debuted to the Japanese media.

##### Conclusion and Recommendation
Partner organizations find it difficult to adhere to the digitization process due to the fact that people rarely adjust to new situations. EHSSG and the Karen Department of Health and Welfare (KDHW) have begun collecting inventory data from actual pharmacy warehouses. It is still in the data gathering phase, and once the data reaches the cloud database, the visualisation tool will convert it into visually appealing tables, charts, and graphs. This will serve as a model for the remaining organizations, which will thereafter implement the digitization process. Once the pilot programme is successful, more data gathering tools for other areas can be developed and linked to the display output via the backend database.
The pharmacy inventory backend database can be viewed in table format, and EHSSG isn't hard to manage the cloud database. Other organisations may be unfamiliar with the database backend interface, which could result in the accidental deletion of a particular data set or the entire database. As erased data from a cloud database cannot be recovered, the individuals handling the data may initially require hands-on training.
Most Clinical Supervisor Internship trainees are from inaccessible regions of Burma, and the majority of them appears to lack computer skills. Since the computer training course has been posted in the online classroom, both the recently launched EHSSG online classroom and the students who are enrolled in the computer training course have a fresh start.
The video report for JLU went well, and EHSSG's task force demonstrated its ability to make video reports. The EHSSG team should learn video editing in order to create future video reports.

## Abstract
The goal of the pharmacy inventory data collection project is to establish a foundation for future data gathering and presentation processes. As detailed in previous reports, the data collection app is built on the flutter framework, which can generate native Android, iOS, and Web applications from a single code base. The application is distributed to field data collectors, and app usage training was provided alongside pharmacy management training offered by separate organizations.
While the database backend interface is currently in development for other organizations, it was completed for EHSSG.

## 1.0 Introduction
##### 1.1 Data Collection
Data collection is critical for an organization like EHSSG. EHSSG does not collect data because it does not carry out implementation projects but rather strengthens the systems of partner organizations. EHSSG usually struggles to acquire data from partner organizations when it comes to displaying statistics to donor institutions. The Health Information Systems Working Group (HISWG) is capable of collecting data from its partner organizations and ensuring that information reaches the EHSSG. Due to limited resources and present conditions in Burma, implementing groups found it more difficult than ever to collect data and report it to HISWG. The most basic data collector in the current reporting system is capturing images of physical reports and sending them to the head office via an instant messaging app (e.g. Facebook Messenger, Viber, Telegram). The images are delivered to the headquarters, where data entry team manually enters the information into a spreadsheet. Individual organizations keep sensitive information and share the rest with HISWG, which converts the data to a display tool suitable format. The data from each organisation is then aggregated in a Data Display Tool, the output of which is embedded in HISWG.ORG. The EHSSG redirects donor institutions to the HISWG data display.
![Current System](https://drive.google.com/uc?export=view&id=1WHuIWAylqTz6K_LvCUNsMxJex_nGqL7I)
Some organisations lack the personnel necessary to transform information from photographs to spreadsheets. Some data collectors on the field find it difficult to manage stacks of paperwork. As organisations struggle to manage the reported information, they rarely share it with HISWG, which must wait a considerable period of time to compile the data into a visualisation tool. Sometimes, HISWG receives no information. Consequently, HISWG cannot display the data, and EHSSG cannot guide its donor institutions to data display.

##### 1.2 Capacity Building
As EHSSG aimed not only to deliver supplies, but also to strengthen the human resource capability of partner organisations, a basic computer course is planned altogether with other trainings.  EHSSG is now offering a clinical supervisor internship training that includes a computer training. Given the fact that the EHSSG online classroom is not commonly utilised yet, study material for basic computer skills training has been produced and posted to the EHSSG online classroom.

##### 1.3 Videos as a donor reporting tool
Although field data reporting to EHSSG is limited, the organisation occasionally utilizes photographs and videos as reporting tools. In June, one of EHSSG's donor institutions, the Japanese Labour Union (JLU), requested a video report. On June 17, the video was shared with JLU.

## 2.0 Project Approach
##### 2.1 The Digitizing Process
The objective of EHSSG is to digitize the data collecting and reporting processes. Therefore, it initiated a pilot program to collect pharmacy inventory data. A Pharmacy Inventory Mobile Application is planned. The application captures pharmacy inventory data in real time and works both online and offline. When the user's device is connected to the internet, the information is immediately sent to a cloud database. From the backend, a visualisation tool retrieves information from the cloud database and shows it online, which may then be exported to a specified format.
EHSSG has begun testing the app by collecting data from its own pharmacy warehouse. KDHW has also started using the app in some of its warehouses. Since a separate cloud database was created and delivered to each individual organization whether it is willing to use the app or not, a particular organization owns its data.

###### 2.1.1 Flutter Framework
Flutter framework as described in the previous reports, can develop an app which can be exported to Android, iOS and Web apps from a single code base. Though the app was designed to work on Android devices, it is also requested by some organizations to be able to run as a web app which is going to be used by head office.

###### 2.1.2 Firebase and Cloud Firestore
The app is linked to the cloud firestore database. Cloud firestore is a NoSQL database and functions faster than a regular SQL database and it can be used with a free plan though multiple devices are reading and writing the database in real time.

###### 2.1.3 Rowy
Rowy is an opensource database management platform which can fetch information from cloud firestore and display in tables. The tables then can be exported to CSV or spreadsheet formats.

###### 2.1.4 Flourish
Flourish is a data display tool with eye-catching outputs which can be embedded in webpages and reports. EHSSG warehouses were plotted inside flourish projection map and can be viewed online. Data from pharmacy inventory database was intended to display with flourish.

##### 2.2 The Online Classroom
EHSSG online classroom is using Moodle LMS.

First Aid Care Training for Conflict Related Injuries Course was still under development and has no student yet.

To start testing the classroom experiment, recently recruited CSI trainees were provided student accounts on EHSSG online classroom and enrolled in Basic Course on Using Computers Course. The classroom has a responsive design which flawlessly fits in different screen sizes such as laptop, desktop and mobile browsers. Trainees are instructed on how to use the classroom interface while viewing the study material. A pre-test was conducted before starting the course and a post-test was planned. They can study at their own pace as long as their phones are connected to the internet since the material stays online.

###### 2.3 The JLU presentation video
###### 2.3.1 Script
The script for the presentation video was prepared by Mr. Saw Thar Win, director of EHSSG and Dr. Zaw Soe Htike, the principal clinical trainer at EHSSG. Raw video footages were taken by Dr. Zaw Soe Htike, JLU and photographs were provided by Dr. Zaw Soe Htike, Dr. Ei Ei Khaing, JLU, Mr. Min Min, Mr. Kyi Thu and Mr. Saw Thar Win. Some of the content were provided by Dr. Zaw Soe Htike.
###### 2.3.2 Final Cut Pro
Final Cut Pro is the essential video editing application for MacOS. Raw footages were imported to Final Cut Pro and unnecessary clips were trimmed. Titles and generators are added as overlay objectes. Presentations are imported inside the video clips as generators. Colour grading was done inside Final Cut Pro. Audio only format for the entire video was exported and edited in Izotope RX9 Audio Editor and imported back again to Final Cut Pro.

###### 2.3.3 Izotope RX9
Audio export from Final Cut Pro video was imported to Izotope RX9 Audio Editor to cancel background noise and clipping. Some audio clips were amplified to match the decible of the remaining clips. Edited audio was exported and imported back again to Final Cut Pro.

###### 2.3.4 Transcription and Translation
As the video is in Myanmar language, Myanmar transcript of the video was prepared by Dr. Kyaw Thu Swe and Mr. Aung Pyae Hein. Translation of the transcript was done by Dr. Kyaw Thu Swe.

###### 2.3.5 Caption and Subtitle
Adding a subtitle to video was done in Aegisub. Aegisub is an opensource subtitle editing program. Each sentence from the translated transcript was placed at a specific interval at the video timeline inside Aegisub. 

## 3.0 Project Outcomes

## 4.0 Conclusions and Recommendations

## 5.0 Glossary
EHSSG
HISWG
KDHW
JLU
SQL
NoSQL
CSV
LMS
CSI

## 6.0 References
1. Pharmacy Inventory Mobile Application
	V1.5
2. Pharmacy Inventory Database Management
3. Basic Computer Skill Course for CSI Trainees
	School accounts
4. EHSSG Online Classroom
Freelance animator
5. Presentation Video for JLU

# Dillinger
## _The Last Markdown Editor, Ever_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

## Features

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions
that people naturally use in email.
As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

## Tech

Dillinger uses a number of open source projects to work properly:

- [AngularJS] - HTML enhanced for web apps!
- [Ace Editor] - awesome web-based text editor
- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [Twitter Bootstrap] - great UI boilerplate for modern web apps
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Gulp] - the streaming build system
- [Breakdance](https://breakdance.github.io/breakdance/) - HTML
to Markdown converter
- [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd dillinger
npm i
node app
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```

## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

