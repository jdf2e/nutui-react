const { execSync } = require("child_process");

try {
  console.log("usage stats");
  execSync("npm-usage-stats disable", { stdio: "ignore" });
  console.log("usage stats executing");
  execSync("npm-usage-stats", { stdio: "inherit" });
} catch (e) {
}
