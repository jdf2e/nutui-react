# Contribution Guidelines

You can contribute to the NutUI community according to the co-construction direction in 《[NutUI invites you to build, Hello Contributor](https://jelly.jd.com/article/6320528b92d94a0068685525)》.

&nbsp;

This guide will guide you on how to contribute to NutUI. Please take a few minutes to read this guide before you file an issue or pull request to ensure that the contribution is compliant and can help the community.

## code of conduct

In order to ensure a good network environment and create a comfortable development atmosphere, I hope all contributors can abide by this [Code of Conduct](https://www.contributor-covenant.org/zh-cn/version/2/1/code_of_conduct/), and please take the time to read the full text to clarify what is prohibited and what is allowed.

## Branch management

The main branch is currently maintained on github. If you want to fix a bug or add a feature, send a pull request to the main branch.

&nbsp;

The official website will update [NutUI - React release cycle] (https://github.com/jdf2e/nutui-react/releases), at the same time every day developers review submitted code in the making. The release cycle is once a week, usually incorporating new code or features in advance and releasing formal packages; In case of emergency, beta versions can be released based on the specified branch.

## Issue

If submit Bug reports, please be sure to comply with the [` Bug report `] (https://github.com/jdf2e/nutui/blob/next/.github/ISSUE_TEMPLATE/bug_report.md) template.

## Bugs

We use [issue - helper] (https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui-react) for bug tracking. We hope you can submit feedback through the issue assistant we provide, and provide all the development information as much as possible, because the more comprehensive the information, the faster the development response, and the bugs you find will be solved quickly.

&nbsp;

Before you commit a bug, Please ensure that the search had existing [issue] (https://github.com/jdf2e/nutui-react/issues) and read our [FAQ] (https://nutui.jd.com/#/zh-CN/notice).

## new features

If you have a better idea of an existing component function or API, We also recommend that you use our provided [issue - helper] (https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui-react) to submit a issue of adding new features.

&nbsp;

If you want to help develop new features and components, Can scan [qr code] (HTTP: / / https://img13.360buyimg.com/imagetools/s300x300_jfs/t1/187308/9/29678/349561/634fa983E93012590/a641089fdfed5911 .png) join our community co-building group.

## Participate in contribution

If you are not familiar with the PR process of github, you can read the following two articles to learn:

&nbsp;

[NutUI Contribution Guidelines](https://github.com/jdf2e/nutui-react/discussions/348)

[github repository code synchronization](https://github.com/jdf2e/nutui/discussions/687)

## Pull Request Specification

1. Each PR addresses a single issue or adds a single feature

2. When adding components or modifying existing components, synchronously change the corresponding unit tests and documents to ensure the stability of the code

3. Please follow the [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153) specification for the commit message

4. The PR information should include which component has been modified, which problem has been solved, and associated the corresponding issue link on github

## Pull Request Process

1. Fork the main repository and synchronize the latest code of the main repository

&nbsp;

2. Download the project locally, run npm install in the project root directory, and access it locally

```
git clone https://github.com/{github username}/nutui-react.git
npm install
cd src/sites/mobile-taro && npm install
cd -
npm run dev:taro:weapp
```

3. Create a new branch or develop on the corresponding branch

```
git checkout -b username/xxxx
git checkout {current branch}
```

4. If the development involves new components or new features of components, it is necessary to improve the Chinese and English documentation of the components, the unit testing of the components, and use [nutui-demo](https://github.com/jdf2e/nutui-demo) to Component testing is used.

&nbsp;

5、Ensure that the compilation function is used normally

```
npm run test
// node v17
// @nutui/nutui-react
npm run build
// @nutui/nutui-react-taro
npm run build:taro
```

6、After the development is completed, submit it to the corresponding branch of the warehouse. After the review is passed, the PR will be merged into the main warehouse, and then wait for NutUI-React to release a new version（Once a week）。

&nbsp;

### Knowledge sharing

1. Project Use Cases

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Share the [use case](https://nutui.jd.com/#/zh-CN/case) of NutUI, we will recommend it on the official website, prepare the name of the project, Project entry (QR code\link), logo, sample image, delivery platform (H5\mini program\APP, etc.), nutui version and other information should be submitted to **nutui@jd.com** by email.

&nbsp;

2. Article video submission

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Share your experiences (tutorials, articles, videos, etc.) by contributing to **nutui@jd.com**. After passing the review, collect it in the [official website resource](https://nutui.jd.com/#/zh-CN/resource), and pass your knowledge and ideas to NutUI friends.

&nbsp;

3. Co-construction and sharing

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Based on NutUI, design or develop new tools, such as adapting to uni-app, developing plug-ins to improve efficiency, etc. If you are interested, welcome to join our [Community Development Group](https://img13.360buyimg.com/imagetools/s300x300_jfs/t1/187308/9/29678/349561/634fa983E93012590/a641089fdfed5911.png) to communicate and discuss.

&nbsp;

### Credits

Thanks to all the developers below who have contributed code to NutUI.

<a href="https://github.com/jdf2e/nutui-react/graphs/contributors">
  <img src="https://opencollective.com/nutui-react/contributors.svg?width=890&button=false" alt="contributors"/>
</a>
