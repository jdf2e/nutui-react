const fs = require("fs");
const path = require("path");
const args = process.argv.slice(2);
console.log(args);
const extractH5Demos = (i) => {
  const markdownFilePath = path.join(
    __dirname,
    `../src/packages/${args[i]}/doc.md`
  );
  let markdownContent = fs.readFileSync(markdownFilePath, "utf-8");
  const outputDirectory = path.join(
    __dirname,
    `../src/packages/${args[i]}/demos/h5`
  );
  const tsxRegex = /:::demo\r?\n\r?\n```tsx\r?\n([\s\S]*?)```\r?\n\r?\n:::/g;
  let match;
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  let counter = 1;
  while ((match = tsxRegex.exec(markdownContent)) !== null) {
    let codeContent = match[1];
    codeContent = codeContent.replace(
      /const \w+ = \(\) => \{/,
      `const Demo${counter} = () => {`
    );
    codeContent = codeContent.replace(
      /const \w+ = \(\) => \(/,
      `const Demo${counter} = () => (`
    )
    codeContent = codeContent.replace(
      /export default \w+/,
      `export default Demo${counter}`
    );
    const fileName = `/demos/h5/demo${counter}.tsx`;
    fs.writeFileSync(
      path.join(__dirname, `../src/packages/${args[i]}/${fileName}`),
      codeContent.trim()
    );
    counter++;
  }
  fs.writeFileSync(markdownFilePath, markdownContent);
  console.log("======H5 demos have been extracted successfully======");
};
const extractTaroDemos = (i) => {
  const markdownFilePath = path.join(
    __dirname,
    `../src/packages/${args[i]}/doc.taro.md`
  );
  let markdownContent = fs.readFileSync(markdownFilePath, "utf-8");
  const outputDirectory = path.join(
    __dirname,
    `../src/packages/${args[i]}/demos/taro`
  );
  const tsxRegex = /:::demo\r?\n\r?\n```tsx\r?\n([\s\S]*?)```\r?\n\r?\n:::/g;
  let match;
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  let counter = 1;
  while ((match = tsxRegex.exec(markdownContent)) !== null) {
    let codeContent = match[1];
    codeContent = codeContent.replace(
      /const \w+ = \(\) => \{/,
      `const Demo${counter} = () => {`
    );
    codeContent = codeContent.replace(
      /const \w+ = \(\) => \(/,
      `const Demo${counter} = () => (`
    )
    codeContent = codeContent.replace(
      /export default \w+/,
      `export default Demo${counter}`
    );
    const fileName = `/demos/taro/demo${counter}.tsx`;
    fs.writeFileSync(
      path.join(__dirname, `../src/packages/${args[i]}/${fileName}`),
      codeContent.trim()
    );

    counter++;
  }
  fs.writeFileSync(markdownFilePath, markdownContent);
  console.log("======Taro demos have been extracted successfully======");
};

const replaceAllDocs = (i) => {
  const filePaths = [
    path.join(__dirname, `../src/packages/${args[i]}/doc.md`),
    path.join(__dirname, `../src/packages/${args[i]}/doc.en-US.md`),
    path.join(__dirname, `../src/packages/${args[i]}/doc.taro.md`),
    path.join(__dirname, `../src/packages/${args[i]}/doc.zh-TW.md`),
  ];
  filePaths.forEach((path, index) => {
    let markdownContent = fs.readFileSync(path, "utf-8");

    const tsxRegex = /:::demo\r?\n\r?\n```tsx\r?\n([\s\S]*?)```\r?\n\r?\n:::/g;
    const arr = markdownContent.match(tsxRegex);
    for (let i = 0; i < arr.length; i++) {
      markdownContent = markdownContent.replace(
        arr[i],
        index === 2
          ? `:::demo\r\n\r\n<CodeBlock src='taro/demo${
              i + 1
            }.tsx'></CodeBlock>\r\n\r\n:::`
          : `:::demo\r\n\r\n<CodeBlock src='h5/demo${
              i + 1
            }.tsx'></CodeBlock>\r\n\r\n:::`
      );
    }
    fs.writeFileSync(path, markdownContent);
  });
  console.log("======All docs have replaced successfully======");
};
for (let i = 0; i < args.length; i++) {
  extractH5Demos(i);
  extractTaroDemos(i);
  replaceAllDocs(i);
}
