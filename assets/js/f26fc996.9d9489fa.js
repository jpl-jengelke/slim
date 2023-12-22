"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2249],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>m});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(o),h=i,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||r;return o?n.createElement(m,s(s({ref:t},l),{},{components:o})):n.createElement(m,s({ref:t},l))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,s=new Array(r);s[0]=h;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<r;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},1373:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=o(7462),i=(o(7294),o(3905));const r={},s=void 0,a={unversionedId:"guides/governance/contributions/contributing-guide/CONTRIBUTING",id:"guides/governance/contributions/contributing-guide/CONTRIBUTING",title:"CONTRIBUTING",description:"",source:"@site/docs/guides/governance/contributions/contributing-guide/CONTRIBUTING.md",sourceDirName:"guides/governance/contributions/contributing-guide",slug:"/guides/governance/contributions/contributing-guide/CONTRIBUTING",permalink:"/slim/docs/guides/governance/contributions/contributing-guide/CONTRIBUTING",draft:!1,editUrl:"https://github.com/nasa-ammos/slim/tree/main/docs/guides/governance/contributions/contributing-guide/CONTRIBUTING.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Contributing Guide",permalink:"/slim/docs/guides/governance/contributions/contributing-guide/"},next:{title:"Issue Templates",permalink:"/slim/docs/guides/governance/contributions/issue-templates/"}},u={},c=[],l={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"# Contributing Guide\n\nThanks for taking the time to consider contributing! We very much appreciate your time and effort. This document outlines the many ways you can contribute to our project, and provides detailed guidance on best practices. We look forward to your help!\n\n## Prerequisites\n\nBefore you begin contributing to our project, it'll be a good idea to ensure you've satisfied the below pre-requisites. \n\n### License\n\nOur project has our licensing terms, including rules governing redistribution, documented in our [LICENSE](LICENSE) file. Please take a look at that file and ensure you understand the terms. This will impact how we, or others, use your contributions.\n\n### Code of Conduct\n\nOur Code of Conduct helps facilitate a positive interaction environment for everyone involved with the team, and provides guidance on what to do if you experience problematic behavior. Read more in our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), and make sure you agree to its terms. \n\n### Governance Model\n\nOur Governance model helps outline our project's decision making and roles-based expectations. Read more in our [GOVERNANCE.md](GOVERNANCE.md). \n\n### Developer Environment\n\nFor patch contributions, see our [Developer Documentation]([INSERT YOUR DEVELOPMENT GUIDE LINK HERE]) for more details on how to set up your local environment, to best contribute to our project. \n\nAt a minimum however to submit patches (if using Git), you'll want to ensure you have:\n1. An account on the Version Control System our project uses (i.e. GitHub).\n2. The Version Control System client (i.e. Git) installed on your local machine.\n3. The ability to edit, build, and test our project on your local machine. Again, see our [README.md](README.md) or detailed developer guide for more details \n\n### Communication Channels\n\nBefore contributing changes to our project, it's a great idea to be familiar with our communication channels and to socialize your potential contributions to get feedback early. This will help give you context for your contributions, no matter their form.\n\nOur communication channels are:\n- [Issue tracking system]([INSERT LINK TO ISSUE TRACKING SYSTEM]) - a regularly monitored area to report issues with our software or propose changes\n- [Discussion board]([INSERT LINK TO DISCUSSION BOARD OR MAILING LIST]) - an permanently archived place to hold conversations related to our project, and to propose as well as show+tell topics to the contributor team. This resource can be searched for old discussions.\n- [INSERT ADDITIONAL COMMUNICATION CHANNELS FOR YOUR PROJECT, EX: SLACK, TWITTER, YOUTUBE, ETC.]\n\n### Communication Channels\n\nBefore contributing changes to our project, it's a great idea to be familiar with our communication channels and to socialize your potential contributions to get feedback early. This will help give you context for your contributions, no matter their form.\n\nOur communication channels are:\n- [Issue tracking system]([INSERT LINK TO ISSUE TRACKING SYSTEM]) - a regularly monitored area to report issues with our software or propose changes\n- [Discussion board](INSERT LINK TO DISCUSSION BOARD OR MAILING LIST) - an permanently archived place to hold conversations related to our project, and to propose as well as show+tell topics to the contributor team. This resource can be searched for old discussions.\n- [INSERT ADDITIONAL COMMUNICATION CHANNELS FOR YOUR PROJECT, EX: SLACK, TWITTER, YOUTUBE, ETC.]\n\n## Our Development Process\n\nOur project integrates contributions from many people, and so we'd like to outline a process you can use to visualize how your contributions may be integrated if you provide something. \n\n```mermaid\nflowchart TD\n    repo_proj[(Our Repository)]--\x3e|Fork|repo_fork[(Your Forked Repository)]\n    repo_fork--\x3e|Make|patch(Your Changes)\n    patch--\x3e|Submit|pr(Pull Request)\n    pr==>|Approved|repo_proj\n    pr--\x3e|Changes Requested|repo_fork\n```\n\n### Fork our Repository\n\nForking our repository, as opposed to directly committing to a branch is the preferred way to propose changes. \n\nSee [this GitHub guide](https://docs.github.com/en/get-started/quickstart/fork-a-repo) on forking for information specific to GitHub.com\n\n#### Find or File an Issue\n\nMake sure people are aware you're working on a patch! Check out our [issue tracking system]([INSERT LINK TO YOUR ISSUE TRACKING SYSTEM]) and find an open issue you'd like to work against, or alternatively file a new issue and mention you're working on a patch.\n\n#### Choose the Right Branch to Fork\n\nOur project typically has the following branches available, make sure to fork either the default branch or a branch someone else already tagged with a particular issue ticket you're working with.\n- `main`[INSERT DEFAULT VCS BRANCH NAME HERE] - default branch\n- [INSERT ADDITIONAL TYPICAL VCS BRANCH NAMES HERE] - \n\n### Make your Modifications\n\nWithin your local development environment, this is the stage at which you'll propose your changes, and commit those changes back to version control. See the [README.md](README.md) or development guide for more specifics on what you'll need as prerequisites to setup your local development environment.\n\n#### Commit Messages\n\nCommit messages to version control should reference a ticket in their title / summary line:\n\n```\nIssue #248 - Show an example commit message title\n```\n\nThis makes sure that tickets are updated on GitHub with references to commits that are related to them.\n\nCommit should always be atomic. Keep solutions isolated whenever possible. Filler commits such as \"clean up white space\" or \"fix typo\" should be merged together before making a pull request, and significant sub-feature branches should be [rebased](https://www.youtube.com/results?search_query=git+rebase) to preserve commit history. Please ensure your commit history is clean and meaningful!\n\n### Submit a Pull Request\n\nPull requests are the core way our project will receive your patch contributions. Navigate to your branch on your own fork within the version control system, and submit a pull request or submit the patch text to our project. \n\nPlease make sure to provide a meaningful text description to your pull requests, whenever submitted. Our pull-request template will be auto-generated for you when you create your pull-request. See the template [here]([INSERT LINK TO YOUR PULL REQUEST TEMPLATE, ex: .github/PULL_REQUEST_TEMPLATE.md]). \n\n**Working on your first Pull Request?** See guide: [How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request)\n\n### Reviewing your Pull Request\n\nReviewing pull-requests, or any kinds of proposed patch changes, is an art. That being said, we follow the following best practices:\n- **Intent** - is the purpose of your pull-request clearly stated?\n- **Solution** - is your pull-request doing what you want it to?\n- **Correctness** - is your pull-request doing what you want it to *correctly*?\n- **Small Patches** - is your patch of a level of complexity and brevity that it can actually be reviewed by a human being? Or is does it involve too much content for one pull request?\n- **Coding best practices** - are you following best practices in the coding / contribution language being used?\n- **Readability** - is your patch readable, and ultimately maintainable, by others?\n- **Reproducibility** - is your patch reproducible by others?\n- **Tests** - do you have or have conducted meaningful tests?\n\n## Ways to Contribute\n\n### \u26a0\ufe0f Issue Tickets\n\n> *Do you like to talk about new features, changes, requests?*\n\nIssue tickets are a very simple way to get involved in our project. It also helps new contributors get an understanding of the project more comprehensively. This is a great place to get started with the project if you're not sure where to start. \n\nSee our list of issues at: [INSERT LINK TO YOUR ISSUE TRACKING SYSTEM]\n\n#### Cleaning up Duplicate Issues\n\nOften we receive duplicate issues that can confuse project members on *which* issue ticket to hold conversations upon.\n\nHere's how you can help:\n1. Scan the list of *open* issue tickets for duplicate titles, or internal wording \n2. If you find duplicates, copy / paste the below message on the conversation thread of the issue ticket *that has less participants* involved\n\n```\nThis is a duplicate issue. Please migrate conversations over to [issue-XYZ](hyperlink to issue)\n```\n\n#### Good First Issues\n\nIssue tickets can vary in complexity, and issues labeled with `good first issue` labels are often a great way to get started with the project as a newcomer. \n\nTake a look at our [issue tracking system]([INSERT LINK TO YOUR ISSUE TRACKING SYSTEM]), and filter by `good first issue` for issues that are low-complexity, and that will help you get familiar with our issue tracking and patch submission process.\n\n#### Suggesting New Issue Labels\n\nLabels within our [issue tracking system]([INSERT LINK TO YOUR ISSUE TRACKING SYSTEM]) are a great way to quickly sort through tickets. The project may not yet have labels to cover the full variety of issue tickets. Take a look through our list of issues, and if you notice a set of issue tickets that seem similar but are not categorized with an existing label, go ahead submit a request within one of the issues you've looked at with the following text:\n\n```\nI've noticed several other issues that are of the same category as this issue. Shall we make a new label for these types of issues?\n```\n\n#### Submitting Bug Issues\n\nResolving bugs is a priority for our project. We welcome bug reports. However, please make sure to do the following prior to submitting a bug report:\n- **Check for duplicates** - there may be a bug report already describing your issue, so check the [issue tracking system]([INSERT LINK TO YOUR ISSUE TRACKING SYSTEM]) first.\n\nHere's some guidance on submitting a bug issue:\n1. Navigate to our [issue tracking system]([INSERT LINK TO YOUR ISSUE TRACKING SYSTEM]) and file a new issue\n2. Select a bug template (if available) for your issue\n   1. Fill out the template fields to the best of your ability, including output snippets or screenshots where applicable\n3. Follow the general guidelines below for extra information about your bug\n   1. Include a code snippet if you have it showcasing the bug\n   2. Provide reproducible steps of how to recreate the bug\n   3. If the bug triggers an exception or error message, include the *full message* or *stacktrace*\n   4. Provide information about your operating system and the version of our project you're using\n\n#### Submitting New Feature Issues\n\nWe welcome new feature requests to help grow our project. However, please make sure to do the following prior to submitting a new feature request:\n- **Check for duplicates** - there may be a new feature issue already describing your issue, so check the [issue tracking system]([INSERT LINK TO YOUR ISSUE TRACKING SYSTEM]) first\n- **Consider alternatives** - is your feature really needed? Or is there a feature within our project or with a third-party that may help you achieve what you want?\n\nHere's some guidance on submitting a new feature issue:\n1. Navigate to our [issue tracking system]([INSERT LINK TO YOUR ISSUE TRACKING SYSTEM]) and file a new issue\n2. Select a new feature template (if available) for your issue\n   1. Fill out the template fields to the best of your ability\n\n#### Submitting Security Vulnerability Issues\n\nSecurity vulnerabilities should **not** be filed to the regular issue tracking system.\n\nReport your security vulnerabilities to (see contact links): [INSERT SECURITY CONTACT LINK HERE]\n\nPlease be sure to:\n* Indicate the severity of the vulnerability\n* Provide any workarounds, if you know them\n* Provide return-contact information to follow-up with you if needed\n\n#### Reviewing Pull Requests\n\nReviewing others' contributions is a great way to learn about best practices in both contributions as well as software. \n\nTake a look at our [pull requests tracking system]([INSERT LINK FOR PULL REQUESTS TRACKING SYSTEM]), and try the following options for providing a review:\n1. Read the code / patch associated with the pull-request, and take note of any coding, bug, or documentation issues if found\n2. Try to recreate the pull-request patch on your local machine, and report if it has issues with your system in particular\n3. Scan over suggested feedback from other contributors, and provide feedback if necessary\n\n### \ud83d\udcbb  Code\n\n\u26a0\ufe0f It's **highly** advised that you take a look at our [issue tracking system]([INSERT LINK TO YOUR ISSUE TRACKING SYSTEM]) before considering any code contributions. Here's some guidelines:\n1. Check if any duplicate issues exist that cover your code contribution idea / task, and add comments to those tickets with your thoughts.\n2. If no duplicates exist, create a new issue ticket and get a conversation started before making code changes using our [communication channels](#communication-channels).\n\nOnce you have a solid issue ticket in hand and are ready to work on code, you'll want to:\n1. Ensure you have development [prerequisites](#prerequisites) cleared.\n2. Have your [development environment](#developer-environment) set up properly.\n3. Go through our [development process](#our-development-process), including proposing changes to our project.\n\nSome guidelines for code-specific contributions:\n- **Do your homework** - read-up on necessary documentation, like `README.md`s, developer documentation, and pre-existing code to see the intention and context necessary to make your contribution a success. It's important to _communicate_ what you're working on through our project [communication channels](#communication-channels) and get buy-in from frequent contributors - this will help the project be more receptive to your contributions! \n- **Ask questions** - its important to ask questions while you work on your contributions, to check-in with frequent contributors on the style and the set of expectations to make your code contribution work well with pre-existing project code. Use our [communication channels](#communication-channels)\n- **Keep positive** - code contributions, by their nature, have direct impacts on the output and functionality of the project. Keep a positive spirit as your code is reviewed, and take it in stride if core contributors take time to review, give you suggestions for your code or respectfully decline your contribution. This is all part of the process for quality open source development. \n- **Comments** - include *useful* comments throughout your code that explain the intention of a code block, not a step-by-step analysis. See our [inline code documentation](#inline-code-documentation) section for specifics. \n\n[INSERT ADDITIONAL SECTIONS HERE FOR MORE SPECIFIC CLASSES OF CODE CONTRIBUTIONS DEPENDING ON YOUR MODULES, LANGUAGES, PLATFORMS IN USE BY YOUR PROJECT. THE MORE DETAILS YOU OFFER, THE MORE LIKELY SOMEONE IS TO UNDERSTAND HOW TO CONTRIBUTE]\n\x3c!-- EXAMPLE: APIs, PyTest, etc. --\x3e\n\n### \ud83d\udcd6 Documentation \n\nDocumentation is the core way our users and contributors learn about the project. We place a high value on the quality, thoroughness, and readability of our documentation. Writing or editing documentation is an excellent way to contribute to our project without performing active coding. \n\n\u26a0\ufe0f It's **highly** advised that you take a look at our [issue-tracking system]([INSERT LINK TO YOUR ISSUE TRACKING SYSTEM]) before considering any documentation contributions. Here's some guidelines:\n1. Check if any duplicate issues exist that cover your documentation contribution idea / task, and add comments to those tickets with your thoughts.\n2. If no duplicates exist, create a new issue ticket and get a conversation started before making documentation changes.\n\nSome guidelines for documentation best practices (summarized from Google's [excellent documentation guide](https://google.github.io/styleguide/docguide/best_practices.html)):\n- **Minimum viable docs** - don't do less documentation than your users / developers need, but also don't do more\n- **Changed code = changed docs** - if your code has changed, remember to update your documentation\n- **Delete old docs** - continually clean your documentation tree, and remove outdated docs regularly\n\n#### Documentation Organization\n\nThe overall structure of our project documentation is as follows:\n- Source-controlled documentation\n  - [README.md](README.md) - top-level information about how to run, build, and contribute to the project\n  - [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) - best practices and guidance on how to work well with other people in the project, and suggestions on dealing with interpersonal issues\n  - [CONTRIBUTING.md](CONTRIBUTING.md) - guidance on contributing to the project\n  - `*.[INSERT YOUR CODING LANGUAGE FILE EXTENSIONS HERE]` - inline documentation available inside code files\n- [INSERT ADDITIONAL DOCUMENTATION CLASSES AND ORGANIZATION STRUCTURE HERE, SEE EXAMPLE IN COMMENTS BELOW]\n\n\x3c!-- EXAMPLE:\n- Source-controlled documentation\n  - [README.md](README.md) - top-level information about how to run, build, and contribute to the project\n  - [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) - best practices and guidance on how to work well with other people in the project, and suggestions on dealing with interpersonal issues\n  - [CONTRIBUTING.md](CONTRIBUTING.md) - guidance on contributing to the project\n  - `*.py` - inline documentation available inside code files' function headers and code blocks\n  - [docs/](docs/)` - top-level directory containing source-controlled documentation built into statically hosted files on our documentation website\n- Hosted documentation\n  - [Wiki Main-page]()\n    - [Wiki Sub-page 1]()\n    - [Wiki Sub-page 2]() \n- Discussion Boards\n  - [Discussion Board Topic 1]()\n  - [Discussion Board Topic 2]()\n- YouTube.com video tutorials\n  - [Channel page 1]()\n  - [Channel page 2]()\n- Application Programming Interface (API) documentation\n  - [Sub-module 1]()\n  - [Sub-module 2]()\n- etc.\n--\x3e\n\nFor directions on contributing to our source-controlled documentation:\n1. Ensure you have development [prerequisites](#prerequisites) cleared.\n2. Have your [development environment](#developer-environment) set up properly.\n3. Go through our [development process](#our-development-process), including proposing changes to our project.\n\n\x3c!-- OPTIONAL FOR HOSTED DOCUMENTATION >\nFor directions on contributing to our hosted documentation:\n1. \n2. \n3. \n\n[INSERT HOSTED DOCUMENTATION PLATFORM SPECIFIC INSTRUCTIONS HERE FOR HOW TO CONTRIBUTE]\n--\x3e\n\n#### Writing Style\n\nTo ensure documentation is readable and consistent by newcomers and experts alike, here are some suggestions on writing style for English:\n- Use gender neutral pronouns (they/their/them) instead of he/she/his/her \n- Avoid qualifiers that minimize the difficulty of a task at hand, e.g. avoid words like \u201ceasily\u201d, \u201csimply\u201d, \u201cjust\u201d, \u201cmerely\u201d, \u201cstraightforward\u201d, etc. Readers' expertise may not match your own, and qualifying complexity may deter some readers if the task does not match their level of experience. That being said, if a particular task is difficult or complex, do mention that. \n\n#### Common Wording \n\nBelow are some commonly used words you'll want to leverage in your documentation contributions:\n- **GitHub** - one word, and capitalization of the 'G' and the 'H'\n- [INSERT YOUR PROJECT SPECIFIC COMMON TERMS AND HOW TO USE THEM]\n\n#### Inline Code Documentation\n\nFor language-specific guidance on code documentation, including style guides, see [Google's list of language style guides](https://google.github.io/styleguide/) for a variety of languages. \n\nAdditionally, take a look at Google's recommendations on [inline code documentation](https://google.github.io/styleguide/docguide/best_practices.html#documentation-is-the-story-of-your-code) for best practices. \n\n#### Media\n\nMedia, such as such as images, videos, sound files, etc., are an excellent way to explain documentation to a wider audience more easily. Include media in your contributions as often as possible.\n\nWhen including media into our version-control system, it is recommended to use formats such as:\n- Diagrams: [Mermaid](https://mermaid-js.github.io/mermaid/#/) format\n- Images: JPEG format\n- Videos: H264 MPEG format\n- Sounds: MP3 format\n\x3c!-- ADD TO OR MODIFY ABOVE DEFAULT SUGGESTIONS --\x3e\n\n### \u2753 Questions\n\nAnswering questions is an excellent way to learn more about our project, as well as get better known in our project community. \n\nHere are just a few ways you can help answer questions for our project:\n- Answer open questions in our [discussion forum]([INSERT LINK TO DISCUSSION FORUM])\n- Answer open questions mentioned in our [issue tracking system]([INSERT LINK TO YOUR ISSUE TRACKING SYSTEM])\n\x3c!-- ADD TO OR MODIFY DEPENDING ON YOUR COMMUNICATION CHANNELS LISTED AT THE BEGINNING OF THIS DOCUMENT--\x3e\n\nWhen answering questions, keep the following in mind:\n- Be polite and friendly. See our [Code of Conduct](CODE_OF_CONDUCT.md) recommendations as you interact with others in the team.\n- Repeat the specific question you are answering, followed by your suggestion.\n- If suggesting code, repeat the line of code that needs to be altered, followed by your alteration\n- Include any post-steps or checks to verify your answer can be reproduced \n\n### \ud83c\udfa8 Design\n\nDesign files can help to guide new features and new areas of expansion for our project. We welcome these kinds of contributions.\n\nHere are just a few ways you can help provide design recommendations for our project:\n- Create visual mockups or diagrams to increase usability of our project applications. This can apply to user interfaces, documentation structuring, or even code architecture diagrams.\n- Conduct user research to understand user needs better. Save your findings within spreadsheets that the project team / contributors can review.\n- Create art, such as logos or icons, to support the user experience for the project\n\nEach of the above can be contributed directly to repository code, and you should use our [development process](#our-development-process) to contribute your additions.\n\n### \ud83c\udf9f\ufe0f Meetups\n\nA great way to contribute towards our project goals is to socialize and encourage people to meet and learn more about each other. Consider ideas like:\n- Propose workshops or meetups regarding some topic within our project\n- Help point project contributors and community members to conferences and publications where they may socialize their unique innovations\n- Schedule in-person or virtual happy-hours to help create a more social atmosphere within the project community\n\nFor the above ideas, use our [communication channels](#communication-channels) to propose get-togethers.  \n")))}p.isMDXComponent=!0}}]);